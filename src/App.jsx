import Aboutme from "./components/AboutMe";
import Contact from "./components/Contact";
import Email from "./components/Email";
import Introduction from "./components/IntroDuctions";
import NavBar from "./components/NavBar";
import OtherProject from "./components/OtherProjects";
import Projects from "./components/Projects";
import Social from "./components/Socials";
import NavBar2 from "./assets/NavBar2"
import WorkExperiences from "./components/WorkExperience";

export default function App () {

  return <>
    <NavBar/>
    <Social/>
    <Email/>
    <Introduction/>
    <Aboutme/>
    <WorkExperiences/>
    <Projects/>
    <OtherProject/>
    <Contact/>
  </>
}