import { useState } from 'react';
import { VerticalImageSlider } from '../../components/verticalSlider/verticalSlider';
import styles from './projects.module.css';
import { projects } from '../../helpers/projectCardsItems';
import { Project } from '../../interfaces/projects';

const {
  projects__container, projects__card, projects__card__header, projects__card__img,
  projects__card__technologies, projects__card__container,
  projects__card__notes, projects__card__title, projects__title, stateFinished,
  projects__card__notes__list, projects__card__links__list, stateOnGoing
} = styles;

//obtener el estado
function getState(state: boolean) {
  return state ?
    <h3 className={stateFinished}>Terminado</h3>
    :
    <h3 className={stateOnGoing}>En Proceso</h3>
}

// Componente para una tarjeta de proyecto
const ProjectCard = ({ project,idx }: { project: Project,idx:string }) => {
  const [currentNotes, setCurrentNotes] = useState(project.images[0].notes);
  return (
    <li className={projects__card} key={'project-'+idx}>
      <div className={projects__card__header}>
        <h1 className={projects__card__title}>{project.title}</h1>
        <p>{project.descrip}</p>
      </div>
      <div className={projects__card__img}>
        <VerticalImageSlider
          images={project.images}
          alt={project.title}
          onImageChange={(index) => setCurrentNotes(project.images[index].notes)}
        />
      </div>

      {getState(project.state)}

      <ul className={projects__card__technologies}>
        {project.technologies.map((tech) => (
          <li key={`tech-${tech.name}`} style={tech.style}>
            <span>{tech.name}</span> {tech.logo}
          </li>
        ))}
      </ul>
      <div className={projects__card__notes}>
        <h3>Notas</h3>
        <ul className={projects__card__notes__list}>
          {currentNotes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
      <div className={projects__card__links__list}>
        {Object.entries(project.links).map(([key, { link, icon }]) => (
          <a key={'projectLink-'+key} href={link} target="_blank" rel="noopener noreferrer" aria-label={`Enlace a ${key}`}>
            {icon}<span>{key === 'web' ? 'Página Web' : 'Repositorio'}</span>
          </a>
        ))}
      </div>
    </li>
  );
};

// Componente principal
export default function Projects() {
  return (
    <section id="projects" className={projects__container}>
      <h1 className={projects__title}>Proyectos</h1>
      <ul className={projects__card__container}>
        {Object.entries(projects).map(([id, project]) => (
          <ProjectCard key={id} project={project} idx={id} />
        ))}
      </ul>
    </section>
  );
}
