/**
 * GAURAV JAISWAL - RESUME AI ASSISTANT ("Gaurav AI")
 * Intelligent interactive chatbot with complete knowledge of Gaurav's Resume,
 * Projects, Experience, Skills, Certifications, and Contact details.
 */

const GAURAV_KNOWLEDGE = {
  name: "Gaurav Jaiswal",
  title: "MERN Stack Developer & Full Stack Engineer",
  email: "gjaiswalk057@gmail.com",
  phone: "+91 7905318230",
  whatsapp: "https://wa.me/917905318230",
  location: "Varanasi / Kanpur, India",
  degree: "B.Tech in Information Technology (2022 - 2026), CGPA: 7.65/10",
  college: "DR. Ambedkar Institute of Technology for Divyangjan Kanpur",
  resumePath: "Mern_resume.pdf",

  summary: `Gaurav Jaiswal is an energetic and skilled **MERN Stack Developer** with hands-on expertise building and deploying full-stack web applications. He is proficient across the complete stack: **MongoDB, Express.js, React.js, and Node.js**, alongside modern tools like **NestJS, TypeScript, Socket.IO, Redis, and Docker**. He holds the **Oracle Cloud Infrastructure AI Foundations 2025 Certification**.`,

  experience: {
    company: "JPL Tech Pvt. Ltd.",
    location: "Delhi, India",
    role: "Full Stack Developer – Enterprise Landing Page & Template Builder",
    period: "June 2026 – Present",
    techStack: "React.js, TypeScript, NestJS, MySQL, TypeORM, GrapesJS, Tailwind CSS, JWT",
    highlights: [
      "Engineered a full-stack low-code landing page and template builder using React and NestJS.",
      "Built an intuitive drag-and-drop editor allowing marketing and design teams to create reusable web page templates.",
      "Architected secure RESTful APIs for template management, file uploads, asset optimization, and live analytics.",
      "Implemented enterprise JWT authentication, role-based access, and robust MySQL integration using TypeORM.",
      "Adhered strictly to Clean Architecture, modular components, and test-driven standards."
    ]
  },

  projects: [
    {
      id: "imagify",
      title: "Imagify – AI Text-to-Image SaaS Platform",
      stack: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Cloudinary SDK, Deep Learning API",
      overview: "A production-grade AI SaaS web application that generates high-resolution art and visuals directly from user text prompts.",
      details: [
        "Integrated high-performance deep learning APIs with intelligent prompt sanitization and fallback error handling.",
        "Engineered secure JWT authentication, credit deduction logic, and user generation history tracking.",
        "Integrated Cloudinary SDK for automated cloud media transformations and lightning-fast asset delivery.",
        "Built a responsive modern dark UI with Tailwind CSS and deployed frontend on Vercel and backend on Render."
      ]
    },
    {
      id: "chatz",
      title: "Chat-Z – Real-Time Messaging & Collaboration App",
      stack: "React.js, Redux Toolkit, Socket.IO, Express.js, Node.js, MongoDB, Tailwind CSS",
      overview: "A scalable, bidirectional real-time communication platform supporting instant messaging, rooms, and live user status.",
      details: [
        "Implemented Socket.IO room events for sub-millisecond bidirectional messaging and typing indicators.",
        "Designed optimized MongoDB schemas using Mongoose for efficient conversation retrieval and indexing.",
        "Built REST APIs for user auth (bcrypt & JWT), friend lists, and conversation archives.",
        "Employed Redux Toolkit on the React frontend for predictive, lag-free global state management."
      ],
      liveUrl: "https://real-time-chat-app-2-a8ji.onrender.com/login"
    },
    {
      id: "vybe",
      title: "Vybe – Modern Social & Media Platform",
      stack: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, REST APIs",
      overview: "A contemporary full-stack social feed and community platform featuring interactive posts, comments, likes, and user profiles.",
      details: [
        "Features dynamic content feeds with infinite scroll, media uploads, and instant social interactions.",
        "Robust RESTful backend with pagination, query filtering, and MongoDB aggregation pipelines."
      ]
    },
    {
      id: "music",
      title: "Music-Player App",
      stack: "React.js, Tailwind CSS, JavaScript, React Hooks",
      overview: "Interactive music player web application built with React and Tailwind CSS with modern and responsive design.",
      details: [
        "Developed an interactive music player UI using React with modern and responsive design.",
        "Implemented features like play/pause, next/previous, seek bar.",
        "Managed playlist creation and dynamic song loading using React state management and hooks."
      ],
      liveUrl: "https://music-forr-all.netlify.app/"
    }
  ],

  skills: {
    frontend: ["React.js", "Redux Toolkit", "Context API", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3"],
    backend: ["Node.js", "Express.js", "NestJS", "REST API Design", "Socket.IO", "Nodemailer", "Cloudinary SDK"],
    databases: ["MongoDB (Mongoose)", "MySQL", "PostgreSQL", "Redis", "TypeORM"],
    devops_security: ["JWT Authentication", "bcrypt", "Docker", "Git & GitHub", "Vercel", "Render", "Postman", "CORS & Security Policies"],
    languages: ["JavaScript", "TypeScript", "Java", "C"]
  },

  certifications: [
    {
      name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      id: "102580157OCI25AICFA",
      year: "2025",
      description: "Validated expertise in Artificial Intelligence fundamentals, Machine Learning principles, and Oracle Cloud AI services."
    },
    {
      name: "Infosys Springboard – Modern JavaScript & REST APIs",
      issuer: "Infosys Springboard",
      year: "2024",
      description: "In-depth certification covering Spring Boot concepts, enterprise RESTful APIs, and modern JavaScript."
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech in IT)",
      institute: "DR. Ambedkar Institute of Technology for Divyangjan, Kanpur",
      period: "2022 – 2026",
      cgpa: "7.65 / 10"
    },
    {
      degree: "Intermediate (Class XII)",
      institute: "St. Thomas School, Gopiganj",
      year: "2021"
    },
    {
      degree: "High School (Class X)",
      institute: "St. Thomas School, Gyanpur",
      year: "2019"
    }
  ]
};

