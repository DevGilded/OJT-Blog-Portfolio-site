import React from 'react';
import { Card } from './Card';
import type { WeeklyLog } from '../types/content';
import { formatMinutes } from '../utils/time';

type HoursBreakdownProps = {
  logs: WeeklyLog[];
};

export function HoursBreakdown({ logs }: HoursBreakdownProps) {
  const total = logs.reduce((sum, log) => sum + log.minutes, 0);
  const max = Math.max(...logs.map((log) => log.minutes));

  return (
    <Card padding="lg" title="Hours per week" description="Rendered against a 324-hour target.">
      <ul className="space-y-2.5" aria-label="Hours rendered per week">
        {logs.map((log) =>
        <li key={log.slug} className="grid grid-cols-[2.5rem_1fr_4.5rem] items-center gap-3 font-mono text-xs">
            <span className="text-text-muted">W{log.week}</span>
            <span className="h-2 overflow-hidden rounded-full bg-surface-sunken" aria-hidden="true">
              <span
              className={`block h-full rounded-full ${log.milestone ? 'bg-accent-gold' : 'bg-primary'}`}
              style={{ width: `${log.minutes / max * 100}%` }} />
            
            </span>
            <span className="text-right text-text-secondary">{formatMinutes(log.minutes)}</span>
          </li>
        )}
      </ul>
      <div className="mt-6 flex items-baseline justify-between border-t border-border pt-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">Total</span>
        <span className="font-mono text-lg font-semibold text-primary-dark">{formatMinutes(total)}</span>
      </div>
    </Card>);

}