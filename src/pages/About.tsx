import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartIcon, MailIcon } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { Avatar } from '../components/Avatar';
import { Card } from '../components/Card';
import { Divider } from '../components/Divider';
import { Tabs } from '../components/Tabs';
import { SkillChip } from '../components/SkillChip';
import { Button } from '../components/Button';
import { profile } from '../data/profile';
import { aboutIntro, acknowledgements, dedication, quickFacts, skillGroups } from '../data/about';

export function About() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <SectionHeader
        as="h1"
        size="lg"
        eyebrow="About"
        title="Hi, I’m Mj."
        subtitle="IT student, web developer intern, and the person behind this nine-week log." />
      

      <div className="mt-14 grid gap-12 lg:grid-cols-[300px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Card padding="lg">
            <div className="flex flex-col items-center text-center">
              <Avatar src={profile.portraitUrl} alt={profile.name} size="2xl" ring />
              <p className="mt-4 font-heading text-xl font-semibold">{profile.name}</p>
              <p className="text-sm text-text-secondary">{profile.program}</p>
            </div>
            <dl className="mt-6 space-y-3 border-t border-border pt-6">
              {quickFacts.map((fact) =>
              <div key={fact.label} className="flex flex-col gap-0.5">
                  <dt className="text-xs uppercase tracking-wider text-text-muted">{fact.label}</dt>
                  <dd className="font-mono text-sm text-text-primary">{fact.value}</dd>
                </div>
              )}
            </dl>
            <Button
              className="mt-6"
              fullWidth
              variant="secondary"
              leftIcon={<MailIcon className="h-4 w-4" />}
              onClick={() => navigate('/contact')}>
              
              Get in touch
            </Button>
          </Card>
        </aside>

        <div className="max-w-[68ch]">
          <section aria-labelledby="intro-title">
            <h2 id="intro-title" className="font-heading text-2xl font-semibold">
              A little about me
            </h2>
            <div className="mt-4 space-y-5 text-[17px] leading-[1.75] text-text-secondary">
              {aboutIntro.map((p) =>
              <p key={p.slice(0, 24)}>{p}</p>
              )}
            </div>
          </section>

          <Divider tone="purple" ornament="leaf" spacing="lg" />

          <section
            aria-labelledby="dedication-title"
            className="rounded-[20px] border border-secondary-lavender-light bg-secondary-lavender-tint p-8">
            
            <div className="flex items-center gap-2 text-secondary-lavender-dark">
              <HeartIcon className="h-4 w-4 fill-current" aria-hidden="true" />
              <h2 id="dedication-title" className="text-xs font-semibold uppercase tracking-wider">
                Dedication
              </h2>
            </div>
            <p className="mt-4 font-heading text-xl italic leading-relaxed text-text-primary">{dedication}</p>
          </section>

          <section aria-labelledby="ack-title" className="mt-14">
            <h2 id="ack-title" className="font-heading text-2xl font-semibold">
              Acknowledgements
            </h2>
            <p className="mt-3 text-[17px] leading-[1.75] text-text-secondary">
              None of this happened alone. Thank you to:
            </p>
            <ul className="mt-5 space-y-4">
              {acknowledgements.map((item) =>
              <li key={item.slice(0, 24)} className="flex gap-3 text-[17px] leading-[1.75] text-text-secondary">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              )}
            </ul>
          </section>

          <Divider tone="green" ornament="diamond" spacing="lg" />

          <section aria-labelledby="skills-title">
            <h2 id="skills-title" className="font-heading text-2xl font-semibold">
              Skills I used and grew
            </h2>
            <Tabs
              className="mt-6"
              ariaLabel="Skill categories"
              items={skillGroups.map((group) => ({
                value: group.value,
                label: group.label,
                badge: group.skills.length,
                content:
                <div className="flex flex-wrap gap-2 pt-6">
                    {group.skills.map((skill) =>
                  <SkillChip key={skill} label={skill} size="lg" />
                  )}
                  </div>

              }))} />
            
          </section>
        </div>
      </div>
    </div>);

}