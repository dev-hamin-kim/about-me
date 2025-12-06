import { Card, CardBody } from "@heroui/card";
import { Card as HCard } from "@heroui/card";
import { useState } from "react";

import { ChapterCardProp } from "@/types";

export function ChapterCard({
  company,
  role,
  projects,
}: ChapterCardProp) {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedProject = projects.find((p) => p.id === selected) || null;

  return (
    <Card
      isBlurred
      className="border-none bg-default/60 dark:bg-default-100/50 p-6 relative"
      shadow="sm"
    >
      <CardBody>
        {/* Header */}
        <div className="flex gap-4 items-center mb-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground/90">
              {company}
            </h3>
            <p className="text-sm text-foreground/70">{role}</p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <HCard
              key={p.id}
              className="p-4 bg-white/70 dark:bg-default-200/40 cursor-pointer hover:bg-white/90"
              onClick={() => setSelected(p.id)}
            >
              <h4 className="font-semibold text-foreground/90">{p.title}</h4>
              <p className="text-sm text-foreground/70 mt-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-primary/20 rounded-full text-primary-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </HCard>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-default-100 rounded-2xl shadow-xl max-w-lg w-full p-6 space-y-4">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <p className="text-sm text-foreground/70">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-primary/20 rounded-full text-primary-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-4 w-full rounded-xl bg-gray-100 py-2 text-center hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
