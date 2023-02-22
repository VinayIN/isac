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
    return <Image src={item.itemImageSrc} alt={item.alt} width="720" height="520"/>
  }

  const thumbnailTemplate = (item) => {
    return <Image src={item.thumbnailImageSrc} alt={item.alt} width="60" height="50" />
  }

  return (
  <div className='flex flex-column md:flex-row lg:flex-row justify-content-center'>
    <Card title="Kuch lamhe">
    <p className="m-0">
      <Galleria 
        value={images}
        responsiveOptions={responsiveOptions}
        numVisible={7}
        circular style={{ maxWidth: '720px'}}
        item={itemTemplate}
        thumbnail={thumbnailTemplate} />
    </p>
    </Card>
  </div>
  )
};

export default Gallery;