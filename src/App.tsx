import Menu from "./components/menu/menu";
import styles from './app.module.css'
import ContactMe from "./sections/contactMe/contactMe";
import MyStack from "./sections/myStack/myStack";
import ProjectsComponent from "./sections/projects/projects";
const { app__main } = styles
export default function App() {
  return (
    <>
      <Menu />
      <main className={app__main}>
        <ContactMe />
        <ProjectsComponent />
        <MyStack />
      </main>
    </>
  )
}
