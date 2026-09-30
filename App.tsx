import React, { useState, useMemo } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useMotionValue } from 'framer-motion';
import { 
  Github, Linkedin, Instagram, Twitter, Cpu, Layers, Zap, Terminal, Rocket, 
  ShieldCheck, FileCode, Activity, Database, Smartphone, Eye, Command, Globe, 
  Share2, Mail, ExternalLink, Code2, Youtube, MapPin, MessageCircle, GraduationCap, Bitcoin
} from 'lucide-react';

/**
 * SAADAN ASHRAF | SYSTEMS & SECURITY NODE v3.0
 * MISSION: CYBERSECURITY RESEARCH, NETWORKS & GRC
 */
const CONFIG = {
  identity: {
    name: "Saadan Ashraf",
    tagline: "Cybersecurity & Networks Researcher",
    location: "Karachi, Pakistan",
    logo: "/logo.png",
    repo: "https://github.com/saadan-ashraf",
    whatsapp: "https://wa.me/923316732222",
    email: "saadanashraf86@gmail.com"
  },
  socials: [
    { name: 'Github', icon: <Github size={20} />, url: "https://github.com/Saadan-not-a-coder" },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: "https://linkedin.com/in/saadan-ashraf/" }
  ]
};

const CATEGORIES = ["All", "Security & Research", "Systems & C++", "Web Development", "Operations"];
const PROTOCOL_REGISTRY = [
  // --- SECURITY & RESEARCH (EXPERIENCE) ---
  { id: "SEC-01", category: "Security & Research", title: "PKCERT Vulnerability Research", description: "Conducted security audits and evaluations within the Vulnerability Assessment and Research Department. Focused on identifying system vulnerabilities, auditing complex networks, and ensuring compliance with secure architectural standards.", icon: <ShieldCheck className="text-cyan-400" size={24} />, purpose: "Vulnerability Assessment & GRC", tags: ["Research", "Security Audit", "GRC"] },
  { id: "SEC-02", category: "Security & Research", title: "Architecture Evaluation", description: "Served as a Teaching Assistant for Computer Communications at IBA Karachi. Evaluated undergraduate code and practical assessments on complex architectures, data structures, and protocol analysis.", icon: <FileCode className="text-blue-400" size={24} />, purpose: "Academic Assessment", tags: ["Networks", "Protocols"] },

  // --- SYSTEMS & C++ ---
  { id: "SYS-01", category: "Systems & C++", title: "Parallel Inference Engine", description: "Developed high-performance software components in C and C++, utilizing OOP principles to optimize data processing pipelines. Implemented strict TDD methodologies with comprehensive testing suites and resilient job data structures.", icon: <Cpu className="text-[#00BFA6]" size={24} />, purpose: "High-Performance Computing", tags: ["C/C++", "OOP", "TDD"] },
  { id: "SYS-02", category: "Systems & C++", title: "OS Kernel Architecture", description: "Wrote efficient C code to reengineer the xv6 kernel, replacing default policies with a complex MLFQ scheduling algorithm. Integrated low-level software components and custom system calls while documenting edge-case behaviors.", icon: <Terminal className="text-pink-500" size={24} />, purpose: "Low-level CPU Optimization", tags: ["C", "xv6", "Algorithms"] },
  
  // --- WEB DEVELOPMENT ---
  { id: "DEV-01", category: "Web Development", title: "Enterprise Web Portal", description: "Designed and deployed a highly interactive full-stack web application, managing the release process from concept to production. Architected a robust relational database schema using SQL and engineered precise test datasets.", icon: <Layers className="text-amber-400" size={24} />, purpose: "Scalable SDLC Deployment", tags: ["React", "SQL", "Full-Stack"] },

  // --- OPERATIONS & LEADERSHIP ---
  { id: "OP-01", category: "Operations", title: "Nestlé Data Analytics", description: "Analyzed commercial operations data and supply ledgers as a Corporate Intern. Produced detailed technical specifications to determine the operational feasibility of process improvements.", icon: <Activity className="text-green-400" size={24} />, purpose: "Commercial Feasibility", tags: ["Data Analysis", "Ledgers"] },
  { id: "OP-02", category: "Operations", title: "Stakeholder Comms", description: "Operated as a Sales Lead at DESOL. Documented software functionality and maintained structured communication pipelines between external stakeholders and internal engineering teams.", icon: <Globe className="text-indigo-400" size={24} />, purpose: "Client-Engineering Sync", tags: ["Documentation", "Sales"] },
  { id: "OP-03", category: "Operations", title: "Strategic Leadership", description: "Mentored teams in large-scale operations and ensured compliance with global standards as Chief Advisor for TEDxIBA. Concurrently coordinating entrepreneurial outreach as NIC Karachi Campus Ambassador.", icon: <Command className="text-orange-400" size={24} />, purpose: "Workflow & Outreach", tags: ["Leadership", "Operations"] }
];

