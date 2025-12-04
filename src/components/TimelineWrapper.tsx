// TimelineWrapper.tsx
// Revised: use HeroUI Alert component as chronological guide for each chapter entry.
// Each item shows an Alert (left) with date/summary and the ChapterCard (right).
// Responsive: on small screens, Alert stacks above the ChapterCard; on wide screens they sit side-by-side.

import { ChapterCard, ChapterCardProp } from "./ChapterCard";
import { Alert } from "@heroui/alert";

export default function TimelineWrapper(items: ChapterCardProp[]) {
  return (
    <div className="space-y-10">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6"
        >
          {/* Alert as chronological guide */}
          <div className="md:w-56 flex-shrink-0">
            <Alert>
              <div className="flex flex-col">
                {item.date && (
                  <div className="text-xs text-foreground/60">{item.date}</div>
                )}
                {item.title && (
                  <div className="font-semibold text-sm mt-1">{item.title}</div>
                )}
              </div>
            </Alert>
          </div>

          {/* ChapterCard content */}
          <div className="flex-1">
            <ChapterCard
              company={item.company}
              role={item.role}
              imageSrc={item.imageSrc}
              projects={item.projects}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
