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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
        "Working with this developer was a game-changer for our startup. Their expertise in React and modern web technologies helped us scale our platform efficiently.",
      name: "Priya Sharma",
      designation: "Technical Director",
      company: "TechVista Solutions",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      testimonial:
        "An exceptional full-stack developer who brings both technical excellence and innovative problem-solving to the table. Their work on our project was outstanding.",
      name: "Rahul Verma",
      designation: "Product Manager",
      company: "InnovateHub India",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      testimonial:
        "Their proficiency in modern web development and ability to deliver clean, maintainable code made them an invaluable asset to our development team.",
      name: "Arun Patel",
      designation: "Engineering Lead",
      company: "Digital Dynamics",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
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