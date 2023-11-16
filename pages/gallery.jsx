import { useState, useEffect } from 'react';
import React from 'react';
import { Galleria } from 'primereact/galleria';
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';
import { Dialog } from 'primereact/dialog';
import Image from 'next/image';

const MyGallery = () => {

    const [inside, setInside] = useState(false);
    const [position, setPosition] = useState('bottom');
    const [visible, setVisible] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imagesData = [
        {
          title: 'Holi 2023',
          images: [
            '/images/Holi/1.jpg',
            '/images/Holi/2.jpg'
            // Add more images for Card 1
          ],
        },
        {
          title: 'Independent Day 2023',
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
    

  const images = [
    {
        previewImageSrc: '/images/Senftenberg Beach/1.jpg',
        thumbnailImageSrc: '/images/Senftenberg Beach/1.jpg',
        alt: 'Senftenberg Beach',
        title: 'Senftenberg Beach'
    },
    {
        previewImageSrc: '/images/Navratri/1.JPG',
        thumbnailImageSrc: '/images/Navratri/1.JPG',
        alt: 'Navratri',
        title: 'Navratri'
    },
    {
        previewImageSrc: '/images/independent/1.JPG',
        thumbnailImageSrc: '/images/independent/1.JPG',
        alt: 'independent',
        title: 'independent'
    },
    {
        previewImageSrc: '/images/Holi/1.jpg',
        thumbnailImageSrc: '/images/Holi/1.jpg',
        alt: 'Holi',
        title: 'Holi'
    },
    {
        previewImageSrc: '/images/independent/2.JPG',
        thumbnailImageSrc: '/images/independent/2.JPG',
        alt: 'independent',
        title: 'independent'
    },
    {
      previewImageSrc: '/images/Navratri/3.JPG',
      thumbnailImageSrc: '/images/Navratri/3.JPG',
      alt: 'Navratri',
      title: 'Navratri'
    },
    {
      previewImageSrc: '/images/Holi/2.jpg',
      thumbnailImageSrc: '/images/Holi/2.jpg',
      alt: 'Holi',
      title: 'Holi'
    },
    {
      previewImageSrc: '/images/Navratri/10.JPG',
      thumbnailImageSrc: '/images/Navratri/10.JPG',
      alt: 'Navratri',
      title: 'Navratri'
    },
    {
      previewImageSrc: '/images/Senftenberg Beach/4.jpg',
      thumbnailImageSrc: '/images/Senftenberg Beach/4.jpg',
      alt: 'Senftenberg Beach',
      title: 'Senftenberg Beach'
    },
    {
      previewImageSrc: '/images/Holi/2.jpg',
      thumbnailImageSrc: '/images/Holi/2.jpg',
      alt: 'Holi',
      title: 'Holi'
    },
    {
      previewImageSrc: '/images/Senftenberg Beach/10.JPG',
      thumbnailImageSrc: '/images/Senftenberg Beach/10.JPG',
      alt: 'Senftenberg Beach',
      title: 'Senftenberg Beach'
    },
    {
      previewImageSrc: '/images/Navratri/16.jpg',
      thumbnailImageSrc: '/images/Navratri/16.jpg',
      alt: 'Navratri',
      title: 'Navratri'
    },
    {
      previewImageSrc: '/images/Navratri/7.JPG',
      thumbnailImageSrc: '/images/Navratri/7.JPG',
      alt: 'Navratri',
      title: 'Navratri'
    },
    {
      previewImageSrc: '/images/Navratri/4.JPG',
      thumbnailImageSrc: '/images/Navratri/4.JPG',
      alt: 'Navratri',
      title: 'Navratri'
    },
    {
      previewImageSrc: '/images/Senftenberg Beach/8.JPG',
      thumbnailImageSrc: '/images/Senftenberg Beach/8.JPG',
      alt: 'Senftenberg Beach',
      title: 'Senftenberg Beach'
    }
    
    // ... more images
  ];

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  const itemTemplate = (item) => {
    return <img src={item.previewImageSrc} alt={item.alt} style={{ width: '80%', height: 'calc(100vh - 100px)' }} />;
  };

  const showImagesInCarousel = (images) => {
    setSelectedImages(images);
    setCurrentImageIndex(0);
    setVisible(true);
  };

  const hideImage = () => {
    setVisible(false);
  };

  const cards = imagesData.map((card, index) => (
    <Card
      key={index}
      title={card.title}
      style={{ cursor: 'pointer' }}
      onClick={() => showImagesInCarousel(card.images)}
      className="custom-card"
    >
      <img src={card.images[0]} alt={card.title} style={{ width: '100%' }} />
    </Card>
  ));

  return (

    <>
    <Galleria value={images} circular autoPlay transitionInterval={1000} responsiveOptions={responsiveOptions} style={{ width: '100%', height: 'calc(100vh - 100px)' }} showThumbnails={false} showIndicators
          showIndicatorsOnItem={inside} indicatorsPosition={position} item={itemTemplate} />
          <div style={{ paddingTop: '6%' }}>

              <div className="gallery_card grid-container">{cards}

              <Dialog
  visible={visible}
  onHide={hideImage}
  style={{ width: '70%', maxHeight: '100vh' }} // Set a maximum height
  className="dialog-without-scrollbar"
>
  <Galleria
    value={selectedImages}
    circular
    autoPlay
    transitionInterval={1500}
    responsiveOptions={responsiveOptions}
    style={{ width: '100%' }}
    showThumbnails={false}
    showIndicators
    showIndicatorsOnItem={inside}
    indicatorsPosition={position}
    item={(imageSrc) => (
      <img src={imageSrc} alt={`Image ${currentImageIndex + 1}`} style={{ width: '80%', height: '70vh' , objectFit: 'contain'}} />
    )}
  />
</Dialog>

              </div>
              </div>
          </>
        
  );
};

export default MyGallery;
