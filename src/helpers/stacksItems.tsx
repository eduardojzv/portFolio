import React from "react";
import { IconHTML, IconReact } from "../icons/technologies";

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
        { logo: "/placeholder.svg?height=50&width=50", item: "CSS" },
        { logo: "/placeholder.svg?height=50&width=50", item: "JavaScript" },
        { logo: "/placeholder.svg?height=50&width=50", item: "Next.js" },
        { logo: "/placeholder.svg?height=50&width=50", item: "Tailwind CSS" },
        { logo: "/placeholder.svg?height=50&width=50", item: "Bootstrap" },
    ],
    backend: [
        { logo: "/placeholder.svg?height=50&width=50", item: "Python" },
        { logo: "/placeholder.svg?height=50&width=50", item: "FastAPI" },
        { logo: "/placeholder.svg?height=50&width=50", item: "Node.js" },
        { logo: "/placeholder.svg?height=50&width=50", item: "Express" },
    ],
    databases: [
        { logo: "/placeholder.svg?height=50&width=50", item: "MySQL" },
        { logo: "/placeholder.svg?height=50&width=50", item: "SQL Server" },
        { logo: "/placeholder.svg?height=50&width=50", item: "MongoDB" },
    ],
    libraries: [
        { logo: "/placeholder.svg?height=50&width=50", item: "Redux" },
        { logo: "/placeholder.svg?height=50&width=50", item: "Axios" },
        { logo: "/placeholder.svg?height=50&width=50", item: "Jest" },
        { logo: "/placeholder.svg?height=50&width=50", item: "Lodash" },
    ],
};
