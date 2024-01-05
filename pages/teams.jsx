import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { TabView, TabPanel } from 'primereact/tabview';

// Mock data for the team members
const adminteam = [
  {
    name: 'Sushmita Godayal',
    title: 'Admin',
    imageUrl: '/images/team/Sushmita.png'
  },
  {
    name: 'Suryakant Singh',
    title: 'Admin',
    imageUrl: '/images/team/Suryakant.png'
  },
  {
    name: 'Sujan Reddy',
    title: 'Admin',
    imageUrl: '/images/team/Sujan.png'
  },
]
const socialmediateam = [
  {
    name: 'Taliya Theresa Joseph',
    title: 'Social Media ',
    imageUrl: '/images/team/Taliya.png'
  },
  {
    name: 'Arun Kumar Thommandru',
    title: 'Social Media ',
    imageUrl: '/images/team/Arun.png'
  },
]
const financeteam = [
{
  name: 'Tony Thomas',
  title: 'Finance',
  imageUrl: '/images/team/Tony.png'
},
{
  name: 'Sabith Bin Salam',
  title: 'Finance ',
  imageUrl: '/images/team/Sabith.png'
},
]
const eventteam = [
  {
    name: 'Janya Kapahi',
    title: 'Events ',
    imageUrl: '/images/team/Janya.png'
  },
  {
    name: 'Anju Koyippilly Rathnan',
    title: 'Events',
    imageUrl: '/images/team/Anju.png'
  },
  {
    name: 'Amal Babu  ',
    title: 'Events',
    imageUrl: '/images/team/Amal.png'
  },
  {
    name: 'Tarani Narukurti',
    title: 'Events',
    imageUrl: '/images/team/Tarani.png'
  },
  {
    name: 'Akshatha Ramesh Patkar',
    title: 'Events',
    imageUrl: '/images/team/Akshatha.png'
  },
  {
    name: 'Binay Kumar Pradhan',
    title: 'Events',
    imageUrl: '/images/team/Binay.png'
  },
]
const advisory = [
  {
    name: 'Kavinprakash Madheswaran',
    title: 'ADVISORY',
    imageUrl: '/images/team/Kavin.png'
  },
  {
    name: 'Kevin Johny Joseph',
    title: 'ADVISORY',
    imageUrl: '/images/team/Kevin.png'
  },
  {
    name: 'Amruta Kulkarni',
    title: 'ADVISORY',
    imageUrl: '/images/team/Amrutha.png'
  },
  {
    name: 'Anusua Ray',
    title: 'ADVISORY',
    imageUrl: '/images/team/Anusua.png'
  },
]

// The ProfileCard component
const ProfileCard = ({ name, title, imageUrl, statusDots }) => {
  const header = <img alt={name} src={imageUrl} />;


  return (
    <Card title={name} subTitle={title} style={{ width: '15em', textAlign: 'center', margin: '1em' }} header={header}>

    </Card>
  );
};


const Teams = () => {
  return (
    <div className="app-container">
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