// Response Knowledge Engine
class GauravAI {
  constructor() {
    this.history = [];
  }

  generateAnswer(userQuery) {
    const q = userQuery.toLowerCase().trim();

    // 1. Greetings & Identity
    if (q.match(/\b(hi|hello|hey|greetings|namaste|who are you|kaun ho|kya ho|introduce)\b/)) {
      return `Hello! 👋 I'm **Gaurav's AI Portfolio Assistant**.\n\nI have complete knowledge of Gaurav Jaiswal's **MERN stack skills, full-stack projects, JPL Tech work experience, and background**.\n\nYou can ask me things like:\n- *"What is Gaurav's tech stack?"*\n- *"Tell me about his AI SaaS project (Imagify)"*\n- *"What did he do at JPL Tech?"*\n- *"How can I hire or contact Gaurav?"*`;
    }

    // 2. Contact & Hire
    if (q.match(/\b(contact|hire|email|phone|call|whatsapp|reach|connect|interview|freelance|available)\b/)) {
      return `You can connect directly with Gaurav Jaiswal right now:\n\n` +
        `• 📧 **Email:** [gjaiswalk057@gmail.com](mailto:${GAURAV_KNOWLEDGE.email})\n` +
        `• 📱 **Phone:** [${GAURAV_KNOWLEDGE.phone}](tel:${GAURAV_KNOWLEDGE.phone.replace(/[^0-9+]/g, '')})\n` +
        `• 💬 **WhatsApp:** [Message on WhatsApp](${GAURAV_KNOWLEDGE.whatsapp})\n` +
        `• 📍 **Location:** ${GAURAV_KNOWLEDGE.location}\n\n` +
        `He is currently open for **Full-Time MERN Stack / Frontend / Backend Engineer roles** and high-impact development projects!`;
    }

    // 3. Resume / CV Download
    if (q.match(/\b(resume|cv|download|pdf|profile)\b/)) {
      return `You can download Gaurav Jaiswal's verified PDF resume right here:\n\n` +
        `📄 **[Click to View & Download Resume (PDF)](./${GAURAV_KNOWLEDGE.resumePath})**\n\n` +
        `It contains his complete academic records, JPL Tech tenure, project details, and certifications.`;
    }

    // 4. Work Experience (JPL Tech)
    if (q.match(/\b(experience|work experience|jpl|jpl tech|company|tenure|enterprise|role|job|jobs|work history|career|intern|developer role|kaam|where does he work|working at|works at|work at)\b/)) {
      const exp = GAURAV_KNOWLEDGE.experience;
      return `### 🏢 Experience at ${exp.company} (${exp.location})\n` +
        `**Role:** ${exp.role}\n` +
        `**Duration:** ${exp.period}\n` +
        `**Tech Stack:** ${exp.techStack}\n\n` +
        `**Key Contributions:**\n` +
        exp.highlights.map(h => `• ${h}`).join('\n');
    }

    // 5. Projects Query
    if (q.match(/\b(project|projects|imagify|chat-z|chatz|vybe|music|music player|saas|app|apps|application|applications)\b/)) {
      if (q.includes("imagify") || q.includes("saas") || q.includes("ai image")) {
        const p = GAURAV_KNOWLEDGE.projects[0];
        return `### 🎨 ${p.title}\n\n` +
          `${p.overview}\n\n` +
          `**Tech Stack:** ${p.stack}\n\n` +
          `**Key Engineering Achievements:**\n` +
          p.details.map(d => `• ${d}`).join('\n') +
          `\n\n*Live demo and GitHub repository links are featured on the portfolio!*`;
      }

      if (q.includes("chat") || q.includes("socket")) {
        const p = GAURAV_KNOWLEDGE.projects[1];
        return `### 💬 ${p.title}\n\n` +
          `${p.overview}\n\n` +
          `**Tech Stack:** ${p.stack}\n\n` +
          `**Key Engineering Achievements:**\n` +
          p.details.map(d => `• ${d}`).join('\n') + `\n\n` +
          `• 🔗 **Live Demo:** [Open App](${p.liveUrl})`;
      }

      if (q.includes("vybe")) {
        const p = GAURAV_KNOWLEDGE.projects[2];
        return `### ⚡ ${p.title}\n\n` +
          `${p.overview}\n\n` +
          `**Tech Stack:** ${p.stack}\n\n` +
          `**Key Engineering Achievements:**\n` +
          p.details.map(d => `• ${d}`).join('\n');
      }

      if (q.includes("music") || q.includes("player") || q.includes("song") || q.includes("audio")) {
        const p = GAURAV_KNOWLEDGE.projects[3];
        return `### 🎵 ${p.title} (React.js & Tailwind CSS)\n\n` +
          `${p.overview}\n\n` +
          `**Tech Stack:** ${p.stack}\n\n` +
          p.details.map(d => `• ${d}`).join('\n') + `\n\n` +
          `• 🔗 **Live Demo:** [Open App](${p.liveUrl})`;
      }

      // General projects overview
      return `Gaurav has built 4 standout full-stack applications:\n\n` +
        `1. **Imagify (AI SaaS Platform):** Text-to-image generator using MERN + Cloudinary + Deep Learning APIs.\n` +
        `2. **Chat-Z (Real-Time Messenger):** Instant communication with Socket.IO, Redux, Express & MongoDB.\n` +
        `3. **Vybe (Social Web App):** Community feed platform with user auth, comments, and media sharing.\n` +
        `4. **Music-Player App:** Interactive music player UI with React, Tailwind CSS, playlist management, and dynamic song loading.\n\n` +
        `Would you like in-depth details on any specific project?`;
    }

    // 6. Skills & Tech Stack
    if (q.match(/\b(skill|skills|stack|tech|frontend|backend|database|node|react|mongo|express|javascript|typescript|docker)\b/)) {
      const s = GAURAV_KNOWLEDGE.skills;
      return `### 🛠️ Gaurav's Technical Skills Matrix\n\n` +
        `• **Frontend:** ${s.frontend.join(", ")}\n` +
        `• **Backend & Real-Time:** ${s.backend.join(", ")}\n` +
        `• **Databases & ORM:** ${s.databases.join(", ")}\n` +
        `• **DevOps & Tools:** ${s.devops_security.join(", ")}\n` +
        `• **Core Languages:** ${s.languages.join(", ")}\n\n` +
        `He has end-to-end expertise in designing robust RESTful APIs, securing them with JWT/bcrypt, and deploying on Vercel & Render.`;
    }

    // 7. Education & Certifications
    if (q.match(/\b(education|college|btech|degree|cert|certification|oracle|cgpa|school|qualification)\b/)) {
      const edu = GAURAV_KNOWLEDGE.education[0];
      const cert1 = GAURAV_KNOWLEDGE.certifications[0];
      const cert2 = GAURAV_KNOWLEDGE.certifications[1];

      return `### 🎓 Education & Certifications\n\n` +
        `• **${edu.degree}** (${edu.period})\n` +
        `  *${edu.institute}* | **CGPA: ${edu.cgpa}**\n\n` +
        `• 🏆 **${cert1.name}**\n` +
        `  Issuer: ${cert1.issuer} | Cert ID: \`${cert1.id}\`\n\n` +
        `• 📜 **${cert2.name}**\n` +
        `  Issuer: ${cert2.issuer} (${cert2.description})`;
    }

    // 8. Why Hire Gaurav?
    if (q.match(/\b(why hire|strength|strengths|why should|fit|advantage|best candidate)\b/)) {
      return `### 🌟 Why Gaurav is a Strong Addition to Your Team:\n\n` +
        `1. **Full-Stack Competence:** Can build both sleek, highly reactive user interfaces (React/Redux/Tailwind) and robust server architectures (Node/Express/NestJS/MongoDB).\n` +
        `2. **Real-World Experience:** Already delivered production landing page builders and drag-and-drop systems at JPL Tech.\n` +
        `3. **Modern AI & Cloud Acumen:** Certified in Oracle Cloud Infrastructure AI Foundations with practical experience integrating deep learning APIs (Imagify).\n` +
        `4. **Clean Code & Delivery Mindset:** Dedicated to modular design, reusable component libraries, and performance optimization.`;
    }

    // Default Fallback with guided suggestions
    return `I am unable to answer this question because I am only programmed to answer questions related to **Gaurav Jaiswal's resume**, skills, projects, and professional background.\n\n` +
      `Please feel free to ask me anything about Gaurav:\n` +
      `• *"What are Gaurav's top projects?"*\n` +
      `• *"Tell me about his technical skills & tech stack"*\n` +
      `• *"What is his work experience at JPL Tech?"*\n` +
      `• *"What are his education and certifications?"*\n` +
      `• *"How can I contact or hire Gaurav?"*`;
  }
}

