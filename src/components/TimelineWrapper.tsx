import { Alert } from "@heroui/alert";

import { ChapterCard, ChapterCardProp } from "./ChapterCard";

export function TimelineWrapper(items: ChapterCardProp[]) {
    const [date, title] = ["2025", "titlename"]

  return (
    <div className="space-y-10">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6"
        >
          <div className="md:w-56 flex-shrink-0">
            <Alert>
              <div className="flex flex-col">
                {date && (
                  <div className="text-xs text-foreground/60">{date}</div>
                )}
                {title && (
                  <div className="font-semibold text-sm mt-1">{title}</div>
                )}
              </div>
            </Alert>
          </div>

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


