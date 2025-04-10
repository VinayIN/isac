import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Badge } from 'primereact/badge';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { AnchorLink } from '../components/anchorlink';
import { useFirestore } from '../hooks/firestore';
import Head from 'next/head';

function Events() {
  const announcements = useFirestore('announcements');
  const events = useFirestore('events');
  const [expandedRows, setExpandedRows] = useState([]);
  
  const indianLanguages = [
    { name: 'Hindi', code: 'hi-IN' },
    { name: 'Tamil', code: 'ta-IN' },
    { name: 'Telugu', code: 'te-IN' },
    { name: 'Bengali', code: 'bn-IN' },
    { name: 'Marathi', code: 'mr-IN' },
    { name: 'Gujarati', code: 'gu-IN' },
    { name: 'Kannada', code: 'kn-IN' },
    { name: 'Malayalam', code: 'ml-IN' },
    { name: 'Punjabi', code: 'pa-IN' },
    { name: 'Odia', code: 'or-IN' },
    { name: 'English', code: 'en-IN' }
  ];

  const footerTemplate = (
    <div className="py-3">
      <div className="flex items-center mb-2">
        <i className="pi pi-clock text-blue-500 mr-2"></i>
        <span className="text-sm font-medium">Today&apos;s Date</span>
      </div>
      <div className="overflow-x-auto">
        <div className="flex flex-wrap gap-2">
          {indianLanguages.map((lang) => {
            const dateInLanguage = new Date().toLocaleDateString(lang.code, {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            });
            return (
              <div key={lang.code} className="text-gray-400 text-xs">
                <span className="text-gray-500">{lang.name}:</span> {dateInLanguage}, 
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  
  const headerTemplate = (data) => {
    const currentYear = new Date().getFullYear();
    const severity = currentYear === data.Year? "success" : "info";
    return (
      <div className="flex align-items-center">
        <span>Events in <Badge value={data.Year} severity={severity} /></span>
      </div>
    );
  };

  // Helper function to determine tag severity based on status
  const getTagSeverity = (status) => {
    return status?.toLowerCase() === 'completed' ? 'success' : 
           status?.toLowerCase() === 'upcoming' ? 'info' : 
           status?.toLowerCase() === 'cancelled' ? 'danger' : 
           'warning';
  };

  return (
    <>
      <Head>
        <title>ISAC - Events</title>
        <meta name="description" content="Events and Announcements by Indian Student Association Cottbus" />
      </Head>
      
      <div className="container mx-auto px-4 py-5">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-800">Events & Announcements</h1>
        
        <AnchorLink id="announcements">
        <Card className="mb-5">
            {!announcements.loading && (
              <Accordion>
                <AccordionTab header="Announcements">
                  <DataTable
                    value={announcements.data}
                    stripedRows
                  >
                    <Column field="title" header="Title" className="break-words" style={{ minWidth: '200px' }} />
                    <Column field="description" header="Description" className="break-words" style={{ minWidth: '300px' }} />
                    <Column field="posted_on" header="Posted On" sortable style={{ minWidth: '150px' }} />
                  </DataTable>
                </AccordionTab>
              </Accordion>
            )}
        </Card>
        </AnchorLink>
        
        <AnchorLink id="calendar">
        <Card>
            {!events.loading && (
              <DataTable
                value={events.data}
                footer={footerTemplate}
                rowGroupMode="subheader"
                groupRowsBy="Year"
                rowGroupHeaderTemplate={headerTemplate}
                sortMode="multiple"
                multiSortMeta={[{ field: "Year", order: -1 }, { field: "Date", order: -1 }]}
                expandableRowGroups
                expandedRows={expandedRows}
                onRowToggle={(e) => setExpandedRows(e.data)}
                stripedRows
              >
                <Column field="Year" header="Year" sortable style={{ width: '100px' }} />
                <Column field="Event Name" header="Event Name" className="break-words" style={{ minWidth: '200px' }} />
                <Column field="Status" header="Status" style={{ width: '130px' }} body={(rowData) => (
                  <Tag 
                    value={rowData.Status} 
                    severity={getTagSeverity(rowData.Status)} 
                  />
                )} />
                <Column field="Date" header="Date" sortable style={{ width: '130px' }} />
                <Column field="Location" header="Location" className="break-words" style={{ minWidth: '150px' }} />
                <Column field="Description" header="Description" className="break-words" style={{ minWidth: '250px' }} />
                <Column field="Link" header="Details" style={{ width: '100px' }} body={(rowData) => 
                  rowData.Link ? <a href={rowData.Link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">{rowData.Link}</a> : null
                } />
              </DataTable>
            )}
        </Card>
        </AnchorLink>
      </div>
    </>
  );
}

export default Events;