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
          title: 'Card 1',
          images: [
            'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
            'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
            'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg',
            // Add more images for Card 1
          ],
        },
        {
          title: 'Card 2',
          images: [
            'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
            'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
            'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg',
            // Add more images for Card 2
          ]
        },
        {
            title: 'Card 2',
            images: [
              'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
              'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
              'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg',
              // Add more images for Card 2
            ]
          },
          {
            title: 'Card 2',
            images: [
              'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
              'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
              'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg',
              // Add more images for Card 2
            ]
          },
          {
            title: 'Card 2',
            images: [
              'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
              'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
              'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg',
              // Add more images for Card 2
            ]
          },
          {
            title: 'Card 2',
            images: [
              'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
              'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
              'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg',
              // Add more images for Card 2
            ]
          }
        // Add more cards with their images
      ];
    

  const images = [
    {
        previewImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
    },
    {
        previewImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2'
    },
    {
        previewImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3'
    },
    {
        previewImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4s.jpg',
        alt: 'Description for Image 4',
        title: 'Title 4'
    },
    {
        previewImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5s.jpg',
        alt: 'Description for Image 5',
        title: 'Title 5'
    },
    {
        previewImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6s.jpg',
        alt: 'Description for Image 6',
        title: 'Title 6'
    },
    {
        previewImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7s.jpg',
        alt: 'Description for Image 7',
        title: 'Title 7'
    },
    {
        previewImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria8.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria8s.jpg',
        alt: 'Description for Image 8',
        title: 'Title 8'
    },
    {
        previewImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria9.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria9s.jpg',
        alt: 'Description for Image 9',
        title: 'Title 9'
    },
    {
        previewImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria10s.jpg',
        alt: 'Description for Image 10',
        title: 'Title 10'
    },
    {
        previewImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria11.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria11s.jpg',
        alt: 'Description for Image 11',
        title: 'Title 11'
    },
    {
        previewImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria12s.jpg',
        alt: 'Description for Image 12',
        title: 'Title 12'
    },
    {
        previewImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria13.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria13s.jpg',
        alt: 'Description for Image 13',
        title: 'Title 13'
    },
    {
        previewImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria14.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria14s.jpg',
        alt: 'Description for Image 14',
        title: 'Title 14'
    },
    {
        previewImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria15.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria15s.jpg',
        alt: 'Description for Image 15',
        title: 'Title 15'
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
    return <img src={item.previewImageSrc} alt={item.alt} style={{ width: '100%', height: 'calc(100vh - 100px)' }} />;
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

    <><Galleria value={images} circular autoPlay transitionInterval={1000} responsiveOptions={responsiveOptions} style={{ width: '100%', height: 'calc(100vh - 100px)' }} showThumbnails={false} showIndicators
          showIndicatorsOnItem={inside} indicatorsPosition={position} item={itemTemplate} />
          <div style={{ paddingTop: '6%' }}>

              <div className="gallery_card grid-container">{cards}

                  <Dialog
                      visible={visible}
                      onHide={hideImage}
                      style={{ width: '70%' }}
                                        >
                      <Carousel
                          value={selectedImages}
                          itemTemplate={(imageSrc) => (
                              <img src={imageSrc} alt={`Image ${currentImageIndex + 1}`} style={{ width: '100%' }} />
                          )}
                          numVisible={1}
                          numScroll={1}
                          responsiveOptions={[
                              {
                                  breakpoint: '1024px',
                                  numVisible: 1,
                                  numScroll: 1,
                              },
                          ]}
                          circular
                          autoPlay
                          stopAutoPlayOnSlide={selectedImages.length - 1}
                          onTransitionEnd={(e) => setCurrentImageIndex(e.index)} />
                  </Dialog>

              </div>
              </div>
          </>
        
  );
};

export default MyGallery;
