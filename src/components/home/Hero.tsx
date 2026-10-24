import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon, AwardIcon, BookOpenIcon } from "lucide-react";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { profile, stats } from "../../data/profile";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section
      aria-labelledby="hero-title"
      className="border-b border-border bg-surface-alt"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Badge variant="primary" dot>
            OJT Portfolio · Summer 2026
          </Badge>
          <h1
            id="hero-title"
            className="mt-6 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
          >
            Nine weeks of learning to build software{" "}
            <em className="font-medium italic text-primary-dark">
              nemsu personnel actually use.
            </em>
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-text-secondary">
            {profile.intro}
          </p>
          <dl className="mt-8 grid max-w-lg grid-cols-1 gap-3 font-mono text-sm sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-wider text-text-muted">
                Role
              </dt>
              <dd className="mt-1 text-text-primary">{profile.role}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-text-muted">
                Dates
              </dt>
              <dd className="mt-1 text-text-primary">{profile.dateRange}</dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              size="lg"
              leftIcon={<BookOpenIcon className="h-4 w-4" />}
              onClick={() => navigate("/logs")}
            >
              Read the weekly logs
            </Button>
            <Button
              size="lg"
              variant="secondary"
              rightIcon={<ArrowRightIcon className="h-4 w-4" />}
              onClick={() => navigate("/about")}
            >
              About me
            </Button>
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto mt-20 w-full max-w-md h-[320px] xs:h-[400px] sm:h-[450px] bg-accent-gold-light rounded-2xl"
        >
          <div className="absolute -top-[140px] left-[36px]">
            <img
              src={profile.portraitUrl}
              alt={`Portrait of ${profile.name}`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-14 left-14 right-4 flex items-center gap-4 rounded-[20px] border border-accent-gold-light bg-surface p-4 shadow-md sm:left-auto sm:right-[-1.5rem] sm:w-72 mr-10 xs:mr-18 sm:mr-20">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-gold-tint text-accent-gold-dark">
              <AwardIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-text-primary">
                OJT completed
              </p>
              <p className="font-mono text-xs text-text-secondary">
                {stats.renderedHours} / {stats.requiredHours}h
              </p>
            </div>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
