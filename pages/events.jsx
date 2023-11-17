import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const EventData = {
  getEvents() {
      return fetch('/events.json').then(res => res.json()).then(d => d.data);
  },
};


function Events() {
  const [event, setNextEvent]= useState([]);
  useEffect(() => {EventData.getEvents().then(data => setNextEvent(data));}, []);
  const header = (
    <Button className='item-end' icon="pi pi-refresh">Reload</Button>
  );
  const footer = `Today's date is: ${new Date().toLocaleDateString("hi-IN", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}.`;
  return (
      <Card className='justify-content-center m-6'>
          <DataTable value={event} sortField="name" header={header} footer={footer} sortOrder={-1} responsiveLayout="scroll">
              <Column field="Year" header="Year" sortable></Column>
              <Column field="Event Name" header="Event Name" sortable></Column>
              <Column field="Status" header="Status" sortable></Column>
              <Column field="Date" header="Date"></Column>
              <Column field="Location" header="Location"></Column>
              <Column field="Description" header="Description"></Column>
          </DataTable>
      </Card>
  );
}
  
export default Events