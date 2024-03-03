<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { Card } from 'primereact/card';
import Image from 'next/image';


const GalleryData = {
  getData() {
    return [
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg',
            alt: 'Description for Image 2',
            title: 'Title 2'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4s.jpg',
            alt: 'Description for Image 4',
            title: 'Title 4'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5s.jpg',
            alt: 'Description for Image 5',
            title: 'Title 5'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6s.jpg',
            alt: 'Description for Image 6',
            title: 'Title 6'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7s.jpg',
            alt: 'Description for Image 7',
            title: 'Title 7'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria8.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria8s.jpg',
            alt: 'Description for Image 8',
            title: 'Title 8'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria9.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria9s.jpg',
            alt: 'Description for Image 9',
            title: 'Title 9'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria10s.jpg',
            alt: 'Description for Image 10',
            title: 'Title 10'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria11.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria11s.jpg',
            alt: 'Description for Image 11',
            title: 'Title 11'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria12s.jpg',
            alt: 'Description for Image 12',
            title: 'Title 12'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria13.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria13s.jpg',
            alt: 'Description for Image 13',
            title: 'Title 13'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria14.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria14s.jpg',
            alt: 'Description for Image 14',
            title: 'Title 14'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria15.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria15s.jpg',
            alt: 'Description for Image 15',
            title: 'Title 15'
        }
    ];
  },

  getImages() {
    return Promise.resolve(this.getData());
  }
};



function Gallery() {
  const [images, setImages] = useState(null);

  const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '960px',
        numVisible: 4
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
  ];

  useEffect(() => {GalleryData.getImages().then(data => setImages(data));}, []);

  const itemTemplate = (item) => {
    return <Image 
    src={item.itemImageSrc}
    alt={item.alt}
    width="820" height="720"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
  }

  const thumbnailTemplate = (item) => {
    return <Image src={item.thumbnailImageSrc} alt={item.alt} width="60" height="50" />
  }

  return (
  <div className='flex flex-column md:flex-row lg:flex-row justify-content-center py-6'>
    <Card title="Kuch lamhe">
    <p className="m-0">
      <Galleria 
        value={images}
        responsiveOptions={responsiveOptions}
        numVisible={7}
        circular style={{ maxWidth: '820px'}}
        item={itemTemplate}
        thumbnail={thumbnailTemplate} />
    </p>
    </Card>
  </div>
  )
};

export default Gallery;
=======
import React, { useState, useEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Dialog } from 'primereact/dialog';
import { Galleria } from 'primereact/galleria';
import { Dropdown } from 'primereact/dropdown';
import Image from 'next/image';


