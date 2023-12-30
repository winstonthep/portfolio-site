import ReactGA from "react-ga4";
const trackingId = "G-VV09FHXN7N";
ReactGA.initialize(trackingId);

export const contactItemClicked = (button: string) => {
  ReactGA.event(`${button}_contactItemClicked`);
};

export const augieClicked = () => {
  ReactGA.event("augie_clicked");
};

export const moviedleClicked = () => {
  ReactGA.event("moviedle_clicked");
};

export const posterdleClicked = () => {
  ReactGA.event("posterdle_clicked");
};

export const nflxdleClicked = () => {
  ReactGA.event("nflxdle_clicked");
};

export const bookdleClicked = () => {
  ReactGA.event("bookdle_clicked");
};

export const tvdleClicked = () => {
  ReactGA.event("tvdle_clicked");
};

export const promptLockerClicked = () => {
  ReactGA.event("promptlocker_clicked");
};

export const workClicked = () => {
  ReactGA.event("work_clicked");
};

export const aboutClicked = () => {
  ReactGA.event("about_clicked");
};

export const resumeClicked = () => {
  ReactGA.event("resume_clicked");
};
