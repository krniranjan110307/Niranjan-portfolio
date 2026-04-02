export type Experience = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export type Project = {
  title: string;
  category: string;
  description: string;
  outcomes: string[];
};

export const portfolio = {
  name: "Niranjan K R",
  title: "Biotechnology Student | Full-Stack Developer | AI Learner",
  email: "krniranjan110307@gmail.com",
  phone: "+91 6369413579",
  location: "Coimbatore, Tamil Nadu",
  summary:
    "Motivated B.Tech Biotechnology student with hands-on exposure to full-stack development, machine learning, research workflows, and laboratory analysis. Focused on combining biotechnology and coding to solve meaningful scientific and technical problems.",
  highlights: [
    "Built clinical software interfaces using React, TypeScript, Tailwind CSS, .NET Core Web API, and SQL Server.",
    "Completed five internships across biotechnology labs, AI/ML, full-stack development, molecular docking, and biopharma workflows.",
    "Brings together research discipline, software thinking, and strong adaptability across domains.",
  ],
  metrics: [
    { label: "Internships", value: "5" },
    { label: "Project Tracks", value: "5" },
    { label: "Current CGPA", value: "8.415" },
  ],
  links: {
    linkedin: "https://linkedin.com/in/niranjan-k-r-2167983bb/",
    github: "https://github.com/krniranjan110307",
    resume: "/assets/Niranjan-CV.pdf",
  },
  experience: [
    {
      company: "Thangam Info Tech",
      role: "Full-Stack Development Intern",
      period: "Feb 2026 - Apr 2026",
      points: [
        "Contributed to a Clinical Management System for handling patient records with a modern React and TypeScript frontend.",
        "Developed REST APIs and CRUD operations to support reliable data processing and application workflows.",
        "Worked with SQL-backed systems to improve data accuracy, scalability, and overall performance.",
      ],
    },
    {
      company: "Sree Mahalakshmi Technology Solutions",
      role: "Artificial Intelligence & Machine Learning Intern",
      period: "Mar 2026",
      points: [
        "Collected and analyzed datasets for model development and experimentation.",
        "Built and tested machine learning models in Python.",
        "Strengthened algorithmic problem-solving through Kaggle and HackerRank practice.",
      ],
    },
    {
      company: "VJ Biotech",
      role: "Bio-Pharma, Nanotechnology & Chromatographic Techniques Intern",
      period: "Jan 2026",
      points: [
        "Learned basic chromatography and separation techniques.",
        "Performed nanoparticle synthesis and biological activity tests.",
        "Gained knowledge in bio-pharma and natural product studies.",
      ],
    },
    {
      company: "Bioxplora",
      role: "Molecular Docking & Drug Discovery Intern",
      period: "Oct 2025",
      points: [
        "Learned core molecular docking concepts and their role in drug discovery workflows.",
        "Used biological databases to retrieve protein and ligand information.",
        "Explored docking software for analysis and interpretation of scientific results.",
      ],
    },
    {
      company: "Sri Shakthi Food Testing Laboratory",
      role: "Food, Water & Soil Analysis Intern",
      period: "Sep 2025",
      points: [
        "Learned food safety rules, lab SOPs, and hygiene practices.",
        "Gained practical microbiological testing experience for food and water samples.",
        "Worked on chemical, water, and soil analysis using instruments and titration methods.",
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      title:
        "Microbial Diversity Analysis of Microbial Taxa Associated with Pork Intramuscular Lumen",
      category: "Biotechnology Research",
      description:
        "Focused on identifying bacteria in pork intramuscular lumen through culturing methods and 16S rRNA sequencing, with NCBI-oriented sequence analysis.",
      outcomes: [
        "Culturing workflow",
        "16S rRNA sequencing",
        "NCBI submission process",
      ],
    },
    {
      title: "Phytochemical Analysis and Antidiabetic Potential of Syzygium cumini",
      category: "Phytochemical Research",
      description:
        "Studied the major phytochemicals present in Syzygium cumini seed extract and evaluated antidiabetic potential through alpha-glucosidase inhibition with antimicrobial and antioxidant assays.",
      outcomes: [
        "Phytochemical screening",
        "Alpha-glucosidase inhibition",
        "Antioxidant and antimicrobial assays",
      ],
    },
    {
      title: "Dye Degradation Using Honey-Mediated Silver Nanoparticles",
      category: "Nanotechnology Research",
      description:
        "Explored eco-friendly synthesis of silver nanoparticles and evaluated their efficiency for sunlight-driven methylene blue dye degradation.",
      outcomes: [
        "Green synthesis",
        "Photocatalytic testing",
        "Wastewater application",
      ],
    },
    {
      title: "Drug Consumption Prediction using Machine Learning",
      category: "Machine Learning",
      description:
        "Built ML models to predict drug usage behavior using demographic and psychological data, then compared model performance across algorithms.",
      outcomes: [
        "Logistic Regression",
        "Decision Tree",
        "Random Forest comparison",
      ],
    },
    {
      title: "Full-Stack Application - Clinical Management System",
      category: "Full-Stack Application",
      description:
        "A patient-records focused platform built during internship work, combining modern frontend architecture with API-driven backend workflows.",
      outcomes: [
        "Responsive React UI",
        "Type-safe frontend patterns",
        "CRUD and API integration",
      ],
    },
  ] satisfies Project[],
  skills: {
    frontend: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive UI",
    ],
    backend: [
      ".NET Core Web API",
      "Node.js",
      "REST APIs",
      "JWT Authentication",
      "API Integration",
    ],
    data: ["SQL Server", "MySQL", "MongoDB", "Python", "C"],
    science: [
      "Bioinformatics",
      "Wet Lab",
      "Experimental Biotechnology",
      "Analytical Techniques",
      "Molecular Docking",
    ],
    tools: ["Git", "GitHub", "VS Code", "Visual Studio", "Power BI", "UiPath Studio", "Excel"],
  },
  education: {
    degree: "Bachelor of Technology in Biotechnology",
    school: "Sri Shakthi Institute of Engineering and Technology",
    period: "2024 - 2028",
    cgpa: "8.415",
  },
};
