import { Identity } from "./Identity";
import { DetailsSection } from "./details/DetailsSection";
import { useState } from "react";
import { DetailsSectionEnum } from "./details/types";
import { BottomNav } from "./details/BottomNav";
export const Layout = () => {
  const [currentSection, setCurrentSection] = useState<DetailsSectionEnum>(
    DetailsSectionEnum.ABOUT
  );
  return (
    <div className="layout relative min-h-screen w-screen pt-4 px-10 drop-shadow-2xl">
      <Identity />
      <div className="about bg-[#292929] m-2 rounded-2xl">
        <DetailsSection
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      </div>
      <BottomNav
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </div>
  );
};
