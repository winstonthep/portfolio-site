import { IonIcon } from "@ionic/react";
import { cloudDownload } from "ionicons/icons";
import resumeDownload from "../../assets/Winston Pantelakos Resume-December 2023.pdf"
export const DownloadResume = () => {
  return (
    <a className=" h-12 w-16 p-2 rounded-2xl bg-blue-300 hover:bg-white hover:cursor-pointer" href={resumeDownload} download="Winston-Pantelakos-Resume.pdf">
      <IonIcon icon={cloudDownload} className="h-full w-full text-white hover:text-blue-300"/>
    </a>
  );
};
