import { Card } from 'primereact/card';
import { ScrollTop } from 'primereact/scrolltop';
import { Button } from 'primereact/button';

function Links() {
    return (
        <div className='flex flex-column py-6'>
        <Card title="Admission Procedure at Brandenburg Technical University" className='m-2'>
          <div style={{height: '400px', 'overflow': 'auto' }}>
            <p className="m-0">
              Please note that the admission procedures for international students at Brandenburg University of Technology Cottbus-Senftenberg (BTU Cottbus-Senftenberg) may change over time, and it&apos;s essential to check the official university website or contact the university&apos;s admissions office for the most up-to-date information.
              Here&apos;s a general overview of the admission procedure for international students at BTU for both the summer and winter intakes:
            </p>
            <p>
              Summer Intake (Starting in April) & Winter Intake (Starting in October)
            </p>
            <ul>
              <li>
                  Choose a Program: 
                  Ensure that you meet the program&apos;s admission requirements, including ECTS requirements and language proficiency.
              </li>
              <li>
                  Check Application Deadlines:
                  Every degree program has a different deadline. Pay attention to the perspective international student&apos;s deadline.
              </li>
              <li>
                  Online Application:
                  If you are planning to have a scholarship, start with your scholarship application at least 2 months before the admission portal opens.
                  Make sure to provide all required documents, including your academic transcripts, proof of language proficiency (usually IELTS or TOEFL), and a copy of your passport.
                  <p>
                    There are 2 possible ways to apply for your application:
                    <ol>
                      <li><a href="https://www.uni-assist.de/en/how-to-apply">Uni-Assist</a></li>
                      <li><a href="https://www.b-tu.de/mybtu">BTU Portal</a></li>
                    </ol>
                    Check where you should apply!
                  </p>
              </li>
              <li>
                  Admission Evaluation:
                  The university&apos;s admissions committee will review your application and documents. If you meet the requirements, you will receive an offer of admission. Upon which you can then proceed to search for accommodation.
              </li>
            </ul>
            <p>
              If you accept the offer of admission and follow the instructions provided for obtaining a student visa, You will reach Cottbus in no time.
            </p>
            <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
          </div>
          
          <Card title="Check the official link of BTU" subTitle="Here, we provide some basic information which could be a help for your decision-making process." className="flex justify-content-center">
            <div>
              <p className="m-0">
                <a href="https://www.b-tu.de/en/prospective-international-students" className="no-underline px-2">
                  <Button icon="pi pi-arrow-right" label="BTU official page" iconPos="right"/>
                </a>
                <a href="https://www.b-tu.de/en/students/admissions-registrars-office/dates-and-deadlines" className="no-underline px-2">
                  <Button icon="pi pi-arrow-right" label="Check deadlines here" iconPos="right"/>
                </a>
              </p>
            </div>
          </Card>

        </Card>

        <Card title="Finding Accomodation" className='m-2'>
          <div style={{height: '400px', 'overflow': 'auto' }}>
            <p className="m-0">
            Under Construction!
            </p>
            <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
          </div>
        </Card>

        <Card title="City Registration" className='m-2'>
          <div style={{height: '400px', 'overflow': 'auto' }}>
            <p className="m-0">
            Under Construction!
            </p>
            <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
          </div>
        </Card>

        <Card title="Opening Bank Account" className='m-2'>
          <div style={{height: '400px', 'overflow': 'auto' }}>
            <p className="m-0">
                Under Construction!
            </p>
            <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
          </div>
        </Card>

        <Card title="Reaching Cottbus" className='m-2'>
          <div style={{height: '400px', 'overflow': 'auto' }}>
            <p className="m-0">
            Under Construction!
            </p>
            <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
          </div>
        </Card>
        
        <Card title="Emgergency Contacts" className='m-2'>
          <div style={{height: '400px', 'overflow': 'auto' }}>
            <p className="m-0">
            Under Construction!
            </p>
            <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
          </div>
        </Card>
        </div>
    )
  };
  
  export default Links