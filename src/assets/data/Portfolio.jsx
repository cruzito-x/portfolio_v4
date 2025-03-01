import moviesFinder from "../pictures/Frontend/work1.png";
import weatherVisualizer from "../pictures/Frontend/work2.png";
import colorScalesGenerator from "../pictures/Frontend/work3.png";
import translator from "../pictures/Frontend/work4.png";
import vsMarketplaceExtension from "../pictures/Frontend/work5.png";
import bookStoreSalesSystem from "../pictures/Frontend/work6.png";
import eCommerce from "../pictures/Frontend/work7.png";
import bankCollectionSystem from "../pictures/Frontend/work8.png";
import bookStoreSalesAPI from "../pictures/Backend/work1.png";
import bankCollectionAPI from "../pictures/Backend/work2.png";
import irisCodeScanner from "../pictures/Designs/work1.png";
import dashboard from "../pictures/Designs/work2.png";
import neuroDivergentMobileApp from "../pictures/Designs/work3.png";

/* =================== FILTERS =================== */

export const getFilters = (lang) => [
  {
    name: lang.all?.text,
  },
  {
    name: "Frontend",
    color: "var(--html-color)",
  },
  {
    name: "Backend",
    color: "var(--express-color)",
  },
  {
    name: lang.design?.text,
    color: "var(--figma-color)",
  },
];

/* =================== TECHS STACK =================== */

