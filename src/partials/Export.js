import webDesign from "../asset/web-design.svg";
import mobileDesign from "../asset/mobile-design.svg";
import uxDesign from "../asset/ux-design.svg";
import uiDesign from "../asset/ui-design.svg";
import bankingDesign from "../asset/Banking-design.svg";
import bankingApp from "../asset/Banking-app.svg";
import fitnessApp from "../asset/Fitness-app.svg";
import dashboard from "../asset/Dashboard.svg";
import David from "../asset/David.svg";
import Oluwatimilehin from "../asset/Oluwatimilehin.svg";
import Ayomipo from "../asset/Ayomipo.svg";
import Tobiloba from "../asset/Tobiloba.svg";
import { FaPhone } from "react-icons/fa6";
import { BiEnvelope } from "react-icons/bi";

export const navs = [
  {
    link: "#home",
    title: "Home",
  },
  {
    link: "#portfolio",
    title: "Portfolio",
  },
  {
    link: "#service",
    title: "Service",
  },
  {
    link: "#testimonials",
    title: "Testimonials",
  },
  {
    link: "#contact",
    title: "Contact",
  },
];
export const stats = [
  {
    number: new Date().getFullYear() - 2022,
    content: "Years of Experience"
  },
  { number: 20, content: "Project Completed" },
  { number: 50, content: "Happy Clients" },
];
export const services = [
  {
    image: webDesign,
    skill: "Web design",
  },
  {
    image: mobileDesign,
    skill: "Mobile design",
    position: "",
  },
  {
    image: uxDesign,
    skill: "Ux design",
  },
  {
    image: uiDesign,
    skill: "Ui design",
    position: "",
  },
];

export const projects = [
  {
    title: "Mobile Banking design",
    content:
      "Designed an intuitive mobile banking app focused on user-friendly navigation, secure transactions, and seamless account management, ensuring a smooth and efficient banking experience for users",
    deg: -8,
    image: bankingDesign,
    direction: "row",
    width: "530",
    height: "380",
    left: 8,
    bottom: 12,
  },
  {
    title: "Mobile Fittness App",
    content:
      "Developed a secure and user-friendly mobile banking app, enabling effortless account management, transactions, and financial tracking.",
    deg: 10,
    image: fitnessApp,
    direction: "row-reverse",
    width: "520",
    height: "390",
    left: 10,
    bottom: 16,
  },
  {
    title: "Mobile Banking App",
    content:
      "Designing seamless mobile banking experiences that prioritize simplicity, trust, and user empowerment. From intuitive navigation to secure transactions, the focus is on making finance feel less complex and more personal",
    deg: -7,
    image: bankingApp,
    direction: "row",
    width: "525",
    height: "370",
    left: 10,
    bottom: 16,
  },
  {
    title: "Dashboard",
    content:
      "Crafted a visually intuitive dashboard for data visualization, offering users clear insights and streamlined decision-making tools.",
    deg: 7,
    image: dashboard,
    direction: "row-reverse",
    width: "530",
    height: "370",
    left: 7,
    bottom: 16,
  },
];

export const reviews = [
  {
    image: David,
    content:
      "“Working with Daniel was an absolute pleasure. His attention to detail, understanding of user experience, and ability to deliver creative yet functional designs has truly elevated the projects we've worked on together. His seamless collaboration and proactive approach make him an invaluable asset to any team”",
    name: "Omotoso David",
    title: "Web developer",
  },
  {
    image: Oluwatimilehin,
    content:
      "“Collaborating with Daniel on multiple product cycles has been a game-changer. His design thinking is user-centered, intentional, and incredibly innovative. He doesn't just make things look good — he ensures they work beautifully. His ability to translate complex product requirements into intuitive interfaces made our handoff to developers smoother than ever. Truly one of the most reliable designers I've worked with”",
    name: "Omotoso Oluwatimilehin",
    title: "Product manager, Product designer",
  },
  {
    image: Ayomipo,
    content:
      "“Daniel's design process is backed by data, and that's something I absolutely appreciate. He actively seeks out insights, asks the right questions, and turns findings into clean, accessible design decisions. Whether it's dashboards or mobile flows, he ensures users actually understand what they're seeing — and that's not easy. It's always a joy syncing design with his level of thoughtfulness.”",
    name: "Adesanya Ayomipo",
    title: "Data analyst",
  },
  {
    image: Tobiloba,
    content:
      "What sets Daniel apart as a designer is his ability to think like a PM. He gets product strategy, understands priorities, and designs for impact. From ideation to final prototype, he brings clarity and intentionality. Working with him has been seamless — he listens, adapts fast, and always delivers high-quality work that speaks for itself.",
    name: "Adesanya Tobiloba",
    title: "Product manager",
  },
];

export const contacts = [
  {
    icon: <FaPhone />,
    title: "Phone",
    content: "+234 8149 162 437",
  },
  {
    icon: <BiEnvelope/>,
    title: "Email",
    content: "danielomotoso52@gmail.com",
  },
];
