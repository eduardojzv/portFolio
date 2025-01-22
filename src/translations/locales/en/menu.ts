import { MenuStructure } from "../../../interfaces/menu";
export const enMenu: MenuStructure = {
    items: {
        contactMe:"Contact Me",
        technologies:"Technologies",
        projects:"Projects"
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
