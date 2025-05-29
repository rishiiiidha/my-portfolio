export const Homepage = {
  role: "Competitive Programmer & Full-stack Developer",
  description:
    "I'm Rishidha, a third-year student at SRM University AP, with a strong focus on problem-solving and backend logic. I enjoy building things using JavaScript, React, MongoDB, Express.js, and Node.js.",
};

export const identity = {
  name: "Rishidha Addanki",
  logo: "/me.jpeg",
  email: "rishidha04@gmail.com",
};

export const aboutPageContent = {
  now: "project I am currently working on ? ",
  subtitle: "some information about myself",
  about: {
    description: `
 I'm Rishidha, a third-year computer science student at SRM University AP with a passion for software development and problem-solving. My journey in web development began at Next Tech Lab, SRM University's innovation hub, where I started as an Associate and grew to become a Member through continuous learning and contribution. I've gained hands-on experience through various internships and projects, working with technologies like Three.js, Next.js, and TypeScript. I'm actively involved in competitive programming and open-source contributions, constantly seeking to enhance my skills and contribute to impactful projects.`,
    image: {
      url: "/me.jpeg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `My journey in web development has been marked by diverse experiences and continuous growth. Starting from Next Tech Lab at SRM University, I've progressed through various roles, working on cutting-edge technologies and complex projects. From developing AR features for retail applications to implementing security solutions, each experience has contributed to my growth as a developer.`,
    items: [
      {
        title: "Full Stack Developer",
        company: {
          name: "Supervaisor.ai",
          image: "/supervaisor.jpeg",
          url: "https://supervaisor.ai/",
        },
        date: "May 2025",
        description: [
          "Worked with Smollan on a contract for Google, developing a retail web application",
          "Implemented AR measurements and AR markings features using Three.js",
          "Developed responsive and interactive interfaces using Next.js and TypeScript",
          "Collaborated with cross-functional teams to deliver high-quality solutions"
        ],
        stack: ["Next.js", "TypeScript", "Three.js", "React", "Node.js", "Tailwind CSS"]
      },
      {
        title: "Full Stack Developer Intern",
        company: {
          name: "CloudDFN",
          image: "/clouddfn.jpg",
          url: "https://clouddfn.com/",
        },
        date: "Aug 2024 - Sep 2024",
        description: [
          "Engineered the VulnTracker feature for a cybersecurity platform, integrating Jira ticketing by implementing a form with a checkbox and 2 conditional dropdowns, enabling ticket creation for 100+ vulnerabilities tracked.",
          "Resolved TypeScript type mismatch errors in the customer management system, fixing issues across 3 critical fields to ensure reliable customer creation and update operations.",
          "Designed a ransomware risk scoring system, integrating AI-driven industry classification (OpenAI) and a weighted algorithm analyzing 7 security factors, scanning 25 critical network ports to deliver accurate risk assessments.",
          "Enhanced database operations using Prisma ORM, creating a relational schema to manage 5+ related models (customers, roles, tickets), improving data integrity and scalability."
        ],
        stack: ["React", "TypeScript", "Node.js", "Express.js", "Prisma ORM", "Material-UI", "Redux", "Jira API", "MongoDB"]
      },
      {
        title: "Member",
        company: {
          name: "Next Tech Lab",
          image: "/ntl.svg",
          url: "https://srmap.edu.in/next_tech_lab/",
        },
        date: "Feb 2024 - Present",
        description: [
          "Started as an Associate and progressed to Member through consistent contributions",
          "Participated in hackathons and won first place in 9Hacks with an AI Mock Interview Taker Application",
          "Collaborated with peers on various projects, enhancing technical and teamwork skills",
          "Contributed to the lab's mission of fostering innovation and technical excellence"
        ],
      },
      {
        title: "Frontend Developer Intern",
        company: {
          name: "Hygwell",
          image: "/hygwell.png",
          url: "https://hygwell.com/",
        },
        date: "May 2024 - Jun 2024",
        description: [
          "Developed a headless Shopify store using React, Hydrogen, and Oxygen",
          "Enhanced user experience with interactive features and app integrations",
          "Implemented responsive designs and optimized performance",
          "Collaborated with the team to deliver high-quality e-commerce solutions"
        ],
        stack: ["React", "Hydrogen", "Shopify", "Oxygen", "JavaScript", "CSS"]
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me.`, 
  },
};
