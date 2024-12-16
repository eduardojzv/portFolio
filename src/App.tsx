import Menu from "./components/menu/menu";
import styles from './app.module.css'
import ContactMe from "./sections/contactMe/contactMe";
import Projects from "./sections/projects/projects";
const { app__main } = styles
export default function App() {
  return (
    <>
      <Menu />
      <main className={app__main}>
        <ContactMe />
        <Projects/>
      </main>
    </>
  )
}
