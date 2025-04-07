'use client';

import { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { AnchorLink } from '../components/anchorlink';
import { useFirestore } from '../hooks/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import app from '../hooks/init';


const ProfileCard = ({ name, title, href }) => {
  const header = <img alt={name} src={href} style={{ width: '100%', height: 'auto' }} />;

  return (
    <Card
      title={name}
      subTitle={title}
      style={{ height: '20em', width: '15em', textAlign: 'center', margin: '1em' }}
      header={header}
    />
  );
};

const Teams = () => {
  const [teams, setTeams] = useState({
    admin: [],
    socialmedia: [],
    finance: [],
    events: [],
    advisory: [],
  });


  const adminData = useFirestore('teams/2024/admin');
  const socialMediaData = useFirestore('teams/2024/socialmedia');
  const financeData = useFirestore('teams/2024/finance');
  const eventsData = useFirestore('teams/2024/events');
  const advisoryData = useFirestore('teams/2024/advisory');


  useEffect(() => {
    const fetchImageUrls = async (data, teamKey) => {
      if (!data.length || data.loading) return;

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
      }
    };

    fetchImageUrls(adminData.data, 'admin');
    fetchImageUrls(socialMediaData.data, 'socialmedia');
    fetchImageUrls(financeData.data, 'finance');
    fetchImageUrls(eventsData.data, 'events');
    fetchImageUrls(advisoryData.data, 'advisory');
  }, [
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
      </div>
      <div className="card">
        <TabView>
          <TabPanel header="Administrative Team">
            <AnchorLink id="administrative-team">
              <div className="team-grid flex flex-wrap justify-center gap-4">
                {teams.admin.map((member) => (
                  <ProfileCard key={member.id} {...member} />
                ))}
              </div>
            </AnchorLink>
          </TabPanel>
          <TabPanel header="Social Media & Technology Team">
            <AnchorLink id="socialmedia-team">
              <div className="team-grid flex flex-wrap justify-center gap-4">
                {teams.socialmedia.map((member) => (
                  <ProfileCard key={member.id} {...member} />
                ))}
              </div>
            </AnchorLink>
          </TabPanel>
          <TabPanel header="Finance Team">
            <AnchorLink id="finance-team">
              <div className="team-grid flex flex-wrap justify-center gap-4">
                {teams.finance.map((member) => (
                  <ProfileCard key={member.id} {...member} />
                ))}
              </div>
            </AnchorLink>
          </TabPanel>
          <TabPanel header="Events Team">
            <AnchorLink id="events-team">
              <div className="team-grid flex flex-wrap justify-center gap-4">
                {teams.events.map((member) => (
                  <ProfileCard key={member.id} {...member} />
                ))}
              </div>
            </AnchorLink>
          </TabPanel>
          <TabPanel header="Advisory Team">
            <AnchorLink id="advisory-team">
              <div className="team-grid flex flex-wrap justify-center gap-4">
                {teams.advisory.map((member) => (
                  <ProfileCard key={member.id} {...member} />
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