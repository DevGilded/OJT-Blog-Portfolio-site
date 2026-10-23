import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import type { Photo } from '../types/content';

type LightboxProps = {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({ photos, index, onClose, onChange }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null && photos[index] !== undefined;
  const photo = isOpen ? photos[index] : null;

  useEffect(() => {
    if (!isOpen || index === null) return;
    closeRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChange((index + 1) % photos.length);
      if (e.key === 'ArrowLeft') onChange((index - 1 + photos.length) % photos.length);
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, index, photos.length, onClose, onChange]);

  return (
    <AnimatePresence>
      {photo && index !== null &&
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={photo.alt}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(38,43,39,0.92)] p-4 sm:p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}>
        
          <button
          ref={closeRef}
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light">
          
            <XIcon className="h-5 w-5" />
          </button>
          <button
          type="button"
          aria-label="Previous photo"
          onClick={(e) => {
            e.stopPropagation();
            onChange((index - 1 + photos.length) % photos.length);
          }}
          className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light sm:flex">
          
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
          type="button"
          aria-label="Next photo"
          onClick={(e) => {
            e.stopPropagation();
            onChange((index + 1) % photos.length);
          }}
          className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light sm:flex">
          
            <ChevronRightIcon className="h-5 w-5" />
          </button>

          <motion.figure
          key={photo.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="flex max-h-full max-w-5xl flex-col items-center"
          onClick={(e) => e.stopPropagation()}>
          
            <img src={photo.src} alt={photo.alt} className="max-h-[75vh] w-auto rounded-[12px] object-contain" />
            <figcaption className="mt-4 text-center text-white">
              <p className="text-sm">{photo.caption}</p>
              <p className="mt-1 font-mono text-xs text-white/60">
                {photo.date} · {index + 1} / {photos.length}
              </p>
            </figcaption>
          </motion.figure>
        </motion.div>
      }
    </AnimatePresence>);

}