const TEMPORAL_LOGS = [
  { year: "2023", title: "Academic Foundations", text: "Commenced BS-Computer Science at IBA Karachi, establishing strong core competencies in Object-Oriented Programming, algorithms, and data structures.", icon: <GraduationCap /> },
  { year: "2024", title: "Corporate Entry", text: "Acted as Sales Lead at DESOL, documenting software functionality. Began tenure as Chief Advisor for TEDxIBA, managing large-scale operational compliance.", icon: <Globe /> },
  { year: "2026", title: "Systems Instruction", text: "Served as a Teaching Assistant for Computer Communications at IBA Karachi, evaluating complex architecture and protocol analysis code.", icon: <FileCode /> },
  { year: "2026", title: "Security & Research", text: "Completed concurrent summer internships at Nestlé (Corporate Operations) and PKCERT's Vulnerability Assessment and Research Department.", icon: <ShieldCheck /> }
];

const ProtocolCard = ({ item }: { item: typeof PROTOCOL_REGISTRY[0] }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000, willChange: 'transform' }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - (rect.left + rect.width / 2));
        mouseY.set(e.clientY - (rect.top + rect.height / 2));
      }}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="glass p-8 rounded-[2rem] group hover:border-[#00BFA6]/40 transition-colors duration-300 flex flex-col h-full relative"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-4 rounded-xl bg-[#00BFA6]/5 text-[#00BFA6] group-hover:bg-[#00BFA6]/20 transition-all duration-500">
          {item.icon}
        </div>
        <span className="mono text-[9px] text-gray-700 font-bold uppercase tracking-widest">{item.id}</span>
      </div>
      <h3 className="text-xl font-black uppercase mb-3 text-white">{item.title}</h3>
      <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 flex-grow">{item.description}</p>
      <div className="pt-6 border-t border-white/5 space-y-4">
        <div className="flex items-center gap-2">
          <Activity size={12} className="text-[#00BFA6]" />
          <p className="text-[10px] font-bold text-gray-500 uppercase">{item.purpose}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="text-[8px] mono px-2 py-1 rounded bg-white/5 text-gray-600">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const filteredRegistry = useMemo(() => 
    activeFilter === "All" ? PROTOCOL_REGISTRY : PROTOCOL_REGISTRY.filter(i => i.category === activeFilter),
  [activeFilter]);

  return (
    <div className="relative min-h-screen text-white selection:bg-[#00BFA6]/30 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00BFA6] via-cyan-400 to-violet-600 origin-left z-[200]" style={{ scaleX }} />

      <header className="fixed top-0 left-0 right-0 z-[150] py-6 px-6">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center glass rounded-full px-6 py-3 border-white/5">
          <a href="#" className="flex items-center gap-4 group">
            <img src={CONFIG.identity.logo} className="w-8 h-8 object-contain hover:rotate-12 transition-transform" alt="Logo" />
            <span className="font-black uppercase tracking-tighter text-xs">
              SAADAN <span className="text-[#00BFA6]">ASHRAF</span>
            </span>
          </a>
          <nav className="flex items-center gap-8">
            <div className="hidden sm:flex gap-8 text-[9px] font-black uppercase tracking-widest text-gray-400">
              <a href="#about" className="hover:text-white transition-colors">Biography</a>
              <a href="#registry" className="hover:text-white transition-colors">Protocols</a>
              <a href="#history" className="hover:text-white transition-colors">History</a>
            </div>
            <div className="flex items-center gap-2">
              <a href={CONFIG.socials[0].url} target="_blank" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                <Github size={16} />
              </a>
              <a href={CONFIG.identity.whatsapp} target="_blank" className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#00BFA6] text-black rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white transition-colors">
                <MessageCircle size={12} /> Direct COM
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 space-y-64 pt-48 pb-32">
        {/* HERO */}
        <section className="relative min-h-[80vh] flex flex-col justify-center text-center md:text-left">
          <motion.div style={{ opacity, scale }} className="space-y-12">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border-[#00BFA6]/30 mx-auto md:mx-0">
              <ShieldCheck size={14} className="text-[#00BFA6]" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase mono text-[#00BFA6]">SAADAN_ASHRAF_RESEARCH_NODE</span>
            </div>
            <h1 className="text-7xl md:text-[13rem] font-black tracking-tighter leading-[0.75]">
              SAADAN<br/><span className="text-gradient">ASHRAF</span>
            </h1>
            <p className="text-2xl md:text-5xl text-gray-500 font-light max-w-5xl leading-tight">
              A <span className="text-white font-medium italic underline underline-offset-8 decoration-[#00BFA6]">Cybersecurity Researcher</span> specializing in vulnerability assessment, networks, and Governance, Risk, and Compliance (GRC).
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-8">
              <a href="#registry" className="px-10 py-5 bg-white text-black rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-[#00BFA6] hover:text-white transition-all text-center">View Operations</a>
              <div className="flex gap-2">
                {CONFIG.socials.map(s => (
                  <a key={s.name} href={s.url} target="_blank" className="w-14 h-14 glass rounded-xl flex items-center justify-center hover:bg-[#00BFA6]/20 transition-all text-white/70 hover:text-[#00BFA6]">{s.icon}</a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT / STORY */}
        <section id="about" className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <span className="text-[#00BFA6] mono text-[10px] font-black tracking-[0.6em] uppercase">// The_Architecture</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Who am I?<br/></h2>
            <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
              <p>
                I am a final-year Computer Science student at <span className="text-white font-bold">IBA Karachi</span> with a strong foundation in systems architecture and protocol analysis. I am currently seeking to leverage my technical foundation toward rigorous research in <span className="text-white font-bold">cybersecurity, network defense, and GRC</span>.
              </p>
              <p>
                Experienced in full-lifecycle development and low-level optimization, I utilize <span className="text-white font-bold italic">C, C++, SQL, and modern web frameworks</span> to understand how systems are built—so I can better secure them. My expertise spans integrating complex software components, replacing default kernel policies, and documenting edge-case behaviors.
              </p>
              <p>
                Beyond core engineering, I bring operational and analytical insight from roles at <span className="text-[#00BFA6] font-bold">Nestlé</span> and the <span className="text-[#00BFA6] font-bold">Vulnerability Assessment and Research Department at PKCERT</span>, alongside leadership experience managing large-scale compliance for TEDxIBA. My objective is consistent: identify vulnerabilities, optimize data structures, and architect resilient, compliant networks.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex flex-col">
                <span className="text-xs font-black text-[#00BFA6]">CYBERSECURITY</span>
                <span className="text-[10px] text-gray-600 tracking-widest uppercase font-bold">Research_Audit_GRC</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-xs font-black text-[#00BFA6]">NETWORKS</span>
                <span className="text-[10px] text-gray-600 tracking-widest uppercase font-bold">Protocols_Architecture</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-xs font-black text-[#00BFA6]">SYSTEMS</span>
                <span className="text-[10px] text-gray-600 tracking-widest uppercase font-bold">C/C++_xv6_Linux</span>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <div className="aspect-square glass rounded-[4rem] flex items-center justify-center p-12 overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-[#00BFA6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <img src={CONFIG.identity.logo} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 scale-75 group-hover:scale-100" alt="Identity Logo" />
            </div>
            <div className="absolute -bottom-10 -right-10 glass px-10 py-6 rounded-3xl">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="mono text-[10px] font-bold uppercase tracking-widest">Node: IBA_KARACHI</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* REGISTRY */}
        <section id="registry" className="space-y-16 scroll-mt-32">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 md:gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4 text-center md:text-left w-full md:w-auto">
              <span className="text-[#00BFA6] mono text-[10px] font-black tracking-[0.6em] uppercase flex items-center justify-center md:justify-start gap-3">
                <div className="w-10 h-[1px] bg-[#00BFA6]" /> Engineering_Logs
              </span>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Protocols</h2>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-2 bg-white/5 p-1.5 rounded-2xl glass w-full md:w-auto">
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={() => setActiveFilter(cat)} className={`px-4 md:px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${activeFilter === cat ? 'bg-white text-black shadow-xl shadow-white/5' : 'text-gray-500 hover:text-white'}`}>{cat}</button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredRegistry.map(item => (
                <motion.div layout key={item.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
                  <ProtocolCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* HISTORY */}
        <section id="history" className="space-y-24 scroll-mt-32 relative">
          <div className="text-center space-y-4">
            <span className="text-[#00BFA6] mono text-[10px] font-black tracking-[0.6em] uppercase">/// Temporal_Logs</span>
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter">Timeline</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative px-4">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] timeline-line hidden lg:block opacity-20" />
            
            {TEMPORAL_LOGS.map((log, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2.5rem] group hover:bg-[#00BFA6]/5 transition-all duration-500 relative z-10 border-white/5"
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[#00BFA6] font-black text-3xl mono italic group-hover:translate-x-1 transition-transform">{log.year}</span>
                  <div className="p-4 rounded-xl bg-white/5 text-gray-500 group-hover:text-[#00BFA6] group-hover:scale-110 transition-all duration-500">{log.icon}</div>
                </div>
                <h4 className="text-xl font-black uppercase mb-4 text-white group-hover:tracking-widest transition-all">{log.title}</h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors">{log.text}</p>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-2 border-b-2 border-[#00BFA6]/40 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT / CTA */}
        <section id="contact" className="py-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="glass rounded-[4rem] p-12 md:p-24 text-center space-y-12 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00BFA6]/5 via-transparent to-[#7C3AED]/5 pointer-events-none" />
            <div className="space-y-6">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">Direct<br/><span className="text-[#00BFA6]">Inquiry</span></h2>
              <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">Available for research positions in cybersecurity, networks, and GRC.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-8">
              <a href={`mailto:${CONFIG.identity.email}`} className="flex items-center gap-3 px-12 py-6 bg-white text-black rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#00BFA6] hover:text-white transition-all w-full md:w-auto text-center justify-center">
                <Mail size={16} /> Email Sync
              </a>
              <a href={CONFIG.identity.whatsapp} target="_blank" className="flex items-center gap-3 px-12 py-6 glass border-[#00BFA6]/30 text-[#00BFA6] rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all w-full md:w-auto text-center justify-center">
                <MessageCircle size={16} /> Secure Channel
              </a>
            </div>
            <div className="pt-8 mono text-[10px] text-gray-600 tracking-widest">
              CONTACT NODE: +92 331 6732222 | {CONFIG.identity.email}
            </div>
          </motion.div>
        </section>

        {/* FOOTER */}
          <footer className="pt-32 pb-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-16 text-[10px] font-black uppercase tracking-[0.4em] text-gray-700 mono">
          <div className="space-y-8 max-w-xs">
            <div className="flex items-center gap-6">
              <img src={CONFIG.identity.logo} className="w-12 h-12 object-contain grayscale opacity-30 hover:opacity-100 transition-opacity" alt="Logo" />
              <div>
                <p className="text-white text-xs tracking-widest">SAADAN ASHRAF</p>
                <p className="text-[#00BFA6]/40 mt-1">Security Research Node v3.0</p>
              </div>
            </div>
            <p className="normal-case tracking-normal text-xs text-gray-500 font-light leading-relaxed">
              Final-year Computer Science student at IBA Karachi. Specialized in Cybersecurity Research, Networks, and GRC.
            </p>
            <div className="flex items-center gap-3 text-gray-800">
              <MapPin size={12} className="text-[#00BFA6]" />
              <span>32.2655° N, 112.7397° W</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 w-full md:w-auto">
             <div className="space-y-4">
               <h5 className="text-white text-[9px] tracking-[0.6em]">Navigation</h5>
               <nav className="flex flex-col gap-3">
                 <a href="#about" className="hover:text-white transition-colors">Biography</a>
                 <a href="#registry" className="hover:text-white transition-colors">Protocols</a>
                 <a href="#history" className="hover:text-white transition-colors">History</a>
               </nav>
             </div>
             <div className="space-y-4">
               <h5 className="text-white text-[9px] tracking-[0.6em]">Connect</h5>
               <nav className="flex flex-col gap-3">
                 {CONFIG.socials.map(s => (
                   <a key={s.name} href={s.url} target="_blank" className="hover:text-white transition-colors">{s.name}</a>
                 ))}
                 <a href={CONFIG.identity.whatsapp} target="_blank" className="text-[#00BFA6] hover:text-white transition-colors">WhatsApp</a>
               </nav>
             </div>
             <div className="space-y-4 col-span-2 md:col-span-1">
               <h5 className="text-white text-[9px] tracking-[0.6em]">Status</h5>
               <div className="flex flex-col gap-3">
                 <span className="flex items-center gap-2 text-green-500/50"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Operational</span>
                 <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> IBA_Karachi</span>
                 <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00BFA6]" /> Research_Active</span>
               </div>
             </div>
          </div>
        </footer>
        
        <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-[1em] text-gray-800 pt-12 pb-6 border-t border-white/5 mt-32">
          <span>© 2026 SAADAN ASHRAF</span>
          <span className="hidden md:inline">SECURITY_RESEARCH_KARACHI</span>
          <a href={CONFIG.socials[0].url} target="_blank" className="text-[#00BFA6]/40 hover:text-[#00BFA6] transition-colors">GitHub_Source</a>
        </div>
      </main>
    </div>
  );
}