import { constructOutline, storefrontOutline, serverOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
export const About = () => {
  return (
    <div className="text-white flex flex-col justify-between h-full w-full gap-2 p-2">
      <div className=" w-full flex flex-col gap-4">
        <div className="text-3xl font-bold">About Me</div>
        <p>
          {`Howdy and welcome to my site! A bit about me - I am a fullstack web developer from Raleigh, North Carolina. I thoroughly enjoy working on all parts of the stack and the complex problem solving that goes along with it. Outside of work, I play a lot of tennis (4.5 NTRP for those of you who play USTA) and follow the WTA and ATP tours year round. I also spend my free time playing video games, reading, playing with my dachshund puppy Dash, cooking, and watching tv and films. Prior to software engineering, I had a stint in Hollywood at TNT, tbs, and HBO Max, but I ultimately decided that a tech career was the career for me.`}
        </p>
      </div>
      <div className=" w-full flex flex-col gap-4">
        <div className="text-3xl font-bold">What I Do</div>
        <div className="flex flex-row justify-center w-full gap-2 flex-wrap">
          <AboutTraits
            icon={storefrontOutline}
            title="Front End Development"
          />
          <AboutTraits
            icon={serverOutline}
            title="Back End Development"
          />
          <AboutTraits
            icon={constructOutline}
            title="Product Management"
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
  return <div className="h-36 w-[90%] sm:w-[45%] border border-blue-300 rounded-2xl flex flex-col md:flex-row p-6 gap-4 items-center">
    <IonIcon icon={props.icon} className="h-16 w-16 !fill-blue-300 !stroke-blue-300 text-blue-300" />
    <div className="w-full text-center">{props.title}</div>
  </div>;
};
