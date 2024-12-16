import { MenuStructure } from "../../../interfaces/menu";
export const esMenu: MenuStructure = {
    items: {
        home:"Inicio",
        aboutMe:"Acerca de mi",
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