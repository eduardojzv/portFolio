import styles from './menu.module.css'
import DropDownMenu from './dropDown';
import { useEffect, useState } from 'react';
import DropDownLanguage from './dropdownLanguage';
import { menuItems } from '../../helpers/menuItems';
import { MenuStructure } from '../../interfaces/menu';
import { IconClose, IconMenu } from '../../icons/others';
import ButtonTheme from '../buttonTheme/buttonTheme';
import { useTranslation } from 'react-i18next';
import { IconConsole } from '../../icons/socialMedia';
const { show, nav__menu, menu, menu__bar, container, nav__start, nav__end, nav__item, logo, menu__icons, nav__icons, nav__buttons, header__top, nav__link } = styles
export default function Menu() {
    const [isAtTop, setIsAtTop] = useState<boolean>(true);
    const { t } = useTranslation("menu")
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    function handleMenu(val: boolean) {
        if (isAtTop === true && val) {
            setIsAtTop(false)
        } else if (window.scrollY === 0 && !val) {
            setIsAtTop(true)
        }
        setOpenMenu(val)
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        // Limpieza del evento
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`${nav__menu} ${!isAtTop ? header__top : ""}`} aria-label="navigation bar">
            <div className={container}>
                <div className={nav__start}>
                    <a href="/">
                        <IconConsole className={`${logo} iconSizeMenu`}/>
                    </a>
                    <nav className={`${menu} ${openMenu ? show : ""}`}>
                        <ul className={menu__bar}>
                            {Object.entries(menuItems.items).map(([key, val]) => (
                                <li key={key}>
                                    {val.state &&
                                        <a onClick={() => handleMenu(false)} className={`${nav__item} ${nav__link}`} href={val.href}>
                                            {/* {val.icon} */}
                                            <span key={key}>{t(`items.${key}`)}</span>
                                        </a>

                                    }
                                </li>
                            ))}
                            {
                                Object.entries(menuItems.dropdownItems).map(([key, val], idx) => (
                                    <DropDownMenu key={key} keys={key as keyof MenuStructure['dropdownItems']} values={val} idx={idx} handleMenu={handleMenu} />
                                ))
                            }
                        </ul>
                    </nav>
                </div>
                <div className={nav__end}>
                    <div className={nav__buttons}>
                        <ButtonTheme />
                        <DropDownLanguage />
                    </div>
                    <div className={nav__icons}>
                        <button
                            onClick={() => handleMenu(!openMenu)}
                            className={menu__icons}
                            aria-label={!openMenu ? "menu close" : "menu open"}
                            aria-haspopup="true"
                            aria-expanded={openMenu}
                        >
                            {
                                !openMenu
                                    ? <IconMenu width="25px" height="25px" aria-hidden="true" />
                                    : <IconClose width="25px" height="25px" aria-hidden="true" />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </header >
    )
}