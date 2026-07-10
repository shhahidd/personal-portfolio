import thiranexLogo from "../assets/thiranex_logo.png";
import resumeLogo from "../assets/resume_logo.jpg";
import resumeLogoDark from "../assets/resume_logo_dark.jpg";
import stAgnesLogo from "../assets/st_agnes_logo.png";
import ecommerceWebAppImg from "../assets/ecommerce_web_app.png";
import vehicleRecognitionImg from "../assets/vehicle_recognition_system.png";
import attendanceCalculatorImg from "../assets/attendance_calculator.png";


import {
  GitHubIcon,
  LetterIcon,
  LinkedInIcon,
  PhoneIcon,
} from "@barrelrolla/react-components-library";

// Core Personal Info
export const personalInfo = {
  fullName: "Shahid Patel",
  firstName: "Shahid",
  lastName: "Patel",
  title: "Full-Stack Developer",
  bioParagraph: "Full-Stack Developer with hands-on experience building scalable backends and highly responsive user interfaces. Specializing in React, Node.js, Express, FastAPI, PostgreSQL, Python, and TypeScript. Experienced in designing robust database layers, RESTful API gateways, and interactive web tools.",
};

// Hero Section Copy
export const heroContent = {
  titlePart1: "Shahid",
  titlePart2: "Patel",
  subtitle: "Full-Stack Developer",
  description: personalInfo.bioParagraph,
  projectsBtn: "My projects",
  contactsBtn: "My contacts",
};

// Navbar & Footer General Labels
export const navContent = {
  brandName: "Shahid",
  resumeBtn: "View Resume",
};

// Contacts Page Copy
export const contactsContent = {
  heading: "Contact Me",
  tagline: "I'm available on almost every platform. Send me a message and I'll reply within 24 hours.",
  resumeCta: "See My Resume",
};

// Resume Page Details
export const resumeContent = {
  title: "My Resume",
  subtitle: "View below or download a copy for your records.",
  downloadCta: "↓ Download PDF",
  embedUrl: "https://drive.google.com/file/d/1vFa5G3BPJvXLknQpQ1lg4BwQoKqxPFC2/preview",
  downloadUrl: "https://drive.usercontent.google.com/download?id=1vFa5G3BPJvXLknQpQ1lg4BwQoKqxPFC2&export=download&authuser=0&confirm=t&uuid=accdc092-3872-4546-a7db-77ee1e3f4ad0&at=ABswASYe1hrG6S63sgcj8yqeuX_R:1783632232030",
};

// Homepage Section Headings
export const homeSectionTitles = {
  experience: "Experience",
  education: "Education",
  projects: "Projects",
};

// Social Contacts
export const contacts = [
  {
    title: "Github",
    url: "https://github.com/shhahidd",
    text: "github.com/shhahidd",
    icon: GitHubIcon,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/shhahidd",
    text: "linkedin.com/in/shhahidd",
    icon: LinkedInIcon,
  },
  {
    title: "Email",
    url: "mailto:patelshahid260@gmail.com",
    text: "patelshahid260@gmail.com",
    icon: LetterIcon,
  },
  {
    title: "Phone",
    url: "tel:+918296503928",
    text: "+91 829 650 3928",
    icon: PhoneIcon,
  },
];

export type BioCategory = "experience" | "education" | "projects";

export type BioDataType = {
  id: string;
  category: BioCategory;
  img: string;
  imgDark?: string;
  title: string;
  specialty?: string;
  description: string;
  fullInfo: string;
  dates?: string;
  website?: string;
  github?: string;
  imgClass?: string;
  bgColor?: string;
};

export const experienceData: BioDataType[] = [
  {
    id: "thiranex",
    category: "experience",
    img: thiranexLogo,
    title: "Thiranex",
    specialty: "Full Stack Development Intern | Remote",
    description:
      "Developed and maintained full-stack web applications using React, Node.js, Express.js, and PostgreSQL.",
    fullInfo:
      "Worked as a Full Stack Development Intern at Thiranex, building robust features and designing database layers.<ol><li>Developed and maintained full-stack web applications using React, Node.js, Express.js, and PostgreSQL.</li><li>Built responsive and user-friendly interfaces with modern web technologies.</li><li>Designed RESTful APIs and integrated frontend applications with backend services.</li><li>Implemented authentication, CRUD operations, and database management features.</li><li>Used Git and GitHub for version control and project collaboration.</li></ol>",
    dates: "Jul 2026 - Aug 2026",
    website: "",
    bgColor: "#fff",
    imgClass:
      "scale-90 object-contain group-hover:scale-100 group-focus-visible:scale-100 transition py-6",
  },
];