const techStack = {
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
    color: "var(--ant-design-color)",
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

/* =================== PROJECTS =================== */

export const getProjectsData = (lang) => {
  const filters = getFilters(lang);

  return [
    {
      id: 1,
      image: moviesFinder,
      title: lang.movies_finder_title?.text,
      description: lang.movies_finder_description?.text,
      category: filters[1].name,
      category_color: filters[1].color,
      techs: [
        {
          id: 1,
          icon: techStack.bootstrap.icon,
          color: techStack.bootstrap.color,
          name: techStack.bootstrap.name,
        },
        {
          id: 2,
          icon: techStack.react.icon,
          color: techStack.react.color,
          name: techStack.react.name,
        },
      ],
      deploy_url: "https://movies-app-cruzito-exe.vercel.app",
      source_url: "https://github.com/cruzito-x/movies_app",
    },
    {
      id: 2,
      image: weatherVisualizer,
      title: lang.weather_visualizer_title?.text,
      description: lang.weather_visualizer_description?.text,
      category: filters[1].name,
      category_color: filters[1].color,
      techs: [
        {
          id: 1,
          icon: techStack.html.icon,
          color: techStack.html.color,
          name: techStack.html.name,
        },
        {
          id: 2,
          icon: techStack.css.icon,
          color: techStack.css.color,
          name: techStack.css.name,
        },
        {
          id: 3,
          icon: techStack.jQuery.icon,
          color: techStack.jQuery.color,
          name: techStack.jQuery.name,
        },
      ],
      deploy_url: "https://weather-app-v2-one.vercel.app",
      source_url: "https://github.com/cruzito-x/weather-app",
    },
    {
      id: 3,
      image: colorScalesGenerator,
      title: lang.color_scales_generator_title?.text,
      description: lang.color_scales_generator_description?.text,
      category: filters[1].name,
      category_color: filters[1].color,
      techs: [
        {
          id: 1,
          icon: techStack.bootstrap.icon,
          color: techStack.bootstrap.color,
          name: techStack.bootstrap.name,
        },
        {
          id: 2,
          icon: techStack.react.icon,
          color: techStack.react.color,
          name: techStack.react.name,
        },
      ],
      source_url: "https://github.com/cruzito-x/color-palette-generator_app",
      deploy_url: "https://color-palette-generator-app-cruzito-exe.vercel.app",
    },
    {
      id: 4,
      image: translator,
      title: lang.translator_title?.text,
      description: lang.translator_description?.text,
      category: filters[1].name,
      category_color: filters[1].color,
      techs: [
        {
          id: 1,
          icon: techStack.html.icon,
          color: techStack.html.color,
          name: techStack.html.name,
        },
        {
          id: 2,
          icon: techStack.css.icon,
          color: techStack.css.color,
          name: techStack.css.name,
        },
        {
          id: 3,
          icon: techStack.javascript.icon,
          color: techStack.javascript.color,
          name: techStack.javascript.name,
        },
      ],
      deploy_url: "https://translator-app-cruzito-exe.vercel.app",
      source_url: "https://github.com/cruzito-x/translator_app",
    },
    {
      id: 5,
      image: vsMarketplaceExtension,
      title: lang.iris_extension_title?.text,
      description: lang.iris_extension_description?.text,
      category: filters[1].name,
      category_color: filters[1].color,
      techs: [
        {
          id: 2,
          icon: techStack.html.icon,
          color: techStack.html.color,
          name: techStack.html.name,
        },
        {
          id: 3,
          icon: techStack.css.icon,
          color: techStack.css.color,
          name: techStack.css.name,
        },
        {
          id: 4,
          icon: techStack.javascript.icon,
          color: techStack.javascript.color,
          name: techStack.javascript.name,
        },
      ],
      extension_url:
        "https://marketplace.visualstudio.com/items?itemName=CodeEyeSolutions.CodeEyeSolutions",
      design_url:
        "https://www.figma.com/design/Bh6zAJMZwH1hPVSKdd7zIV/IRIS-Code-Scanner?node-id=0-1&t=WFgD6oEX4MtUZavF-1",
    },
    {
      id: 6,
      image: bookStoreSalesSystem,
      title: lang.bookstore_sales_system_title?.text,
      description: lang.bookstore_sales_system_description?.text,
      category: filters[1].name,
      category_color: filters[1].color,
      techs: [
        {
          id: 1,
          icon: techStack.antd.icon,
          color: techStack.antd.color,
          name: techStack.antd.name,
        },
      ],
      source_url: "https://github.com/cruzito-x/library",
    },
    {
      id: 7,
      image: eCommerce,
      title: lang.e_commerce_title?.text,
      description: lang.e_commerce_description?.text,
      category: filters[1].name,
      category_color: filters[1].color,
      techs: [
        {
          id: 1,
          icon: techStack.angular.icon,
          color: techStack.angular.color,
          name: techStack.angular.name,
        },
        {
          id: 2,
          icon: techStack.express.icon,
          color: techStack.express.color,
          name: techStack.express.name,
        },
        {
          id: 3,
          icon: techStack.mongodb.icon,
          color: techStack.mongodb.color,
          name: techStack.mongodb.name,
        },
      ],
      source_url: "https://github.com/cruzito-x/mean-project",
    },
    {
      id: 8,
      image: bankCollectionSystem,
      title: lang.bank_collection_system_title?.text,
      description: lang.bank_collection_system_description?.text,
      category: filters[1].name,
      category_color: filters[1].color,
      techs: [
        {
          id: 1,
          icon: techStack.bootstrap.icon,
          color: techStack.bootstrap.color,
          name: techStack.bootstrap.name,
        },
        {
          id: 2,
          icon: techStack.antd.icon,
          color: techStack.antd.color,
          name: techStack.antd.name,
        },
      ],
      source_url: "https://github.com/cruzito-x/bank-collection-frontend",
    },
    {
      id: 9,
      image: bookStoreSalesAPI,
      title: lang.bookstore_sales_system_api_title?.text,
      description: lang.bookstore_sales_system_api_description?.text,
      category: filters[2].name,
      category_color: filters[2].color,
      techs: [
        {
          id: 1,
          icon: techStack.express.icon,
          color: techStack.express.color,
          name: techStack.express.name,
        },
        {
          id: 2,
          icon: techStack.mysql.icon,
          color: techStack.mysql.color,
          name: techStack.mysql.name,
        },
      ],
      source_url: "https://github.com/cruzito-x/library-backend",
    },
    {
      id: 10,
      image: bankCollectionAPI,
      title: lang.bank_collection_system_api_title?.text,
      description: lang.bank_collection_system_api_description?.text,
      category: filters[2].name,
      category_color: filters[2].color,
      techs: [
        {
          id: 1,
          icon: techStack.express.icon,
          color: techStack.express.color,
          name: techStack.express.name,
        },
        {
          id: 2,
          icon: techStack.mysql.icon,
          color: techStack.mysql.color,
          name: techStack.mysql.name,
        },
        {
          id: 3,
          icon: techStack.swagger.icon,
          color: techStack.swagger.color,
          name: techStack.swagger.name,
        },
      ],
      source_url: "https://github.com/cruzito-x/bank-collection-backend",
    },
    {
      id: 11,
      image: irisCodeScanner,
      title: lang.vs_marketplace_extension_title?.text,
      description: lang.vs_marketplace_extension_description?.text,
      category: filters[3].name,
      category_color: filters[3].color,
      techs: [
        {
          id: 1,
          icon: techStack.figma.icon,
          color: techStack.figma.color,
          name: techStack.figma.name,
        },
      ],
      design_url:
        "https://www.figma.com/design/Bh6zAJMZwH1hPVSKdd7zIV/IRIS-Code-Scanner?node-id=0-1&t=WFgD6oEX4MtUZavF-1",
    },
    {
      id: 12,
      image: dashboard,
      title: lang.vulnerabilities_dashboard_title?.text,
      description: lang.vulnerabilities_dashboard_description?.text,
      category: filters[3].name,
      category_color: filters[3].color,
      techs: [
        {
          id: 1,
          icon: techStack.figma.icon,
          color: techStack.figma.color,
          name: techStack.figma.name,
        },
      ],
      design_url:
        "https://www.figma.com/design/3mJfa7medrPycTS5RTTefq/Untitled?t=DLPrFoleZ6yIKa2a-1",
    },
    {
      id: 13,
      image: neuroDivergentMobileApp,
      title: lang.neurodivergent_people_mobile_app_title?.text,
      description: lang.neurodivergent_people_mobile_app_description?.text,
      category: filters[3].name,
      category_color: filters[3].color,
      techs: [
        {
          id: 1,
          icon: techStack.figma.icon,
          color: techStack.figma.color,
          name: techStack.figma.name,
        },
      ],
      design_url:
        "https://www.figma.com/design/g039NhW9ZAy8NcF2knXqZk/MindMap?m=auto&t=HpVDzN4iSlcsV6dT-6",
    },
  ];
};
