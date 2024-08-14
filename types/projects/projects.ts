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

interface IImage {
  id: number;
  alt: string;
  largeImage: string;
  thumbnail: string;
}

export interface ProjectFace {
  id: number;
  title: string;
  img: string;
  description: string;
  technologies: technologies[];
  gallery: IImage[];
}

export interface TechnologyFace {
  id: number;
  technology: technologies;
  checked: boolean;
  icon: string;
  title: string;
}
