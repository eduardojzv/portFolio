import { MenuStructure } from "../../../interfaces/menu";
export const esMenu: MenuStructure = {
    items: {
        contactMe:"Contactame",
        technologies:"Tecnologías",
        projects:"Proyectos"
    },
    dropdownItems: {
        dropDownMenu: {
            text: "Dropdown Test",
            subLinks: {
                subLink01:"EN subLink01",
                subLink02:"EN subLink02",
                subLink03:"EN subLink03"
            }
        },
    }
}