// UI Integration
document.addEventListener("DOMContentLoaded", () => {
  const botEngine = new GauravAI();

  const launcherBtn = document.getElementById("aiLauncherBtn");
  const modalBackdrop = document.getElementById("aiModalBackdrop");
  const chatWindow = document.getElementById("aiChatWindow");
  const closeBtn = document.getElementById("aiCloseBtn");
  const messagesArea = document.getElementById("aiMessagesArea");
  const inputField = document.getElementById("aiInputField");
  const sendBtn = document.getElementById("aiSendBtn");
  const suggestionsBar = document.getElementById("aiSuggestionsBar");
  const quickAiTriggers = document.querySelectorAll(".trigger-ai-modal");

  function openChat() {
    chatWindow.classList.add("open");
    modalBackdrop.classList.add("open");
    inputField.focus();
  }

  function closeChat() {
    chatWindow.classList.remove("open");
    modalBackdrop.classList.remove("open");
  }

  if (launcherBtn) launcherBtn.addEventListener("click", openChat);
  if (closeBtn) closeBtn.addEventListener("click", closeChat);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeChat);

  quickAiTriggers.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openChat();
    });
  });

  function appendMessage(text, sender = "bot") {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${sender}`;

    // Simple markdown formatting (bold, italic, links, lists)
    let formatted = text
      .replace(/\n\n/g, "<br><br>")
      .replace(/\n/g, "<br>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`([^`]+)`/g, "<code style='background:rgba(255,255,255,0.1);padding:2px 5px;border-radius:4px;'>$1</code>")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href='$2' target='_blank' style='color:#a78bfa;text-decoration:underline;'>$1</a>");

    bubble.innerHTML = formatted;
    messagesArea.appendChild(bubble);
    messagesArea.scrollTop = messagesArea.scrollHeight;
  }

  function showTypingIndicator() {
    const indicator = document.createElement("div");
    indicator.className = "typing-indicator";
    indicator.id = "activeTypingIndicator";
    indicator.innerHTML = `
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    `;
    messagesArea.appendChild(indicator);
    messagesArea.scrollTop = messagesArea.scrollHeight;
  }

  function removeTypingIndicator() {
    const indicator = document.getElementById("activeTypingIndicator");
    if (indicator) indicator.remove();
  }

  function handleSend(userText) {
    const text = userText || inputField.value.trim();
    if (!text) return;

    appendMessage(text, "user");
    if (!userText) inputField.value = "";

    showTypingIndicator();

    // Natural bot response delay
    setTimeout(() => {
      removeTypingIndicator();
      const answer = botEngine.generateAnswer(text);
      appendMessage(answer, "bot");
    }, 450);
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", () => handleSend());
  }

  if (inputField) {
    inputField.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSend();
      }
    });
  }

  // Suggestion chips click
  if (suggestionsBar) {
    suggestionsBar.addEventListener("click", (e) => {
      const chip = e.target.closest(".ai-chip");
      if (chip) {
        const query = chip.getAttribute("data-query") || chip.textContent.trim();
        handleSend(query);
      }
    });
  }
});
