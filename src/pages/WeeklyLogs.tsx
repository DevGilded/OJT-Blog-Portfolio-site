import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchXIcon, ImageIcon } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { Tabs } from "../components/Tabs";
import { Tag, TagGroup } from "../components/Tag";
import { WeekTimelineItem } from "../components/WeekTimelineItem";
import { BlogPostCard } from "../components/BlogPostCard";
import { Button } from "../components/Button";
import { HoursBreakdown } from "../components/HoursBreakdown";
import { weeklyLogs } from "../data/weeklyLogs";
import { formatMinutes } from "../utils/time";

const topics = ["All", "Laravel", "Vue.js", "Figma", "Git", "Documentation"];

export function WeeklyLogs() {
  const navigate = useNavigate();
  const [topic, setTopic] = useState("All");
  const [view, setView] = useState("timeline");

  const filtered =
    topic === "All"
      ? weeklyLogs
      : weeklyLogs.filter((log) => log.tags.includes(topic));

  const emptyState = (
    <div className="flex flex-col items-center rounded-[20px] border border-dashed border-border-strong px-6 py-16 text-center">
      <SearchXIcon className="h-8 w-8 text-text-muted" aria-hidden="true" />
      <p className="mt-4 font-semibold">No weeks tagged “{topic}”</p>
      <Button
        className="mt-4"
        variant="secondary"
        size="sm"
        onClick={() => setTopic("All")}
      >
        Show all weeks
      </Button>
    </div>
  );

  const timeline =
    filtered.length === 0 ? (
      emptyState
    ) : (
      <ol className="pt-8">
        {filtered.map((log, i) => (
          <WeekTimelineItem
            key={log.slug}
            week={log.week}
            dateRange={log.dateRange}
            title={log.title}
            summary={
              <>
                {log.summary}{" "}
                <span className="font-mono text-xs text-text-muted">
                  · {formatMinutes(log.minutes)}
                </span>
              </>
            }
            highlights={
              log.milestone
                ? [`★ ${log.milestone}`, ...log.highlights]
                : log.highlights
            }
            status="completed"
            isLast={i === filtered.length - 1}
            onSelect={() => navigate(`/logs/${log.slug}`)}
          />
        ))}
      </ol>
    );

  const cards =
    filtered.length === 0 ? (
      emptyState
    ) : (
      <div className="grid gap-6 pt-8 sm:grid-cols-2">
        {filtered.map((log) => (
          <BlogPostCard
            key={log.slug}
            title={`Week ${log.week}: ${log.title}`}
            excerpt={log.summary}
            date={log.startDate}
            readTime={log.readTime}
            thumbnailUrl={log.thumbnailUrl}
            thumbnailAlt={log.thumbnailAlt}
            tags={log.tags}
            onClick={() => navigate(`/logs/${log.slug}`)}
          />
        ))}
      </div>
    );

  // Extract all photos from filtered logs for the gallery view
  const photos = filtered.flatMap((log) =>
    (log.photos || []).map((photo) => ({ ...photo, week: log.week })),
  );

  const gallery =
    photos.length === 0 ? (
      <div className="flex flex-col items-center rounded-[20px] border border-dashed border-border-strong px-6 py-16 text-center mt-8">
        <ImageIcon className="h-8 w-8 text-text-muted" aria-hidden="true" />
        <p className="mt-4 font-semibold">No photos available for “{topic}”</p>
      </div>
    ) : (
      <div className="grid gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-2">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative flex flex-col gap-3 rounded-2xl border border-border-subtle bg-surface-subtle p-3 shadow-sm transition-all hover:shadow-md"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl bg-surface">
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-1 px-1">
              <p className="text-sm font-medium text-text-strong">
                {photo.caption || photo.alt}
              </p>
              <div className="flex items-center justify-between text-xs text-text-muted font-mono">
                <span>Week {photo.week}</span>
                {photo.date && <time>{photo.date}</time>}
              </div>
              {photo.category && (
                <span className="mt-1 inline-flex w-fit items-center rounded-full bg-surface-raised px-2 py-0.5 text-[10px] font-medium text-text-muted">
                  {photo.category}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    );

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <SectionHeader
        as="h1"
        size="lg"
        eyebrow="Weekly Logs"
        title="Week by week, June to August"
        subtitle="One entry per week: what I worked on, the hours I rendered, and one thing I learned. Gold stars mark the milestone weeks."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div role="group" aria-label="Filter by topic">
              <TagGroup>
                {topics.map((t) => (
                  <Tag
                    key={t}
                    size="md"
                    variant="outline"
                    color="green"
                    selected={topic === t}
                    onClick={() => setTopic(t)}
                  >
                    {t}
                  </Tag>
                ))}
              </TagGroup>
            </div>
          </div>

          <Tabs
            className="mt-6"
            variant="segmented"
            size="sm"
            ariaLabel="Log view"
            value={view}
            onValueChange={setView}
            items={[
              { value: "timeline", label: "Timeline", content: timeline },
              { value: "cards", label: "Journal cards", content: cards },
              { value: "gallery", label: "Photo Docs", content: gallery },
            ]}
          />
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <HoursBreakdown logs={weeklyLogs} />
        </aside>
      </div>
    </div>
  );
}
