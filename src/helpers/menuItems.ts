import { MenuDetails } from "../interfaces/menu";
export const menuItems: MenuDetails = {
    items: {
        contactMe: {
            href: "#contactMe",
            state: true
        },
        projects:{
            href:"#projects",
            state:true
        },
        technologies:{
            href:"#technologies",
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