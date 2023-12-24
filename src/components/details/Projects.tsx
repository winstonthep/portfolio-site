import { ProjectSites } from "./types";
export const Projects = () => {
  return (
    <div className="w-full min-h-[556px]  flex flex-row flex-wrap gap-6 justify-center items-center">
      <div className="text-3xl font-bold w-full text-white">My Work</div>
      <div className="w-full">
        <div className="h-2 w-16 rounded-full bg-blue-300"></div>
      </div>

      {ProjectSites.map((project) => {
        return (
          <ProjectPreview
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        );
      })}
    </div>
  );
};

const ProjectPreview = (props: {
  title: string;
  description: string;
  image: string;
  link: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img
          src={props.image}
          className="max-h-[224px] object-cover rounded-2xl"
        />
      </a>
      <div className="w-full h-full flex flex-col justify-center items-center text-white">
        <div className="text-xl sm:text-2xl font-bold">{props.title}</div>
        <div className="text-base sm:text-lg">{props.description}</div>
      </div>
    </div>
  );
};
