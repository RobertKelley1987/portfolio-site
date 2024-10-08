export type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactMethod = "email" | "form";

export type Technology = {
  name: string;
  title: string;
  url: string;
};

export type Image = {
  src: string;
  alt: string;
};

export type Project = {
  id: number;
  title: string;
  repoName: string;
  imgs: Image[];
  desc: string;
  demoURL: string;
  repos?: {
    client?: string;
    server?: string;
  };
  technologies: Technology[];
};
