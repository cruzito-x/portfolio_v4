import Work1 from "../pictures/Frontend/work1.png";
import Work2 from "../pictures/Frontend/work2.png";
import Work3 from "../pictures/Frontend/work3.png";
import Work4 from "../pictures/Frontend/work4.png";
import Work5 from "../pictures/Frontend/work5.png";
import Work6 from "../pictures/Frontend/work6.png";
import Work7 from "../pictures/Frontend/work7.png";
import Work8 from "../pictures/Frontend/work8.png";
import Work11 from "../pictures/Backend/work1.png";
import Work12 from "../pictures/Backend/work2.png";
import Work9 from "../pictures/Designs/work1.png";
import Work10 from "../pictures/Designs/work2.png";

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

const categories = {
  frontend: {
    name: "Frontend",
    color: "var(--css-color)",
    icon: <i className="bx bxl-react"></i>,
  },
  backend: {
    name: "Backend",
    color: "var(--express-color)",
    icon: <i className="bx bxl-nodejs"></i>,
  },
  design: {
    name: "Design",
    color: "var(--figma-color)",
    icon: <i className="bx bxl-figma"></i>,
  },
};

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Movies & Series Finder",
    description:
      "Web platform with OMDBAPI integration for detailed information on series and movies.",
    category: categories.frontend.name,
    category_color: categories.frontend.color,
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
      "Web app that uses OpenWeather API to obtain weather data from a specific location.",
    category: categories.frontend.name,
    category_color: categories.frontend.color,
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
      "Color scale web tool based on a color name or its hex, ideal for designers and developers.",
    category: categories.frontend.name,
    category_color: categories.frontend.color,
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
      "Web app that makes use of MyMemory API for instant translations in several languages.",
    category: categories.frontend.name,
    category_color: categories.frontend.color,
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
    title: "Chat App",
    description:
      "Real-time asynchronous chat application with real-time notification services.",
    category: categories.frontend.name,
    category_color: categories.frontend.color,
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
      "Web CRM for sales and inventory management, invoicing and reporting of a bookstore.",
    category: categories.frontend.name,
    category_color: categories.frontend.color,
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
    title: "E-commerce App",
    description:
      "E-commerce web platform for sales and inventory management for a technology products store.",
    category: categories.frontend.name,
    category_color: categories.frontend.color,
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
      "Web system based on role-based auth for the payment of services and banking transactions.",
    category: categories.frontend.name,
    category_color: categories.frontend.color,
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
    title: "Bookstore Sales System API",
    description:
      "Endpoints, with a system for storing images in the server and returning this to the front-end.",
    category: categories.backend.name,
    category_color: categories.backend.color,
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
    ],
    source_url: "https://github.com/cruzito-x/library-backend",
  },
  {
    id: 10,
    image: Work12,
    title: "Bank Collection System API",
    description:
      "Endpoints for the management of banking transactions, prioritizing security and data integrity.",
    category: categories.backend.name,
    category_color: categories.backend.color,
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
    id: 11,
    image: Work9,
    title: "Vulnerabilities Dashboard",
    description:
      "Clean, clear and professional design, ideal for the purpose of vulnerability management.",
    category: categories.design.name,
    category_color: categories.design.color,
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
    id: 12,
    image: Work10,
    title: "App for Neurodivergent People",
    description:
      "Inclusive, intuitive and accessible design for the target audience, prioritizing UX for user comfort.",
    category: categories.design.name,
    category_color: categories.design.color,
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
    name: "All",
  },
  {
    name: "Frontend",
  },
  {
    name: "Backend",
  },
  {
    name: "Design",
  },
];
