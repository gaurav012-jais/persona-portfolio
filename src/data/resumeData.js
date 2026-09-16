export const RESUME_DATA = {
  personal: {
    name: "Gaurav Jaiswal",
    role: "MERN Stack Developer & Full Stack Engineer",
    tagline:
      "Building scalable, high-performance web applications with clean architecture and modern AI integrations.",
    email: "gjaiswalk057@gmail.com",
    phone: "+91 7905318230",
    phoneDisplay: "7905318230",
    whatsapp: "https://wa.me/917905318230",
    location: "Varanasi / Kanpur, India",
    linkedin: "https://www.linkedin.com/in/gaurav-jaiswal-60771328b",
    github: "https://github.com/gaurav012-jais",
    resumeUrl: "/Mern_resume.pdf",
    avatar: "/images/gaurav-celestial-portrait.jpg",
    openToWork: true,
  },

  summary:
    "MERN Stack Developer with hands-on experience building and deploying full-stack web applications. Skilled across the entire stack – MongoDB, Express.js, React.js, and Node.js – with experience in REST API design, real-time communication, JWT authentication, and cloud deployment. Certified in Oracle Cloud Infrastructure AI Foundations. Passionate about problem-solving, continuous learning, and contributing to impactful real-world projects.",

  stats: [
    {
      label: "Completed Projects",
      value: "4+",
      sub: "Production Full-Stack Apps",
    },
    { label: "Experience", value: "Active", sub: "JPL Tech (Full Stack)" },
    { label: "AI & Cloud", value: "OCI AI", sub: "Certified Associate" },
    { label: "Academic CGPA", value: "7.65", sub: "B.Tech (2022 - 2026)" },
  ],

  experience: [
    {
      company: "JPL Tech Pvt. Ltd.",
      location: "Delhi",
      role: "Full Stack Developer",
      project: "Enterprise Landing Page & Template Builder",
      period: "June 2026 – present",
      techStack: [
        "React.js",
        "TypeScript",
        "NestJS",
        "MySQL",
        "TypeORM",
        "GrapesJS",
        "Tailwind CSS",
        "JWT",
      ],
      highlights: [
        "Developed a full-stack low-code landing page and template builder using React and NestJS.",
        "Built a drag-and-drop editor for creating and managing reusable landing page templates.",
        "Designed REST APIs for authentication, template management, uploads, and analytics.",
        "Implemented JWT authentication, asset management, and MySQL database integration.",
        "Followed modular architecture, reusable components, and Clean Architecture principles.",
      ],
    },
  ],

  projects: [
    {
      id: "imagify",
      title: "Imagify – Text to Image SaaS App",
      category: "Full-Stack AI SaaS",
      image: "/images/project image/imagify.png",
      featured: true,
      description:
        "Full-stack AI image generation SaaS platform allowing users to generate high-resolution images from natural language text prompts with token credit tracking and instant Cloudinary delivery.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Cloudinary SDK",
        "Deep Learning API",
        "JWT",
      ],
      highlights: [
        "Integrated deep learning API to generate images from text prompts with robust validation & error handling.",
        "Engineered JWT authentication, cloud image storage via Cloudinary, and persistent user prompt history.",
        "Designed responsive, intuitive React UI with Tailwind CSS for seamless end-to-end user experience.",
        "Deployed frontend on Vercel and backend on Render with environment-based configurations.",
      ],
      liveUrl: "https://imagify-ai-saas.vercel.app",
      githubUrl: "https://github.com/gaurav012-jais/AI-Image-Generator",
    },
    {
      id: "chat-z",
      title: "Chat-Z – Real-Time Chat Application",
      category: "Real-Time Communication",
      image: "/images/project image/chat-z.png",
      featured: true,
      description:
        "High-performance real-time messaging application enabling instantaneous peer communication with live typing indicators, room events, and persistent chat records.",
      techStack: [
        "React.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "Express.js",
        "Socket.IO",
        "MongoDB",
        "JWT",
      ],
      highlights: [
        "Integrated Socket.IO for bidirectional real-time messaging with room-based event handling.",
        "Designed MongoDB schemas (Mongoose) and built Express.js REST APIs for authentication & messaging.",
        "Implemented Redux Toolkit for scalable state management across chat, rooms, and user modules.",
        "Built responsive, modern dark UI using React & Tailwind CSS, deployed on Render.",
      ],
      liveUrl: "https://real-time-chat-app-2-a8ji.onrender.com/login",
      githubUrl: "https://github.com/gaurav012-jais/Real-Time-Chat-App",
    },
    {
      id: "vybe",
      title: "Vybe – Modern Social & Media Platform",
      category: "Social Platform",
      image: "/images/project image/vybe.png",
      featured: false,
      description:
        "Dynamic community-driven social feed web app featuring user post interactions, rich media feeds, real-time interactions, and scalable MongoDB storage.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "REST APIs",
      ],
      highlights: [
        "Interactive feed with infinite scroll, like/comment features, and image uploading.",
        "Structured RESTful backend with pagination, aggregation pipelines, and secure user sessions.",
      ],
      liveUrl: "https://vybe-social.vercel.app",
      githubUrl: "https://github.com/gaurav012-jais/Vybe",
    },
    {
      id: "music",
      title: "Music-Player App",
      category: "React & Tailwind Web App",
      image: "/images/project image/music.png",
      featured: false,
      description:
        "Interactive music player UI using React and Tailwind CSS with modern and responsive design, dynamic playlist creation, and seamless audio controls.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "React Hooks"],
      highlights: [
        "Developed an interactive music player UI using React with modern and responsive design.",
        "Implemented features like play/pause, next/previous, seek bar.",
        "Managed playlist creation and dynamic song loading using React state management and hooks.",
      ],
      liveUrl: "https://music-forr-all.netlify.app/",
      githubUrl: "https://github.com/gaurav012-jais/Music-Player",
    },
    {
      id: "3d-model-showcase",
      title: "3D Model Showcase – WebGL & Three.js",
      category: "3D Graphics & WebGL",
      image: "/images/project image/3d-model.png",
      featured: false,
      description:
        "Interactive 3D model visualizer and product customizer built with Three.js and WebGL. Features orbital 3D camera controls, material texture shaders, and dynamic lighting presets.",
      techStack: [
        "Three.js",
        "React.js",
        "WebGL",
        "GLTF Loader",
        "Tailwind CSS",
      ],
      highlights: [
        "Engineered responsive WebGL canvas with orbit controls and 60FPS real-time rendering.",
        "Implemented dynamic lighting shaders, material switching, and 360-degree model inspection.",
        "Optimized GLTF/GLB asset loading with progressive mesh decimation and memory cleanup.",
      ],
    },
    {
      id: "Todo-List",
      title: "TaskFlow – Smart Todo & Workflow Manager",
      category: "Productivity & State Management",
      image: "/images/project image/todo-list.png",
      featured: false,
      description:
        "Feature-rich productivity dashboard featuring priority filters, custom pipeline stages, local persistence, category tagging, and task completion metrics.",
      techStack: [
        "React.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "LocalStorage API",
        "Lucide Icons",
      ],
      highlights: [
        "Architected modular state management with Redux Toolkit for quick filter operations.",
        "Designed streamlined Kanban and list views with priority tags and deadline notifications.",
        "Built offline-first local storage sync with instant status updates and subtask trees.",
      ],
    },
    {
      id: "dropcraft-dnd",
      title: "DropCraft – Interactive Drag & Drop Studio",
      category: "Interactive UI & Drag-n-Drop",
      image: "/images/project image/dragndrop.png",
      featured: false,
      description:
        "High-performance drag-and-drop workspace enabling users to dynamically organize, rearrange, and reorder interactive components with fluid physics animations.",
      techStack: [
        "React.js",
        "HTML5 Drag & Drop",
        "Tailwind CSS",
        "Framer Motion",
        "TypeScript",
      ],
      highlights: [
        "Created multi-container drag-and-drop mechanics with collision detection and smooth drop zones.",
        "Implemented fluid spring physics and reorder animations with zero visual stutter.",
        "Designed customizable card templates with nesting capabilities and exportable JSON layouts.",
      ],
    },
    {
      id: "Template-editor",
      title: "PageForge – Dynamic Template Editor",
      category: "Low-Code & Builder Tools",
      image: "/images/project image/template-editor.svg",
      featured: false,
      description:
        "Full-stack modular template and landing page editor allowing users to assemble UI blocks, edit live styles and typography, and export clean production HTML/CSS.",
      techStack: [
        "React.js",
        "NestJS",
        "TypeScript",
        "Tailwind CSS",
        "REST APIs",
        "MySQL",
      ],
      highlights: [
        "Engineered visual block-building interface inspired by enterprise builder architectures.",
        "Integrated real-time live preview with responsive device breakpoints and layout controls.",
        "Built template versioning, reusable layout presets, and instant JSON export.",
      ],
    },
    {
      id: "portfolio-template",
      title: "Portfolia – Modern Developer Portfolio Template",
      category: "Web Architecture & UI/UX",
      image: "/images/project image/portfolio-template.svg",
      featured: false,
      description:
        "Sleek, highly customizable developer portfolio template crafted with cosmic aesthetics, dark glassmorphism, fluid micro-interactions, and AI assistant integration.",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Vite",
        "Lucide Icons",
        "Clean Architecture",
      ],
      highlights: [
        "Crafted bespoke UI design system with fluid SVG wave dividers and electric cyan accents.",
        "Optimized for 100/100 Lighthouse performance with responsive mobile-first typography.",
        "Includes integrated AI conversational bot, resume download workflows, and contact handling.",
      ],
    },
    {
      id: "docuquery-rag",
      title: "DocuQuery – Enterprise AI RAG Knowledge System",
      category: "Generative AI & LLMs",
      image: "/images/project image/rag.svg",
      featured: false,
      description:
        "Retrieval-Augmented Generation (RAG) system enabling semantic search and conversational Q&A over enterprise documents using vector embeddings and LLM reasoning.",
      techStack: [
        "Python",
        "Node.js",
        "LangChain",
        "Vector DB",
        "OpenAI / Gemini API",
        "React.js",
      ],
      highlights: [
        "Engineered document ingestion pipeline with smart chunking and high-dimension vector indexing.",
        "Implemented hybrid semantic retrieval with cosine similarity scoring for hallucination-free answers.",
        "Designed intuitive chat interface with cited source document references and token tracking.",
      ],
    },
    {
      id: "Blog Management",
      title: "DevPulse – Full-Stack Blog & Content CMS",
      category: "Full-Stack CMS & Publishing",
      image: "/images/project image/blog-management.svg",
      featured: false,
      description:
        "Complete developer blogging platform with Markdown authoring, image uploads, syntax-highlighted code blocks, category tagging, and interactive discussions.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
      ],
      highlights: [
        "Engineered Markdown editor with live preview, syntax highlighting, and media management.",
        "Built role-based access control (RBAC), JWT authentication, and comment moderation APIs.",
        "Optimized SEO metadata tags, reading time calculation, and social sharing embeds.",
      ],
    },
    {
      id: "Expense tracker",
      title: "SpendWise – Smart Financial Expense Tracker",
      category: "Fintech & Data Analytics",
      image: "/images/project image/expense-tracker.svg",
      featured: false,
      description:
        "Comprehensive personal finance dashboard with expense categorization, monthly budget threshold alerts, interactive graphical breakdowns, and CSV data export.",
      techStack: [
        "React.js",
        "Chart.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      highlights: [
        "Constructed interactive data visualizations with Chart.js for spend breakdown by category.",
        "Implemented customizable budget limits with real-time warning indicators for excess spending.",
        "Engineered transactional REST APIs with multi-currency support and CSV export functionality.",
      ],
    },
  ],

  skills: {
    frontend: [
      { name: "React.js", level: "Advanced" },
      { name: "Redux Toolkit", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "HTML5 & CSS3", level: "Expert" },
      { name: "Context API & Hooks", level: "Expert" },
    ],
    backend: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "NestJS", level: "Intermediate" },
      { name: "REST API Design", level: "Expert" },
      { name: "Socket.IO", level: "Advanced" },
      { name: "Nodemailer", level: "Intermediate" },
      { name: "Cloudinary SDK", level: "Advanced" },
    ],
    databases: [
      { name: "MongoDB & Mongoose", level: "Advanced" },
      { name: "MySQL", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Redis", level: "Intermediate" },
      { name: "TypeORM", level: "Intermediate" },
    ],
    devops_security: [
      { name: "JWT & bcrypt", level: "Advanced" },
      { name: "Session & CORS", level: "Advanced" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Vercel & Render", level: "Advanced" },
      { name: "Postman", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
    ],
    languages: ["JavaScript", "TypeScript", "Java", "C"],
  },

  education: [
    {
      institution: "DR. Ambedkar Institute of Technology for Divyangjan",
      location: "Kanpur",
      degree: "Bachelor of Technology (B.Tech)",
      score: "CGPA: 7.65/10",
      period: "2022 – 2026",
    },
    {
      institution: "St. Thomas School",
      location: "Gopiganj",
      degree: "Intermediate (Class XII)",
      period: "2021",
    },
    {
      institution: "St. Thomas School",
      location: "Gyanpur",
      degree: "High School (Class X)",
      period: "2019",
    },
  ],

  certifications: [
    {
      title:
        "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      certId: "102580157OCI25AICFA",
      badge: "AI & Cloud Certification",
      description:
        "Comprehensive validation of core Artificial Intelligence concepts, Deep Learning principles, Machine Learning lifecycles, and Oracle Cloud AI infrastructure services.",
    },
    {
      title: "Infosys Springboard – Modern JavaScript & REST APIs",
      issuer: "Infosys Springboard",
      year: "2024",
      badge: "Web & API Engineering",
      description:
        "Hands-on training covering Spring Boot architecture, enterprise REST API design patterns, asynchronous JavaScript, and modern ES6+ standards.",
    },
    {
      title: "Introduction to Generative AI – Google Cloud & Simplilearn SkillUp",
      issuer: "Google Cloud & Simplilearn SkillUp",
      year: "2025",
      certId: "9490671",
      badge: "Generative AI",
      description:
        "Foundational understanding of Generative AI concepts, large language models, responsible AI practices, and Google Cloud AI tools and services.",
    },
  ],
};