export const educationData: BioDataType[] = [
  {
    id: "st-agnes",
    category: "education",
    img: stAgnesLogo,
    title: "St. Agnes College, Mangalore",
    specialty: "Bachelor of Computer Applications",
    description:
      "Completed Bachelor of Computer Applications, with focus on core programming, web development, and database architectures.",
    fullInfo:
      "Bachelor of Computer Applications undergraduate study at St. Agnes College, Mangalore.<ol><li>Acquiring strong foundations in logic and object-oriented programming.</li><li>Building web architectures, DOM management, and database normalization pipelines.</li></ol>",
    dates: "2023 - 2026",
    imgClass:
      "scale-[1.15] object-contain group-hover:scale-[1.25] group-focus-visible:scale-[1.25] transition py-2",
    website: "",
    bgColor: "#fff",
  },
];

export const projectsData: BioDataType[] = [
  {
    id: "vehicle-recognition",
    category: "projects",
    img: vehicleRecognitionImg,
    bgColor: "#1b1c1d",
    imgClass:
      "object-cover transition scale-90 group-hover:scale-100 group-focus-visible:scale-100",
    title: "Vehicle Recognition and Plate Detection System",
    description:
      "React application utilizing OCR to detect vehicles, extract license plate numbers, and log entries in Supabase database.",
    fullInfo:
      "Developed a React based application to detect vehicles and extract number plate text using OCR.<ol><li>Processes vehicle images to parse and extract alphanumeric characters in real-time.</li><li>Implemented Tesseract.js for number plate recognition from uploaded images.</li><li>Integrated Supabase database to store vehicle detection results.</li><li>Built responsive UI using TailwindCSS and modern React components.</li></ol>",
    website: "https://github.com/shhahidd/Vehicle-Recognition-System",
    github: "https://github.com/shhahidd/Vehicle-Recognition-System",
    dates: "",
  },
  {
    id: "ecommerce-app",
    category: "projects",
    img: ecommerceWebAppImg,
    imgClass:
      "object-cover transition scale-90 mt-6 group-hover:scale-100 group-focus-visible:scale-100",
    bgColor: "#1b2834",
    title: "E-Commerce Web Application",
    description:
      "Full-stack shopping application built with Node.js, Express.js, and JWT auth, featuring admin panel and Supabase/MySQL integration.",
    fullInfo:
      "Developed a full-stack e-commerce web application using Node.js, Express.js, JavaScript, HTML, and CSS.<ol><li>Implemented JWT authentication, shopping cart, checkout, and order management features.</li><li>Built an admin dashboard for product and order management with CRUD functionality.</li><li>Integrated Supabase, MySQL, MongoDB, and JSON-based storage for flexible data management.</li><li>Designed a responsive user interface with product search, filtering, and inventory management.</li></ol>",
    website: "https://github.com/shhahidd",
    github: "https://github.com/shhahidd",
    dates: "",
  },
  {
    id: "attendance-calculator",
    category: "projects",
    img: attendanceCalculatorImg,
    imgClass:
      "object-cover transition scale-90 group-hover:scale-100 group-focus-visible:scale-100",
    bgColor: "#1b2834",
    title: "Attendance Calculator",
    description:
      "A web application designed for students to track daily attendance, manage schedule thresholds, and calculate the number of classes required to maintain a target percentage.",
    fullInfo:
      "Developed a responsive web application to calculate and track college/school attendance.<ol><li>Vibe-coded a responsive HTML, CSS, and JavaScript web application to help students calculate and manage their attendance.</li><li>Instantly calculates current attendance percentage based on classes attended and conducted.</li><li>Determines how many classes can be skipped or need to be attended to reach a target attendance percentage.</li><li>Features a clean, responsive interface optimized for desktop and mobile devices.</li></ol>",
    dates: "",
    website: "https://github.com/shhahidd/Attendance-Calculator",
    github: "https://github.com/shhahidd/Attendance-Calculator",
  },
  {
    id: "biterite",
    category: "projects",
    img: resumeLogoDark,
    imgDark: resumeLogo,
    title: "BiteRite Smart Nutrition",
    description:
      "A web-based health and nutrition dashboard developed during a college Hackathon. Helps users track water, fasts, and steps.",
    fullInfo:
      "A web-based dashboard designed to help users track their daily health and wellness goals.<ol><li>Tracks calories, water intake, fasting schedules, and water intake.</li><li>Logs sleep cycles and counts daily steps.</li><li>Saves data locally using browser LocalStorage for immediate persistence.</li></ol>",
    website: "https://github.com/shhahidd/BiteRite",
    github: "https://github.com/shhahidd/BiteRite",
    dates: "",
  },
];
