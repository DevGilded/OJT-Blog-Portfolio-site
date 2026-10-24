import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { SiteHeader } from "./SiteHeader";
import { Footer } from "./Footer";
import { navLinks } from "../data/navigation";
import { profile } from "../data/profile";

export function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  const activeHref =
    navLinks.find((link) =>
      link.href === "/"
        ? location.pathname === "/"
        : location.pathname.startsWith(link.href),
    )?.href ?? "";

  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-body text-text-primary">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:shadow-md"
      >
        Skip to content
      </a>
      <SiteHeader
        links={navLinks}
        activeHref={activeHref}
        monogram={profile.monogram}
        brandName={profile.name}
      />

      <main id="main" className="flex-1">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer
        name={profile.name}
        tagline={`${profile.role} · OJT Portfolio 2026`}
        contact={{
          email: profile.email,
          phone: profile.phone,
          location: profile.location,
        }}
        socials={[{ platform: "github", href: profile.github }]}
        dedication={profile.dedication}
        year={2026}
      />
    </div>
  );
}
