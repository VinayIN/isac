import { useState, useEffect, useRef } from 'react';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Dropdown } from 'primereact/dropdown';
import { Messages } from 'primereact/messages';
import { AnchorLink } from '../components/anchorlink';
import { useFirestore } from '../hooks/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import app from '../hooks/init';

const ProfileCard = ({ name, title, href }) => {
  const header = (
    <Image 
      alt={name} 
      src={href} 
      layout="intrinsic" 
      width={100}
    />
  );

  return (
    <Card
      title={name}
      subTitle={title}
      style={{ height: '20em', width: '15em', textAlign: 'center', margin: '1em' }}
      header={header}
    />
  );
};

const currentYear = new Date().getFullYear();

const Teams = () => {
  const [selectedYear, setSelectedYear] = useState(`${currentYear}`);
  const [years, setYears] = useState([]);
  const [teams, setTeams] = useState({
    admin: [],
    socialmedia: [],
    finance: [],
    events: [],
    advisory: [],
  });
  

  const yearsCollection = useFirestore('teams');
  
  // Create separate message refs for each team
  const adminMsgs = useRef(null);
  const socialMediaMsgs = useRef(null);
  const financeMsgs = useRef(null);
  const eventsMsgs = useRef(null);
  const advisoryMsgs = useRef(null);
  
  // State to store messages for each team panel
  const [adminMessages, setAdminMessages] = useState([]);
  const [socialMediaMessages, setSocialMediaMessages] = useState([]);
  const [financeMessages, setFinanceMessages] = useState([]);
  const [eventsMessages, setEventsMessages] = useState([]);
  const [advisoryMessages, setAdvisoryMessages] = useState([]);

  // Process the years data
  useEffect(() => {
    if (!yearsCollection.loading && yearsCollection.data) {
      const availableYears = yearsCollection.data.map(doc => doc.id);
      setYears(availableYears);
      
      if (availableYears.length > 0) {
        if (!availableYears.includes(selectedYear)) {
          const sortedYears = [...availableYears].sort((a, b) => b - a);
          setSelectedYear(sortedYears[0]);
        }
      }
    }
  }, [yearsCollection.data, yearsCollection.loading]);

  const adminData = useFirestore(`teams/${selectedYear}/admin`);
  const socialMediaData = useFirestore(`teams/${selectedYear}/socialmedia`);
  const financeData = useFirestore(`teams/${selectedYear}/finance`);
  const eventsData = useFirestore(`teams/${selectedYear}/events`);
  const advisoryData = useFirestore(`teams/${selectedYear}/advisory`);

  useEffect(() => {
    const clearAllMessages = () => {
      setAdminMessages([]);
      setSocialMediaMessages([]);
      setFinanceMessages([]);
      setEventsMessages([]);
      setAdvisoryMessages([]);
    };
    
    clearAllMessages();

    const fetchImageUrls = async (data, teamKey) => {
      if (data.loading) return;
      
      const getMsgRef = () => {
        switch (teamKey) {
          case 'admin': return adminMsgs;
          case 'socialmedia': return socialMediaMsgs;
          case 'finance': return financeMsgs;
          case 'events': return eventsMsgs;
          case 'advisory': return advisoryMsgs;
          default: return null;
        }
      };
      
      const msgRef = getMsgRef();
      
      const addMessage = (severity, summary, detail, sticky = true) => {
        const message = { severity, summary, detail, sticky };
        switch (teamKey) {
          case 'admin':
            setAdminMessages(prev => [...prev, message]);
            break;
          case 'socialmedia':
            setSocialMediaMessages(prev => [...prev, message]);
            break;
          case 'finance':
            setFinanceMessages(prev => [...prev, message]);
            break;
          case 'events':
            setEventsMessages(prev => [...prev, message]);
            break;
          case 'advisory':
            setAdvisoryMessages(prev => [...prev, message]);
            break;
          default:
            break;
        }
      };

      if (!data.length) {
        addMessage(
          'info',
          `No ${teamKey} team data`,
          `No ${teamKey} team found for year ${selectedYear}`
        );
        setTeams((prev) => ({ ...prev, [teamKey]: [] }));
        return;
      }

      try {
        const storage = getStorage(app);
        const teamWithUrls = await Promise.all(
          data.map(async (member) => {
            const imageRef = ref(storage, member.href);
            const url = await getDownloadURL(imageRef);
            return { ...member, href: url };
          })
        );
        setTeams((prev) => ({ ...prev, [teamKey]: teamWithUrls }));
      } catch (err) {
        console.error(`Error fetching ${teamKey} image URLs:`, err);
        setTeams((prev) => ({ ...prev, [teamKey]: data }));
        addMessage(
          'error',
          'Error loading images',
          `Could not load images for ${teamKey} team`
        );
      }
    };

    fetchImageUrls(adminData.data, 'admin');
    fetchImageUrls(socialMediaData.data, 'socialmedia');
    fetchImageUrls(financeData.data, 'finance');
    fetchImageUrls(eventsData.data, 'events');
    fetchImageUrls(advisoryData.data, 'advisory');
  }, [
    selectedYear,
    adminData.data, adminData.loading,
    socialMediaData.data, socialMediaData.loading,
    financeData.data, financeData.loading,
    eventsData.data, eventsData.loading,
    advisoryData.data, advisoryData.loading,
  ]);

  return (
    <div className="app-container mx-4">
      <div className="heading-container">
        <h1 className="heading">Meet Our Team</h1>
        <p className="subheading">
          ISAC is one of the student bodies at BTU Cottbus-Senftenberg and one of 16 Indian student bodies in Germany.
        </p>
        <p className="subheading">
          Selected by the outgoing ISAC team in collaboration with the IRO (International Relation Office) of BTU,
          their role is to host events that represent the cultural diversity of India.
        </p>
        <div className="flex justify-content-between align-items-center mb-4">
          <div className="flex align-items-center">
            <label htmlFor="year" className="mr-2 font-bold">Select Year: </label>
            <Dropdown
              id="year"
              value={selectedYear}
              options={years}
              onChange={(e) => setSelectedYear(e.value)}
              placeholder="Select Year"
              className="w-10rem"
            />
          </div>
        </div>
      </div>
      <div className="card">
        <TabView>
          <TabPanel header="Administrative Team">
            <AnchorLink id="administrative-team">
              <div className="team-grid flex flex-wrap justify-center gap-4">
                {teams.admin.length > 0 && (
                  teams.admin.map((member) => (
                    <ProfileCard key={member.id} {...member} />
                  ))
                )}
              </div>
              <div className="w-full mt-3">
                <Messages ref={adminMsgs} />
                {adminMessages.map((msg, index) => (
                  <div key={index} className={`p-message p-component p-message-${msg.severity}`}>
                    <div className="p-message-wrapper">
                      <span className="p-message-icon pi pi-info-circle"></span>
                      <div className="p-message-text">
                        <span className="p-message-summary">{msg.summary}</span>
                        <span className="p-message-detail">{msg.detail}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnchorLink>
          </TabPanel>
          <TabPanel header="Social Media & Technology Team">
            <AnchorLink id="socialmedia-team">
              <div className="team-grid flex flex-wrap justify-center gap-4">
                {teams.socialmedia.length > 0 && (
                  teams.socialmedia.map((member) => (
                    <ProfileCard key={member.id} {...member} />
                  ))
                )}
              </div>
              <div className="w-full mt-3">
                <Messages ref={socialMediaMsgs} />
                {socialMediaMessages.map((msg, index) => (
                  <div key={index} className={`p-message p-component p-message-${msg.severity}`}>
                    <div className="p-message-wrapper">
                      <span className="p-message-icon pi pi-info-circle"></span>
                      <div className="p-message-text">
                        <span className="p-message-summary">{msg.summary}</span>
                        <span className="p-message-detail">{msg.detail}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnchorLink>
          </TabPanel>
          <TabPanel header="Finance Team">
            <AnchorLink id="finance-team">
              <div className="team-grid flex flex-wrap justify-center gap-4">
                {teams.finance.length > 0 && (
                  teams.finance.map((member) => (
                    <ProfileCard key={member.id} {...member} />
                  ))
                )}
              </div>
              <div className="w-full mt-3">
                <Messages ref={financeMsgs} />
                {financeMessages.map((msg, index) => (
                  <div key={index} className={`p-message p-component p-message-${msg.severity}`}>
                    <div className="p-message-wrapper">
                      <span className="p-message-icon pi pi-info-circle"></span>
                      <div className="p-message-text">
                        <span className="p-message-summary">{msg.summary}</span>
                        <span className="p-message-detail">{msg.detail}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnchorLink>
          </TabPanel>
          <TabPanel header="Events Team">
            <AnchorLink id="events-team">
              <div className="team-grid flex flex-wrap justify-center gap-4">
                {teams.events.length > 0 && (
                  teams.events.map((member) => (
                    <ProfileCard key={member.id} {...member} />
                  ))
                )}
              </div>
              <div className="w-full mt-3">
                <Messages ref={eventsMsgs} />
                {eventsMessages.map((msg, index) => (
                  <div key={index} className={`p-message p-component p-message-${msg.severity}`}>
                    <div className="p-message-wrapper">
                      <span className="p-message-icon pi pi-info-circle"></span>
                      <div className="p-message-text">
                        <span className="p-message-summary">{msg.summary}</span>
                        <span className="p-message-detail">{msg.detail}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnchorLink>
          </TabPanel>
          <TabPanel header="Advisory Team">
            <AnchorLink id="advisory-team">
              <div className="team-grid flex flex-wrap justify-center gap-4">
                {teams.advisory.length > 0 && (
                  teams.advisory.map((member) => (
                    <ProfileCard key={member.id} {...member} />
                  ))
                )}
              </div>
              <div className="w-full mt-3">
                <Messages ref={advisoryMsgs} />
                {advisoryMessages.map((msg, index) => (
                  <div key={index} className={`p-message p-component p-message-${msg.severity}`}>
                    <div className="p-message-wrapper">
                      <span className="p-message-icon pi pi-info-circle"></span>
                      <div className="p-message-text">
                        <span className="p-message-summary">{msg.summary}</span>
                        <span className="p-message-detail">{msg.detail}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnchorLink>
          </TabPanel>
        </TabView>
      </div>
      <div className="flex justify-content-center mt-4">
        <a href="https://forms.gle/SNjjBJvXrqSNcqfK8" target="_blank" rel="noopener noreferrer">
          <Button label="Are you a member of ISAC?" icon="pi pi-user" severity="info" text raised />
        </a>
      </div>
    </div>
  );
};

export default Teams;