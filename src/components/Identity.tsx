import { logoLinkedin, mailOutline, phonePortrait, logoGithub } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

export const Identity = () => {
  return (
    <div className="ident bg-[#292929] m-2 rounded-2xl justify-around items-center gap-2 p-4">
      <img
        className="h-20 w-20 sm:h-32 sm:w-32 object-cover rounded-2xl p-1 border border-blue-300 !drop-shadow-2xl"
        src="/winstonprof.JPG"
        alt="avatar"
      />
      <div className="flex flex-col justify-center items-center gap-4 max-w-full">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="text-white text-xl sm:text-3xl font-bold text-center w-4/5">
            Winston Pantelakos
          </div>
          <div className="text-white text-sm sm:text-lg text-center w-4/5">
            Fullstack Web Developer
          </div>
        </div>
        <div className="ident-items justify-center items-center  flex-wrap">
          <IdentityItem
            icon={logoLinkedin}
            className={"!stroke-blue-300 fill-blue-300 h-12 w-4/5"}
            link={"https://www.linkedin.com/in/winston-pantelakos/"}
            title={"LINKEDIN"}
            description={"https://www.linkedin.com/in/winston-pantelakos/"}
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
          <IdentityItem
            icon={logoGithub}
            className={
              "!stroke-blue-300 !fill-blue-300  text-blue-300 h-12 w-4/5"
            }
            link={"https://github.com/winstonthep"}
            title={"GITHUB"}
            description={"https://github.com/winstonthep"}
          />
          <IdentityItem
            icon={phonePortrait}
            className={
              "!stroke-blue-300 !fill-blue-300  text-blue-300 h-12 w-4/5"
            }
            link={"tel:910-309-4191"}
            title={"PHONE"}
            description={"910-309-4191"}
            />
        </div>
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
        className="ident-button hover:bg-white p-2 border border-blue-300 flex flex-row items-center justify-center !drop-shadow-2xl rounded-2xl "
        target="_blank"
        href={props.link}
      >
        <IonIcon icon={props.icon} className={props.className} />
      </a>
    </div>
  );
};
