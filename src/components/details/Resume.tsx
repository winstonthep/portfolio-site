import { jobExperience } from "./types";
import { DownloadResume } from "./DownloadResume";
export const Resume = () => {
  return (
    <div className="text-white flex flex-col justify-between h-full w-full gap-2">
      <div className="h-full w-full flex flex-col gap-4">
        <div className="text-3xl font-bold flex flex-row gap-2 items-center">
          <div>Resume</div>
          <DownloadResume />
        </div>
        <div className="flex flex-col justify-between items-start">
          <div className="text-2xl font-bold">Experience</div>
          <div className="flex flex-col justify-between items-start">
            {jobExperience.map((job) => {
              return (
                <ResumeItem
                  title={job.title}
                  company={job.company}
                  date={job.date}
                  description={job.description}
                  tasks={job.taskBulletPoints}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-between items-start">
          <div className="text-2xl font-bold">Education</div>
          <div className="flex flex-col justify-between items-start w-full mt-4">
            <div className="flex-wrap flex flex-row justify-between w-full">
              <div className="text-xl flex-wrap ">
                {"Hack Reactor"} |{" "}
                <span className="text-blue-300">
                  {"Advanced Software Engineering Immersive"}
                </span>
              </div>
              <div className="text-lg italic text-gray-300">February 2022</div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start w-full my-2">
            <div className="flex-wrap flex flex-row justify-between w-full">
              <div className="text-xl flex-wrap ">
                {"University of California, Los Angeles"} |{" "}
                <span className="text-blue-300">
                  {"Bachelor of Arts, Economics"}
                </span>
              </div>
              <div className="text-lg italic text-gray-300">June 2017</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type ResumeItemProps = {
  title: string;
  company: string;
  description: string;
  date: string;
  tasks?: string[];
};
const ResumeItem = (props: ResumeItemProps) => {
  return (
    <div className="flex flex-col justify-between items-start my-4">
      <div className="text-xl">
        {props.title} | <span className="text-blue-300">{props.company}</span>
      </div>
      <div className="text-lg italic text-gray-300">{props.date}</div>
      {/* <div className="text-sm">{props.description}</div> */}
      <ul className="flex flex-col justify-between items-start list-disc pl-6">
        {props.tasks?.map((task) => {
          return <li className="text-sm">{task}</li>;
        })}
      </ul>
    </div>
  );
};
