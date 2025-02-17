import { IconChrome, IconCss, IconFastApi, IconMySql, IconNextJs, IconNextUI, IconPrisma, IconPython, IconTailwind, IconVite } from '../../src/icons/technologies';
import { IconGitHub } from '../icons/socialMedia';
import { Projects, Tags } from '../interfaces/projects';
const TAGS: Tags = {
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
    },
    NEXTJS: {
        name: "NextJS",
        logo: <IconNextJs className="iconSizeCards" />,
        style: { background: 'radial-gradient(...)' }
    },
    TAILWIND: {
        name: "TailWind",
        logo: <IconTailwind className="iconSizeCards" />,
        style: { background: 'radial-gradient(...)' }

    },
    MYSQL:{
        name: "MySql",
        logo: <IconMySql className="iconSizeCards" />,
        style: { background: 'radial-gradient(...)' }
    },
    PRISMA:{
        name: "Prisma",
        logo: <IconPrisma className="iconSizeCards" />,
        style: { background: 'radial-gradient(...)' }
    }
};

// Datos del proyecto
export const projects: Projects = {
    proSalud: {
        title: "Alimentos ProSalud",
        images: [
            { src: "projects/proSalud.webp", notes: ["Página de inicio completada", "Diseño responsivo implementado"] },
            { src: "projects/ourBrands.webp", notes: ["Lista de Marcas", "Diseño responsivo implementado"] },
            { src: "projects/jobs.webp", notes: ["Diseño responsivo implementado", "Filtros por pais y provincia", "CSS puro", "El servicio backend caduco, por lo tanto, no se mostrará la lista, pero así es como se veía anteriormente"] }
        ],
        state: true,
        technologies: [TAGS.REACTVITE, TAGS.CSS, TAGS.PYTHON, TAGS.FASTAPI],
        links: {
            web: { link: "https://prosalud-clon.netlify.app/", icon: <IconChrome className="iconSizeCards" /> },
            gitHub: { link: "https://github.com/eduardojzv/proSalud", icon: <IconGitHub className="iconSizeCards" /> }
        }
    },
    ticoApp: {
        title: "Tico App",
        images: [
            { src: "projects/ticoAppHome.webp", notes: ["Pagina de inicio", "Se visualizan las distitnas categorias de negocios y proximamente de servicios"] },
            { src: "projects/ticoAppSalud.webp", notes: ["Sección de salud", "Filtra por servicios (de momento)"] },
            { src: "projects/ticoAppEstetica.webp", notes: ["Sección de estetica", "Filtra por servicios (de momento)"] },
        ],
        state: false,
        technologies: [TAGS.NEXTJS, TAGS.TAILWIND,TAGS.MYSQL,TAGS.PRISMA],

    },
    hotelFiesta: {
        title: "Hotel Fiesta",
        images: [
            { src: "projects/hotel.webp", notes: ["Página de inicio en completado", "Diseño responsivo implementado"] },
            { src: "projects/rooms.webp", notes: ["Selección de habitaciones"] },
        ],
        state: true,
        technologies: [TAGS.REACTVITE, TAGS.CSS, TAGS.PYTHON, TAGS.FASTAPI],
        links: {
            web: { link: "https://hotelifiesta-clon.netlify.app/", icon: <IconChrome className="iconSizeCards" /> },
            gitHub: { link: "https://github.com/eduardojzv/Hotel", icon: <IconGitHub className="iconSizeCards" /> }
        }
    },

};