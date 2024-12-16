// Interfaz para estilos en tecnología
interface TechnologyStyle {
    background: string;
  }
  
  // Interfaz para cada tecnología
  interface Technology {
    name: string;
    logo: JSX.Element;
    style: TechnologyStyle;
  }
  
  // Interfaz para imágenes de proyectos
  interface ProjectImage {
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
    descrip: string;
    images: ProjectImage[];
    state:boolean;
    technologies: Technology[];
    links: ProjectLinks;
  }
  
  // Interfaz para el objeto `projects`
  export interface Projects {
    [key: string]: Project;
  }
  
  // Interfaz para los TAGS
  export interface Tags {
    [key: string]: Technology;
  }
  