import { About } from "./About";
import { Navbar } from "./Navbar";
import { Resume } from "./Resume";
import { Projects } from "./Projects";
import { DetailsSectionEnum } from "./types";


type DetailsSectionProps = {
  currentSection: DetailsSectionEnum;
  setCurrentSection: (section: DetailsSectionEnum) => void;

};
export const DetailsSection = (props : DetailsSectionProps) => {



  return (
    <div className="p-4 h-full relative">
      <Navbar
        currentSection={props.currentSection}
        setCurrentSection={props.setCurrentSection}
      />
      {props.currentSection === DetailsSectionEnum.ABOUT && <About />}
      {props.currentSection === DetailsSectionEnum.RESUME && <Resume />}
      {props.currentSection === DetailsSectionEnum.WORK && <Projects />}
    </div>
  )
};