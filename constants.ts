import type { Experience, SkillCategory, EducationItem, Project } from './types';

export const PERSONAL_INFO = {
  name: "Kartik Maandothiya",
  title: "Senior eCommerce Developer",
  bio: "Results-driven Senior eCommerce Developer and Digital Transformation Expert with 9+ years of cross-functional experience in backend development, eCommerce architecture, and visual effects. Specialized in Laravel (up to v11), RESTful API, Composer package development, and marketplace integration with 7+ years of relevant development experience. Proven record of leading digital commerce projects end-to-end, delivering scalable solutions, and driving process automation. Former VFX faculty with strong creative and technical acumen.",
  contact: {
    email: "kartikya27@gmail.com",
    github: "https://github.com/kartikya27",
    linkedin: "https://www.linkedin.com/in/kartikmaandothiya",
  }
};

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: "Senior Laravel Developer",
    company: "Stegpearl Technologies Pvt Ltd",
    duration: "May 2023 - April 2025",
    description: [
      "Developed and maintained scalable multi-vendor marketplace platforms using Node.js, React, and Laravel.",
      "Implemented modular microservice architecture and optimized APIs, improving system performance and scalability by 35%.",
      "Built and deployed CI/CD pipelines with GitHub Actions and PM2, reducing release times by 30%.",
      "Integrated payment gateways, order automation, and inventory sync across multiple vendors."
    ],
  },
  {
    role: "Laravel & REST API Developer",
    company: "HKS Manpower",
    duration: "Mar 2021 - May 2023",
    description: [
      "Engineered scalable RESTful APIs, improving server times by 35%.",
      "Optimized backend queries for 40% faster data retrieval.",
      "Coordinated with cross-functional teams for seamless launches."
    ],
  },
  {
    role: "PHP Developer – Laravel & CodeIgniter",
    company: "DeviceDisk",
    duration: "May 2018 - Feb 2021",
    description: [
      "Delivered custom web apps for SMEs, boosting workflow speeds by 22%.",
      "Implemented secure payment and order modules."
    ],
  },
  {
    role: "Visual Effects Faculty",
    company: "Athena Animation",
    duration: "2016 - 2018",
    description: [
      "Trained 200+ students on VFX and motion graphics.",
      "Led workshops using industry-standard tools."
    ],
  },
];

export const PROJECTS: Project[] = [
  // {
  //   name: "Stegback Marketplace",
  //   description: "A scalable multi-vendor B2B/B2C marketplace for the German market, featuring robust order automation and payment gateway integration.",
  //   tags: ["Node.js", "React", "Laravel", "Microservices", "RESTful API"],
  //   imageUrl: "https://placehold.co/600x400/ffffff/121212/png?text=Stegback",
  //   liveUrl: "https://stegback.de",
  // },
  // {
  //   name: "E-commerce Platform",
  //   description: "A custom e-commerce solution for SMEs, designed to boost workflow speeds and provide secure payment and order modules.",
  //   tags: ["PHP", "CodeIgniter", "MySQL", "Bootstrap", "jQuery"],
  //   imageUrl: "https://placehold.co/600x400/ffffff/121212/png?text=E-commerce",
  //   liveUrl: "#",
  //   githubUrl: "#"
  // },
  // {
  //   name: "Digital Transformation Dashboard",
  //   description: "An internal tool for process automation, featuring CI/CD pipeline management and performance monitoring for APIs.",
  //   tags: ["React", "Node.js", "Docker", "GitHub Actions", "Tailwind CSS"],
  //   imageUrl: "https://placehold.co/600x400/ffffff/121212/png?text=Dashboard",
  //   liveUrl: "#",
  // }
];


export const SKILLS: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Laravel (v7-v11)", icon: "fab fa-laravel" },
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "React", icon: "fab fa-react" },
      { name: "Next.js", icon: "fas fa-c" }, // Custom icon needed
      { name: "CodeIgniter", icon: "fas fa-fire" },
      { name: "Tailwind CSS", icon: "fas fa-wind" },
      { name: "Bootstrap", icon: "fab fa-bootstrap" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "RESTful API", icon: "fas fa-cogs" },
      { name: "Microservices", icon: "fas fa-project-diagram" },
      { name: "Marketplace Integration", icon: "fas fa-store" },
      { name: "Payment Gateways", icon: "fas fa-credit-card" },
    ],
  },
  {
    title: "Databases & DevOps",
    skills: [
      { name: "MySQL", icon: "fas fa-database" },
      { name: "MongoDB Atlas", icon: "fas fa-database" },
      { name: "Docker", icon: "fab fa-docker" },
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "CI/CD", icon: "fas fa-sync-alt" },
      { name: "Vercel", icon: "fas fa-cloud-upload-alt" },
      { name: "AWS", icon: "fas fa-aws" },
    ],
  },
  {
    title: "Tools & Methodologies",
    skills: [
        { name: "Agile & Scrum", icon: "fas fa-users-cog" },
        { name: "Team Leadership", icon: "fas fa-users" },
        { name: "Composer", icon: "fas fa-box-open" },
        { name: "Postman", icon: "fas fa-space-shuttle" },
        { name: "ChatGPT/CursorAi", icon: "fas fa-robot" },
    ]
  }
];

export const EDUCATION: EducationItem[] = [
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Suresh Gyan Vihar University, Jaipur, India",
    },
    {
        degree: "High School Diploma",
        institution: "Ravindra Public School, Jaipur, India",
        duration: "2013 - 2014"
    }
];

export const CERTIFICATIONS: EducationItem[] = [
    {
        degree: "Advanced Animation International Program",
        institution: "VFX Specialization, Arena Animation New Delhi"
    }
];