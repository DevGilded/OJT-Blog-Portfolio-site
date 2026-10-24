import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  ImageIcon,
} from "lucide-react";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { QuoteBlock } from "../components/QuoteBlock";
import { Tag, TagGroup } from "../components/Tag";
import { Divider } from "../components/Divider";
import { weeklyLogs } from "../data/weeklyLogs";
import { formatMinutes } from "../utils/time";

export function LogEntry() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const index = weeklyLogs.findIndex((log) => log.slug === slug);
  const log = weeklyLogs[index];

  if (!log) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
        <p className="font-mono text-sm text-text-muted">404 · log not found</p>
        <h1 className="mt-3 font-heading text-3xl font-semibold">
          That week doesn’t exist in the journal.
        </h1>
        <Button
          className="mt-8"
          leftIcon={<ArrowLeftIcon className="h-4 w-4" />}
          onClick={() => navigate("/logs")}
        >
          Back to all logs
        </Button>
      </div>
    );
  }

  const prev = weeklyLogs[index - 1];
  const next = weeklyLogs[index + 1];

  return (
    <article className="pb-24">
      <header className="border-b border-border bg-surface-alt">
        <div className="mx-auto max-w-3xl px-4 pb-12 pt-12 sm:px-6 md:pt-16">
          <Link
            to="/logs"
            className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-primary-dark hover:text-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /> All weekly
            logs
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Badge variant="primary">Week {log.week}</Badge>
            {log.milestone && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent-gold-tint px-2.5 py-0.5 text-xs font-semibold text-accent-gold-dark">
                <StarIcon className="h-3 w-3 fill-current" aria-hidden="true" />
                {log.milestone}
              </span>
            )}
          </div>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {log.title}
          </h1>
          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-text-secondary">
            <div className="flex gap-2">
              <dt className="text-text-muted">Dates</dt>
              <dd>{log.dateRange}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-text-muted">Rendered</dt>
              <dd>{formatMinutes(log.minutes)}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-text-muted">Read</dt>
              <dd>{log.readTime}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <figure className="-mt-px pt-10">
          <img
            src={log.thumbnailUrl}
            alt={log.thumbnailAlt}
            className="aspect-[16/9] w-full rounded-[20px] border border-border object-cover shadow-sm"
          />
        </figure>
      </div>

      <div className="mx-auto max-w-[68ch] px-4 pt-12 sm:px-0">
        <div className="space-y-6 text-[17px] leading-[1.75] text-text-secondary">
          {log.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        {/* Photo Documentation Section */}
        {log.photos && log.photos.length > 0 && (
          <section aria-labelledby="photos-title" className="mt-12">
            <div className="mb-6 flex items-center gap-2">
              <ImageIcon
                className="h-5 w-5 text-text-muted"
                aria-hidden="true"
              />
              <h2
                id="photos-title"
                className="font-heading text-xl font-semibold"
              >
                Photo Documentation
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {log.photos.map((photo) => (
                <figure
                  key={photo.id}
                  className="group relative flex flex-col gap-3 rounded-2xl border border-border-subtle bg-surface-subtle p-3 shadow-sm"
                >
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-surface">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="flex flex-col gap-1 px-1">
                    <span className="text-sm font-medium text-text-strong">
                      {photo.caption || photo.alt}
                    </span>
                    {(photo.date || photo.category) && (
                      <div className="mt-1 flex items-center justify-between text-xs text-text-muted font-mono">
                        {photo.date && <time>{photo.date}</time>}
                        {photo.category && (
                          <span className="inline-flex items-center rounded-full bg-surface-raised px-2 py-0.5 text-[10px] font-medium">
                            {photo.category}
                          </span>
                        )}
                      </div>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section
          aria-labelledby="tasks-title"
          className="mt-12 rounded-[20px] border border-border bg-surface p-6 sm:p-8"
        >
          <h2 id="tasks-title" className="font-heading text-xl font-semibold">
            What I worked on
          </h2>
          <ul className="mt-5 space-y-3">
            {log.tasks.map((task) => (
              <li key={task} className="flex gap-3 text-text-secondary">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary-dark">
                  <CheckIcon className="h-3 w-3" aria-hidden="true" />
                </span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </section>

        <QuoteBlock
          className="mt-12"
          variant="minimal"
          size="lg"
          source={`Lesson · Week ${log.week}`}
        >
          {log.reflection}
        </QuoteBlock>

        <div className="mt-10">
          <TagGroup>
            {log.tags.map((tag) => (
              <Tag key={tag} hash color="green">
                {tag}
              </Tag>
            ))}
          </TagGroup>
        </div>

        <Divider tone="green" ornament="dot" spacing="lg" />

        <nav aria-label="Adjacent weeks" className="grid gap-4 sm:grid-cols-2">
          {prev ? (
            <Link
              to={`/logs/${prev.slug}`}
              className="group rounded-[20px] border border-border bg-surface p-5 transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span className="flex items-center gap-1 font-mono text-xs text-text-muted">
                <ArrowLeftIcon className="h-3 w-3" aria-hidden="true" /> Week{" "}
                {prev.week}
              </span>
              <span className="mt-2 block font-heading font-semibold text-text-primary group-hover:text-primary-dark">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}

          {next && (
            <Link
              to={`/logs/${next.slug}`}
              className="group rounded-[20px] border border-border bg-surface p-5 text-right transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span className="flex items-center justify-end gap-1 font-mono text-xs text-text-muted">
                Week {next.week}{" "}
                <ArrowRightIcon className="h-3 w-3" aria-hidden="true" />
              </span>
              <span className="mt-2 block font-heading font-semibold text-text-primary group-hover:text-primary-dark">
                {next.title}
              </span>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
