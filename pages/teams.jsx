// import React from 'react';

// const teams = () => {
//   return (
//     <div className="team_page">
//       <header>
//         <div className="title slide-right ">
//           <h1>Meet Our Team</h1>
//         </div>
//         <div className="content">
//           <h2 >who we are ?</h2>
//           <p className='fade-in'><strong>ISAC</strong> is one of the student bodies at
// BTU Cottbus-Senftenberg and one
// of 16 Indian student bodies in
// Germany.</p>
//         </div>
//       </header>
//       <main>
//         <div className="profile">
//           <figure data-value="product owner">
//             <img src="/images/team/a2.png" alt="" />
//             <figcaption>Sushmita Godayal</figcaption>
//           </figure>
//         </div>
//         <div className="profile">
//           <figure data-value="product owner">
//             <img src="/images/team/a2.png" alt="" />
//             <figcaption>suryakant singh</figcaption>
//           </figure>
//         </div>
//         <div className="profile">
//           <figure data-value="product owner">
//             <img src="/images/team/a3.png" alt="" />
//             <figcaption>sujan reddy</figcaption>
//           </figure>
//         </div>
//         <div className="profile">
//           <figure data-value="product owner">
//             <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" />
//             <figcaption>janya kapahi</figcaption>
//           </figure>
//         </div>
//         <div className="profile">
//           <figure data-value="product owner">
//             <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" />
//             <figcaption>anju koyippilly rathnan</figcaption>
//           </figure>
//         </div>
//         <div className="profile">
//           <figure data-value="product owner">
//             <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" />
//             <figcaption>amal babu</figcaption>
//           </figure>
//         </div>
//         <div className="profile">
//           <figure data-value="product owner">
//             <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" />
//             <figcaption>tarani narukurti</figcaption>
//           </figure>
//         </div>
//         <div className="profile">
//           <figure data-value="product owner">
//             <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" />
//             <figcaption>akshatha ramesh patkar</figcaption>
//           </figure>
//         </div>
//         <div className="profile">
//           <figure data-value="product owner">
//             <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" />
//             <figcaption>binay kumar pradhan</figcaption>
//           </figure>
//         </div>
//         <div className="profile">
//           <figure data-value="product owner">
//             <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" />
//             <figcaption>taliya theresa JOSEPH</figcaption>
//           </figure>
//         </div>
//         <div className="profile">
//           <figure data-value="product owner">
//             <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" />
//             <figcaption>arun kumar thommandru</figcaption>
//           </figure>
//         </div>
//         <div className="profile">
//           <figure data-value="product owner">
//             <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" />
//             <figcaption>abhirami vinod manju</figcaption>
//           </figure>
//         </div>
//         <div className="profile">
//           <figure data-value="product owner">
//             <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" />
//             <figcaption>tony thomas</figcaption>
//           </figure>
//         </div>
//         <div className="profile">
//           <figure data-value="product owner">
//             <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" />
//             <figcaption>sabith bin salam</figcaption>
//           </figure>
//         </div>
//         <div className="profile">
//           <figure data-value="product owner">
//             <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" />
//             <figcaption>kavinprakash madheswaran</figcaption>
//           </figure>
//         </div>
//         <div className="profile">
//           <figure data-value="product owner">
//             <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" />
//             <figcaption>kevin johny joseph</figcaption>
//           </figure>
//         </div>
//         <div className="profile">
//           <figure data-value="product owner">
//             <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" />
//             <figcaption>amruta kulkarni</figcaption>
//           </figure>
//         </div>
//         <div className="profile">
//           <figure data-value="product owner">
//             <img src="https://rvs-team-page.onrender.com/photo1.png" alt="" />
//             <figcaption>anusua ray</figcaption>
//           </figure>
//         </div>
//         {/* Add more profile components similar to the one above */}

//       </main>
     
//     </div>
//   );
// };

  
//   export default teams

import React from 'react';
import { Card } from 'primereact/card';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// Mock data for the team members
const teamMembers = [
  {
    name: 'Samira Hadid',
    title: 'CEO',
    imageUrl: '/images/team/a1.png'
  },
  {
    name: 'Olivia Wilson',
    title: 'CTO',
    imageUrl: '/images/team/a3.png'
  },
  {
    name: 'Samira Hadid',
    title: 'CEO',
    imageUrl: '/images/team/a3.png'
  },
  {
    name: 'Olivia Wilson',
    title: 'CTO',
    imageUrl: '/images/team/a3.png'
  },
  {
    name: 'Samira Hadid',
    title: 'CEO',
    imageUrl: '/images/team/a3.png'
  },
  {
    name: 'Olivia Wilson',
    title: 'CTO',
    imageUrl: '/images/team/a3.png'
  },
  {
    name: 'Samira Hadid',
    title: 'CEO',
    imageUrl: '/images/team/a3.png'
  },
  {
    name: 'Olivia Wilson',
    title: 'CTO',
    imageUrl: '/images/team/a3.png'
  }, {
    name: 'Samira Hadid',
    title: 'CEO',
    imageUrl: '/images/team/a3.png'
  },
  {
    name: 'Olivia Wilson',
    title: 'CTO',
    imageUrl: '/images/team/a3.png'
  },
  {
    name: 'Samira Hadid',
    title: 'CEO',
    imageUrl: '/images/team/a3.png'
  },
  {
    name: 'Olivia Wilson',
    title: 'CTO',
    imageUrl: '/images/team/a3.png'
  },
  {
    name: 'Samira Hadid',
    title: 'CEO',
    imageUrl: '/images/team/a3.png'
  },
  {
    name: 'Olivia Wilson',
    title: 'CTO',
    imageUrl: '/images/team/a3.png'
  },
  {
    name: 'Samira Hadid',
    title: 'CEO',
    imageUrl: '/images/team/a3.png'
  },
  {
    name: 'Olivia Wilson',
    title: 'CTO',
    imageUrl: '/images/team/a3.png'
  }
  // ... add other members here
];

// The ProfileCard component
const ProfileCard = ({ name, title, imageUrl, statusDots }) => {
  const header = <img alt={name} src={imageUrl} />;
 

  return (
    <Card title={name} subTitle={title} style={{ width: '15em', textAlign: 'center', margin: '1em' }}  header={header}>
      
    </Card>
  );
};


const teams = () => {
  return (
    <div className="app-container">
      <div className="heading-container">
        <h1 className="heading">Meet Our team</h1>
        <p className="subheading">ISAC is one of the student bodies at
BTU Cottbus-Senftenberg and one
of 16 Indian student bodies in
Germany.</p>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <ProfileCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default teams;

