import moviedlecard from "../../assets/moviedle_card.webp";
import posterdlecard from "../../assets/posterdle_card.webp";
import nflxdlecard from "../../assets/nflxdle_card.webp";
import bookdlecard from "../../assets/bookdle_card.webp";
import tvdlecard from "../../assets/tvdle_card.webp";
import promptlockercard from "../../assets/promptlocker.png";
import augiecard from "../../assets/augiepreviewimg.png";

import expresscard from '../../assets/express.png';
import css3card from '../../assets/icons8-css3-48.png';
import html5card from '../../assets/icons8-html-48.png';
import javascriptcard from '../../assets/icons8-javascript-48.png';
import nodejscard from '../../assets/icons8-nodejs-48.png';
import reactcard from '../../assets/icons8-react-native-48.png';
import typescriptcard from '../../assets/icons8-typescript-48.png';
import nestjscard from '../../assets/icons8-nestjs-48.png';
import tailwindcsscard from '../../assets/icons8-tailwind-css-48.png';

export enum DetailsSectionEnum {
  ABOUT = "About",
  RESUME = "Resume",
  WORK = "Work",
}


export const jobExperience = [
  {
    company: "Aug X Labs",
    title: "Fullstack Software Engineer",
    date: "May 2022 - September 2023",
    description: "I work on Google's search engine.",
    taskBulletPoints: [
      "Collaborated with a lean start-up team and external partners to engineer and deliver user-facing features for 7 web-based desktop and mobile games, with an average of 10,000 - 40,000 daily active users. Leveraged Typescript, React, Redux-Saga, and Python to successfully contribute to the sale of the sites to these external partners",
      "Customized deployment pipelines for each of the 7 applications utilizing Github Actions and Cloudflare, while managing DNS settings for each site as well as helping with the main product",
      "Built multiple Proof-of-Concept, Generative AI integrations using NestJS, React and Redux-Saga, showcasing the potential viability of the main product, effectively utilized in demos for attracting potential investors",
      "Spearheaded the development of the mobile version of the main product, optimizing the video editing process for mobile limitations",
      "Acted as main frontend developer, revamping the entire UI and UX for 2 key pages within the app and constructed our new, multi-step Wizard creation flow and process, making use of React, TailwindCSS, GraphQL and NestJS"
    ]

  },
  {
    company: "HBO Max",
    title: "Executive Assistant",
    date: "March 2019 - August 2021",
    description: "I worked on Facebook's search engine.",
    taskBulletPoints: [
      "Acted as an associate product manager on the Kids and Family team for the last 10 months of the role in addition to administrative duties, orchestrating product strategy and roadmap collaboration with Growth Marketing to drive kid profile creation within and outside of the streaming service",
      "Engaged in scaled agile software methodologies and researched and analyzed user behaviors, competitors and internal usage data to determine product requirements and write features and user stories",
      "Provided extensive administrative support to the EVP, DTC Global Product Management and SVP, DTC Global Ops and their teams simultaneously from the inception of HBO Max through 3 national and international product launches with over 250+ members across both teams, located around the globe",
      "Organized and coordinated large team offsite events and product demos across, multiple locations, virtual and in-person"
    ]
  },
  {
    company: "TNT/tbs",
    title: "Executive Assistant",
    date: "October 2017 - March 2019",
    description: "I worked on Amazon's search engine.",
    taskBulletPoints: [
      "Provided key support to the President and Chief Content Officer, TNT/tbs through administrative tasks such as scheduling and rolling calls as well as aid in organizing future personal engagements and events",
      "Consolidated and maintained guides sourced from records of all places visited and meetings taken for future use and reference"
    ]
  }
];

export const ProjectSites =[{
  title: "Augie",
  description: "Augie: AI Assisted Video Creation & Editing (beta preview)",
  link: "https://beta.meetaugie.com/",
  image: augiecard,

}, {
  title: "PromptLocker",
  description: "PromptLocker: a community for AI Artists to get and give feedback",
  link: "https://www.promptlocker.com/",
  image: promptlockercard,
},{
  title: "Moviedle",
  description: "Can you name the movie in 6 seconds or less?",
  link: "https://likewisetv.com/arcade/moviedle",
  image: moviedlecard,
},
{
  title: "Posterdle",
  description: "Can you name the movie poster in 20 seconds or less?",
  link: "https://likewisetv.com/arcade/posterdle",
  image: posterdlecard,
},
{
  title: "NFLXdle",
  description: "Can you name the movie in 6 seconds or less?",
  link: "https://likewisetv.com/arcade/nflxdle",
  image: nflxdlecard,
},
{
  title: "Bookdle",
  description: "For people who read",
  link: "https://likewisetv.com/arcade/bookdle",
  image: bookdlecard,
},
{
  title: "TVdle",
  description: "Can you name the tv show in 20 seconds or less?",
  link: "https://likewisetv.com/arcade/tvdle",
  image: tvdlecard,
}]

export const techs = [{
  title: "React",
  link: "https://reactjs.org/",
  image: reactcard,
},{
  title: "Typescript",
  link: "https://www.typescriptlang.org/",
  image: typescriptcard,
},{
  title: "Javascript",
  link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  image: javascriptcard,
},{
  title: "NodeJS",
  link: "https://nodejs.org/en/",
  image: nodejscard,
},{
  title: "Express",
  link: "https://expressjs.com/",
  image: expresscard,
},{
  title: "NestJS",
  link: "https://nestjs.com/",
  image: nestjscard,
},{
  title: "TailwindCSS",
  link: "https://tailwindcss.com/",
  image: tailwindcsscard,
},{
  title: "CSS3",
  link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  image: css3card,
},{
  title: "HTML5",
  link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  image: html5card,

}]