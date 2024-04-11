import React, { useState, useEffect, useMemo } from 'react';
import { DataView } from 'primereact/dataview';
import { Dialog } from 'primereact/dialog';
import { Galleria } from 'primereact/galleria';
import { useFirestore } from '../hooks/firestore';
import { Card } from 'primereact/card';

const MyGallery = () => {
  const galleryData = useFirestore('gallery');
  const [galleryState, setGalleryState] = useState({
    years: [],
    selectedYear: null,
    selectedData: null,
    displayDialog: false
  });

  // Memoize groupedData
  const groupedData = useMemo(() => {
    if (!galleryData.data) return {};
    return galleryData.data.reduce((acc, item) => {
      const year = item.year;
      acc[year] = acc[year] || [];
      acc[year].push(item);
      return acc;
    }, {});
  }, [galleryData.data]);

  useEffect(() => {
    const uniqueYears = Object.keys(groupedData).sort().reverse();
    setGalleryState(prevState => ({
      ...prevState,
      years: uniqueYears
    }));
  }, [groupedData]);

  const handleYearClick = (year) => {
    setGalleryState(prevState => ({
      ...prevState,
      selectedYear: year,
      selectedData: groupedData[year],
      displayDialog: true
    }));
  };

  const yearItemTemplate = (year) => (
    <div className="year-card clickable m-4" key={year} onClick={() => handleYearClick(year)}>
        {year}
    </div>
  );

  return (
    <div className="m-4">
        <h3>Year-Wise pictures from the events are categorized here: </h3>
        <DataView
            value={galleryState.years}
            layout="list"
            itemTemplate={yearItemTemplate}
        />
      <Dialog header={galleryState.selectedYear} visible={galleryState.displayDialog} onHide={() => setGalleryState(prevState => ({ ...prevState, displayDialog: false }))} style={{ width: '65vw' }} modal>
        <Galleria value={galleryState.selectedData}
          item={(item) => (
            <div style={{ width: '100%', height: 'auto', position: 'relative' }}>
              <Card title={item.name}>
                All the images are shared here.
                <a href={item.link1} target="_blank" rel="noreferrer">
                (Link)
                </a>
              </Card>
            </div>
          )}
          circular
          showIndicators
          showItemNavigators
          showThumbnails={false}
        />
      </Dialog>
    </div>
  );
};

export default MyGallery;