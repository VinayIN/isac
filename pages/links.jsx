// import { Card } from 'primereact/card';
// import { ScrollTop } from 'primereact/scrolltop';

// function Resources() {
//     return (
//         <div className='flex flex-column py-6 justify-content-center'>
//         <Card title="Admission Procedure at Brandenburg Technical University">
//           <div style={{height: '400px', 'overflow': 'auto' }}>
//             <p className="m-0">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
//                 numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
//             </p>
//             <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
//           </div>
//         </Card>

//         <Card title="Finding Accomodation">
//           <div style={{height: '400px', 'overflow': 'auto' }}>
//             <p className="m-0">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
//                 numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
//             </p>
//             <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
//           </div>
//         </Card>

//         <Card title="City Registration">
//           <div style={{height: '400px', 'overflow': 'auto' }}>
//             <p className="m-0">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
//                 numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
//             </p>
//             <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
//           </div>
//         </Card>

//         <Card title="Opening Bank Account">
//           <div style={{height: '400px', 'overflow': 'auto' }}>
//             <p className="m-0">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
//                 numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
//             </p>
//             <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
//           </div>
//         </Card>

//         <Card title="Reaching Cottbus">
//           <div style={{height: '400px', 'overflow': 'auto' }}>
//             <p className="m-0">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
//                 numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
//             </p>
//             <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
//           </div>
//         </Card>
        
//         <Card title="Emgergency Contacts">
//           <div style={{height: '400px', 'overflow': 'auto' }}>
//             <p className="m-0">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
//                 numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
//             </p>
//             <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
//           </div>
//         </Card>
//         </div>
//     )
//   };
  
//   export default Resources
import React from 'react';
import { Card } from 'primereact/card';
import { ScrollTop } from 'primereact/scrolltop';
import { Button } from 'primereact/button';
function Resources() {
  const resourcesData = [
    {
      title: "Admission Procedure at Brandenburg Technical University",
      content: "You know what you want to study? Then we will guide you through the application process. Here you will find all the information you need to apply for Bachelor's, Master's or PhD programs",
      image: "/images/link/1.jpeg",
      link: "https://www.b-tu.de/en/international/prospective-international-students/apply-in-three-steps"
    },
    {
      title: "Admission Procedure at Brandenburg Technical University",
      content: "You know what you want to study? Then we will guide you through the application process. Here you will find all the information you need to apply for Bachelor's, Master's or PhD programs",
      image: "/images/link/1.jpeg",
      link: "https://www.b-tu.de/en/international/prospective-international-students/apply-in-three-steps"
    },
    {
      title: "Admission Procedure at Brandenburg Technical University",
      content: "You know what you want to study? Then we will guide you through the application process. Here you will find all the information you need to apply for Bachelor's, Master's or PhD programs",
      image: "/images/link/1.jpeg",
      link: "https://www.b-tu.de/en/international/prospective-international-students/apply-in-three-steps"
    },
    {
      title: "Admission Procedure at Brandenburg Technical University",
      content: "You know what you want to study? Then we will guide you through the application process. Here you will find all the information you need to apply for Bachelor's, Master's or PhD programs",
      image: "/images/link/1.jpeg",
      link: "https://www.b-tu.de/en/international/prospective-international-students/apply-in-three-steps"
    },
    // Add more resource data objects similarly
  ];

  return (
    <div className='Link_page grid-container'>
      {resourcesData.map((resource, index) => (
        <div key={index}>
          <Card title={resource.title}>
            <div style={{ height: '300px', overflow: 'hidden' }}>
              <img src={resource.image} alt={resource.title} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <p className="m-0">{resource.content}</p>
              <a  href={resource.link} target="_blank" rel="noopener noreferrer">
              <Button className="mt-5" icon="pi pi-link" label="Learn more" text raised/></a>
              <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
export default Resources;
