import React from 'react';
import { SparklesIcon, TargetIcon } from 'lucide-react';
import { QuoteBlock } from './QuoteBlock';
import { supervisor } from '../data/profile';

type SupervisorFeedbackProps = {
  className?: string;
};

export function SupervisorFeedback({ className = '' }: SupervisorFeedbackProps) {
  const { feedback } = supervisor;

  return (
    <div className={className}>
      <QuoteBlock variant="accent" size="lg" author={supervisor.name} role={supervisor.role} source="Additional Comments / Recommendations">
        {feedback.recommendation}
      </QuoteBlock>
      <dl className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-[20px] border border-border bg-surface p-5">
          <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-dark">
            <SparklesIcon className="h-4 w-4" aria-hidden="true" /> Strength of student trainee
          </dt>
          <dd className="mt-2 font-heading text-lg text-text-primary">“{feedback.strength}”</dd>
        </div>
        <div className="rounded-[20px] border border-border bg-surface p-5">
          <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-secondary-lavender-dark">
            <TargetIcon className="h-4 w-4" aria-hidden="true" /> Areas of improvement
          </dt>
          <dd className="mt-2 font-heading text-lg text-text-primary">“{feedback.improvement}”</dd>
        </div>
      </dl>
    </div>);

}