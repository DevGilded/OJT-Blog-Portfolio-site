import React, { useCallback, useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Tabs } from '../components/Tabs';
import { PhotoGalleryGrid } from '../components/PhotoGalleryGrid';
import { Lightbox } from '../components/Lightbox';
import { galleryCategories, galleryPhotos } from '../data/gallery';

export function Gallery() {
  const [category, setCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const photos = category === 'All' ? galleryPhotos : galleryPhotos.filter((p) => p.category === category);
  const handleClose = useCallback(() => setActiveIndex(null), []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <SectionHeader
        as="h1"
        size="lg"
        eyebrow="Gallery"
        title="Photo documentation"
        subtitle="Moments from the office, the team, and the milestones in between. Click any photo to view it larger." />
      

      <Tabs
        className="mt-10"
        variant="pills"
        ariaLabel="Photo categories"
        value={category}
        onValueChange={(value) => {
          setCategory(value);
          setActiveIndex(null);
        }}
        items={galleryCategories.map((c) => ({
          value: c,
          label: c,
          badge: c === 'All' ? galleryPhotos.length : galleryPhotos.filter((p) => p.category === c).length
        }))} />
      

      <PhotoGalleryGrid
        className="mt-8"
        photos={photos}
        layout="masonry"
        columns={3}
        emptyTitle="No photos here yet"
        emptyDescription="Try another category."
        onPhotoClick={(_, index) => setActiveIndex(index)} />
      

      <Lightbox photos={photos} index={activeIndex} onClose={handleClose} onChange={setActiveIndex} />
    </div>);

}