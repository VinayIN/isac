'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import app from '../_lib/init';

const Galleria = dynamic(() => import('primereact/galleria').then(mod => ({ default: mod.Galleria })), {
  ssr: false,
  loading: () => <Skeleton height="500px" />,
});

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const storage = getStorage(app);
        const imagesRef = ref(storage, 'gallery');
        const imageList = await listAll(imagesRef);

        const images = await Promise.all(
          imageList.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            return {
              itemImageSrc: url,
              thumbnailImageSrc: url,
              alt: itemRef.name,
            };
          })
        );

        setGalleryImages(images);
      } catch (error) {
        console.error('Error loading gallery:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  const itemTemplate = (item) => (
    <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
  );

  const thumbnailTemplate = (item) => (
    <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />
  );

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 mb-4">
            <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
            <div className="w-2 h-8 bg-green-600 rounded-full"></div>
            <div className="w-2 h-8 bg-red-600 rounded-full"></div>
          </div>
          <span className="text-sm font-bold uppercase tracking-widest text-orange-600">
            Photo Gallery
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            ISAC Moments
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Celebrate the vibrant moments from ISAC events, cultural festivities, and community gatherings at BTU Cottbus-Senftenberg.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {loading ? (
          <div className="text-center py-12">
            <i className="pi pi-spin pi-spinner text-4xl text-blue-600 mb-4"></i>
            <p className="text-gray-600 text-lg">Loading gallery...</p>
          </div>
        ) : galleryImages.length > 0 ? (
          <Card className="border border-gray-200 overflow-hidden shadow-lg">
            <Galleria
              value={galleryImages}
              item={itemTemplate}
              thumbnail={thumbnailTemplate}
              showThumbnails
              thumbnailsPosition="bottom"
              autoPlay
              transitionInterval={3000}
              circular
              showIndicators
              responsiveOptions={[
                { breakpoint: '1024px', numVisible: 5 },
                { breakpoint: '768px', numVisible: 3 },
                { breakpoint: '560px', numVisible: 1 },
              ]}
            />
          </Card>
        ) : (
          <Card className="text-center py-16 border border-gray-200">
            <i className="pi pi-images text-5xl text-gray-400 mb-4"></i>
            <p className="text-gray-600 text-lg">No photos available yet</p>
            <p className="text-gray-500 text-sm mt-2">Check back soon for photo updates!</p>
          </Card>
        )}
      </div>

      {/* Info Section */}
      <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Connect With Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4 text-orange-500">
                <i className="pi pi-camera"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Share Your Photos
              </h3>
              <p className="text-gray-600 mb-6">
                If you have photos from ISAC events, reach out to us to share them with our community.
              </p>
              <a href="mailto:ask.isacottbus@gmail.com">
                <Button label="Send Photos" icon="pi pi-send" className="p-button-sm" />
              </a>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4 text-india-saffron">
                <i className="pi pi-heart"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Upcoming Events
              </h3>
              <p className="text-gray-600 mb-6">
                Check our events page to see what's happening next and join us for amazing experiences.
              </p>
              <a href="/events">
                <Button label="View Events" icon="pi pi-calendar" severity="success" className="p-button-sm" />
              </a>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4 text-india-green">
                <i className="pi pi-users"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Join Our Community
              </h3>
              <p className="text-gray-600 mb-6">
                Follow our social media to stay updated with all ISAC activities and celebrations.
              </p>
              <a href="https://www.instagram.com/isac_cottbus/" target="_blank" rel="noopener noreferrer">
                <Button label="Follow Us" icon="pi pi-instagram" severity="danger" className="p-button-sm" />
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
