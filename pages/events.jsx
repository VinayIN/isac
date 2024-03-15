import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { AnchorLink } from '../components/anchorlink';


function Events() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch('/announcements.json')
      .then(res => res.json())
      .then(d => d.data)
      .then((data) => setAnnouncements(data));
  }, []);

  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('/events.json')
    .then(res => res.json())
    .then(d => d.data)
    .then((data) => setEvents(data));
  }, []); 

  const footer = `Today's date: ${new Date().toLocaleDateString("hi-IN", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}.`;
  
  const headerTemplate = (data) => {
    return (
        <div className="flex align-items-center gap-2">
            <span>Events in <Tag value={data.Year} severity="success"/></span>
        </div>
    );
  };

  const [expandedRows, setExpandedRows] = useState([]);
  return (

      <Card className='m-2'>
        <AnchorLink id="announcements">
          <Accordion className="pb-4 m-2">
            <AccordionTab header="Announcements">
              <DataTable
                value={announcements}
                scrollable
                stripedRows>
                  <Column field="title" header="Title"/>
                  <Column field="description" header=""/>
                  <Column field="post_date" header="Posted On" sortable/>
              </DataTable>
            </AccordionTab>
          </Accordion>
        </AnchorLink>
        <AnchorLink id="calender">
          <DataTable
            value={events}
            footer={footer}
            rowGroupMode="subheader" groupRowsBy="Year" rowGroupHeaderTemplate={headerTemplate}
            sortMode="single"
            sortField="Year"
            sortOrder={-1}
            expandableRowGroups expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
            stripedRows
            className='m-2'>
              <Column field="Year" header="Year"></Column>
              <Column field="Event Name" header="Event Name" sortable></Column>
              <Column field="Status" header="Status" sortable></Column>
              <Column field="Date" header="Date" sortable></Column>
              <Column field="Location" header="Location"></Column>
              <Column field="Description" header="Description"></Column>
              <Column field="Link" header="More Details"></Column>
          </DataTable>
        </AnchorLink>
      </Card>
  );
}
  
export default Events