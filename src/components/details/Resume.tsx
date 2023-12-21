import { jobExperience } from "./types";
import { DownloadResume } from "./DownloadResume";
import { IonIcon } from "@ionic/react";
import { briefcaseOutline, bookOutline, desktopOutline } from "ionicons/icons";
export const Resume = () => {
  return (
    <div className="text-white flex flex-col justify-between h-full w-full gap-2">
      <div className="h-full w-full flex flex-col gap-4">
        <div className="text-3xl font-bold flex flex-row gap-2 items-center">
          <div>Resume</div>
          <DownloadResume />
        </div>
        <div className="h-2 w-16 rounded-full bg-blue-300">

        </div>
        <div className="flex flex-col justify-between items-start">
          <div className="text-xl sm:text-2xl font-bold flex flex-row items-center justify-start gap-2">
            <ResumeIcon icon={desktopOutline}/>
            <div>Technologies
              </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-start">
          <div className="text-xl sm:text-2xl font-bold flex flex-row items-center justify-start gap-2">
            <ResumeIcon icon={briefcaseOutline}/>
            <div>Experience
              </div>
          </div>
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
        <div className="text-xl sm:text-2xl font-bold flex flex-row items-center justify-start gap-2">
            <ResumeIcon icon={bookOutline}/>
            <div>Education
              </div>
          </div>
          <div className="flex flex-col justify-between items-start w-full mt-4">
            <div className="flex-wrap flex flex-row justify-between w-full">
              <div className="text-lg sm:text-xl flex-wrap ">
                {"Hack Reactor"} |{" "}
                <span className="text-blue-300">
                  {"Advanced Software Engineering Immersive"}
                </span>
              </div>
              <div className="text-md sm:text-lg italic text-gray-300">February 2022</div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start w-full my-2">
            <div className="flex-wrap flex flex-row justify-between w-full">
              <div className="text-lg sm:text-xl flex-wrap ">
                {"University of California, Los Angeles"} |{" "}
                <span className="text-blue-300">
                  {"Bachelor of Arts, Economics"}
                </span>
              </div>
              <div className="text-md sm:text-lg italic text-gray-300">June 2017</div>
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
      <div className="text-lg sm:text-xl">
        {props.title} | <span className="text-blue-300">{props.company}</span>
      </div>
      <div className="text-md sm:text-lg italic text-gray-300">{props.date}</div>
      {/* <div className="text-sm">{props.description}</div> */}
      <ul className="flex flex-col justify-between items-start list-disc pl-6">
        {props.tasks?.map((task) => {
          return <li className="text-xs sm:text-sm">{task}</li>;
        })}
      </ul>
    </div>
  );
};

const ResumeIcon = (props: { icon: string }) => {
  return (
    <div className="w-8 h-8 sm:h-16 sm:w-16 rounded-lg sm:rounded-2xl border border-blue-300 flex flex-col justify-center items-center">
      <IonIcon icon={props.icon} className="h-5 w-5 sm:h-10 sm:w-10 text-blue-300" />
    </div>
  );
}
