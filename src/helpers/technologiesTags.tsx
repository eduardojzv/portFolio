import { IconCss, IconFastApi, IconMySql, IconNextJs, IconNextUI, IconPrisma, IconPython, IconTailwind, IconVite } from '../../src/icons/technologies';
import { Tags } from '../interfaces/projects';

export const TAGS: Tags = {
    REACTVITE: {
        name: "React Vite",
        logo: <IconVite className="iconSizeCards" />,
        style: {
            // background: 'radial-gradient(141.42% 141.42% at 100% 0%, #fff6, #fff0), radial-gradient(140.35% 140.35% at 100% 94.74%, #bd34fe, #bd34fe00), radial-gradient(89.94% 89.94% at 18.42% 15.79%, #41d1ff, #41d1ff00)'
        },
    },
    CSS: {
        name: "CSS", logo: <IconCss className="iconSizeCards" />,
        // style: { background: 'radial-gradient(140.35% 140.35% at 100% 94.74%, #663399,rgb(68, 68, 68))', }
    },
    PYTHON: {
        name: "Python", logo: <IconPython className="iconSizeCards" />,
        // style: { background: 'radial-gradient(80.35% 80.35% at 100% 94.74%, #ffd94a, rgb(55, 114, 163))', }
    },
    FASTAPI: {
        name: "FastAPI", logo: <IconFastApi className="iconSizeCards" />,
        style: {
            // // background: 'radial-gradient(140.35% 80.35% at 100% 94.74%,rgb(0, 0, 0), rgb(55, 114, 163))',
        }
    },
    NEXTUI: {
        name: "NextUI", logo: <IconNextUI className="iconSizeCards" />,
        // style: { background: 'radial-gradient(...)' }
    },
    NEXTJS: {
        name: "NextJS",
        logo: <IconNextJs className="iconSizeCards" />,
        // style: { background: 'radial-gradient(...)' }
    },
    TAILWIND: {
        name: "TailWind",
        logo: <IconTailwind className="iconSizeCards" />,
        // style: { background: 'radial-gradient(...)' }

    },
    MYSQL:{
        name: "MySql",
        logo: <IconMySql className="iconSizeCards" />,
        // style: { background: 'radial-gradient(...)' }
    },
    PRISMA:{
        name: "Prisma",
        logo: <IconPrisma className="iconSizeCards" />,
        // style: { background: 'radial-gradient(...)' }
    }
};