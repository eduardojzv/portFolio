import React from "react";
import { IconBootsTrap, IconCss, IconFastApi, IconHTML, IconJs, IconMySql, IconNextJs, IconPostGreSql, IconPython, IconReact, IconSqlServer, IconTailwind, IconTs } from "../icons/technologies";

interface stackItems {
    [key: string]: {
        logo: React.ReactNode;
        item: string;
    }[];
}

export const techStack: stackItems = {
    frontend: [
        { logo: <IconReact />, item: "React" },
        { logo: <IconHTML />, item: "HTML" },
        { logo: <IconCss />, item: "CSS" },
        { logo: <IconJs />, item: "JavaScript" },
        { logo: <IconTs />, item: "TypeScript" },
        { logo: <IconTailwind />, item: "Tailwind CSS" },
        { logo: <IconBootsTrap />, item: "Bootstrap" },
    ],
    backend: [
        { logo: <IconPython />, item: "Python" },
        { logo: <IconFastApi />, item: "FastAPI" },
        { logo: <IconNextJs />, item: "Next.js" },
    ],
    databases: [
        { logo: <IconMySql />, item: "MySQL" },
        { logo: <IconSqlServer />, item: "SQL Server" },
        { logo: <IconPostGreSql />, item: "PostGreSql" },
    ],
};
