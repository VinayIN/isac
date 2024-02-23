import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { TabView, TabPanel } from 'primereact/tabview';

// Mock data for the team members
const adminteam = [
  {
    name: 'Sharanbasava Dandge',
    title: 'Admin',
    imageUrl: '/images/team/Sharanbasava.png'
  },
  {
    name: 'Vamsi Bommanaboyuna',
    title: 'Admin',
    imageUrl: '/images/team/Vamsi.png'
  },
]
const socialmediateam = [
  {
    name: 'Fuad Ahamed Fazaludin',
    title: 'Social Media & Technology',
    imageUrl: '/images/team/Fuad.png'
  },
  {
    name: 'Vibhangi Ameta',
    title: 'Social Media & Technology',
    imageUrl: '/images/team/Vibhangi.png'
  },
]
const financeteam = [
{
  name: 'Harikrishnan Radhakrishnan',
  title: 'Finance',
  imageUrl: '/images/team/Hari.png'
},
{
  name: 'Jefin Johny',
  title: 'Finance',
  imageUrl: '/images/team/Jeffin.png'
},
]
const eventteam = [
  {
    name: 'Gauri Mehra',
    title: 'Event Management',
    imageUrl: '/images/team/Gauri.png'
  },
  {
    name: 'Ananya Babu',
    title: 'Event Management',
    imageUrl: '/images/team/Ananya.png'
  },
  {
    name: 'Sithara Sethunath',
    title: 'Event Management',
    imageUrl: '/images/team/Sithara.png'
  },
  {
    name: 'Prateek Kalyani',
    title: 'Event Management',
    imageUrl: '/images/team/Prateek.png'
  },
]
const advisory = [
  {
    name: 'Janya Kapahi',
    title: 'Advisory - Event Management',
    imageUrl: '/images/team/Janya.png'
  },
  {
    name: 'Tony Thomas',
    title: 'Advisory - Finance',
    imageUrl: '/images/team/Tony.png'
  },
  {
    name: 'Binay Kumar Pradhan',
    title: 'Advisory - Social Media & Technology',
    imageUrl: '/images/team/Binay.png'
  }
]

// The ProfileCard component
const ProfileCard = ({ name, title, imageUrl, statusDots }) => {
  const header = <img alt={name} src={imageUrl} />;


  return (
    <Card title={name} subTitle={title} style={{ height: '20em', width: '15em', textAlign: 'center', margin: '1em' }} header={header}>

    </Card>
  );
};


const Teams = () => {
  return (
    <div className="app-container mx-4">
      <div className="heading-container">
        <h1 className="heading">Meet Our Team</h1>
        <p className="subheading">ISAC is one of the student bodies at
          BTU Cottbus-Senftenberg and one
          of 16 Indian student bodies in
          Germany.
        </p>
        <p className="subheading">
          Selected by the outgoing ISAC team in collaboration with the IRO
          (International Relation Office) of BTU,
          their role is to hosts events that represents the cultural diversity of India.</p>
      </div>
      <div className='card'>
        <TabView>
          <TabPanel header="Administrative Team">
            <div className="team-grid">
              {adminteam.map((member, index) => (<ProfileCard key={index} {...member} />))}
            </div>
          </TabPanel>
          <TabPanel header="Social Media & Technology Team">
            <div className="team-grid">
                {socialmediateam.map((member, index) => (<ProfileCard key={index} {...member} />))}
            </div>
          </TabPanel>
          <TabPanel header="Finance Team">
            <div className="team-grid">
              {financeteam.map((member, index) => (<ProfileCard key={index} {...member} />))}
            </div>
          </TabPanel>
          <TabPanel header="Events Team">
            <div className="team-grid">
              {eventteam.map((member, index) => (<ProfileCard key={index} {...member} />))}
            </div>
          </TabPanel>
          <TabPanel header="Advisory Team">
            <div className="team-grid">
              {advisory.map((member, index) => (<ProfileCard key={index} {...member} />))}
            </div>
          </TabPanel>
        </TabView>
      </div>
      <div className='flex justify-content-center'>
        <a href="https://forms.gle/SNjjBJvXrqSNcqfK8" target="_blank" rel="noopener noreferrer">
          <Button label="Are you a member of ISAC?" icon="pi pi-user" severity="info" text raised />
        </a>
      </div>
    </div>
  );
};

export default Teams;

