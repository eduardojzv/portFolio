import { MenuDetails } from "../interfaces/menu";
export const menuItems: MenuDetails = {
    items: {
        home: {
            href: "#start",
            state: true
        },
        projects:{
            href:"#projects",
            state:true
        },
        aboutMe:{
            href:"#aboutMe",
            state:true
        }
    },
    dropdownItems: {
        dropDownMenu: {
            href: "#",
            subLinks: {
                subLink01: {
                    href: "#",
                    state: false
                },
                subLink02: {
                    href: "#",
                    state: false
                },
                subLink03: {
                    href: "#",
                    state: false
                }
            }
        },
    }
};