import { useEffect, useRef, useState } from "react"
import { useTranslation } from 'react-i18next'

import styles from './menu.module.css'
import { languages } from "../../helpers/languages";
import { IconCheck, IconDown } from "../../icons/others";
const { active, nav__item, dropdown__language, dropdown__btn, dropdown__link__title,dropdown__item,chevron,chevron__active} = styles
export default function DropDownLanguage() {
    const { i18n } = useTranslation("menu");
    const [state, setState] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    function handleState() {
        setState(!state)
    }
    function handleBodyClick(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setState(false);
        }
    }
    function selectLang(lang:string) {
        i18n.changeLanguage(lang);
    }
    useEffect(() => {
        document.documentElement.addEventListener('click', handleBodyClick);
        return () => {
            document.documentElement.removeEventListener('click', handleBodyClick);
        };
    }, []);

    return (
        <div onClick={handleState} ref={dropdownRef}>
        <button
            className={`${nav__item} ${dropdown__btn}`}
            data-dropdown={`dropdown`}
            aria-haspopup="true"
            aria-expanded={state}
            aria-label="browse"
        >
           <span>{"es"}</span>
            <IconDown aria-hidden={state} className={`${chevron} ${state?chevron__active:""}`}/>
        </button>
        <div id={`dropdown`} className={`${dropdown__language} ${state ? active : ""}`}>
            <ul role="menu">
                {Object.entries(languages).map(([key,val]) => (
                    <li role="menuitem" key={key} className={dropdown__item} onClick={()=>selectLang(val.code)}>
                        <span className={dropdown__link__title}>{val.text}</span>
                        {i18n.language===val.code &&
                        <IconCheck width="15px" height="15px"/>
                        }
                    </li>
                ))}
            </ul>
        </div>
    </div>
    )
}