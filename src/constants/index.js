import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    c,
    cpp,
    dps,
    bit,
    leetcode,
    gfg,
    // postman,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id : "dsa",
      title : "DSA",
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Structures and Algorithms",
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
      name: "TypeScript",
      icon: typescript,
    },
    // {
    //   name: "C",
    //   icon: c,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
      //   name: "figma",
      //   icon: figma,
      // },
      // {
        //   name: "docker",
        //   icon: docker,
        // },
        {
          name: "C++",
          icon: cpp,
        },
        {
          name: "Leetcode",
          icon: leetcode,
        },
    // {
    //   name: "GFG",
    //   icon: gfg,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Working together on our Web Development project was a great experience. Their strong grasp of React and ability to explain complex concepts helped our entire team succeed.",
      name: "Ankit Kumar",
      designation: "CSE Student",
      company: "BIT Mesra",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      testimonial:
        "During our hackathon, their problem-solving skills and dedication were impressive. They took the lead on implementing key features that helped us win second place.",
      name: "Priya Singh",
      designation: "IT Student", 
      company: "BIT Mesra",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      testimonial:
        "As a fellow member of the coding club, I've seen them mentor junior students with patience and clarity. Their technical knowledge and teaching ability make them a valuable peer.",
      name: "Rohit Sharma",
      designation: "Club Lead",
      company: "BIT Mesra",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D Developer Portfolio",
      description:
        "A modern and interactive portfolio website built with React, Three.js, and Tailwind CSS. Features 3D models, animations, and a responsive design to showcase developer projects and skills.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      live_link: "https://portfolio-hvg6.onrender.com/",
      source_code_link: "https://github.com/",
    },
    {
      name: "Real-time Chat Application",
      description:
        "Full-stack chat application with real-time messaging, user authentication, and room creation capabilities. Built using Socket.IO for real-time communication and MongoDB for message persistence.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "EduTech Learning Platform",
      description:
        "Comprehensive e-learning platform featuring video courses, interactive quizzes, and progress tracking. Includes user authentication, payment integration, and a responsive dashboard for both students and instructors.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  const education = [
    {
      title: "B.Tech in Computer Science and Engineering",
      school_name: "Birla Institute of Technology, Mesra",
      icon: bit,
      iconBg: "#383E56",
      date: "Present",
      points: [
        "Currently pursuing Computer Science and Engineering",
        "Selected through JEE Mains with 97.75 percentile",
        "Maintaining a strong academic performance with 8.4 CGPA"
      ],
    },
    {
      title: "Higher Secondary Education (12th)",
      school_name: "Delhi Public School, Bokaro",
      icon: dps,
      iconBg: "#E6DEDD",
      date: "2023",
      points: [
        "Scored 92% in CBSE Board Examinations",
        "Science Stream",
        "Achieved distinction in Physics, Chemistry, and Mathematics"
      ],
    },
    {
      title: "Secondary Education (10th)",
      school_name: "Delhi Public School, Bokaro",
      icon: dps,
      iconBg: "#383E56",
      date: "2021",
      points: [
        "Scored 96% in CBSE Board Examinations",
        "Achieved perfect score in Mathematics",
        "Certified in German Language (Level 1) during school education"
      ],
    },
  ];
  
  export { services, technologies, education, experiences, testimonials, projects };