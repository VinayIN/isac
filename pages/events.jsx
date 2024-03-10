import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';


function Events() {
  const EventData = {
    getEvents() {
        return fetch('/events.json').then(res => res.json()).then(d => d.data);
    },
  };

  const [event, setNextEvent]= useState([]);
  const [expandedRows, setExpandedRows] = useState([]);
  useEffect(() => {EventData.getEvents().then(data => setNextEvent(data));}, []);
  const header = (
    <Button className='item-end' icon="pi pi-refresh">Reload</Button>
  );
  const footer = `Today's date: ${new Date().toLocaleDateString("hi-IN", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}.`;
  
  const headerTemplate = (data) => {
    return (
        <div className="flex align-items-center gap-2">
            <span>Events in <Tag value={data.Year} severity="success"/></span>
        </div>
    );
  };

  return (
      <Card className='m-2'>
          <DataTable
            value={event}
            header={header}
            footer={footer}
            rowGroupMode="subheader" groupRowsBy="Year" rowGroupHeaderTemplate={headerTemplate}
            sortMode="single"
            sortField="Year"
            sortOrder={-1}
            expandableRowGroups expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
            stripedRows>
              <Column field="Year" header="Year"></Column>
              <Column field="Event Name" header="Event Name" sortable></Column>
              <Column field="Status" header="Status" sortable></Column>
              <Column field="Date" header="Date" sortable></Column>
              <Column field="Location" header="Location"></Column>
              <Column field="Description" header="Description"></Column>
              <Column field="Link" header="Link"></Column>
          </DataTable>
      </Card>
  );
}
  
export default Events