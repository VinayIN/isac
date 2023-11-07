import { Accordion, AccordionTab } from 'primereact/accordion';
import EventCarousel from '../components/eventcarousel';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Divider } from 'primereact/divider'
import { Button } from 'primereact/button';
        
function home() {
  return (
    <div className=''>
      <div className="hero-banner" style={{ backgroundImage: 'url(/images/banner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', color: 'white' }}>
            <h1 className='banner-main-text fadeInUp '>Welcome to ISAC Cottbus</h1>
            <p className="p-m-3 banner-subtext fadeInUp ">Connecting Indian Students at BTU Cottbus-Senftenberg</p>
            <Button label="Learn More" className="p-button-raised p-button-rounded fadeInUp " onClick={() => console.log('Navigate to more info')} />
        </div>
      <div className="flex flex-column md:flex-row lg:flex-row">
          <div className="w-full md:w-8 lg:w-8 flex flex-column justify-content-center">
            <EventCarousel/>
          </div>
          <Divider layout="vertical" className="hidden md:flex" />
          <div className="w-full md:w-4 lg:w-4 flex flex-column align-items-left justify-content-center">
            <h3>Updates</h3>
            <ScrollPanel style={{height: '350px'}}>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                  enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                  ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
              </p>
              <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                  quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                  culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
              </p>
            </ScrollPanel>
          </div>
      </div>

      <div className='py-6'>
        <Accordion multiple activeIndex={[0]}>
            <AccordionTab header="Who are we (ISAC) ?">
              <p>
              Indian Students Association Cottbus (ISAC) is one of many student association in the Brandenburg University of Technology (Cottbus-Senftenberg).
              The objective of the association is to unite all Indian students in the university under one umbrella and facilitate services for them.
              Our partnership with the Indians in Germany platform which comes under the purview of the Indian embassy in Berlin is seen to be fruitful in many ways.
              We conduct events of academic, professional and cultural importance.</p>
              <p>
              Indian Embassy in Berlin organizes activities all-round the year and the formation of the student associations is a part of that process.
              ISAC is one of the 16 student organizations in Germany recognized by the embassy.</p>
              <p>
              We welcome you to be a part of this organization and to receive benefits.</p>
            </AccordionTab>
            <AccordionTab header="How can ISAC help you?">
              <p>
              ISAC team is a group of volunteers who wish to make starting days for new students less stressful.
              We have come forward on our own interest to help fresh students to guide and introduce new culture by utilising their own experience from their days in Cottbus.</p>
              <p>
              Through this website, Students will be self-guide themselves through
              <ul>
                <li>All the admission procedure</li>
                <li>Finding accomodation</li>
                <li>Reaching Cottbus</li>
                <li>City Registration</li>
                <li>Opening bank accounts</li>
              </ul>
              And lastly trying to make your time in Cottbus more fun.</p>
            </AccordionTab>
            <AccordionTab header="How can you participate with ISAC?">
            <p>
              Participating with ISAC is as easy as joining us for an event and helping us with the preparations needed for the event.
              At ISAC, Celebrating a cultural event and representing INDIA is the only requirement!
              Here you get a chance to be a part of something truly extraordinary. Your involvement is pivotal, as we engage with 100's of students on the day of event to make it an unforgettable experience.
              </p>
              There are a couple of ways through which you can join us.
              <ol>
                <li className='py-4'>Membership</li>
                  Every year towards the end (Ideally after the Diwali event) we roll-out form to form ISAC with new members and advisory.
                  The advisors consist of former ISAC members whose role is to only provide guidance and assist in team organisation.
                  <p>
                    The ISAC members has the freedom for every decision making and shape the club.
                  </p>
                <Button label="Enrol for membership" icon="pi pi-file" severity="info" text raised disabled/>
                
                <li className='py-4'>Volunteer</li>
                  During each event, we ask for volunteers to help us with the preparations.
                  Coordinating with audience during dance, decorations and cooking are some of the activities where you a volunteer could help us out.
                  Please look at out social media platforms for such request.
                  <p>
                    However, you can also directly leave us your contact detail through e-mail.
                    We will contact you at every event, or if you prefer will give a knock at your door.
                  </p>
                <Button label="Become a Volunteer" icon="pi pi-envelope" severity="info" text raised/>
                
                <li className='py-4'>Feedback</li>
                In case you have an opinion that you want us to discuss before our planning, please leave a constructive feedback here.
                <p>
                  We read your feedback before every event starts.
                </p>
                <Button label="Leave a Feedback" icon="pi pi-file" severity="info" text raised/>
              </ol>
            </AccordionTab>
            <AccordionTab header="How can you contact ISAC?">
              <p>
                We are reachable only through elctronic medium as of now, due to unavailability of a physical office at the university.
                <ul>
                  <li>Admistrative queries: <Link className="px-1" href='mailto:isacottbus@gmail.com' target='_blank'><i className="pi pi-envelope"/> isacottbus@gmail.com</Link></li>
                  <li>Seeking Information/Assistance: <Link className="px-1" href='mailto:ask.isacottbus@gmail.com' target='_blank'><i className="pi pi-envelope"/> ask.isacottbus@gmail.com</Link></li>
                </ul>

                <p>
                  In case you need quick response from us, Instagram (<Link className="px-1" href='https://www.instagram.com/isac_cottbus/' target='_blank'><i className="pi pi-instagram"/> @isac_cottbus</Link>) is the best option.
                </p>
                
                <strong>Please Note: Any communication you receive other than the above mentioned medium must be not be trusted and reported.</strong>
              </p>
            </AccordionTab>
        </Accordion>
      </div>
    </div>
  )
  };

export default home;