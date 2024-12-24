import { useEffect, useRef, useState } from "react"
import styles from './menu.module.css'
import { MenuDetailsDropdownItems, MenuStructure } from "../../interfaces/menu";
import { IconDown } from "../../icons/others";
//import { TFunction } from "i18next";
interface Props {
    keys: keyof MenuStructure['dropdownItems'];
    values: MenuDetailsDropdownItems[keyof MenuDetailsDropdownItems];
    idx: number;
    //t: TFunction<"menu">
    handleMenu: (val: boolean) => void
}
const { active, nav__item, dropdown, dropdown__btn, dropdown__link, dropdown__link__title,chevron,chevron__active } = styles

export default function DropDownMenu({ keys, values, idx,handleMenu}: Props) {
    const [state, setState] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLLIElement>(null);
    function handleState() {
        setState(!state)
    }
    function handleBodyClick(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setState(false);
        }
    }

    useEffect(() => {
        document.documentElement.addEventListener('click', handleBodyClick);
        return () => {
            document.documentElement.removeEventListener('click', handleBodyClick);
        };
    }, []);

    return (
        <>
            <li onClick={handleState} ref={dropdownRef}>
                <button
                    className={`${nav__item} ${dropdown__btn}`}
                    data-dropdown={`dropdown${idx}`}
                    aria-haspopup="true"
                    aria-expanded={state}
                    aria-label="browse"
                >
                    <span>{keys}</span>
                    <IconDown aria-hidden={state} className={`${chevron} ${state ? chevron__active : ""}`} />
                </button>
                <div id={`dropdown${idx}`} className={`${dropdown} ${state ? active : ""}`}>
                    <ul role="menu">
                        {Object.entries(values.subLinks).map(([subKey, subVal]) => (
                            <li role="menuitem" key={subKey}>
                                <a className={`${dropdown__link}`} href={subVal.href} onClick={()=>handleMenu(false)}>
                                        <span className={dropdown__link__title}>{subKey}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </li>
        </>
    )
}