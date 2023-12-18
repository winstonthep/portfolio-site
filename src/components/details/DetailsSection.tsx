import { About } from "./About";
import { Navbar } from "./Navbar";
import { Resume } from "./Resume";
import { useState } from "react";
import { DetailsSectionEnum } from "./types";


export const DetailsSection = () => {

  const [currentSection, setCurrentSection] = useState<DetailsSectionEnum>(DetailsSectionEnum.ABOUT);

  return (
    <div className="p-4 h-full relative">
      <Navbar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      {currentSection === DetailsSectionEnum.ABOUT && <About />}
      {currentSection === DetailsSectionEnum.RESUME && <Resume />}
    </div>
  )
};