import React, { useEffect } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import EventCarousel from '../components/eventcarousel';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { Link } from "next/link";
import { Card } from 'primereact/card';


function Home() {
  useEffect(() => {
    const canvas = document.getElementById('hero-banner');

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100;

    const backgroundImage = new Image();
    backgroundImage.src = '/images/D_B.png'; // Replace with your background image

    backgroundImage.onload = () => {
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
      animate();
    }

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    function createFirework() {
      const x = random(0, canvas.width);
      const y = canvas.height;
      const color = `hsl(${random(0, 360)}, 100%, 50%)`;

      for (let i = 0; i < 100; i++) {
        const angle = Math.PI * 2 * random(0, 1);
        const speed = 2 + random(0, 5);
        const radius = 2;

        fireworks.push({
          x,
          y,
          color,
          radius,
          speed,
          angle,
          life: 100,
        });
      }
    }

    const fireworks = [];

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fireworks.forEach((firework, index) => {
        ctx.beginPath();
        ctx.arc(firework.x, firework.y, firework.radius, 0, Math.PI * 2);
        ctx.fillStyle = firework.color;
        ctx.fill();

        firework.x += Math.cos(firework.angle) * firework.speed;
        firework.y += Math.sin(firework.angle) * firework.speed;
        firework.speed -= 0.05;
        firework.life -= 1;

        if (firework.life <= 0) {
          fireworks.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    }

    // Create fireworks at intervals
    setInterval(() => createFirework(), 300);
  }, []);
  return (

    <div className=''>
      <canvas id="hero-banner" width="400" height='540' style={{ position: 'absolute' }}></canvas>
      <div className="hero-banner" style={{ backgroundImage: 'url(/images/D_B.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', color: 'white' }}>
        <h1 className='banner-main-text fadeInUp '>Welcome to ISAC Cottbus</h1>
        <p className="p-m-3 banner-subtext fadeInUp ">Connecting Indian Students at BTU Cottbus-Senftenberg</p>

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
            <Card title="ISAC Constitution and Working Guidelines" subTitle="Subjected to change" className="flex justify-content-center">
              <div>
                <p className="m-0">
                  <a href="/docs/Constitution_ISAC_2021.pdf" className="no-underline px-2">
                    <Button icon="pi pi-file" label="Open Constitution" iconPos="right" />
                  </a>
                  <a href="/docs/Working Guidelines_ISAC_2021.pdf" className="no-underline px-2">
                    <Button icon="pi pi-file" label="Open Guidelines" iconPos="right" />
                  </a>
                </p>
              </div>
            </Card>
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
              Here you get a chance to be a part of something truly extraordinary. Your involvement is pivotal, as we engage with 100&apos;s of students on the day of event to make it an unforgettable experience.
            </p>
            There are a couple of ways through which you can join us.
            <ol>
              <li className='py-4'>Membership</li>
              Every year towards the end (Ideally after the Diwali event) we roll-out form to form ISAC with new members and advisory.
              The advisors consist of former ISAC members whose role is to only provide guidance and assist in team organisation.
              <p>
                The ISAC members has the freedom for every decision making and shape the club.
              </p>
              <a href="https://forms.gle/7LRzgvv4CQVsvLr97" target="_blank" rel="noopener noreferrer">
                <Button label="Enrol for membership" icon="pi pi-file" severity="info" text raised />
              </a>

              <li className='py-4'>Volunteer</li>
              During each event, we ask for volunteers to help us with the preparations.
              Coordinating with audience during dance, decorations and cooking are some of the activities where you a volunteer could help us out.
              Please look at out social media platforms for such request.
              <p>
                However, you can also directly leave us your contact detail through e-mail.
                We will contact you at every event, or if you prefer will give a knock at your door.
              </p>
              <a href="mailto:ask.isacottbus@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button label="Become a Volunteer" icon="pi pi-envelope" severity="info" text raised />
              </a>

              <li className='py-4'>Feedback</li>
              In case you have an opinion that you want us to discuss before our planning, please leave a constructive feedback here.
              <p>
                We read your feedback before every event starts.
              </p>
              <a href="https://forms.gle/B9sNgVu5KqdjcZVaA" target="_blank" rel="noopener noreferrer">
                <Button label="Leave a Feedback" icon="pi pi-file" severity="info" text raised />
              </a>
            </ol>
          </AccordionTab>
          <AccordionTab header="How can you contact ISAC??">
            <p>
              We are reachable only through electronic medium as of now, due to unavailability of a physical office at the university.
            </p>
            <ul>
              <li className='py-4'>
                <p> Admistrative queries:{" "}</p>

                <a href="mailto:isacottbus@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-5" icon="pi pi-envelope" label="isacottbus@gmail.com" text raised />
                </a>
              </li>
              <li className='py-4'>
                <p>Seeking Information/Assistance:{" "}</p>

                <a href="mailto:ask.isacottbus@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-5" icon="pi pi-envelope" label="ask.isacottbus@gmail.com" text raised />
                </a>
              </li>
            </ul>
            <p>In case you need a quick response from us,
              <a href="https://www.instagram.com/isac_cottbus" target="_blank" rel="noopener noreferrer"> Instagram <i className="pi pi-instagram"></i></a>
              is the best option.
            </p>
            <p>
              <strong>Please Note: Any communication you receive other than the above-mentioned medium must not be trusted and reported.</strong>
            </p>
          </AccordionTab>


        </Accordion>
      </div>
    </div>
  )
};

export default Home;