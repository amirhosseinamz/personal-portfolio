export type technologies =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "vue"
  | "react"
  | "angular"
  | "jquery"
  | "tailwind"
  | "bootstrap";

export interface ProjectFace {
  id: number;
  title: string;
  img: string;
  description: string;
  technologies: technologies[];
}

export interface TechnologyFace {
  id: number;
  technology: technologies;
  checked: boolean;
  icon: string;
  title: string;
}
