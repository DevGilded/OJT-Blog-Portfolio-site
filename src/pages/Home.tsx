import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRightIcon,
  AwardIcon,
  BriefcaseIcon,
  CalendarRangeIcon,
  ClockIcon,
  StarIcon,
  TargetIcon } from
'lucide-react';
import { Hero } from '../components/home/Hero';
import { StatCard } from '../components/StatCard';
import { SectionHeader } from '../components/SectionHeader';
import { BlogPostCard } from '../components/BlogPostCard';
import { Button } from '../components/Button';
import { SupervisorFeedback } from '../components/SupervisorFeedback';
import { SkillChip } from '../components/SkillChip';
import { weeklyLogs } from '../data/weeklyLogs';
import { profile, stats } from '../data/profile';
import { skillGroups } from '../data/about';

export function Home() {
  const navigate = useNavigate();
  const latestLogs = [...weeklyLogs].reverse().slice(0, 3);
  const milestones = weeklyLogs.filter((log) => log.milestone);

  return (
    <>
      <Hero />

      <section aria-labelledby="stats-title" className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <h2 id="stats-title" className="sr-only">
          Program at a glance
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Required Hours"
            value={stats.requiredHours}
            unit="hrs"
            icon={<TargetIcon className="h-5 w-5" />}
            description="Set by the OJT program" />
          
          <StatCard
            tone="accent"
            label="Hours Rendered"
            value={stats.renderedHours}
            icon={<ClockIcon className="h-5 w-5" />}
            progress={100}
            description="103% of the requirement" />
          
          <StatCard
            label="Duration"
            value={stats.weeks}
            unit="weeks"
            icon={<CalendarRangeIcon className="h-5 w-5" />}
            description={profile.dateRange} />
          
          <StatCard
            tone="muted"
            label="Role"
            value="Web Dev"
            unit="intern"
            icon={<BriefcaseIcon className="h-5 w-5" />}
            description={profile.companyShort} />
          
        </div>
      </section>

      <section aria-labelledby="latest-title" className="border-y border-border bg-surface-alt">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            id="latest-title"
            eyebrow="Weekly Logs"
            title="The latest from the journal"
            subtitle="The final three weeks — from my supervisor review to the day I got my certificate."
            action={
            <Button
              variant="ghost"
              rightIcon={<ArrowRightIcon className="h-4 w-4" />}
              onClick={() => navigate('/logs')}>
              
                All 9 weeks
              </Button>
            } />
          
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestLogs.map((log) =>
            <BlogPostCard
              key={log.slug}
              title={`Week ${log.week}: ${log.title}`}
              excerpt={log.summary}
              date={log.startDate}
              readTime={log.readTime}
              thumbnailUrl={log.thumbnailUrl}
              thumbnailAlt={log.thumbnailAlt}
              tags={log.tags}
              onClick={() => navigate(`/logs/${log.slug}`)} />

            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="milestones-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          id="milestones-title"
          eyebrow="Milestones"
          title="Three weeks I’ll remember" />
        
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {milestones.map((log) =>
          <li
            key={log.slug}
            className="flex flex-col rounded-[20px] border border-accent-gold-light bg-accent-gold-tint p-6">
            
              <div className="flex items-center gap-2 text-accent-gold-dark">
                <StarIcon className="h-4 w-4 fill-current" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wider">{log.milestone}</span>
              </div>
              <p className="mt-4 font-mono text-xs text-text-on-gold/70">
                Week {log.week} · {log.dateRange}
              </p>
              <h3 className="mt-2 font-heading text-xl font-semibold leading-snug text-text-on-gold">
                {log.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{log.summary}</p>
              <button
              type="button"
              onClick={() => navigate(`/logs/${log.slug}`)}
              className="mt-5 inline-flex items-center gap-1.5 self-start rounded-md text-sm font-semibold text-accent-gold-dark transition-colors hover:text-text-on-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold">
              
                Read entry <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </button>
            </li>
          )}
        </ol>
      </section>

      <section aria-labelledby="feedback-title" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <SectionHeader id="feedback-title" eyebrow="Supervisor Feedback" title="From my evaluation" size="sm" />
            <SupervisorFeedback className="mt-6" />
          </div>
          <div>
            <SectionHeader eyebrow="Stack" title="What I worked with" size="sm" as="h2" />
            <div className="mt-6 flex flex-wrap gap-2">
              {skillGroups[0].skills.map((skill) =>
              <SkillChip key={skill} label={skill} />
              )}
              {skillGroups[1].skills.map((skill) =>
              <SkillChip key={skill} label={skill} variant="outline" />
              )}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="cta-title" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 rounded-[28px] bg-primary-tint px-8 py-12 md:flex-row md:items-center md:justify-between md:px-12">
          <div className="max-w-xl">
            <h2 id="cta-title" className="font-heading text-3xl font-semibold text-text-primary">
              What nine weeks taught me
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              My closing reflection — including the week I stopped trusting code I couldn’t explain — and the
              certificate that came at the end of it.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => navigate('/reflection')}>Read reflection</Button>
            <Button
              variant="gold"
              leftIcon={<AwardIcon className="h-4 w-4" />}
              onClick={() => navigate('/reflection#certificate')}>
              
              See certificate
            </Button>
          </div>
        </div>
      </section>
    </>);

}