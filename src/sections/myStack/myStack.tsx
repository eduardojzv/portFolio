import { techStack } from "../../helpers/stacksItems";
import styles from "./myStack.module.css";

const { stack__container, category__container, tech__item, tech__logo, tech__name } = styles;

export default function MyStack() {
    return (
        <section className={stack__container}>
            {Object.entries(techStack).map(([category, items]) => (
                <div key={category} className={category__container}>
                    <h2>{category.toUpperCase()}</h2>
                    <div>
                        {items.map(({ logo, item }) => (
                            <div key={item} className={tech__item}>
                                <div className={tech__logo}>{logo}</div>
                                <span className={tech__name}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
