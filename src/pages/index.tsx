import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Divider } from "@heroui/divider";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { ChapterCardProp } from "@/components/ChapterCard";
import { TimelineWrapper } from "@/components/TimelineWrapper";

export default function IndexPage() {
  const mockData: ChapterCardProp[] = [
    {
      company: "Tech Corp",
      role: "Frontend Developer",
      imageSrc: "/path/to/company-logo.png",
      projects: [
        {
          id: "1",
          title: "Project Alpha",
          description: "A web application for managing tasks.",
          tags: ["React", "TypeScript", "CSS"],
        },
        {
          id: "2",
          title: "Project Beta",
          description: "An e-commerce platform.",
          tags: ["Vue", "JavaScript", "HTML"],
        },
      ],
    },
    {
      company: "Tech Corp",
      role: "Frontend Developer",
      imageSrc: "/path/to/company-logo.png",
      projects: [
        {
          id: "1",
          title: "Project Alpha",
          description: "A web application for managing tasks.",
          tags: ["React", "TypeScript", "CSS"],
        },
        {
          id: "2",
          title: "Project Beta",
          description: "An e-commerce platform.",
          tags: ["Vue", "JavaScript", "HTML"],
        },
      ],
    },
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>주도적으로 </span>
          <span className={title({ color: "violet" })}>기획</span>
          <span className={title()}>하는</span>
          <br />
          <span className={title({ color: "violet" })}>개발자&nbsp;</span>
          <span className={title()}>김하민입니다.</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            불편함을 해결하는 기획을 만들고, 개발하여 현실에 선보입니다.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.github}
          >
            진행한 프로젝트 보기
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center">
        <div>
          <div className="gap-2 grid grid-cols-1 grid-rows-2 px-8">
            {TimelineWrapper(mockData)}
          </div>
          <Divider className="my-4" />
        </div>
      </section>
    </DefaultLayout>
  );
}
