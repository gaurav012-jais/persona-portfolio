import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function AIAssistantModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: `Hello! 👋 I'm **Gaurav's AI Portfolio Assistant**.\n\nI have complete knowledge of Gaurav Jaiswal's **MERN stack skills, full-stack projects, JPL Tech work experience, and certifications**.\n\nFeel free to ask me anything or click a quick suggestion below!`,
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chipsContainerRef = useRef(null);
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [hasDragged, setHasDragged] = useState(false);

  const suggestionChips = [
    { label: '🚀 Top Projects', query: 'What are Gaurav\'s top projects?' },
    { label: '🛠 Tech Stack', query: 'What is his core technical skills and stack?' },
    { label: '🏢 JPL Tech Role', query: 'Tell me about his work experience at JPL Tech' },
    { label: '🎓 Education & Certs', query: 'What are his education and certifications?' },
    { label: '💡 Why hire him?', query: 'Why should we hire Gaurav?' },
    { label: '📞 Contact Details', query: 'How can I contact Gaurav?' },
  ];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Desktop Mouse Wheel & Drag-to-Scroll Handlers for Suggestion Chips
  const handleChipsWheel = (e) => {
    if (chipsContainerRef.current && e.deltaY !== 0) {
      chipsContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  const handleMouseDown = (e) => {
    if (!chipsContainerRef.current) return;
    isMouseDownRef.current = true;
    setHasDragged(false);
    startXRef.current = e.pageX - chipsContainerRef.current.offsetLeft;
    scrollLeftRef.current = chipsContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isMouseDownRef.current || !chipsContainerRef.current) return;
    const x = e.pageX - chipsContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    if (Math.abs(walk) > 4) {
      setHasDragged(true);
    }
    chipsContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
    setTimeout(() => setHasDragged(false), 50);
  };

  const handleMouseLeave = () => {
    isMouseDownRef.current = false;
    setTimeout(() => setHasDragged(false), 50);
  };

  const scrollChips = (direction) => {
    if (chipsContainerRef.current) {
      const amount = direction === 'left' ? -170 : 170;
      chipsContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const answerQuery = (rawQuery) => {
    const q = rawQuery.toLowerCase().trim();

    // 1. Greetings, Help, and Assistant Identity
    if (q.match(/\b(hi|hello|hey|greetings|namaste|who are you|introduce|start|help|kaun ho)\b/)) {
      return `Hello! 👋 I'm **Gaurav's AI Portfolio Assistant**.\n\nI can tell you about:\n• His **MERN Stack & Full Stack** projects (Imagify, Chat-Z, Vybe, Music-Player App)\n• His **JPL Tech Pvt. Ltd.** enterprise development experience\n• His **Oracle Cloud AI Foundations** certification\n• How to schedule an interview or contact him!`;
    }

    // 2. WHY HIRE GAURAV / VALUE PROPOSITION (Evaluated BEFORE general contact to prevent collision)
    if (
      q.match(/\b(why hire|why should|why choose|hire him|strength|strengths|fit|advantage|best candidate|about gaurav|who is gaurav|gaurav kaun hai|kaisa developer|kya fayda)\b/) ||
      (q.includes('why') && q.includes('hire')) ||
      (q.includes('why') && q.includes('gaurav'))
    ) {
      return `### 🌟 Why Gaurav Jaiswal is a High-Impact Hire:\n\n` +
        `**1. 🏢 Proven Enterprise Experience at JPL Tech:**\n` +
        `• Engineered a production low-code landing page and template builder using **React, NestJS, TypeScript, and MySQL**.\n` +
        `• Built modular drag-and-drop block systems with clean architecture, strict state hygiene, and enterprise performance standards.\n\n` +
        `**2. 🚀 12+ Production Applications Built & Deployed:**\n` +
        `• **Imagify AI (SaaS):** Generative AI text-to-image platform with cloud asset pipelines & JWT authentication.\n` +
        `• **Chat-Z (Real-Time Messenger):** Low-latency communication engine with bidirectional **Socket.IO** rooms & Redux state synchronization.\n` +
        `• **Vybe (Social Platform):** Scalable community feed application with REST endpoints & media feeds.\n` +
        `• Plus 8 additional full-stack apps covering WebGL/3D, Drag-and-Drop, Kanban, and FinTech!\n\n` +
        `**3. 🧠 Certified in Cloud & Modern AI:**\n` +
        `• **Oracle Cloud Infrastructure (OCI) 2025 Certified AI Foundations Associate** (Cert ID: \`1025801570C125AICFA\`).\n` +
        `• Strong grasp of Machine Learning concepts, LLMs, and cloud infrastructure integration.\n\n` +
        `**4. ⚡ End-to-End Problem Solver & Fast Execution:**\n` +
        `• Strong CS fundamentals (B.Tech in CS with **7.65 CGPA**).\n` +
        `• Seamlessly bridges responsive UI/UX with scalable backend APIs, database indexing, and Dockerized deployments.\n\n` +
        `👉 **Gaurav is available immediately for Full-Time MERN Stack, Frontend, or Backend Developer roles!**`;
    }

    // 3. Contact Channels / How to reach out
    if (
      q.match(/\b(contact|email|mail|phone|number|mobile|call|whatsapp|reach|connect|interview|freelance|available|job|recruit|location|delhi|kanpur|varanasi|address|kaise mile|kaise connect)\b/) ||
      (q.includes('contact')) ||
      (q.includes('how') && (q.includes('hire') || q.includes('reach') || q.includes('connect')))
    ) {
      return `### 📞 Reach Out to Gaurav Jaiswal Directly:\n\n` +
        `You can connect with Gaurav immediately via any of these direct channels:\n\n` +
        `• 📧 **Email:** [${RESUME_DATA.personal.email}](mailto:${RESUME_DATA.personal.email})\n` +
        `• 📱 **Phone:** [${RESUME_DATA.personal.phone}](tel:${RESUME_DATA.personal.phoneDisplay})\n` +
        `• 💬 **WhatsApp:** [Message on WhatsApp](${RESUME_DATA.personal.whatsapp})\n` +
        `• 📍 **Location:** ${RESUME_DATA.personal.location}\n` +
        `• 🔗 **LinkedIn:** [Gaurav Jaiswal](${RESUME_DATA.personal.linkedin})\n` +
        `• 💻 **GitHub:** [gaurav012-jais](${RESUME_DATA.personal.github})\n\n` +
        `Feel free to reach out directly via Email or WhatsApp to schedule a quick conversation or interview!`;
    }

    // 3. Resume / CV / PDF Download
    if (q.match(/\b(resume|cv|pdf|download|document|biodata)\b/)) {
      return `You can download Gaurav's verified resume right here:\n\n` +
        `📄 **[Download Verified Resume PDF](${RESUME_DATA.personal.resumeUrl})**\n\n` +
        `It contains his complete academic history, JPL Tech tenure, project links, and Oracle AI credentials.`;
    }

    // 4. Work Experience / JPL Tech
    if (q.match(/\b(experience|work experience|jpl|jpl tech|company|tenure|enterprise|role|job|jobs|work history|career|internship|kaam|kaam karta|developer role|where does he work|working at|works at|work at)\b/)) {
      const exp = RESUME_DATA.experience[0];
      return `### 🏢 Experience: ${exp.company} (${exp.location})\n` +
        `**Role:** ${exp.role} (${exp.period})\n` +
        `**Project:** ${exp.project}\n` +
        `**Tech Stack:** ${exp.techStack.join(', ')}\n\n` +
        `**Key Contributions:**\n` +
        exp.highlights.map(h => `• ${h}`).join('\n');
    }

    // 5. Projects
    if (q.match(/\b(project|projects|imagify|chat-z|chatz|vybe|music player|3d|three|webgl|todo|taskflow|drag|drop|pageforge|template|portfolio|rag|docuquery|blog|devpulse|expense|spendwise|saas|app|apps|application|applications|banao|project dikhao|kya banaya)\b/)) {
      if (q.includes('imagify') || q.includes('saas') || (q.includes('image') && !q.includes('3d'))) {
        const p = RESUME_DATA.projects[0];
        return `### 🎨 ${p.title}\n\n` +
          `${p.description}\n\n` +
          `• **Tech Stack:** ${p.techStack.join(', ')}\n` +
          `• **Key Engineering:** Integrated deep learning generative API with validation, Cloudinary SDK for cloud asset storage, and JWT auth with usage tracking.\n` +
          `• **Live Demo:** [Open App](${p.liveUrl}) | **Code:** [GitHub Repo](${p.githubUrl})`;
      }

      if (q.includes('chat') || q.includes('socket') || q.includes('messaging')) {
        const p = RESUME_DATA.projects[1];
        return `### 💬 ${p.title}\n\n` +
          `${p.description}\n\n` +
          `• **Tech Stack:** ${p.techStack.join(', ')}\n` +
          `• **Key Engineering:** Bidirectional Socket.IO event architecture, room channels, live typing indicators, Redux state management, and optimized Mongoose schemas.\n` +
          `• **Live Demo:** [Open App](${p.liveUrl}) | **Code:** [GitHub Repo](${p.githubUrl})`;
      }

      if (q.includes('vybe') || q.includes('social')) {
        const p = RESUME_DATA.projects[2];
        return `### ⚡ ${p.title}\n\n` +
          `${p.description}\n\n` +
          `• **Tech Stack:** ${p.techStack.join(', ')}\n` +
          `• **Features:** Dynamic community feed pagination, user interactions, and robust REST APIs.\n` +
          `• **Live Demo:** [Open App](${p.liveUrl}) | **Code:** [GitHub Repo](${p.githubUrl})`;
      }

      if (q.includes('music') || q.includes('player') || q.includes('song') || q.includes('audio')) {
        const p = RESUME_DATA.projects[3];
        return `### 🎵 ${p.title} (React.js & Tailwind CSS)\n\n` +
          `${p.description}\n\n` +
          `• **Tech Stack:** ${p.techStack.join(', ')}\n` +
          `• **Key Engineering:**\n` +
          p.highlights.map(h => `  - ${h}`).join('\n') + `\n` +
          `• **Live Demo:** [Open App](${p.liveUrl}) | **Code:** [GitHub Repo](${p.githubUrl})`;
      }

      if (q.includes('3d') || q.includes('three') || q.includes('webgl') || q.includes('model')) {
        const p = RESUME_DATA.projects.find(x => x.id === '3d-model-showcase');
        return `### 🌐 ${p.title}\n\n${p.description}\n\n• **Tech Stack:** ${p.techStack.join(', ')}\n• **Key Features:** OrbitControls, material shaders, 60FPS WebGL canvas.`;
      }

      if (q.includes('rag') || q.includes('docuquery') || q.includes('vector') || q.includes('llm')) {
        const p = RESUME_DATA.projects.find(x => x.id === 'docuquery-rag');
        return `### 🧠 ${p.title}\n\n${p.description}\n\n• **Tech Stack:** ${p.techStack.join(', ')}\n• **Key Features:** Hybrid semantic search with cosine scoring, citation chips, and vector indexing.`;
      }

      if (q.includes('template') || q.includes('pageforge') || q.includes('builder')) {
        const p = RESUME_DATA.projects.find(x => x.id === 'pageforge-editor');
        return `### 🛠️ ${p.title}\n\n${p.description}\n\n• **Tech Stack:** ${p.techStack.join(', ')}\n• **Key Features:** Modular drag-and-drop block builder with live style inspector and HTML export.`;
      }

      if (q.includes('drag') || q.includes('dropcraft') || q.includes('drop')) {
        const p = RESUME_DATA.projects.find(x => x.id === 'dropcraft-dnd');
        return `### 📦 ${p.title}\n\n${p.description}\n\n• **Tech Stack:** ${p.techStack.join(', ')}\n• **Key Features:** Fluid spring physics, multi-container drop zones, and JSON layout exports.`;
      }

      if (q.includes('todo') || q.includes('taskflow') || q.includes('task')) {
        const p = RESUME_DATA.projects.find(x => x.id === 'taskflow-todo');
        return `### ✅ ${p.title}\n\n${p.description}\n\n• **Tech Stack:** ${p.techStack.join(', ')}\n• **Key Features:** Redux Toolkit state pipeline, Kanban columns, and offline sync.`;
      }

      if (q.includes('blog') || q.includes('devpulse') || q.includes('cms')) {
        const p = RESUME_DATA.projects.find(x => x.id === 'devpulse-blog');
        return `### ✍️ ${p.title}\n\n${p.description}\n\n• **Tech Stack:** ${p.techStack.join(', ')}\n• **Key Features:** Markdown live editor, RBAC auth, syntax highlighting, and SEO metadata.`;
      }

      if (q.includes('expense') || q.includes('spendwise') || q.includes('budget') || q.includes('finance')) {
        const p = RESUME_DATA.projects.find(x => x.id === 'spendwise-tracker');
        return `### 📊 ${p.title}\n\n${p.description}\n\n• **Tech Stack:** ${p.techStack.join(', ')}\n• **Key Features:** Interactive Chart.js analytics, monthly budget threshold alerts, and CSV ledger exports.`;
      }

      return `Gaurav has delivered **12 production applications**, led by his 4 flagship projects:\n\n` +
        `**🌟 Top 4 Flagship Projects:**\n` +
        `1. **Imagify (AI SaaS):** Text-to-Image app with deep learning APIs, MERN, and Cloudinary.\n` +
        `2. **Chat-Z (Real-Time Messenger):** Instant messaging with Socket.IO, Redux, Express, and MongoDB.\n` +
        `3. **Vybe (Social Platform):** Community web platform with feeds, media uploads, and REST APIs.\n` +
        `4. **Music-Player App:** Modern audio player with dynamic playlists and React state architecture.\n\n` +
        `**🚀 Additional Projects:**\n` +
        `• **3D Model Showcase:** Interactive WebGL & Three.js 3D viewer\n` +
        `• **TaskFlow:** Smart Todo & Kanban workflow manager\n` +
        `• **DropCraft:** Interactive Drag & Drop visual studio\n` +
        `• **PageForge:** Enterprise Template & Landing Page Editor\n` +
        `• **Portfolia:** Modern Developer Portfolio Template\n` +
        `• **DocuQuery:** AI RAG Document Intelligence with vector search\n` +
        `• **DevPulse:** Full-Stack Blog CMS with Markdown authoring\n` +
        `• **SpendWise:** Financial Analytics & Expense Tracker\n\n` +
        `Ask me for in-depth details on any of these projects!`;
    }

    // 6. Skills / Tech Stack
    if (q.match(/\b(skill|skills|stack|tech|frontend|backend|database|databases|node|react|mongo|mongodb|express|javascript|typescript|docker|nest|nestjs|mysql|postgres|redis|typeorm|html|css|tailwind|redux|socket|jwt|rest api|programming languages|languages)\b/)) {
      const s = RESUME_DATA.skills;
      return `### 🛠️ Gaurav's Core Technical Skills:\n\n` +
        `• **Frontend:** ${s.frontend.map(f => f.name).join(', ')}\n` +
        `• **Backend & Real-Time:** ${s.backend.map(b => b.name).join(', ')}\n` +
        `• **Databases & ORM:** ${s.databases.map(d => d.name).join(', ')}\n` +
        `• **DevOps & Security:** ${s.devops_security.map(d => d.name).join(', ')}\n` +
        `• **Languages:** ${s.languages.join(', ')}\n\n` +
        `He has practical expertise across both NoSQL (MongoDB) and relational databases (MySQL, PostgreSQL with TypeORM), as well as real-time Socket.IO and Docker.`;
    }

    // 7. Education & Qualifications
    if (q.match(/\b(education|college|degree|btech|b\.tech|cgpa|school|qualification|padhai|university|dr\. ambedkar|daitd|st\. thomas)\b/)) {
      const edu = RESUME_DATA.education[0];
      return `### 🎓 Gaurav's Education:\n\n` +
        `• **${edu.degree}** (${edu.period})\n` +
        `  *${edu.institution}, ${edu.location}*\n` +
        `  • **Academic Score:** ${edu.score}\n\n` +
        `• **Intermediate (Class XII):** ${RESUME_DATA.education[1].institution} (${RESUME_DATA.education[1].period})\n` +
        `• **High School (Class X):** ${RESUME_DATA.education[2].institution} (${RESUME_DATA.education[2].period})`;
    }

    // 8. Certifications
    if (q.match(/\b(cert|certs|certification|certifications|oracle|oci|infosys|springboard|certificate|credentials|badge)\b/)) {
      const cert1 = RESUME_DATA.certifications[0];
      const cert2 = RESUME_DATA.certifications[1];
      return `### 🏆 Industry Certifications:\n\n` +
        `1. **${cert1.title}**\n` +
        `   • Issuer: **${cert1.issuer}** (${cert1.year})\n` +
        `   • Certificate ID: \`${cert1.certId}\`\n` +
        `   • Scope: ${cert1.description}\n\n` +
        `2. **${cert2.title}**\n` +
        `   • Issuer: **${cert2.issuer}** (${cert2.year})\n` +
        `   • Scope: ${cert2.description}`;
    }



    // 10. Non-resume / Out-of-scope query guardrail
    return `I am unable to answer this question because I am only programmed to answer questions related to **Gaurav Jaiswal's resume**, skills, projects, and professional background.\n\n` +
      `Please feel free to ask me anything about Gaurav:\n` +
      `• *"What are Gaurav's top projects?"*\n` +
      `• *"Tell me about his technical skills & tech stack"*\n` +
      `• *"What is his work experience at JPL Tech?"*\n` +
      `• *"What are his education and certifications?"*\n` +
      `• *"How can I contact or hire Gaurav?"*`;
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputQuery.trim();
    if (!query) return;

    const userMsg = { id: Date.now().toString(), sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponseText = answerQuery(query);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponseText,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 400);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] h-[580px] max-h-[85vh] bg-midnight-900/98 backdrop-blur-2xl border border-cyan-500/40 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(14,165,233,0.3)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 fade-in duration-300">
      
      {/* Header */}
      <div className="p-4 bg-midnight-950 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-midnight-950 font-bold text-xs shadow-glow-cyan-sm">
            <Bot className="w-4 h-4 text-midnight-950" />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
              <span>Gaurav's AI Assistant</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </h3>
            <p className="text-[10px] text-slate-400">
              Online • Trained on Resume & Stack
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close Assistant"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Message Thread */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-midnight-900">
        {messages.map((m) => {
          const isBot = m.sender === 'bot';
          return (
            <div
              key={m.id}
              className={`flex gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}
            >
              {isBot && (
                <div className="w-6 h-6 rounded-full bg-midnight-800 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-1">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${
                  isBot
                    ? 'bg-midnight-850 border border-white/10 text-slate-200'
                    : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm'
                }`}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: m.text
                      .replace(/\n\n/g, '<br/><br/>')
                      .replace(/\n/g, '<br/>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em class="text-slate-300">$1</em>')
                      .replace(/`([^`]+)`/g, '<code class="bg-midnight-950 px-1 py-0.5 rounded text-cyan-300 font-mono text-[11px]">$1</code>')
                      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" class="text-cyan-300 underline font-medium hover:text-white inline-flex items-center gap-1">$1</a>')
                  }}
                />
              </div>

              {!isBot && (
                <div className="w-6 h-6 rounded-full bg-cyan-600 flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}

        {isTyping && (
          <div className="flex gap-2.5 items-center">
            <div className="w-6 h-6 rounded-full bg-midnight-800 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <div className="bg-midnight-850 border border-white/10 rounded-2xl px-3 py-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggestion Chips with Desktop Navigation Arrows & Wheel/Drag Scroll */}
      <div className="relative px-2 py-2 bg-midnight-950 border-t border-white/5 flex items-center group">
        {/* Left Arrow Button for Desktop Scrolling */}
        <button
          type="button"
          onClick={() => scrollChips('left')}
          className="hidden sm:flex items-center justify-center w-6 h-6 rounded-full bg-midnight-800 text-slate-300 hover:text-white hover:bg-cyan-600 border border-white/10 hover:border-cyan-400 transition-all flex-shrink-0 mr-1 shadow-sm cursor-pointer z-10"
          title="Scroll Questions Left"
          aria-label="Scroll Questions Left"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* Scrollable Container with wheel & drag support */}
        <div
          ref={chipsContainerRef}
          onWheel={handleChipsWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          className="flex-1 flex items-center gap-1.5 overflow-x-auto select-none no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing scroll-smooth py-0.5"
        >
          {suggestionChips.map((chip, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                if (!hasDragged) {
                  handleSendMessage(chip.query);
                }
              }}
              className="px-2.5 py-1 rounded-full text-[11px] font-semibold text-slate-100 bg-midnight-800 border border-white/20 hover:border-cyan-400 hover:text-cyan-300 transition-all whitespace-nowrap flex-shrink-0 cursor-pointer shadow-sm active:scale-95"
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Right Arrow Button for Desktop Scrolling */}
        <button
          type="button"
          onClick={() => scrollChips('right')}
          className="hidden sm:flex items-center justify-center w-6 h-6 rounded-full bg-midnight-800 text-slate-300 hover:text-white hover:bg-cyan-600 border border-white/10 hover:border-cyan-400 transition-all flex-shrink-0 ml-1 shadow-sm cursor-pointer z-10"
          title="Scroll Questions Right"
          aria-label="Scroll Questions Right"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Input Form */}
      <div className="p-3 bg-midnight-950 border-t border-white/5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask about Gaurav's skills, projects..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            style={{
              backgroundColor: '#070b16',
              color: '#ffffff',
              caretColor: '#38bdf8',
            }}
            className="flex-1 px-4 py-2.5 rounded-full !bg-[#070b16] !text-white border border-white/20 focus:border-cyan-400 text-white text-xs placeholder:text-slate-400 outline-none transition-all shadow-inner"
          />
          <button
            type="submit"
            disabled={!inputQuery.trim() || isTyping}
            className="w-9 h-9 rounded-full bg-cyan-500 text-midnight-950 flex items-center justify-center shadow-glow-cyan-sm hover:bg-cyan-400 disabled:opacity-40 transition-all flex-shrink-0"
            aria-label="Send Query"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

    </div>
  );
}
