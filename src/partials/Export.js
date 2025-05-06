import webDesign from "../asset/web-design.svg";
import mobileDesign from "../asset/mobile-design.svg";
import uxDesign from "../asset/ux-design.svg";
import uiDesign from "../asset/ui-design.svg";
import bankingDesign from "../asset/Banking-design.svg";
import bankingApp from "../asset/Banking-app.svg";
import fitnessApp from "../asset/Fitness-app.svg";
import dashboard from "../asset/Dashboard.svg";

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
    left:8,
    bottom:12
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
    left:10,
    bottom:16
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
    left:10,
    bottom:16,
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
    left:7,
    bottom:16
  },
];