const MyGallery = () => {
  const imagesData = [
    {
      title: 'Holi 2023',
      year: '2023',
      images: [
        '/images/Holi/1.jpg',
        '/images/Holi/2.jpg'
        // Add more images for Card 1
      ],
    },
    {
      title: 'Independent Day 2023',
      year: '2023',
      images: [
        '/images/independent/1.JPG',
        '/images/independent/2.JPG',
        '/images/independent/3.JPG',
        '/images/independent/4.JPG',
        '/images/independent/5.JPG',
        '/images/independent/6.JPG',
        '/images/independent/7.JPG',
        '/images/independent/8.JPG',
        '/images/independent/9.JPG',
        '/images/independent/10.JPG',

        // Add more images for Card 2
      ]
    },
    {
        title: 'Navratri 2023',
        year: '2023',
        images: [
          '/images/Navratri/1.JPG',
          '/images/Navratri/2.JPG',
          '/images/Navratri/3.JPG',
          '/images/Navratri/4.JPG',
          '/images/Navratri/5.JPG',
          '/images/Navratri/6.JPG',
          '/images/Navratri/7.JPG',
          '/images/Navratri/8.JPG',
          '/images/Navratri/9.JPG',
          '/images/Navratri/10.JPG',
          '/images/Navratri/11.JPG',
          '/images/Navratri/12.JPG',
          '/images/Navratri/13.JPG',
          '/images/Navratri/14.jpg',
          '/images/Navratri/16.jpg',
          // Add more images for Card 2
        ]
    },
    {
      title: 'Senftenberg Beach',
      year: '2022',
      images: [
        '/images/Senftenberg Beach/1.jpg',
        '/images/Senftenberg Beach/2.jpeg',
        '/images/Senftenberg Beach/3.jpeg',
        '/images/Senftenberg Beach/4.jpg',
        '/images/Senftenberg Beach/5.JPG',
        '/images/Senftenberg Beach/6.JPG',
        '/images/Senftenberg Beach/7.JPG',
        '/images/Senftenberg Beach/8.JPG',
        '/images/Senftenberg Beach/9.JPG',
        '/images/Senftenberg Beach/10.JPG',
        '/images/Senftenberg Beach/11.JPG',
        '/images/Senftenberg Beach/12.JPG',
        // Add more images for Card 2
      ]
    }
    // Add more cards with their images
  ];
  
  const [layout, setLayout] = useState('list');
  const [selectedImageData, setSelectedImageData] = useState(null);
  const [displayDialog, setDisplayDialog] = useState(false);
  const [selectedYear, setSelectedYear] = useState('All');

  useEffect(() => {
    const years = imagesData.map(item => item.year);
    const uniqueYears = ['All', ...new Set(years)].sort().reverse();
    setSelectedYear(uniqueYears.includes(selectedYear) ? selectedYear : uniqueYears[0]);
  }, [imagesData, selectedYear]);

  const filteredData = selectedYear === 'All' ? imagesData : imagesData.filter(item => item.year === selectedYear);

  const getRandomThumbnail = (images) => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const gridLayout = (data) => (
    <div className="col-12 sm:col-6 lg:col-3 p-2 m-auto shadow-2" onClick={() => {
      setSelectedImageData(data);
      setDisplayDialog(true);
    }}>
      <div className="card mb-1" style={{ textAlign: 'center' }}>
        <img src={getRandomThumbnail(data.images)} alt={data.title} style={{ width: 'auto', height: '180px', objectFit: 'cover'}} />
        <h4 style={{ textAlign: 'center' }}>{data.title}</h4>
      </div>
    </div>
  );

  const listLayout = (data) => (
    <div className="col-12 m-auto shadow-2" onClick={() => {
      setSelectedImageData(data);
      setDisplayDialog(true);
    }}>
      <div className="card" style={{ display: 'flex', padding: '1rem' }}>
        <img src={getRandomThumbnail(data.images)} alt={data.title} style={{ width: '80px', height: '120px', objectFit: 'cover' }} />
        <h4>{data.title}</h4>
      </div>
    </div>
  );

  const itemTemplate = (data, layoutMode) => {
    return layoutMode === 'list' ? listLayout(data) : gridLayout(data);
  };

  const renderGalleriaDialog = () => (
    <Dialog header={selectedImageData?.title} visible={displayDialog} onHide={() => setDisplayDialog(false)} style={{ width: '65vw' }} modal>
      <Galleria value={selectedImageData?.images}
                item={(item) => (
                  <div style={{ width: '100%', height: 'auto', position: 'relative' }}>
                    <Image src={item} alt={selectedImageData?.title} width={900} height={800} quality={70} style={{ width: '100%', height: 'auto' }}/>
                    <a href={item} download={`${selectedImageData?.title}.jpg`}>
                      <button className="p-button p-button-primary p-button-text">Download</button>
                    </a>
                  </div>
                )}
                circular showIndicators showItemNavigators showThumbnails={false}>
      </Galleria>
    </Dialog>
  );  

  const renderDropdown = () => {
    const years = ['All', ...new Set(imagesData.map(item => item.year))].sort();
    return (
      <Dropdown 
        value={selectedYear} 
        options={years.map(year => ({label: year, value: year}))} 
        onChange={(e) => setSelectedYear(e.value)} 
        style={{marginRight: '8px', minWidth: '120px'}}
        placeholder="Select a Year"
      />
    );
  };

  return (
    <div className='mx-4'>
      <DataView value={filteredData} layout={layout} itemTemplate={itemTemplate}
      header= {
      <div className="flex m-auto">
        {renderDropdown()}
        <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
      </div>}
       paginator rows={5}/>
      {selectedImageData && renderGalleriaDialog()}
    </div>
  );
};

export default MyGallery;
>>>>>>> new_ui
