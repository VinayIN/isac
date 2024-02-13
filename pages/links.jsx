import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ScrollTop } from 'primereact/scrolltop';
import ReactMarkdown from 'react-markdown';
import { useMarkdown } from '../components/usemarkdown';

function Links() {
  const admissionContent = useMarkdown('/markdown/admissionProcedure.md');
  const accommodationContent = useMarkdown('/markdown/findingAccommodation.md');
  const registrationContent = useMarkdown('/markdown/cityRegistration.md');
  const accountContent = useMarkdown('/markdown/bankAccount.md');
  const cottbusContent = useMarkdown('/markdown/reachingCottbus.md');
  const contactsContent = useMarkdown('/markdown/emergencyContacts.md');

  return (
    <div className='flex flex-column py-6'>
      <Card title="Admission Procedure at Brandenburg Technical University" className='m-2 shadow-4'>
        <div style={{height: '500px', overflow: 'auto' }}>
          <ReactMarkdown>{admissionContent}</ReactMarkdown>
        </div>
        <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />

        <Card title="Check the official link of BTU" subTitle="Here, we provide some basic information which could be a help for your decision-making process." className="flex justify-content-center shadow-4">
          <div>
            <p className="m-0">
              <a href="https://www.b-tu.de/en/prospective-international-students" className="no-underline px-2">
                <Button icon="pi pi-arrow-right" label="BTU official page" iconPos="right"/>
              </a>
              <a href="https://www.b-tu.de/en/students/admissions-registrars-office/dates-and-deadlines" className="no-underline px-2">
                <Button icon="pi pi-arrow-right" label="Check deadlines here" iconPos="right"/>
              </a>
              <a href="https://www.b-tu.de/en/international/news/events" className="no-underline px-2" >
                <Button icon="pi pi-arrow-right" label="International Events" iconPos="right"/>
              </a>
            </p>
          </div>
        </Card>

      </Card>

      <Card title="Finding Accomodation" className='m-2 shadow-4'>
          <div style={{height: '500px', 'overflow': 'auto' }}>
            <p className="m-0">
            Under Construction!
            </p>
            <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
          </div>
        </Card>

        <Card title="City Registration" className='m-2 shadow-4'>
          <div style={{height: '400px', 'overflow': 'auto' }}>
            <p className="m-0">
            Under Construction!
            </p>
            <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
          </div>
        </Card>

        <Card title="Opening Bank Account" className='m-2 shadow-4'>
          <div style={{height: '500px', 'overflow': 'auto' }}>
            <p className="m-0">
                Under Construction!
            </p>
            <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
          </div>
        </Card>

        <Card title="Reaching Cottbus" className='m-2 shadow-4'>
          <div style={{height: '500px', 'overflow': 'auto' }}>
            <p className="m-0">
            Under Construction!
            </p>
            <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
          </div>
        </Card>
        
        <Card title="Emgergency Contacts" className='m-2 shadow-4'>
          <div style={{height: '500px', 'overflow': 'auto' }}>
            <p className="m-0">
            Under Construction!
            </p>
            <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
          </div>
        </Card>
    </div>
  );
};

export default Links;