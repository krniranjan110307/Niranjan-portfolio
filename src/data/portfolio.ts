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

export type Credential = {
  title: string;
  detail: string;
};

export const portfolio = {
  name: "Niranjan K R",
  title: "B.Tech Biotechnology Student | Full-Stack Developer | AI/ML Learner",
  email: "krniranjan110307@gmail.com",
  phone: "+91 6369413579",
  location: "Coimbatore, Tamil Nadu 641659",
  summary:
    "B.Tech Biotechnology student with hands-on experience in full-stack development, machine learning, molecular biology, bioinformatics, and laboratory analysis. Interested in combining biotechnology and programming to solve scientific and technical problems.",
  highlights: [
    "Developed a Clinical Management System with React, TypeScript, Tailwind CSS, .NET Core Web API, and SQL Server.",
    "Completed six internships spanning full-stack development, AI/ML, molecular biology, molecular docking, laboratory analysis, and biopharma.",
    "Published a 16S rRNA gene sequence in NCBI GenBank (PQ772087.1) and presented phytochemical research at ICFBB 2025.",
  ],
  metrics: [
    { label: "Internships", value: "6" },
    { label: "Projects", value: "6" },
    { label: "Current CGPA", value: "8.13" },
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
        "Gained hands-on web development experience with JavaScript, React, Tailwind CSS, and SQL Server, contributing to live pages and user interfaces.",
        "Developed a Clinical Management System using React, TypeScript, Tailwind CSS, .NET Core Web API, and SQL Server to manage patient and appointment information.",
      ],
    },
    {
      company: "Sree Mahalakshmi Technology Solution",
      role: "Artificial Intelligence & Machine Learning Intern",
      period: "Mar 2026",
      points: [
        "Preprocessed datasets, developed models, and evaluated performance using Python.",
        "Built and compared classification models on the UCI Drug Consumption dataset to analyze consumption patterns.",
      ],
    },
    {
      company: "BioXplora",
      role: "Molecular Docking & Drug Discovery Intern",
      period: "Oct 2025",
      points: [
        "Explored potential malaria drug targets and protein-ligand interactions using molecular docking.",
        "Built familiarity with biological databases and docking software for drug discovery analysis.",
      ],
    },
    {
      company: "Biozone Research Technologies",
      role: "Molecular Biology & Bioinformatics Intern",
      period: "Jun 2026",
      points: [
        "Gained hands-on experience in genomic DNA isolation, PCR, RAPD, RFLP, gel electrophoresis, and DNA quantification.",
        "Practiced primer design and used NEBcutter and MEGA for molecular and sequence analysis.",
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
  ] satisfies Experience[],
  projects: [
    {
      title: "Full-Stack Application - Clinical Management System",
      category: "Full-Stack Application",
      description:
        "Developed a clinical management web application using React, TypeScript, Tailwind CSS, .NET Core Web API, and SQL Server to manage patient and appointment information.",
      outcomes: [
        "Patient records",
        "Appointment scheduling",
        "UI and API integration",
      ],
    },
    {
      title: "Drug Consumption Prediction using Machine Learning",
      category: "Machine Learning",
      description:
        "Developed machine learning models using demographic and psychological data from the UCI Drug Consumption dataset to analyze drug consumption patterns.",
      outcomes: [
        "Logistic Regression",
        "Decision Tree",
        "Random Forest comparison",
      ],
    },
    {
      title:
        "Microbial Diversity Analysis of Pork Intramuscular Tissue",
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
      title: "Isolation of Oil-Degrading Bacteria from Petroleum-Contaminated Soil",
      category: "Environmental Biotechnology",
      description:
        "Isolated and screened oil-degrading bacteria from petroleum-contaminated soil to investigate their potential for bioremediation.",
      outcomes: ["Bacterial isolation", "Screening", "Bioremediation potential"],
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
      "Lifecycle Hooks",
    ],
    backend: [".NET Core Web API", "Node.js", "API Integration"],
    data: ["SQL Server", "MySQL", "UCI Repository"],
    ai: ["Model Development", "Algorithms Implementation", "AI Tools"],
    programming: ["C", "Python"],
    science: [
      "Bioinformatics",
      "Wet Lab",
      "Experimental Biotechnology",
      "Analytical Techniques",
      "Molecular Docking",
    ],
    tools: ["Git", "Git version control", "GitHub", "VS Code", "Visual Studio"],
  },
  achievements: [
    {
      title: "NCBI GenBank Sequence Publication",
      detail: "Published a 16S rRNA gene sequence (accession PQ772087.1) and submitted additional prokaryotic 16S rRNA sequences.",
    },
    {
      title: "Research Paper Presentation - ICFBB 2025",
      detail: "Presented research on phytochemical analysis and alpha-glucosidase inhibition for diabetes management.",
    },
    {
      title: "Dr. Kalam Young Achiever Award 2026",
      detail: "Recognized for an engineering project demonstrating engineering aptitude.",
    },
  ] satisfies Credential[],
  certifications: [
    { title: "AI Tools Workshop", detail: "Ben10x workshop on AI-assisted presentations, data analysis, coding, and debugging." },
    { title: "AI Webinar", detail: "Two-day webinar conducted by AI Activation Academy." },
    { title: "Plant Developmental Biology", detail: "NPTEL Elite certification from IIT Roorkee; score 68%." },
    { title: "ARMS-PCR Workshop", detail: "Decoding Genetic Variation - ARMS PCR." },
    { title: "Mushroom Spawn Cultivation", detail: "Three-day online workshop conducted by Flavin Labs Pvt. Ltd." },
  ] satisfies Credential[],
  education: {
    degree: "Bachelor of Technology in Biotechnology",
    school: "Sri Shakthi Institute of Engineering and Technology",
    period: "2024 - 2028",
    cgpa: "8.13",
  },
};
