import { DetailsSectionEnum } from "./types";

export type NavbarProps = {
  currentSection: DetailsSectionEnum;
  setCurrentSection: (section: DetailsSectionEnum) => void;
};
export const Navbar = (props: NavbarProps) => {
  return (
    <div className="navbar absolute right-0 top-0 h-14 w-64 text-white bg-transparent border-b-2  border-l-2 border-[#5c5c5c] rounded-bl-2xl  justify-around items-center">
      <div className={`h-full flex flex-row items-center justify-center w-1/3  hover:text-blue-700 hover:cursor-pointer ${props.currentSection === DetailsSectionEnum.ABOUT ? "text-blue-300" : ""}`}
      onClick={() => props.setCurrentSection(DetailsSectionEnum.ABOUT)}
      >
        {DetailsSectionEnum.ABOUT}
      </div>
      <div className={`border-x-2 border-[#5c5c5c] h-full flex flex-row items-center justify-center w-1/3  hover:text-blue-700 hover:cursor-pointer ${props.currentSection === DetailsSectionEnum.RESUME ? "text-blue-300" : ""}`}
      onClick={() => props.setCurrentSection(DetailsSectionEnum.RESUME)}
      >
        {DetailsSectionEnum.RESUME}
      </div>
      <div className={`h-full flex flex-row items-center justify-center w-1/3  hover:text-blue-700 hover:cursor-pointer ${props.currentSection === DetailsSectionEnum.WORK ? "text-blue-300" : ""}`}
      onClick={() => props.setCurrentSection(DetailsSectionEnum.WORK)}
      >
        {DetailsSectionEnum.WORK}
      </div>
    </div>
  );
};
