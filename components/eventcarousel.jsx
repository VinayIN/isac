import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import Image from 'next/image';

const EventData = {
    getEvents() {
        return fetch('/events.json').then(res => res.json()).then(d => d.data);
    },
  };

function EventTemplate(event) {
    return (
        <div className='event-carousel'>
            <div className='event-content'>
                <div className="event-image mb-3">
                    <Image src="" alt={event.id}/>
                </div>
                <div>
                    <p className="mb-1">{event.name}</p>
                    <div className="">
                        <Button className='m-1 p-button-warning p-button-outlined' type="button" label="Go to post" icon="pi pi-external-link"/>
                        <Button className='m-1 p-button-warning p-button-outlined' type="button" icon="pi pi-calendar-plus" />
                    </div>
                </div>
            </div>
        </div>
    );
};

function EventCarousel() {
    const [event, setNextEvent] = useState(null);
    useEffect(() => {EventData.getEvents().then(data => setNextEvent(data));}, []);
    return (
        <Carousel
            value={event}
            itemTemplate={EventTemplate}
            header={<h3>Events</h3>}>
        </Carousel>
    )
}
export default EventCarousel