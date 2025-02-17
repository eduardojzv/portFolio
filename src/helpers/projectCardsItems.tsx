import { IconGitHub } from '../icons/socialMedia';
import { IconChrome } from '../icons/technologies';
import { Projects } from '../interfaces/projects';
import { TAGS } from './technologiesTags';
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