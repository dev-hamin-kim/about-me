import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ChapterCardProp = {
  company: string;
  role: string;
  projects: Project[];
};

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
}
