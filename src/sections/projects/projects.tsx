import { useState } from 'react';
import styles from './projects.module.css';
import { projects } from '../../helpers/projectCardsItems';
import { Project, ProjectImage } from '../../interfaces/projects';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const {
  projects__container, projects__card, projects__card__header, projects__card__img,
  projects__card__technologies, projects__card__container,
  projects__card__notes, projects__card__title, projects__title, stateFinished, states,
  projects__card__notes__list, projects__card__links__list, stateOnGoing, projects__card__links
} = styles;


// Componente para una tarjeta de proyecto
const ProjectCard = ({ project, idx, t }: { project: Project, idx: string, t: TFunction<"projects"> }) => {
  const [currentNotes, setCurrentNotes] = useState(project.images[0].notes);

  function SliderOnClick(val:number) {
    setCurrentNotes(project.images[val].notes)

  }
  const imgGallery = (images: ProjectImage[]) => {
    const items = images.map((img) => ({
      original: img.src,
      thumbnail: img.src
    }));
    return <ImageGallery items={items} onSlide={SliderOnClick} showPlayButton={false}  showNav={false} />
  }
  return (
    <li className={projects__card} key={'project-' + idx}>
      <div className={projects__card__header}>
        <h1 className={projects__card__title}>{t('descrip', { page: project.title })}</h1>
        <p>{project.descrip}</p>
      </div>
      <div className={projects__card__img}>
        {imgGallery(project.images)}
      </div>

      {
        project.state ?
          <h3 className={`${stateFinished} ${states}`}>{t('states.finished')}</h3>
          :
          <h3 className={`${stateOnGoing} ${states}`}>{t('states.onGoing')}</h3>
      }

      <ul className={projects__card__technologies}>
        {project.technologies.map((tech) => (
          <li key={`tech-${tech.name}`} style={tech.style}>
            <span>{tech.name}</span> {tech.logo}
          </li>
        ))}
      </ul>
      <div className={projects__card__notes}>
        <h3>{t('notes')}</h3>
        <ul className={projects__card__notes__list}>
          {currentNotes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
      <div className={projects__card__links__list}>
        {Object.entries(project.links).map(([key, { link, icon }]) => (
          <a className={projects__card__links} key={'projectLink-' + key} href={link} target="_blank" rel="noopener noreferrer" aria-label={`Enlace a ${key}`}>
            {icon}<span>{key === 'web' ? t('links.web') : t('links.gitHub')}</span>
          </a>
        ))}
      </div>
    </li>
  );
};

// Componente principal
export default function Projects() {
  const { t } = useTranslation('projects')
  return (
    <section id="projects" className={projects__container}>
      <h1 className={projects__title}>{t('title')}</h1>
      <ul className={projects__card__container}>
        {Object.entries(projects).map(([id, project]) => (
          <ProjectCard key={id} project={project} idx={id} t={t} />
        ))}
      </ul>
    </section>
  );
}
