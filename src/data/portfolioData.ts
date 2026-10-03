export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    aiEngine: string;
  };
  liveDemoAvailable: boolean;
  githubUrl: string;
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'web' | 'ai' | 'tools' | 'soft';
  description: string;
  highlight?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  status: 'In Progress' | 'Completed';
  field: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  duration: string;
  highlights: string[];
  technologies: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Rajamahendravarpu ChandraSekhar",
    preferredName: "ChandraSekhar",
    title: "AI & Data Science Engineer",
    secondaryTitle: "Undergraduate Developer",
    email: "rajamahendravarapuchandu@gmail.com",
    phone: "+91 9381585123",
    rawPhone: "9381585123",
    location: "India",
    linkedin: "https://www.linkedin.com/in/rajamahendravarapu-chandu-82390a321",
    github: "https://github.com/rajamahendravarapuchandu",
    summary: "AI & Data Science undergraduate with hands-on experience in Python, React, machine learning, and generative AI, focused on building practical AI-driven applications.",
    initials: "RC",
  },

  
  skills: [
    // Languages
    { name: "Python", category: "languages", description: "Core data science, ML pipeline development, scripting, and backend AI integration" },
    { name: "Java", category: "languages", description: "Object-oriented programming, data structures, and foundational algorithms" },
    { name: "HTML", category: "languages", description: "Semantic markup, modern web structure, and accessibility best practices" },
    { name: "CSS", category: "languages", description: "Responsive layouts, visual styling, flexbox, and modern CSS architecture" },
    
    // Web Technologies
    { name: "React", category: "web", description: "Modern component-driven SPAs, hooks, state management, and responsive UI" },
    { name: "Express.js", category: "web", description: "RESTful API development, server routing, and backend microservices" },
    { name: "Firebase", category: "web", description: "Cloud database storage, authentication, and hosting for real-time applications" },

    // Machine Learning & AI
    { name: "Gemini API", category: "ai", description: "Generative AI multimodal prompting, structured responses, and intelligent agent systems" },
    { name: "TensorFlow", category: "ai", description: "Deep learning models, neural network architectures, and predictive analytics" },
    { name: "Scikit-learn", category: "ai", description: "Classical machine learning algorithms, classification, regression, and model evaluation" },
    { name: "NumPy", category: "ai", description: "High-performance numerical computing, n-dimensional array manipulation, and linear algebra" },
    { name: "Pandas", category: "ai", description: "Structured data manipulation, exploratory data analysis, and feature engineering" },

    // Tools
    { name: "Visual Studio Code", category: "tools", description: "Primary IDE for full-stack web and Python machine learning development" },

    // Soft Skills
    { name: "Communication", category: "soft", description: "Clear articulation of technical ideas, cross-functional collaboration, and technical writing" },
    { name: "Teamwork", category: "soft", description: "Collaborative problem solving, peer code reviews, and group engineering efforts" },
    { name: "Adaptability", category: "soft", description: "Fast learner eager to master emerging frameworks, AI tools, and dynamic paradigms" },
    { name: "Leadership", category: "soft", description: "Initiative-driven project coordination and guiding technical deliverables" },
  ] as SkillItem[],

  projects: [
    {
      id: "agrivision-ai",
      title: "AgriVision AI",
      subtitle: "AI-Powered Smart Agriculture Platform",
      description: "Developed an AI-powered smart agriculture platform that provides crop disease detection, AI-based farming guidance, weather insights, and soil analysis.",
      longDescription: "Built an interactive web application using React, Express.js, Firebase, and Gemini API to deliver personalized recommendations and improve farming decisions. The platform leverages modern computer vision concepts and generative AI prompts to empower farmers with precision diagnostic insights and actionable climate advice.",
      image: "/src/assets/images/agrivision_ai_preview_1791001391629.jpg",
      tags: ["React", "Express.js", "Firebase", "Gemini API", "Python", "Computer Vision"],
      features: [
        "Instant crop disease detection and diagnosis",
        "AI-based proactive farming guidance tailored to crop cycles",
        "Real-time localized weather insights and impact warnings",
        "Comprehensive soil analysis and fertilization recommendations",
        "Personalized agricultural advisory delivered through interactive UI"
      ],
      architecture: {
        frontend: "React SPA with responsive responsive layouts and dynamic visual telemetry",
        backend: "Express.js RESTful API layer managing requests and analysis pipelines",
        database: "Firebase Cloud Firestore for real-time farmer data & record persistence",
        aiEngine: "Google Gemini API for intelligent agronomy synthesis and contextual diagnosis"
      },
      liveDemoAvailable: true,
      githubUrl: "https://github.com/rajamahendravarapuchandu/AgriVision-AI"
    }
  ] as Project[],

  experience: [
    {
      role: "Artificial Intelligence and Cyber Security Virtual Intern",
      company: "Indian Servers",
      period: "2025 - 2025",
      type: "Virtual Internship",
      duration: "4 Weeks",
      highlights: [
        "Completed a 4-weeks virtual internship focused on Artificial Intelligence and cyber security.",
        "Worked with libraries such as NumPy, Pandas, Scikit-learn, and TensorFlow for basic analysis and model building.",
        "Explored predictive threat modeling and security analysis with machine learning pipelines."
      ],
      technologies: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Python", "Cyber Security"]
    }
  ] as ExperienceItem[],

  education: [
    {
      degree: "Bachelor of Artificial Intelligence and Data Science",
      institution: "Satya Institute of Technology and Management",
      location: "Vizianagaram",
      period: "2023 - 2027",
      gpa: "6.51",
      status: "In Progress",
      field: "Artificial Intelligence & Data Science"
    },
    {
      degree: "Board of Intermediate in MPC",
      institution: "Govt Junior College",
      location: "Veeraghattam",
      period: "2021 - 2023",
      gpa: "5.5",
      status: "Completed",
      field: "Mathematics, Physics, Chemistry (MPC)"
    },
    {
      degree: "Board of Secondary Education",
      institution: "ZP High school",
      location: "Kattula kavati",
      period: "2020 - 2021",
      gpa: "9.3",
      status: "Completed",
      field: "Secondary School Certificate (SSC)"
    }
  ] as EducationItem[]
};
