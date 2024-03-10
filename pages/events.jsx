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
  const footer = `Today's date: ${new Date().toLocaleDateString("hi-IN", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}.`;
  return (
      <Card className='m-2'>
          <DataTable
            value={event}
            header={header}
            footer={footer}
            sortField='Year'
            sortOrder={-1}
            stripedRows
            scrollable
            scrollHeight="400px">
              <Column field="Year" header="Year" sortable></Column>
              <Column field="Event Name" header="Event Name" sortable></Column>
              <Column field="Status" header="Status" sortable></Column>
              <Column field="Date" header="Date"></Column>
              <Column field="Location" header="Location"></Column>
              <Column field="Description" header="Description"></Column>
              <Column field="Link" header="Link"></Column>
          </DataTable>
      </Card>
  );
}
  
export default Events