import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import regProject from "../../public/corpcomment.png";
import movixProject from "../../public/rmtdev.png";
import youtubeProject from "../../public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const personalData = {
  name: {
    english: "Suryansh Pathania",
    panjabi: "ਸੂਰਯਾਂਸ਼ ਪਠਾਨੀਆ",
  },
  firstName: "Suryansh",
  lastName: "Pathania",
  title: "Full-Stack Web Developer",
  greeting: {
    // panjabi: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ! 🦅🙏",
    english: "Hey there! 👋😀",
  },
  location: "Jalandhar, Punjab",
  description: "",
  avatarUrl: "https://avatars.githubusercontent.com/u/118669699?v=4",
  cvUrl:
    "https://drive.google.com/file/d/1WChah1tPFokhGQD4ccP9TQ4FMDBt4AhE/view?usp=drive_link",
  email: "sp.ssdps@gmail.com",
  github: "https://github.com/SuryanshPathania",
  linkedin: "https://www.linkedin.com/in/suryanshpathania/",
  socials: [
    {
      name: "Github",
      url: "https://github.com/SuryanshPathania",
    },
    {
      name: "LinkedIn",
      url: "https://github.com/SuryanshPathania",
    },
  ],
};

export const dynamicStrings = [
  "am a passionate Web Developer",
  "craft enganging Web Experiences",
  "love to solve intricate coding problems",
  "am currently seeking fresh opportunities",
];

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Jalandhar, Punjab",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "Jalandhar, Punjab",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Jalandhar, Punjab",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
]; // title, location, description, icon, date

export const projectsData = [
  {
    title: "Reg Project",
    description:
      "I worked as a Freelancer on this project for 6 months. It's a web app for managing persons entries with a complete login system.",
    tags: ["Node.js", "Express", "SQL", "Next.js", "Drizzle"],
    imageUrl: regProject,
  },
  {
    title: "CourseCatalyst",
    description:
      "CourseCatalyst is a MERN stack project of an online Course website with fully working backend, frontend, admin dashboard panel and payment system.",
    tags: ["Next.js", "MongoDB", "Express", "Redis"],
    imageUrl: movixProject,
  },
  {
    title: "Youtube Full Stack",
    description:
      "A Youtube clone application with working professional backend. Frontend in Next.js.",
    tags: ["Next.js", "Express", "Drizzle", "Tailwind", "PostgreSQL"],
    imageUrl: youtubeProject,
  },
  {
    title: "Movix",
    description:
      "A public web app for exploring movies and tv shows. It shows ratings, reviews, trailers, genres and more. User can search, filter and sort movies and tv shows.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: movixProject,
  },
];

export const skillsData = [
  "JavaScript",
  "Node.js",
  "TypeScript",
  "Express",
  "SQL",
  "MongoDB",
  "PostgreSQL",
  "Next.js",
  "Redux",
  "Tailwind",
  "React",
];
