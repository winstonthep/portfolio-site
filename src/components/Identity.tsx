import { logoLinkedin, mailOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

export const Identity = () => {
  return (
    <div className="ident bg-[#292929] m-2  border border-[#5c5c5c] rounded-2xl justify-around items-center gap-2 p-4">
      <img
        className="h-32 w-32 object-cover rounded-2xl"
        src="/winstonprof.JPG"
        alt="avatar"
      />
      <div className="text-white text-3xl font-bold text-center w-4/5">
        Winston Pantelakos
      </div>
      <div className="text-white text-lg text-center w-4/5">
        Fullstack Software Engineer
      </div>
      <div className="ident-items justify-center items-center gap-4">
        <IdentityItem
          icon={logoLinkedin}
          className={"!stroke-blue-300 fill-blue-300 h-12 w-4/5"}
          link={"https://www.linkedin.com/in/winston-pantelakos/"}
          title={"LINKEDIN"}
        />
        <IdentityItem
          icon={mailOutline}
          className={
            "!stroke-blue-300 !fill-blue-300  text-blue-300 h-12 break-words w-4/5"
          }
          link={"mailto:winstonspantelakos@gmail.com"}
          title={"EMAIL"}
          description={"winstonspantelakos@gmail.com"}
        />
      </div>
    </div>
  );
};

type IdentityItemProps = {
  icon: string;
  className: string;
  link: string;
  title: string;
  description?: string;
};
const IdentityItem = (props: IdentityItemProps) => {
  return (
    <div className="flex flex-row w-full">
      <a
        className="h-16 w-16 hover:bg-white p-2 border border-blue-300 flex flex-row items-center justify-center !drop-shadow-2xl rounded-2xl "
        target="_blank"
        href={props.link}
      >
        <IonIcon icon={props.icon} className={props.className} />
      </a>

      {/* <div className=" flex flex-col justify-center pl-4 break-words w-3/5">
        <div className="text-gray-400 text-md font-bold">{props.title}</div>
        <div className="text-white text-xs">{props.description}</div>
      </div> */}
    </div>
  );
};
