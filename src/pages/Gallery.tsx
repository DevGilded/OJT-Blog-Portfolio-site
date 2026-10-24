// Gallery.tsx
import React, { useCallback, useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { Tabs } from "../components/Tabs";
import { PhotoGalleryGrid } from "../components/PhotoGalleryGrid";
import { Lightbox } from "../components/Lightbox";
import { galleryCategories, galleryPhotos } from "../data/gallery";
import { weeklyLogs } from "../data/weeklyLogs";

// Extract documentation photos from the weekly logs
const docPhotos = weeklyLogs.flatMap((log) => log.photos || []);

// Combine explicit gallery photos with the weekly log documentation photos
const allPhotos = [...galleryPhotos, ...docPhotos];

// Dynamically generate categories to ensure any new categories from docPhotos are included
const combinedCategories = Array.from(
  new Set([
    ...galleryCategories,
    ...docPhotos.map((p) => p.category).filter((c): c is string => Boolean(c)),
  ]),
);

// Ensure 'All' is the first category option
const categories = combinedCategories.includes("All")
  ? combinedCategories
  : ["All", ...combinedCategories];

export function Gallery() {
  const [category, setCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const photos =
    category === "All"
      ? allPhotos
      : allPhotos.filter((p) => p.category === category);
  const handleClose = useCallback(() => setActiveIndex(null), []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <SectionHeader
        as="h1"
        size="lg"
        eyebrow="Gallery"
        title="Photo documentation"
        subtitle="Moments from the office, the team, and the milestones in between. Click any photo to view it larger."
      />

      <Tabs
        className="mt-10"
        variant="pills"
        ariaLabel="Photo categories"
        value={category}
        onValueChange={(value) => {
          setCategory(value);
          setActiveIndex(null);
        }}
        items={categories.map((c) => ({
          value: c,
          label: c,
          badge:
            c === "All"
              ? allPhotos.length
              : allPhotos.filter((p) => p.category === c).length,
        }))}
      />

      <PhotoGalleryGrid
        className="mt-8"
        photos={photos}
        layout="masonry"
        columns={3}
        emptyTitle="No photos here yet"
        emptyDescription="Try another category."
        onPhotoClick={(_, index) => setActiveIndex(index)}
      />

      <Lightbox
        photos={photos}
        index={activeIndex}
        onClose={handleClose}
        onChange={setActiveIndex}
      />
    </div>
  );
}
