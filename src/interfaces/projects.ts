import { CSSProperties } from "react";

// Interfaz para estilos en tecnología
// interface TechnologyStyle {
//   background: ;
// }

// Interfaz para cada tecnología
interface Technology {
  name: string;
  logo: JSX.Element;
  style?: CSSProperties;
}

// Interfaz para imágenes de proyectos
export interface ProjectImage {
  src: string;
  notes: string[];
}

// Interfaz para enlaces de proyectos
interface ProjectLink {
  link: string;
  icon: JSX.Element;
}

// Interfaz para el conjunto de enlaces
interface ProjectLinks {
  web: ProjectLink;
  gitHub: ProjectLink;
}

// Interfaz para cada proyecto
export interface Project {
  title: string;
  images: ProjectImage[];
  state: boolean;
  technologies: Technology[];
  links?: ProjectLinks;
}

// Interfaz para el objeto `projects`
export interface Projects {
  proSalud: Project;
  ticoApp: Project;
  hotelFiesta: Project;
}

// Interfaz para los TAGS
export interface Tags {
  [key: string]: Technology;
}

//Translation interface
export interface ProjecTranslation {
  title: string
  descrip: Record<keyof Projects, string>
  states: {
    finished: string;
    onGoing: string;
  };
  notes: string;
  links: {
    web: string;
    gitHub: string;
  };
}