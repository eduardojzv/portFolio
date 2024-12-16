import { IconChrome, IconCss, IconFastApi, IconNextUI, IconPython, IconVite } from '../../src/icons/technologies';
import { IconGitHub } from '../icons/socialMedia';
import { Projects, Tags } from '../interfaces/projects';
export const TAGS: Tags = {
    REACTVITE: {
        name: "React Vite",
        logo: <IconVite className="iconSizeCards" />,
        style: {
            background: 'radial-gradient(141.42% 141.42% at 100% 0%, #fff6, #fff0), radial-gradient(140.35% 140.35% at 100% 94.74%, #bd34fe, #bd34fe00), radial-gradient(89.94% 89.94% at 18.42% 15.79%, #41d1ff, #41d1ff00)'
        },
    },
    CSS: {
        name: "CSS", logo: <IconCss className="iconSizeCards" />,
        style: { background: 'radial-gradient(140.35% 140.35% at 100% 94.74%, #663399,rgb(68, 68, 68))', }
    },
    PYTHON: {
        name: "Python", logo: <IconPython className="iconSizeCards" />,
        style: { background: 'radial-gradient(80.35% 80.35% at 100% 94.74%, #ffd94a, rgb(55, 114, 163))', }
    },
    FASTAPI: {
        name: "FastAPI", logo: <IconFastApi className="iconSizeCards" />,
        style: {
            background: 'radial-gradient(140.35% 80.35% at 100% 94.74%,rgb(0, 0, 0), rgb(55, 114, 163))',
        }
    },
    NEXTUI: {
        name: "NextUI", logo: <IconNextUI className="iconSizeCards" />,
        style: { background: 'radial-gradient(...)' }
    }
};

// Datos del proyecto
export const projects: Projects = {
    proSalud: {
        title: "Alimentos ProSalud",
        descrip: "Clon de la página web de Alimentos ProSalud",
        images: [
            { src: "projects/proSalud.webp", notes: ["Página de inicio completada", "Diseño responsivo implementado"] },
            { src: "projects/ourBrands.webp", notes: ["Lista de Marcas","Diseño responsivo implementado"] },
            { src: "projects/jobs.webp", notes: ["Lista de empleos","Diseño responsivo implementado","Filtros por pais y provincia","todo con CSS puro"] }
        ],
        state: true,
        technologies: [TAGS.REACTVITE, TAGS.CSS, TAGS.PYTHON, TAGS.FASTAPI],
        links: {
            web: { link: "https://prosalud-clon.netlify.app/", icon: <IconChrome className="iconSizeCards" /> },
            gitHub: { link: "https://github.com/eduardojzv/proSalud", icon: <IconGitHub className="iconSizeCards" /> }
        }
    },
    hotelFiesta: {
        title: "Hotel Fiesta",
        descrip: "Clon de la página web del Hotel Fiesta",
        images: [
            { src: "projects/hotel.webp", notes: ["Página de inicio completada", "Diseño responsivo implementado"] },
        ],
        state: false,
        technologies: [TAGS.REACTVITE, TAGS.CSS, TAGS.PYTHON, TAGS.FASTAPI],
        links: {
            web: { link: "https://hotelifiesta-clon.netlify.app/", icon: <IconChrome className="iconSizeCards" /> },
            gitHub: { link: "https://github.com/eduardojzv/Hotel", icon: <IconGitHub className="iconSizeCards" /> }
        }
    },

};