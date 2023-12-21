import { DetailsSectionEnum } from "./types";
type BottomNavProps = {
  currentSection: DetailsSectionEnum;
  setCurrentSection: (section: DetailsSectionEnum) => void;
  };
export const BottomNav = (props: BottomNavProps) => {
  return (
    <div className="bottom-navbar w-screen items-center justify-center gap-2 absolute bottom-0 left-0 z-[1000] bg-[#292929] sticky rounded-t-2xl h-12">
      <div className={`h-full flex flex-row items-center justify-center w-1/3 ${props.currentSection === DetailsSectionEnum.ABOUT ? "text-blue-300" : "text-white"}`}
      onClick={() => props.setCurrentSection(DetailsSectionEnum.ABOUT)}
      >
        {DetailsSectionEnum.ABOUT}
      </div>
      <div className={`border-x-2 border-[#5c5c5c] h-full flex flex-row items-center justify-center w-1/3   ${props.currentSection === DetailsSectionEnum.RESUME ? "text-blue-300" : "text-white"}`}
      onClick={() => props.setCurrentSection(DetailsSectionEnum.RESUME)}
      >
        {DetailsSectionEnum.RESUME}
      </div>
      <div className={`h-full flex flex-row items-center justify-center w-1/3 ${props.currentSection === DetailsSectionEnum.WORK ? "text-blue-300" : "text-white"}`}
      onClick={() => props.setCurrentSection(DetailsSectionEnum.WORK)}
      >
        {DetailsSectionEnum.WORK}
      </div>
    </div>
  )
};