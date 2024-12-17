import { useTranslation } from 'react-i18next'
import { IconGitHub, IconGmail, IconLinkeding } from '../../icons/socialMedia'
import styles from './contactMe.module.css'
import { IconDownload } from '../../icons/others'
const { contact__container, contact__details, contact__social, contact__name, contact__left, contact__right, contact__position, contact__description, contact__links, contact__cv } = styles
const sizeIcons = {
  with: "20px",
  height: "20px"
}
const contactItems = {
  gmail: {
    title: "Gmail",
    icon: <IconGmail width={sizeIcons.with} height={sizeIcons.height} />,
    link: "mailto:eduardojzv@gmail.com"
  },
  gitHub: {
    title: "GitHub",
    icon: <IconGitHub width={sizeIcons.with} height={sizeIcons.height} />,
    link: "https://github.com/eduardojzv"
  },
  linkeding: {
    title: "Linkeding",
    icon: <IconLinkeding width={sizeIcons.with} height={sizeIcons.height} />,
    link: "https://www.linkedin.com/in/eduardo-josue-zamora-valverde-716b141b9/"
  }
}
export default function ContactMe() {
  const { t } = useTranslation("contact")
  return (
    <section className={contact__container} id='start'>
      <div className={contact__left}>
        <div className={contact__details}>
          <h1 className={`typingAnimation ${contact__name}`}>{t('name')}</h1>
          <h2 className={contact__position}>{t('position')}</h2>
          <p className={contact__description}>{t('description')}</p>
        </div>
        <div className={contact__links}>
          <ul className={`${contact__social} buttonSizes`}>
            {Object.entries(contactItems).map(([key, val]) => (
              <li key={key}>
                <a href={val.link} target='_blank'>
                  {val.icon}
                </a>
              </li>
            ))}
          </ul>
          <a href='CV2025V0.pdf' className={`${contact__cv} buttonSizes`} download>
            <IconDownload width={sizeIcons.with} height={sizeIcons.height} />
            <span>{t('cv')}</span>
          </a>
        </div>
      </div>
      <div className={contact__right}>
        <img src="cat.webp" alt='cat image' width='250px' height='250px' />
      </div>
    </section>
  )
}