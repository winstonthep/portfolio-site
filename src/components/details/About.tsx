import { storefrontOutline, serverOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
export const About = () => {
  return (
    <div className="text-white flex flex-col justify-between h-full w-full gap-2">
      <div className="h-1/2 w-full flex flex-col gap-4">
        <div className="text-3xl font-bold">About Me</div>
        <p>
          {`I am a fullstack web developer from Raleigh, North Carolina. I thoroughly enjoy working on all parts of the stack and the complex problem solving that goes along with it. Outside of work, I play a lot of tennis (4.5 NTRP for those of you who play USTA) and follow the WTA and ATP tours year round. I also enjoy video games, playing with my dachshund puppy, cooking, and watching tv and films. Prior to software engineering, I was working in Hollywood.`}
        </p>
      </div>
      <div className="h-1/2 w-full flex flex-col gap-4">
        <div className="text-3xl font-bold">What I Do</div>
        <div className="flex flex-row justify-between w-full gap-2">
          <AboutTraits
            icon={storefrontOutline}
            title="Front End Development"
          />
          <AboutTraits
            icon={serverOutline}
            title="Back End Development"
          />
        </div>
      </div>
    </div>
  );
};

type AboutTraitsProps = {
  icon: string;
  title: string;
};
const AboutTraits = (props : AboutTraitsProps) => {
  return <div className="h-36 w-1/2 border border-blue-300 rounded-2xl flex flex-col sm:flex-row p-6 gap-4 items-center">
    <IonIcon icon={props.icon} className="h-16 w-16 !fill-blue-300 !stroke-blue-300 text-blue-300" />
    <div>{props.title}</div>
  </div>;
};
