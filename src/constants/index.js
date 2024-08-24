import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a frontend developer passionate about crafting dynamic and responsive web applications using HTML, CSS, JavaScript, React, and modern tools like Tailwind CSS and Material UI. With a strong foundation in problem-solving and data science, I bring a well-rounded approach to development, focusing on creating user-friendly and visually compelling digital experiences. Constantly exploring new technologies, I strive to push the boundaries of what's possible in web development, delivering innovative solutions that make an impact.`;

export const ABOUT_TEXT = `I am a passionate software developer with a strong focus on frontend development, skilled in C++, Python, and modern web technologies like HTML, CSS, JavaScript, React, and Tailwind CSS. My journey in coding has led me to create a variety of impactful projects. I built a clone of CodePen.io, an online code editor for HTML, CSS, and JS, and developed a diabetes prediction app using MIT App Inventor. I also completed a full-fledged Twitter clone, a MERN stack project that showcases my full-stack development skills. Additionally, I crafted a fully responsive portfolio using React to display my work. My goal is to continue growing as a developer, contributing to both frontend and backend development.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Twitter Clone",
    image: project1,
    description:
      "Built a full-stack Twitter clone using the MERN stack (MongoDB, Express.js, React, Node.js) for robust and scalable social media functionality..",
    technologies: ["React", "MongoDB", "Express.js", "Node.js", "TailwindCSS"],
  },
  {
    title: "CodePen Clone",
    image: project2,
    description:
      "Developed an online code editor with HTML, CSS, JavaScript, React, and Material UI, providing a seamless environment for web development.",
    technologies: ["HTML", "CSS", "Javascript", "React"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Designed and developed a fully responsive portfolio using HTML, CSS, JavaScript, and React, showcasing my projects and skills in a clean, modern layout",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Diabetes Prediction ML Model",
    image: project4,
    description:
      "Created a diabetes prediction model leveraging Python, ML algorithms, and Jupyter Notebook, paired with a user-friendly MIT App Inventor interface.",
    technologies: ["Python", "MachineLearning", "JupyterNotebook","MITAppInventor"],
  },
];

export const CONTACT = {
  address: "A-156, Mahavir Enclave-2, Janak Puri, New Delhi-110059",
  phoneNo: "+91 8800 6782 63",
  email: "rt880067@gmail.com",
};