// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "a Kevin Alex",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "I am a Senior Full Stack Engineer who specializes in building modern web applications using React JS, Angular, Node JS, Vue JS, and Laravel. With 6 years of experience in web development. My expertise lies in front-end development using modern frameworks like React JS, Angular, and Vue JS. I am also proficient in back-end development using Node JS and Laravel. Additionally, I have experience working with databases like MySQL, MongoDB, and PostgreSQL.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const section1title = "Skills";
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    // svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "REACT",
    // svg: '',
    faClass: "fab fa-react",
  },
  {
    name: "ANGULAR",
    // svg: '',
    faClass: "fab fa-angular",
  },
  {
    name: "SASS",
    // svg: '',
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "PHP",
    // svg: '',
    faClass: "fab fa-php",
  },
  {
    name: "LARAVEL",
    // svg: '',
    faClass: "fab fa-laravel",
  },
  {
    name: "Vue",
    // svg: '',
    faClass: "fab fa-vuejs",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    // svg: '',
    faClass: "fab fa-aws",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Marketplace",
    skills: ["Laravel, Vue"],
    url: "https://www.fazwaz.com/",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "chriscortazzo",
    skills: ["Node.js, Next.js, PHP, MySQL, React"],
    url: "https://chriscortazzo.com/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "inhauze",
    skills: ["Angular, CSS, Jquery"],
    url: "http://www.inhauze.com/",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "openbom",
    skills: ["SaaS, ReactJS, NodeJS, SQL"],
    url: "https://www.openbom.com/",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "MERN Stack",
    skills: ["MongoDB, Express, React, Node"],
    url: "https://lol-eloboosting.com/",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "CrossWise",
    skills: ["React, Next.js, Web3.js"],
    url: "https://crosswise.finance",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number

// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you. Simply fill the from and send me an email.",
  copyright: "Antonio Lee",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com",
  facebook: "#",
  // twitter: "https://twitter.com",
  instagram: "#",
  linkedin: "#",
  resume: "/resume.pdf",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
