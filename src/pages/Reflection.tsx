import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { QuoteBlock } from '../components/QuoteBlock';
import { Divider } from '../components/Divider';
import { CertificateCard } from '../components/CertificateCard';
import { SupervisorFeedback } from '../components/SupervisorFeedback';
import { profile } from '../data/profile';
import { lessons, pullQuote, reflectionSections } from '../data/reflection';

export function Reflection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  return (
    <div className="pb-24">
      <div className="mx-auto max-w-[68ch] px-4 pt-16 sm:px-0 md:pt-20">
        <SectionHeader
          as="h1"
          size="lg"
          eyebrow="Reflection"
          title="What nine weeks taught me"
          subtitle={<span className="font-mono text-sm">{profile.dateRange} · 333h 58m rendered</span>} />
        

        {reflectionSections.map((section, i) =>
        <section key={section.heading} aria-labelledby={`reflection-${i}`} className="mt-12">
            <h2 id={`reflection-${i}`} className="font-heading text-2xl font-semibold">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-5 text-[17px] leading-[1.75] text-text-secondary">
              {section.paragraphs.map((p) =>
            <p key={p.slice(0, 24)}>{p}</p>
            )}
            </div>
            {i === 1 &&
          <QuoteBlock className="mt-10" variant="minimal" size="lg" source="Reflection · Week 6">
                {pullQuote}
              </QuoteBlock>
          }
          </section>
        )}

        <section aria-labelledby="lessons-title" className="mt-12 rounded-[20px] bg-primary-tint p-8">
          <h2 id="lessons-title" className="font-heading text-xl font-semibold">
            If you’re the next intern
          </h2>
          <ol className="mt-5 space-y-3">
            {lessons.map((lesson, i) =>
            <li key={lesson} className="flex gap-4 text-text-primary">
                <span className="font-mono text-sm text-primary-dark">0{i + 1}</span>
                <span>{lesson}</span>
              </li>
            )}
          </ol>
        </section>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Divider tone="gold" ornament="diamond" spacing="lg" />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <section aria-labelledby="evaluation-title">
            <SectionHeader id="evaluation-title" eyebrow="Supervisor Evaluation" title="The final word" size="sm" />
            <SupervisorFeedback className="mt-6" />
          </section>

          <section id="certificate" aria-labelledby="certificate-title" className="scroll-mt-24">
            <SectionHeader id="certificate-title" eyebrow="Completion" title="Certificate" size="sm" />
            <CertificateCard
              className="mt-6"
              imageSrc={profile.certificateUrl}
              imageAlt="Mj Namok’s Certificate of Completion"
              title="Certificate of Completion"
              issuer={profile.company}
              issuedDate="Aug 14, 2026"
              caption="Awarded for completing 333 hours and 58 minutes of on-the-job training against a 324-hour requirement."
              viewHref={profile.certificateUrl}
              downloadHref={profile.certificateUrl}
              downloadFileName="mj-namok-ojt-certificate.jpg" />
            
          </section>
        </div>
      </div>
    </div>);

}