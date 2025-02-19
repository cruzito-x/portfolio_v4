import Work1 from "../pictures/Frontend/work1.png";
import Work2 from "../pictures/Frontend/work2.png";
import Work3 from "../pictures/Frontend/work3.png";
import Work4 from "../pictures/Frontend/work4.png";
import Work5 from "../pictures/Frontend/work5.png";
import Work6 from "../pictures/Frontend/work6.png";
import Work7 from "../pictures/Frontend/work7.png";
import Work8 from "../pictures/Frontend/work8.png";
import Work9 from "../pictures/Designs/work1.png";
import Work10 from "../pictures/Designs/work2.png";
import Work11 from "../pictures/Backend/work1.png";

/* =================== TECHS ICONS =================== */

const techData = {
  html: {
    name: "HTML",
    color: "var(--html-color)",
    icon: <i className="bx bxl-html5"></i>,
  },
  css: {
    name: "CSS",
    color: "var(--css-color)",
    icon: <i className="bx bxl-css3"></i>,
  },
  javascript: {
    name: "JavaScript",
    color: "var(--javascript-color)",
    icon: <i className="bx bxl-javascript"></i>,
  },
  typescript: {
    name: "TypeScript",
    color: "var(--typescript-color)",
    icon: <i className="bx bxl-typescript"></i>,
  },
  bootstrap: {
    name: "Bootstrap",
    color: "var(--bootstrap-color)",
    icon: <i className="bx bxl-bootstrap"></i>,
  },
  jQuery: {
    name: "jQuery",
    color: "var(--jquery-color)",
    icon: <i className="bx bxl-jquery"></i>,
  },
  node: {
    name: "Node.js",
    color: "var(--express-color)",
    icon: <i className="bx bxl-nodejs"></i>,
  },
  react: {
    name: "React.js",
    color: "var(--react-color)",
    icon: <i className="bx bxl-react"></i>,
  },
  antd: {
    name: "Ant Design",
    color: "var(--react-color)",
    icon: <i className="bx bxl-react"></i>,
  },
  angular: {
    name: "Angular",
    color: "var(--angular-color)",
    icon: <i className="bx bxl-angular"></i>,
  },
  java: {
    name: "Java",
    color: "var(--java-color)",
    icon: <i className="bx bxl-java"></i>,
  },
  express: {
    name: "Express.js",
    color: "var(--express-color)",
    icon: <i className="bx bxl-nodejs"></i>,
  },
  mysql: {
    name: "MySQL",
    color: "var(--mysql-color)",
    icon: <i className="bx bxs-data"></i>,
  },
  sqlserver: {
    name: "SQL Server",
    color: "geekblue",
    icon: <i className="bx bxs-data"></i>,
  },
  mongodb: {
    name: "MongoDB",
    color: "var(--mongodb-color)",
    icon: <i className="bx bxl-mongodb"></i>,
  },
  figma: {
    name: "Figma",
    color: "var(--figma-color)",
    icon: <i className="bx bxl-figma"></i>,
  },
  photoshop: {
    name: "Photoshop",
    color: "var(--photoshop-color)",
    icon: <i className="bx bxl-droplet-half"></i>,
  },
  swagger: {
    name: "Swagger",
    color: "var(--swagger-color)",
    icon: <i className="bx bx-code-curly"></i>,
  },
};

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Movies & Series Finder",
    description:
      "Web platform with OMDBAPI integration for detailed information on series and/or movies.",
    category: "frontend",
    techs: [
      {
        id: 1,
        icon: techData.bootstrap.icon,
        color: techData.bootstrap.color,
        name: techData.bootstrap.name,
      },
      {
        id: 2,
        icon: techData.react.icon,
        color: techData.react.color,
        name: techData.react.name,
      },
    ],
    deploy_url: "https://movies-app-cruzito-exe.vercel.app",
    source_url: "https://github.com/cruzito-x/movies_app",
  },
  {
    id: 2,
    image: Work2,
    title: "Weather Visualizer",
    description:
      "Web application that uses OpenWeatherAPI to obtain detailed weather data for a specific site.",
    category: "frontend",
    techs: [
      {
        id: 1,
        icon: techData.html.icon,
        color: techData.html.color,
        name: techData.html.name,
      },
      {
        id: 2,
        icon: techData.css.icon,
        color: techData.css.color,
        name: techData.css.name,
      },
      {
        id: 3,
        icon: techData.jQuery.icon,
        color: techData.jQuery.color,
        name: techData.jQuery.name,
      },
    ],
    deploy_url: "https://weather-app-v2-one.vercel.app",
    source_url: "https://github.com/cruzito-x/weather-app",
  },
  {
    id: 3,
    image: Work3,
    title: "Color Scales Generator",
    description:
      "Web color scale tool based on a base color, ideal for designers and developers.",
    category: "frontend",
    techs: [
      {
        id: 1,
        icon: techData.bootstrap.icon,
        color: techData.bootstrap.color,
        name: techData.bootstrap.name,
      },
      {
        id: 2,
        icon: techData.react.icon,
        color: techData.react.color,
        name: techData.react.name,
      },
    ],
    source_url: "https://github.com/cruzito-x/color-palette-generator_app",
    deploy_url: "https://color-palette-generator-app-cruzito-exe.vercel.app",
  },
  {
    id: 4,
    image: Work4,
    title: "Translator",
    description:
      "Web application with MyMemory API implementation for instant translations.",
    category: "frontend",
    techs: [
      {
        id: 1,
        icon: techData.html.icon,
        color: techData.html.color,
        name: techData.html.name,
      },
      {
        id: 2,
        icon: techData.css.icon,
        color: techData.css.color,
        name: techData.css.name,
      },
      {
        id: 3,
        icon: techData.javascript.icon,
        color: techData.javascript.color,
        name: techData.javascript.name,
      },
    ],
    deploy_url: "https://translator-app-cruzito-exe.vercel.app",
    source_url: "https://github.com/cruzito-x/translator_app",
  },
  {
    id: 5,
    image: Work5,
    title: "Chat Application",
    description:
      "Real-time chat application with UX optimization and real-time notification services.",
    category: "frontend",
    techs: [
      {
        id: 1,
        icon: techData.react.icon,
        color: techData.react.color,
        name: techData.react.name,
      },
      {
        id: 2,
        icon: techData.node.icon,
        color: techData.node.color,
        name: techData.node.name,
      },
      {
        id: 3,
        icon: techData.mongodb.icon,
        color: techData.mongodb.color,
        name: techData.mongodb.name,
      },
    ],
    source_url: "https://github.com/cruzito-x/splice",
  },
  {
    id: 6,
    image: Work6,
    title: "Bookstore Sales System",
    description:
      "Web CRM for the management of sales, inventory and invoicing per sale of a bookstore.",
    category: "frontend",
    techs: [
      {
        id: 1,
        icon: techData.antd.icon,
        color: techData.antd.color,
        name: techData.antd.name,
      },
      {
        id: 3,
        icon: techData.express.icon,
        color: techData.express.color,
        name: techData.express.name,
      },
      {
        id: 4,
        icon: techData.mysql.icon,
        color: techData.mysql.color,
        name: techData.mysql.name,
      },
    ],
    source_url: "https://github.com/cruzito-x/library",
  },
  {
    id: 7,
    image: Work7,
    title: "Tech Store E-commerce App",
    description:
      "E-commerce web platform for the management of electronic products sales.",
    category: "frontend",
    techs: [
      {
        id: 1,
        icon: techData.angular.icon,
        color: techData.angular.color,
        name: techData.angular.name,
      },
      {
        id: 2,
        icon: techData.express.icon,
        color: techData.express.color,
        name: techData.express.name,
      },
      {
        id: 3,
        icon: techData.mongodb.icon,
        color: techData.mongodb.color,
        name: techData.mongodb.name,
      },
    ],
    source_url: "https://github.com/cruzito-x/mean-project",
  },
  {
    id: 8,
    image: Work8,
    title: "Bank Collection System",
    description:
      "Web system based on role-based authentication for payments and transactions.",
    category: "frontend",
    techs: [
      {
        id: 1,
        icon: techData.bootstrap.icon,
        color: techData.bootstrap.color,
        name: techData.bootstrap.name,
      },
      {
        id: 2,
        icon: techData.antd.icon,
        color: techData.antd.color,
        name: techData.antd.name,
      },
    ],
    design_url:
      "https://www.figma.com/design/hXXlAzpKeJPQuWwxnEtOsj/Sistema-de-Cobros-Bancarios?node-id=0-1&t=sLsDbT1sYUHkRYIp-1",
    source_url: "https://github.com/cruzito-x/bank-collection-frontend",
  },
  {
    id: 9,
    image: Work11,
    title: "API to Bank Collection System",
    description:
      "Secure endpoints for collection management, prioritizing data security and integrity.",
    category: "backend",
    techs: [
      {
        id: 1,
        icon: techData.express.icon,
        color: techData.express.color,
        name: techData.express.name,
      },
      {
        id: 2,
        icon: techData.mysql.icon,
        color: techData.mysql.color,
        name: techData.mysql.name,
      },
      {
        id: 3,
        icon: techData.swagger.icon,
        color: techData.swagger.color,
        name: techData.swagger.name,
      },
    ],
    source_url: "https://github.com/cruzito-x/bank-collection-backend",
  },
  {
    id: 10,
    image: Work9,
    title: "Dashboard to Visualization of Vulnerabilities Data",
    description:
      "Clean, clear and professional design, ideal for the purpose of vulnerability management.",
    category: "design",
    techs: [
      {
        id: 1,
        icon: techData.figma.icon,
        color: techData.figma.color,
        name: techData.figma.name,
      },
    ],
    design_url:
      "https://www.figma.com/design/3mJfa7medrPycTS5RTTefq/Untitled?t=DLPrFoleZ6yIKa2a-1",
  },
  {
    id: 11,
    image: Work10,
    title: "App for Neurodivergent People",
    description:
      "Inclusive, intuitive and accessible design for the target audience, prioritizing UX for user comfort.",
    category: "design",
    techs: [
      {
        id: 1,
        icon: techData.figma.icon,
        color: techData.figma.color,
        name: techData.figma.name,
      },
    ],
    design_url:
      "https://www.figma.com/design/g039NhW9ZAy8NcF2knXqZk/MindMap?m=auto&t=HpVDzN4iSlcsV6dT-6",
  },
];

export const projects = [
  {
    name: "all",
  },
  {
    name: "frontend",
  },
  {
    name: "backend",
  },
  {
    name: "design",
  },
];
