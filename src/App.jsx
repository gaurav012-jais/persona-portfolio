import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CertificationsEducation from './components/CertificationsEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistantModal from './components/AIAssistantModal';
import InteractiveTouchFX from './components/InteractiveTouchFX';

export default function App() {
  const [isAIOpen, setIsAIOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-midnight-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">

      {/* Global Interactive Mouse, Touch & Scroll FX */}
      <InteractiveTouchFX />

      <div className="relative z-10">
        {/* Navigation Bar */}
        <Navbar onOpenAI={() => setIsAIOpen(true)} />

        <main>
          {/* Hero Section */}
          <Hero onOpenAI={() => setIsAIOpen(true)} />

          {/* About Section: Sculpted White Wave Ribbon with Artistic Ink Splash Portrait */}
          <About onOpenAI={() => setIsAIOpen(true)} />

          {/* Skills Section: Expertise with Passion */}
          <Skills />

          {/* Featured Projects: Digital experiences that make an impact */}
          <Projects />

          {/* Experience Section: Sculpted White Wave Roadmap */}
          <Experience />

          {/* Certifications: Oracle Cloud AI & Springboard */}
          <CertificationsEducation />

          {/* Contact Section: White Ribbon CTA Banner & Direct Channels */}
          <Contact onOpenAI={() => setIsAIOpen(true)} />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Floating AI Resume Assistant Launcher Button */}
      {!isAIOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
          <button
            onClick={() => setIsAIOpen(true)}
            className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-midnight-850 border border-cyan-500/40 text-white font-semibold text-xs tracking-wide shadow-glow-cyan-md hover:shadow-glow-cyan-lg hover:border-cyan-400 hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Open AI Assistant"
          >
            <div className="relative">
              <Bot className="w-4 h-4 text-cyan-400" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </div>
            <span>Ask Gaurav AI</span>
          </button>
        </div>
      )}

      {/* Interactive AI Assistant Widget */}
      <AIAssistantModal isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
    </div>
  );
}
