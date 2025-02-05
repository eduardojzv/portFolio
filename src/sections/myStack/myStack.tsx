import { useTranslation } from "react-i18next";
import { techStack } from "../../helpers/stacksItems";
import styles from "./myStack.module.css";

const { stack__container, category__container, tech__item, tech__logo, category__items, category__title,stack__cards__container } = styles;

export default function MyStack() {
      const { t } = useTranslation('stack')
    
    return (
        <section className={stack__container} id="technologies">
            <div>{t('title')}</div>
            <ul  className={stack__cards__container}>
                {Object.entries(techStack).map(([category, items]) => (
                    <li key={category} className={category__container}>
                        <h2 className={category__title}>{category.toUpperCase()}</h2>
                        <div className={category__items}>
                            {items.map(({ logo, item }) => (
                                <div key={item} className={tech__item}>
                                    <div className={tech__logo}>{logo}</div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
