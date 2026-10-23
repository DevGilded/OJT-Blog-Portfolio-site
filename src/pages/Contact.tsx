import React from 'react';
import { MapPinIcon } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { ContactForm } from '../components/ContactForm';
import { SocialLink } from '../components/SocialLink';
import { Badge } from '../components/Badge';
import { profile } from '../data/profile';

export function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeader
            as="h1"
            size="lg"
            eyebrow="Contact"
            title="Let’s talk"
            subtitle="Fellow interns with questions, recruiters, or anyone curious about the work — I’d be happy to hear from you." />
          
          <Badge className="mt-8" variant="success" dot>
            Open to junior developer roles · 2027
          </Badge>
          <ul className="mt-8 space-y-4">
            <li>
              <SocialLink platform="email" href={profile.email} label={profile.email} />
            </li>
            <li>
              <SocialLink platform="github" href={profile.github} label="github.com/mjnamok" showExternalIcon />
            </li>
            <li>
              <SocialLink platform="linkedin" href={profile.linkedin} label="linkedin.com/in/mjnamok" showExternalIcon />
            </li>
            <li className="flex items-center gap-2 text-sm text-text-secondary">
              <MapPinIcon className="h-4 w-4 text-primary-dark" aria-hidden="true" />
              {profile.location}
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </div>);

}