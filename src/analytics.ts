import ReactGA from 'react-ga4';
const trackingId = "G-VV09FHXN7N";
ReactGA.initialize(trackingId);

export const contactItemClicked = (button: string) => {
  ReactGA.event(`${button}_contactItemClicked`);
};

