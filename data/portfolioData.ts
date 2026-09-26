export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  isFinalYearProject?: boolean;
  features?: string[];
  detailAvailableOnRequest?: boolean;
  accentColor?: string;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; iconName: string; tag: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  periodOrDate: string;
  gpa?: string;
  notes?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
}

export const PERSONAL_INFO = {
  name: "Christopher Pokharel",
  role: "Full Stack Developer (MERN)",
  smallLabel: "FULL STACK DEVELOPER",
  mainHeading: "Hi, I'm Christopher Pokharel.",
  subHeading: "Building modern, responsive and user-focused web applications.",
  location: "Inaruwa, Sunsari, Nepal",
  phone: "9800982301",
  email: "pokharelchristopher@gmail.com",
  github: "https://github.com/christopher7777777",
  bioHero:
    "Motivated full-stack developer with hands-on experience in React, Next.js, Node.js, Express.js, MongoDB, Prisma, Django, Java, Python, and .NET. I enjoy building practical software solutions, integrating APIs, managing databases, and solving real-world problems.",
  aboutText:
    "Motivated full-stack developer with hands-on experience in React, Next.js, Node.js, Express.js, MongoDB, Prisma, Django, Java, Python, and .NET. Skilled in building responsive web applications, API integration, database management, and problem-solving. Seeking opportunities to grow as a full-stack developer and contribute to practical, user-focused software solutions.",
  highlights: [
    "Full Stack Development",
    "MERN Stack",
    "API Integration",
    "Database Management",
    "Responsive Web Development",
    "Problem Solving",
  ],
  strengths: [
    { title: "Friendly", description: "Approachable, cooperative team player who fosters positive relationships." },
    { title: "Positive Attitude", description: "Enthusiastic problem solver with a proactive growth mindset." },
    { title: "Teamwork", description: "Effective collaborator across cross-functional development workflows." },
    { title: "Communication", description: "Clear and transparent communicator for technical and non-technical topics." },
    { title: "Problem-Solving", description: "Analytical thinker focused on building efficient, practical solutions." },
  ],
  ctaText:
    "I'm interested in building practical, user-focused software and continuously improving my full-stack development skills.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", iconName: "Atom", tag: "Library" },
      { name: "Next.js", iconName: "Zap", tag: "Framework" },
      { name: "HTML", iconName: "Code", tag: "Markup" },
      { name: "CSS", iconName: "Palette", tag: "Styling" },
      { name: "JavaScript", iconName: "FileCode", tag: "Language" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", iconName: "Server", tag: "Runtime" },
      { name: "Express.js", iconName: "Cpu", tag: "Framework" },
      { name: "Django", iconName: "Flame", tag: "Framework" },
      { name: ".NET", iconName: "Layers", tag: "Framework" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", iconName: "Database", tag: "NoSQL" },
      { name: "Prisma", iconName: "Workflow", tag: "ORM" },
    ],
  },
  {
    name: "Programming",
    skills: [
      { name: "JavaScript", iconName: "FileCode", tag: "Language" },
      { name: "Python", iconName: "Terminal", tag: "Language" },
      { name: "Java", iconName: "Coffee", tag: "Language" },
    ],
  },
  {
    name: "Other",
    skills: [
      { name: "API Integration", iconName: "Link", tag: "Integration" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "consign-solutions",
    role: "Full Stack Developer (MERN) Intern",
    company: "Consign Solutions",
    period: "18 June 2025 – 26 August 2025",
    description:
      "Developed and maintained web application features using the MERN Stack (MongoDB, Express.js, React.js, and Node.js).",
    responsibilities: [
      "Developed web application features",
      "Worked with MERN stack technologies",
      "Integrated APIs",
      "Fixed application bugs",
      "Improved application performance",
      "Enhanced user experience",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "API Integration"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "ridehub",
    name: "RIDEHUB",
    category: "Final Year Project / MERN Stack",
    description:
      "RIDEHUB is a MERN-stack motorcycle platform designed for bike rental, buying, and selling. The system includes user authentication, email verification, API integration, and secure payment functionality.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "SMTP", "Payment Integration"],
    liveUrl: "https://ridehubs.netlify.app/",
    featured: true,
    isFinalYearProject: true,
    accentColor: "from-blue-500/20 to-cyan-500/20",
    features: [
      "Motorcycle rental, buying, and selling management",
      "JWT user authentication and email verification",
      "RESTful API integration with Node.js & Express",
      "Secure payment processing gateway integration",
      "MongoDB database structure for rentals & listings",
    ],
  },
  {
    id: "localfix",
    name: "LocalFix",
    category: "Service Marketplace",
    description:
      "LocalFix is a platform that connects customers with verified local technicians and service professionals. Users can search services, filter providers, book appointments, track service status, and review completed jobs.",
    technologies: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "API Integration"],
    liveUrl: "https://localfix-sooty.vercel.app/",
    featured: true,
    accentColor: "from-emerald-500/20 to-teal-500/20",
    features: [
      "Service search",
      "Category filtering",
      "City filtering",
      "Price filtering",
      "Verified providers",
      "Appointment booking",
      "Booking status tracking",
      "Customer reviews",
      "Direct communication",
    ],
  },
  {
    id: "sneakerstore",
    name: "SneakerStore",
    category: "E-commerce Website",
    description:
      "Developed a sneaker-selling e-commerce web application using Next.js, Express.js, and MongoDB. The application includes product listing, product details, cart flow, and backend API integration for managing e-commerce data.",
    technologies: ["Next.js", "Express.js", "MongoDB", "API Integration"],
    liveUrl: "https://e-commerce-intern-qgo5.vercel.app/",
    featured: true,
    accentColor: "from-purple-500/20 to-indigo-500/20",
    features: [
      "Product catalogue and detail view",
      "Interactive shopping cart state management",
      "Next.js frontend with SSR and smooth routing",
      "Backend Express.js API for data operations",
    ],
  },
  {
    id: "musichub",
    name: "MusicHub",
    category: "Web Application",
    description:
      "MusicHub is a web-based music application focused on providing users with an interactive interface for exploring and using music-related features.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://musichubsss.netlify.app/",
    featured: true,
    accentColor: "from-amber-500/20 to-orange-500/20",
    features: [
      "Interactive audio playback controls",
      "Responsive playlist explorer UI",
      "Modern clean React component structure",
    ],
  },
  {
    id: "pet-adoption",
    name: "Pet Adoption System",
    category: "Web Application",
    description:
      "Developed a web application using React and Django for pet adoption, enabling users to browse and list pets for adoption.",
    technologies: ["React", "Django"],
    featured: false,
    detailAvailableOnRequest: true,
    accentColor: "from-rose-500/20 to-pink-500/20",
  },
  {
    id: "travel-exploration",
    name: "Travel Exploration Platform",
    category: "Web Application",
    description:
      "Created a web application using React and .NET to explore popular and hidden travel destinations, with integrated hotel booking functionality.",
    technologies: ["React", ".NET"],
    featured: false,
    detailAvailableOnRequest: true,
    accentColor: "from-sky-500/20 to-blue-500/20",
  },
  {
    id: "event-management",
    name: "Event Management System",
    category: "Java Web Application",
    description:
      "Developed a Java-based system with HTML and CSS for allowing users to book and manage events seamlessly.",
    technologies: ["Java", "HTML", "CSS"],
    featured: false,
    detailAvailableOnRequest: true,
    accentColor: "from-violet-500/20 to-fuchsia-500/20",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "itahari-college",
    degree: "BSc (Hons) Computing IT",
    institution: "Itahari International College",
    location: "Itahari, Nepal",
    periodOrDate: "September 2023",
  },
  {
    id: "lord-buddha-college",
    degree: "S.L.C in Hotel Management",
    institution: "Lord Buddha College",
    location: "Biratnagar, Nepal",
    gpa: "3.34",
    periodOrDate: "July 2020 – September 2022",
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "aws-cloud-foundation",
    title: "AWS Academy Cloud Foundation",
    issuer: "AWS Academy",
    category: "Cloud Computing",
  },
  {
    id: "aws-ml-nlp",
    title: "AWS Academy Machine Learning for Natural Language Processing",
    issuer: "AWS Academy",
    category: "Machine Learning & AI",
  },
  {
    id: "aws-data-engineering",
    title: "AWS Data Engineering",
    issuer: "AWS Academy",
    category: "Data Engineering",
  },
  {
    id: "aws-ml-foundation",
    title: "AWS Academy Machine Learning Foundation",
    issuer: "AWS Academy",
    category: "Machine Learning",
  },
];
