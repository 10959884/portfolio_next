import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jude Addo",
  initials: "JA",
  url: "https://github.com/10959884",
  location: "Roman Ridge,Accra",
  locationLink: "https://maps.app.goo.gl/rGuHdFjKp35N1dDfA",
  description:
    "A highly motivated tech enthusiast with a passion for building innovative and user-friendly products. Proven ability to manage projects, develop websites, and create content. Seeking a challenging and rewarding position in the tech industry.",
  summary:
    "At the end of 2024 I decided to venture into to various niches such as photography,music production and accounting.",
  avatarUrl: "/me2.png",
  skills: [
    "React",
    "Angular.js",
    "Typescript",
    "Node.js",
    "Lightroom",
    "HTML",
    "CSS",
    "Flutterflow",
    "Figma",
    "Java",
    "Spline",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "judeaddo555@gmail.com",
    tel: "+233256979394",
    social: {
      GitHub: {
        name: "10959884",
        url: "https://github.com/10959884",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://gh.linkedin.com/in/jude-addo-70a488228",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://gh.linkedin.com/in/jude-addo-70a488228",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/judeaddo-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Gmail",
        url: "judeaddo555@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "AmaliTech",
      href: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi4jMvQhfaMAxVekFAGHWHYDPMYABAAGgJkZw&co=1&gclid=Cj0KCQjwiLLABhCEARIsAJYS6ukiS_DXURphGW2BDSYEqaUFaj-MeoTpgKmb9eWxo6VyCXBdnMPzh5QaAv9nEALw_wcB&ohost=www.google.com&cid=CAESV-D2vQtsDmLwz7nJ9Ulbg0yrqqJI1VmWj4Nqlci0Mc1abrww3UN8M5hRcplCvEFDNB5PbYN_rcw497XCqhkFqz5QK9oD2-pm8jAN91_xJ26YcdkX_HYbMQ&sig=AOD64_2ypmsv08v6HzVOdNAAyXUJsz-eqA&q&adurl&ved=2ahUKEwi7gsfQhfaMAxVUVEEAHZEwBAAQ0Qx6BAgHEAE",
      badges: [],
      location: "East Legon",
      title: "Frontend Intern",
      logoUrl: "/amali.jpeg",
      start: "March 2024",
      end: "May 2024",
      description:
        "•	Intern at AmaliTech as a frontend developer in the service center.Upskilled in Angular and typerscript.",
    },
    {
      company: "BandWagon Live",
      badges: [],
      href: "https://thebandwagon.live/",
      location: "Spintex",
      title: "Accounts and Administrative Intern",
      logoUrl: "/band.png",
      start: "January 2025",
      end: "March 2025",
      description:
        "Currently interning at The BandWagon Live under Accounts and Administration. My work is1 essential in supporting the financial and administrative aspects of the company, ensuring seamless operations across all departments. o	Assisting in preparing budgets for campaigns, events, and projects. o	Recording and tracking company expenses, ensuring accuracy and organization. o	Helping with the preparation of invoices and manage follow-ups on payments. o	Handling administrative tasks such as scheduling, filing, and document organization.",
    },

    {
      company: "Frema Art Gallery",
      href: "",
      badges: [],
      location: "Roman Ridge",
      title: "Retail Personnel",
      logoUrl: "/frema.png",
      start: "January 2019",
      end: "April 2019",
      description:
        "Provided customer service to gallery visitors o	Managed inventory and orders o	Organized events and promotions",
    },
    {
      company: "Ghana Civil Aviation Authority",
      href: "https://www.gcaa.com.gh/web/",
      badges: [],
      location: "Airport",
      title: "Tech Intern",
      logoUrl: "/gcca.png",
      start: "May 2025",
      end: "June 2025",
      description: "",
    },
  ],
  education: [
    {
      school: "Unversity of Ghana",
      href: "https://www.ug.edu.gh/",
      degree: "Bachelor's Degree in Information Technology",
      logoUrl: "/ug.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "St. Augustine's College",
      href: "https://en.wikipedia.org/wiki/St._Augustine%27s_College_(Cape_Coast)",
      degree: "Senior High School",
      logoUrl: "/augusco.png",
      start: "2018",
      end: "2021",
    },
    {
      school: "Jack and Jill School Accra",
      href: "https://jnjschool.org/",
      degree: "Primary and Junior High",
      logoUrl: "/jnj.jpeg",
      start: "2009",
      end: "2017",
    },
    {
      school: "•	Association International School",
      href: "https://ais.edu.gh/",
      degree: "Primary School",
      logoUrl: "/ais.jpeg",
      start: "2007",
      end: "2009",
    },
  ],
  projects: [
    {
      title: "Plant Dori",
      href: "https://plantdori.netlify.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description: "Basic reminder application foor my plant(Dori)",
      technologies: ["Angular.js", "Javascript", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://plantdori.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/plannt.png",
      video: "",
    },
    {
      title: "Rock Paper Scissors",
      href: "https://rock-papar-scissors-plus.netlify.app/",
      dates: "June 2023 - July 2023",
      active: true,
      description: "Basic rock paper scissors game.",
      technologies: ["Angular.js", "Typescript", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://rock-papar-scissors-plus.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rock.png",
      video: "",
    },
    {
      title: "Clinic",
      href: "https://ugclinic2.netlify.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description: "Appointmemt booking for my school clininc.",
      technologies: ["React", "Typescript", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://ugclinic2.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/clinic.png",
      video: "",
    },
    {
      title: "Photography",
      href: "https://vs.co/fpq3802g",
      dates: "April 2023 - Present",
      active: true,
      description: "Shots",
      technologies: ["Lightroom", "Canon 4000D", "iPhone XS"],
      links: [
        {
          type: "Image",
          href: "https://vs.co/fpq3802g",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pho.jpg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Photos",
      dates: "June 2025",
      location: "Accra",
      description: "Photos",
      image: "/pho.jpg",
      mlh: "",
      links: [],
    },
    {
      title: "",
      dates: "",
      location: "",
      description: "",
      image: "",
      mlh: "",
      links: [],
    },
  ],
} as const;
