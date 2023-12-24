import { techs } from "./types";
export const Technologies = () => {
  return (
    <div className="w-full h-full flex flex-row flex-wrap gap-6 justify-center items-center p-4">
      {techs.map((tech) => {
        return (
          <TechIconButton
            icon={tech.image}
            link={tech.link}
            title={tech.title}
          />
        );
      })}
    </div>
  );
};

type TechIconButtonProps = {
  icon: string;
  link: string;
  title: string;
};
const TechIconButton = (props: TechIconButtonProps) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div className="flex flex-col justify-between h-24 w-24 items-center gap-2 hover:shadow-lg hover:shadow-blue-300/50 p-2 rounded-lg">
        <img src={props.icon} className="max-h-16 max-w-16 text-blue-300" />
        <div className="text-white text-sm">{props.title}</div>
      </div>
    </a>
  );
};
