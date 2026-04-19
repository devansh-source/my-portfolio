
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project3,
  movie_project,
  car_rental,
  bakery,
  mysql,
  express,
  aws,
  mui,

  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  python,
  java,
} from '../assets'


// Company icons
import ddu from "../assets/company/ddu.png";
import creative_werk from "../assets/company/creative_werk.png";
import starbucks from "../assets/company/starbucks.png";
import meta from "../assets/company/meta.png";


export const navLinks = [


  {
    id: "about",
    title: "About",

  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Management",
    icon: mobile,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },


];

const experiences = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    company_name: "Dharmsinh Desai University (DDU)",
    icon: ddu,
    iconBg: "#000000ff",
    date: "2023 – Present",
    points: [
      "Currently pursuing BCA with a focus on software development and database management.",
      "Developed projects such as Car Rental System, Bakery Management System, Movie Booking System, and Inventory Management System.",
      "Gaining practical experience in Python, Java, and MySQL.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Creative Werk Designs",
    icon: creative_werk,
    iconBg: "#ffffff",
    date: "December 2025 – March 2026",
    points: [
      "Developed responsive web interfaces using HTML, CSS, and JavaScript.",
      "Improved website performance and enhanced user experience.",
      "Collaborated with team members to develop and maintain web applications.",
      "Gained hands-on experience in a real-world development environment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Devansh proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Devansh does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Devansh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Car Rental System",
    description:
      "A web-based application designed to manage car rentals and tour bookings efficiently. It allows users to browse available vehicles, check details, and make bookings easily. The system also provides an admin dashboard to manage vehicle availability, customer data, bookings, drivers, and payment records, ensuring smooth and organized operations.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "CodeIgniter",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "white-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: car_rental,
    source_code_link: "https://github.com/",
  },
  {
    name: "Bakery Management System",
    description:
      "A web-based application developed for managing online bakery orders and operations. It enables users to explore products, add items to the cart, and place orders seamlessly. The system includes features for managing products, inventory, orders, and delivery processes, along with order tracking to enhance the overall user experience.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "white-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
    ],
    image: bakery,
    source_code_link: "https://github.com/",
  },
  {
    name: "Movie Booking System",
    description:
      "A full-stack web application built using the MERN stack that allows users to browse movies, view show timings, and book tickets efficiently. It includes features such as real-time seat selection, booking management, and a responsive user interface, ensuring a smooth and user-friendly experience.",
    tags: [
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "white-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
    ],
    image: movie_project,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
