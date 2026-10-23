import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import type { NavLink } from '../types/content';

type SiteHeaderProps = {
  links: NavLink[];
  activeHref: string;
  monogram: string;
  brandName: string;
};

export function SiteHeader({ links, activeHref, monogram, brandName }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors ${
      scrolled || open ? 'border-b border-border bg-background/90 backdrop-blur' : 'border-b border-transparent bg-background'}`
      }>
      
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={`${brandName} — home`}>
          
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-sm font-semibold text-text-on-accent">
            {monogram}
          </span>
          <span className="hidden font-heading text-lg font-semibold text-text-primary sm:inline">{brandName}</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => {
              const active = link.href === activeHref;
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    active ? 'bg-primary-tint text-primary-dark' : 'text-text-secondary hover:bg-surface-alt hover:text-text-primary'}`
                    }>
                    
                    {link.label}
                  </Link>
                </li>);

            })}
          </ul>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-text-primary transition-colors hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}>
          
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open &&
        <>
            <motion.div
            key="backdrop"
            className="fixed inset-x-0 bottom-0 top-16 z-30 bg-[rgba(38,43,39,0.25)] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            aria-hidden="true" />
          
            <motion.nav
            key="drawer"
            id="mobile-menu"
            aria-label="Mobile"
            className="absolute inset-x-0 top-16 z-40 border-b border-border bg-background px-4 pb-6 pt-2 shadow-md md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}>
            
              <ul className="flex flex-col gap-1">
                {links.map((link) => {
                const active = link.href === activeHref;
                return (
                  <li key={link.href}>
                      <Link
                      to={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={`block rounded-[12px] px-4 py-3 text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      active ? 'bg-primary-tint text-primary-dark' : 'text-text-primary hover:bg-surface-alt'}`
                      }>
                      
                        {link.label}
                      </Link>
                    </li>);

              })}
              </ul>
            </motion.nav>
          </>
        }
      </AnimatePresence>
    </header>);

}