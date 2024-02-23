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
    <div className='flex flex-column py-6 mx-4'>
      <Card title="Admission Procedure at Brandenburg Technical University" className='m-2 shadow-4'>
        <div style={{height: '500px', overflow: 'auto' }}>
          <ReactMarkdown>{admissionContent}</ReactMarkdown>
        <ScrollTop target="parent" threshold={0} icon="pi pi-arrow-up text-base" />
        </div>
        <Card
          title="Check the official link of BTU"
          subTitle="Here, we provide some basic information which could be a help for your decision-making process."
          className="flex justify-content-center shadow-4">
          <div className='text-center'>
              <a href="https://www.b-tu.de/en/prospective-international-students" className="no-underline p-2">
                <Button icon="pi pi-arrow-right" label="BTU official page" iconPos="right" outlined rounded/>
              </a>
              <a href="https://www.b-tu.de/en/students/admissions-registrars-office/dates-and-deadlines" className="no-underline p-2">
                <Button icon="pi pi-arrow-right" label="Check deadlines here" iconPos="right" outlined rounded/>
              </a>
              <a href="https://www.b-tu.de/en/international/news/events" className="no-underline p-2" >
                <Button icon="pi pi-arrow-right" label="International Events" iconPos="right" outlined rounded/>
              </a>
              <a href='https://www.b-tu.de/en/welcome-centre/' className="no-underline p-2">
                <Button icon="pi pi-arrow-right" label="Welcome Point" iconPos="right" outlined rounded/>
              </a>
          </div>
        </Card>
      </Card>

      <Card title="Finding Accomodation" className='m-2 shadow-4'>
        <div style={{height: '500px', 'overflow': 'auto' }}>
          <ReactMarkdown>{accommodationContent}</ReactMarkdown>
          <ScrollTop target="parent" threshold={0} icon="pi pi-arrow-up text-base" />
        </div>
        <Card
          title="Learn more about accomodation facilities"
          subTitle="Securing accomodation can be a challenging task. Apply as soon as possible, use these links to navigate yourself."
          className="flex justify-content-center shadow-4">
          <div className='text-center'>
              <a href="https://studentenwerk-frankfurt.net/wohnen-in-cottbus/" className="no-underline p-2">
                <Button icon="pi pi-arrow-right" label="Studentenwerk Frankfurt (Oder)" iconPos="right" outlined rounded/>
              </a>
              <a href="https://www.gaestehaus-uni.de/en/home" className="no-underline p-2">
                <Button icon="pi pi-arrow-right" label="Guesthouse der Uni-Service GmbH" iconPos="right" outlined rounded/>
              </a>
              <a href="http://www.t1-cottbus.de/" className="no-underline p-2" >
                <Button icon="pi pi-arrow-right" label="T-1 Campus" iconPos="right" outlined rounded/>
              </a>
              <a href="https://www.wg-gesucht.de/wg-zimmer-in-Cottbus.22.0.1.0.html" className="no-underline p-2" >
                <Button icon="pi pi-arrow-right" label="Wg-gesucht" iconPos="right" outlined rounded/>
              </a>
          </div>
        </Card>
      </Card>

      <Card title="City Registration" className='m-2 shadow-4'>
        <div style={{ height: '400px', 'overflow': 'auto' }}>
          <ReactMarkdown>{registrationContent}</ReactMarkdown>
          <ScrollTop target="parent" threshold={0} icon="pi pi-arrow-up text-base" />
        </div>
        <Card
          title="Visit Stadtbüro Cottbus"
          subTitle="cottbus.de is the official website of the city of Cottbus. Here, you can find more information about the city."
          className="flex justify-content-center shadow-4">
          <div className='text-center'>
            <a href="https://www.cottbus.de/stadtverwaltung/d31/buergerservice/stadtbuero/moeglichkeiten_zur_terminvereinbarung.html" className="no-underline p-2">
              <Button icon="pi pi-arrow-right" label="Online Booking" iconPos="right" outlined rounded />
            </a>
          </div>
        </Card>
      </Card>

      <Card title="Opening Bank Account" className='m-2 shadow-4'>
        <div style={{height: '500px', 'overflow': 'auto' }}>
            <ReactMarkdown>{accountContent}</ReactMarkdown>
          <ScrollTop target="parent" threshold={0} icon="pi pi-arrow-up text-base" />
        </div>
        <Card
          title="More resources"
          subTitle="There are many resources you might come across in internet. Read carefully and seek advice from ISAC members. (If needed)"
          className="flex justify-content-center shadow-4">
          <div className='text-center'>
            <a href="https://www.study-in-germany.de/en/germany/arrival/bank-account/" className="no-underline p-2">
              <Button icon="pi pi-arrow-right" label="Tip: Bank Accounts" iconPos="right" outlined rounded />
            </a>
          </div>
        </Card>
      </Card>

      <Card title="Reaching Cottbus" className='m-2 shadow-4'>
        <div style={{height: '500px', 'overflow': 'auto' }}>
            <ReactMarkdown>{cottbusContent}</ReactMarkdown>
          <ScrollTop target="parent" threshold={0} icon="pi pi-arrow-up text-base" />
        </div>
        <Card
          title="Visit official transport services"
          subTitle="Apart from google maps, here are some official services to navigate yourself in Cottbus/Brandenburg/Germany."
          className="flex justify-content-center shadow-4">
          <div className='text-center'>
              <a href="https://www.vbb.de/en" className="no-underline p-2">
                <Button icon="pi pi-arrow-right" label="VBB (Verkehrsverbund Berlin-Brandenburg)" iconPos="right" outlined rounded/>
              </a>
              <a href="https://int.bahn.de/en/" className="no-underline p-2">
                <Button icon="pi pi-arrow-right" label="DB Navigator (Deutsche Bahn)" iconPos="right" outlined rounded/>
              </a>
          </div>
        </Card>
      </Card>
      
      <Card title="Emgergency Contacts" className='m-2 shadow-4'>
        <div style={{height: '500px', 'overflow': 'auto' }}>
            <ReactMarkdown>{contactsContent}</ReactMarkdown>    
          <ScrollTop target="parent" threshold={0} icon="pi pi-arrow-up text-base" />
        </div>
      </Card>
    </div>
  );
};

export default Links;