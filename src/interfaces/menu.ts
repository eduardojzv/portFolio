export interface MenuStructure {
    items: {
        home: string,
        projects: string,
        aboutMe: string,
    },
    dropdownItems: {
        dropDownMenu: {
            text: string,
            subLinks: {
                subLink01: string,
                subLink02: string,
                subLink03: string
            }
        },
    }
}

interface MenuLink {
    href: string;
    state:boolean
}

export type MenuDetailsItems = {
    [K in keyof MenuStructure['items']]: MenuLink;
};

export type MenuDetailsDropdownItems = {
    [K in keyof MenuStructure['dropdownItems']]: {
        href: string;
        subLinks: {
            [SubK in keyof MenuStructure['dropdownItems'][K]['subLinks']]: MenuLink;
        };
    };
};

export interface MenuDetails {
    items: MenuDetailsItems;
    dropdownItems: MenuDetailsDropdownItems;
}