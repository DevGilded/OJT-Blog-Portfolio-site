// src/pages/gallery.tsx
import React, { useCallback, useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { Tabs } from "../components/Tabs";
import { PhotoGalleryGrid } from "../components/PhotoGalleryGrid";
import { Lightbox } from "../components/Lightbox";
import { galleryCategories, galleryPhotos } from "../data/gallery";
import { weeklyLogs } from "../data/weeklyLogs";

// Extract documentation photos from the weekly logs
const docPhotos = weeklyLogs.flatMap((log) =>
  (log.photos || [])
    .filter((photo) => photo.src !== "") // Remove empty placeholder images
    .map((photo) => ({
      ...photo,
      // Create globally unique IDs to fix React key rendering bugs when filtering
      id: `${log.slug}-${photo.id}`,
    })),
);

// Combine explicit gallery photos with the weekly log documentation photos
// and sort them chronologically by date (newest first)
const allPhotos = [...galleryPhotos, ...docPhotos].sort((a, b) => {
  const dateA = a.date ? new Date(a.date).getTime() : 0;
  const dateB = b.date ? new Date(b.date).getTime() : 0;
  return dateB - dateA;
});

// Extract any new categories found in the logs that aren't in your predefined list
const dynamicCategories = Array.from(
  new Set(
    docPhotos.map((p) => p.category).filter((c): c is string => Boolean(c)),
  ),
)
  .filter((c) => !galleryCategories.includes(c))
  .sort(); // Sort dynamic ones alphabetically

// Combine your predefined categories (which already includes 'All') with the new sorted dynamic ones
const categories = [...galleryCategories, ...dynamicCategories];

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
