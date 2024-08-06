import type { Project } from "types";
import {
  AWS,
  EXPRESS,
  MYSQL,
  REACT,
  STRIPE_API,
  TAILWIND_CSS,
  TYPESCRIPT,
} from "./technologies";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Notebag",
    repoName: "notebag",
    desc: "A full stack notes app heavily influenced by Google Keep. Includes a fully responsive client site built with React and an Express API to handle notes CRUD. The API also handles username and password authorization and tracks user login status using JSON web tokens.",
    img: {
      file: "notebag-screenshot.png",
      alt: "Notes app screenshot",
    },
    demoURL: "https://notebag.site",
    repos: {
      client: "https://github.com/RobertKelley1987/notebag-client",
      server: "https://github.com/RobertKelley1987/notebag-server",
    },
    technologies: [REACT, EXPRESS, TYPESCRIPT, TAILWIND_CSS, MYSQL, AWS],
  },
  {
    id: 2,
    title: "Blood Incantation Web Store",
    repoName: "blood-store",
    desc: "A fully responsive web store for the band Blood Incantation. The site processes payments using the Stripe API, and I integrated Amazon SES to send emails to an admin account when customers use the site's contact form.",
    img: {
      file: "blood-store-screenshot.png",
      alt: "E-commerce site screenshot",
    },
    demoURL: "https://fakebloodstore.xyz",
    repos: {
      client: "https://github.com/RobertKelley1987/blood-store-client",
      server: "https://github.com/RobertKelley1987/blood-store-server",
    },
    technologies: [REACT, EXPRESS, TYPESCRIPT, TAILWIND_CSS, STRIPE_API, AWS],
  },
];
