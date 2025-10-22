'use client';

import React, { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';
import useFirestore from '../_hooks/useFirestore';

const Galleria = dynamic(() => import('primereact/galleria').then(mod => ({ default: mod.Galleria })), {
  ssr: false,
  loading: () => <Skeleton height="500px" />,
});

export default function GalleryPage() {
  const galleryData = useFirestore('gallery');
  const [galleryState, setGalleryState] = useState({
    years: [],
    selectedYear: null,
    selectedData: null,
    displayDialog: false,
    activeImageIndex: 0,
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

  // Get sorted years
  const sortedYears = useMemo(() => {
    return Object.keys(groupedData).sort((a, b) => b - a);
  }, [groupedData]);

  useEffect(() => {
    setGalleryState((prevState) => ({
      ...prevState,
      years: sortedYears,
    }));
  }, [sortedYears]);

  const handleYearClick = (year) => {
    setGalleryState((prevState) => ({
      ...prevState,
      selectedYear: year,
      selectedData: groupedData[year],
      displayDialog: true,
      activeImageIndex: 0,
    }));
  };

  const itemTemplate = (item) => (
    <div className="w-full bg-slate-900 flex items-center justify-center p-4">
      <Image
        src={item.link1}
        alt={item.name}
        width={600}
        height={400}
        className="max-h-96 max-w-full object-contain rounded-lg shadow-lg"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/600x400?text=Image';
        }}
      />
    </div>
  );

  const captionTemplate = (item) => (
    <div className="text-white text-center py-3">
      <p className="font-semibold text-lg">{item.name}</p>
      <p className="text-sm text-gray-300">Click arrows to navigate</p>
    </div>
  );

  const yearCardTemplate = (year) => {
    const eventCount = groupedData[year].length;

    return (
      <div
        key={year}
        onClick={() => handleYearClick(year)}
        className="cursor-pointer"
      >
        <Card className="h-full hover:shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:scale-105">
          <div className="relative h-40 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">{year}</div>
              <div className="text-gray-300 text-sm font-medium">
                <i className="pi pi-images mr-1"></i>
                {eventCount} {eventCount === 1 ? 'album' : 'albums'}
              </div>
            </div>
          </div>

          <div className="p-6 bg-white">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {year} Albums
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Browse {eventCount} {eventCount === 1 ? 'album' : 'albums'} from {year}
            </p>
            <Button
              label="View Gallery"
              icon="pi pi-images"
              className="w-full p-button-sm"
              severity="success"
            />
          </div>
        </Card>
      </div>
    );
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 mb-4">
            <div className="w-2 h-8 bg-orange-400 rounded-full"></div>
            <div className="w-2 h-8 bg-green-500 rounded-full"></div>
            <div className="w-2 h-8 bg-red-500 rounded-full"></div>
          </div>
          <span className="text-sm font-bold uppercase tracking-widest text-orange-400 block mb-2">
            Photo Gallery
          </span>
          <h1 className="text-4xl font-bold text-white mt-2 mb-4">
            ISAC Memories
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Browse our Google Photos albums to celebrate vibrant moments from ISAC events, cultural festivities, and community gatherings at BTU Cottbus-Senftenberg.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {galleryData.loading ? (
          <div className="text-center py-16">
            <i className="pi pi-spin pi-spinner text-5xl text-slate-900 mb-4 block"></i>
            <p className="text-gray-600 text-lg">Loading gallery...</p>
          </div>
        ) : galleryData.data && galleryData.data.length > 0 ? (
          <>
            {/* Filter info */}
            <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Browse Albums by Year</h2>
                <p className="text-gray-600 text-sm mt-2">Click any year to view album memories</p>
              </div>
              <div className="text-right">
                <div className="inline-block px-4 py-2 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-orange-900 font-semibold">
                    {galleryData.data.length} <span className="text-sm font-normal">Total Albums</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Year Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {galleryState.years.map((year) => yearCardTemplate(year))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <i className="pi pi-inbox text-5xl text-gray-400 mb-4 block"></i>
            <p className="text-gray-600 text-lg">No gallery data available</p>
            <p className="text-gray-500 text-sm mt-2">
              Check back soon for photos from upcoming events!
            </p>
          </div>
        )}
      </div>

      {/* Gallery Modal Dialog */}
      <Dialog
        header={
          <div className="flex items-center gap-3">
            <i className="pi pi-images text-slate-900 text-xl"></i>
            <span>
              {galleryState.selectedYear} - {galleryState.selectedData?.length}{' '}
              {galleryState.selectedData?.length === 1 ? 'photo' : 'photos'}
            </span>
          </div>
        }
        visible={galleryState.displayDialog}
        onHide={() =>
          setGalleryState((prevState) => ({
            ...prevState,
            displayDialog: false,
          }))
        }
        modal
        maximizable
        style={{ width: '90vw', maxWidth: '1000px' }}
        className="p-dialog-gallery"
      >
        {galleryState.selectedData && galleryState.selectedData.length > 0 ? (
          <div className="space-y-4">
            <Galleria
              value={galleryState.selectedData}
              item={itemTemplate}
              caption={captionTemplate}
              circular
              showIndicators
              showItemNavigators
              showThumbnails={galleryState.selectedData.length > 1}
              thumbnailsPosition="bottom"
              numVisible={4}
              responsiveOptions={[
                {
                  breakpoint: '1024px',
                  numVisible: 3,
                },
                {
                  breakpoint: '768px',
                  numVisible: 2,
                },
                {
                  breakpoint: '560px',
                  numVisible: 1,
                },
              ]}
            />

            {/* Album List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200 mt-6">
              {galleryState.selectedData.map((item, index) => (
                <Card
                  key={index}
                  className="p-3 cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-300"
                  onClick={() => {
                    const galleriaElement = document.querySelector('.p-galleria-viewport');

                    if (galleriaElement) {
                      galleriaElement.scrollLeft = index * galleriaElement.offsetWidth;
                    }
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden flex items-center justify-center">
                      <Image
                        src={item.link1}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/64x64?text=Photo';
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Photo {index + 1} of {galleryState.selectedData.length}
                      </p>
                    </div>
                    <a
                      href={item.link1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-orange-600 hover:text-orange-700"
                      title="Open in new tab"
                    >
                      <i className="pi pi-external-link"></i>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : null}
      </Dialog>

      {/* Bottom CTA */}
      {galleryData.data && galleryData.data.length > 0 && (
        <div className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 md:p-12 text-center border border-gray-200">
              <div className="flex gap-2 justify-center mb-4">
                <div className="w-2 h-8 bg-orange-400 rounded-full"></div>
                <div className="w-2 h-8 bg-green-500 rounded-full"></div>
                <div className="w-2 h-8 bg-red-500 rounded-full"></div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Share Your Moments
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Have amazing photos from ISAC events? Share them to be featured in our Google Photos albums and inspire our community!
              </p>
              <a
                href="https://chat.whatsapp.com/EMtoCcEhDWmHgwGThM3FDK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  label="Join Our Community"
                  icon="pi pi-whatsapp"
                  severity="success"
                  className="p-button-lg"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
