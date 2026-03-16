import { motion, AnimatePresence } from 'motion/react';
import { Download, Briefcase, GraduationCap, Award, Mail, Linkedin, Github, ChevronRight, MapPin, Code2, Rocket, ExternalLink, Terminal, GitBranch, TestTubes, Send, Network, Database, Globe, X, Loader2, Copy, Check, ArrowUp, Search } from 'lucide-react';
import { SiPython, SiGit, SiPostman } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import React, { ReactNode, useState, useEffect, useRef } from 'react';

// Datos de ejemplo: Reemplaza estos valores con tu información real
const translations = {
  es: {
    name: "Matías Alejandro Escobar",
    title: "Personal de la FFSS / Estudiante QA",
    about: "Cuento con más de 9 años de experiencia como Oficial (PNA) en distintos entornos de alta exigencia y responsabilidad. Actualmente en transición hacia el mundo tech: estudio la Diplomatura en Control de Calidad de Software en UNTREF y me especializo en automatización de pruebas.",
    email: "matialeescobar96@gmail.com",
    phone: "3794-543712",
    linkedin: "https://www.linkedin.com/in/matias-escobar-09241523a/",
    github: "https://github.com/mescobar996",
    // Reemplaza esta URL con el enlace directo a tu foto de perfil de LinkedIn o sube una imagen a la carpeta public/
    profileImage: "/perfil.jpg", 
    experience: [
      {
        id: 1,
        role: "Oficial Subalterno",
        company: "Prefectura Naval Argentina",
        period: "2017 - Presente",
        description: "Actualmente cumpliendo funciones en la Prefectura de Zona Bajo Paraná (Rosario)",
      },
    ],
    education: [
      {
        id: 1,
        degree: "Licenciado en Seguridad Marítima",
        institution: "Instituto Universitario de Seguridad Marítima",
        period: "2025",
      },
      {
        id: 2,
        degree: "Diplomatura en Control de Calidad de Software",
        institution: "Universidad Nacional de Tres de Febrero",
        period: "2025 - 2026"
      }
    ],
    projects: [
      {
        id: 1,
        title: "Healify",
        description: "Healify detecta y repara selectores rotos en tus pruebas E2E automáticamente. Analiza el fallo, genera una corrección con IA y abre un Pull Request en GitHub antes de que lo notes.",
        tech: ["Next.js", "TypeScript", "Playwright", "AI"],
        link: "https://github.com/mescobar996/Healify"
      },
      {
        id: 2,
        title: "BuggyStore API",
        description: "BuggyStore es una API de e-commerce construida con Node.js + Express + SQLite que contiene 16 bugs intencionales distribuidos en sus módulos. Fue diseñada como proyecto de portfolio QA para practicar.",
        tech: ["Postman", "API", "SQL"],
        link: "https://github.com/mescobar996/buggystore_api"
      }
    ],
    courses: [
      {
       id: 1,
        name: "Playwright JS/TS Automation Testing from Scratch & Framework",
        platform: "Rahul Shetty Academy",
        year: "2026", 
        certificate: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-4c5466a8-5953-4cdc-9863-a02cd10dd1ea.pdf" // Reemplaza con el link real
      },
      {
        id: 2,
        name: "Google Cybersecurity Professional",
        platform: "Coursera",
        year: "2025",
        certificate: "https://www.credly.com/badges/ab6d8e30-593b-4196-90c6-1c7bcbb0fc13/linked_in_profile" // Reemplaza con el link real
      },
      {
        id: 3,
        name: "Gestión de Proyectos y Fundamentos de metodología Agile",
        platform: "Santander Open Academy",
        year: "2025",
        certificate: "https://www.linkedin.com/in/matias-escobar-09241523a/details/certifications/1745852283827/single-media-viewer/?profileId=ACoAADuBgy4B6ONXfsrXLC8PDCW-GTOBBFG39vs" // Reemplaza con el link real
      }
    ],
    skills: {
      hard: [
        { name: "Python", icon: SiPython, level: 3, levelText: "Intermedio", description: "Automatización de scripts, desarrollo de pruebas backend y análisis de datos." },
        { name: "Git", icon: SiGit, level: 3, levelText: "Intermedio", description: "Control de versiones, flujos de trabajo en equipo y gestión de repositorios." },
        { name: "Playwright", icon: TestTubes, level: 3, levelText: "Intermedio", description: "Creación de frameworks E2E robustos para aplicaciones web modernas." },
        { name: "Postman", icon: SiPostman, level: 4, levelText: "Avanzado", description: "Creación y ejecución de colecciones para pruebas manuales y automatizadas de API REST." },
        { name: "API Testing", icon: TbApi, level: 3, levelText: "Intermedio", description: "Validación de esquemas, códigos de estado, rendimiento y flujos de integración." },
        { name: "SQL", icon: Database, level: 2, levelText: "Básico", description: "Consultas a bases de datos relacionales para validación y manipulación de datos." }
      ],
      soft: ["Metodologías Ágiles", "Resolución de problemas", "Trabajo en equipo", "Adaptabilidad"]
    },
    ui: {
      transitionToQA: "Transición a QA Automation",
      downloadCV: "Descargar CV",
      contact: "Contacto",
      remoteRelocation: "Remoto / Reubicación",
      experience: "Experiencia Laboral",
      education: "Educación",
      projects: "Proyectos Destacados",
      searchProjects: "Buscar proyectos...",
      noProjectsFound: "No se encontraron proyectos que coincidan con tu búsqueda.",
      viewRepo: "Ver Repositorio",
      skills: "Habilidades",
      hardSkills: "Hard Skills",
      softSkills: "Soft Skills",
      courses: "Cursos y Certificaciones",
      viewCertificate: "Ver Certificado",
      formName: "Nombre",
      formEmail: "Email",
      formMessage: "Mensaje",
      formSend: "Enviar",
      formSending: "Enviando...",
      formSuccess: "¡Mensaje enviado con éxito!",
      formError: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo."
    }
  },
  en: {
    name: "Matías Alejandro Escobar",
    title: "Law Enforcement Officer / QA Student",
    about: "I have over 9 years of experience as an Officer (PNA) in various high-demand and high-responsibility environments. Currently transitioning into the tech world: studying a Diploma in Software Quality Control at UNTREF and specializing in test automation.",
    email: "matialeescobar96@gmail.com",
    phone: "3794-543712",
    linkedin: "https://www.linkedin.com/in/matias-escobar-09241523a/",
    github: "https://github.com/mescobar996",
    profileImage: "/perfil.jpg", 
    experience: [
      {
        id: 1,
        role: "Junior Officer",
        company: "Argentine Naval Prefecture",
        period: "2017 - Present",
        description: "Currently serving at the Lower Paraná Zone Prefecture (Rosario)",
      },
    ],
    education: [
      {
        id: 1,
        degree: "Bachelor in Maritime Security",
        institution: "University Institute of Maritime Security",
        period: "2025",
      },
      {
        id: 2,
        degree: "Diploma in Software Quality Control",
        institution: "National University of Tres de Febrero",
        period: "2025 - 2026"
      }
    ],
    projects: [
      {
        id: 1,
        title: "Healify",
        description: "Healify detects and fixes broken selectors in your E2E tests automatically. It analyzes the failure, generates an AI-powered fix, and opens a GitHub Pull Request before you even notice.",
        tech: ["Next.js", "TypeScript", "Playwright", "AI"],
        link: "https://healify-sigma.vercel.app/"
      },
      {
        id: 2,
        title: "E-commerce Automation Framework",
        description: "Development of an automated E2E testing framework for an e-commerce platform, significantly reducing regression time.",
        tech: ["Playwright", "TypeScript", "CI/CD"],
        link: "https://github.com/mescobar996"
      },
      {
        id: 2,
        title: "API Testing Suite",
        description: "Comprehensive automated testing suite for RESTful endpoints, implementing schema validations and basic load testing.",
        tech: ["Python", "Pytest", "Postman"],
        link: "https://github.com/mescobar996"
      }
    ],
    courses: [
      {
       id: 1,
        name: "Playwright JS/TS Automation Testing from Scratch & Framework",
        platform: "Rahul Shetty Academy",
        year: "2026", 
        certificate: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-4c5466a8-5953-4cdc-9863-a02cd10dd1ea.pdf"
      },
      {
        id: 2,
        name: "Google Cybersecurity Professional",
        platform: "Coursera",
        year: "2025",
        certificate: "https://www.credly.com/badges/ab6d8e30-593b-4196-90c6-1c7bcbb0fc13/linked_in_profile"
      },
      {
        id: 3,
        name: "Project Management and Agile Methodology Fundamentals",
        platform: "Santander Open Academy",
        year: "2025",
        certificate: "https://www.linkedin.com/in/matias-escobar-09241523a/details/certifications/1745852283827/single-media-viewer/?profileId=ACoAADuBgy4B6ONXfsrXLC8PDCW-GTOBBFG39vs"
      }
    ],
    skills: {
      hard: [
        { name: "Python", icon: SiPython, level: 3, levelText: "Intermediate", description: "Script automation, backend test development, and data analysis." },
        { name: "Git", icon: SiGit, level: 3, levelText: "Intermediate", description: "Version control, team workflows, and repository management." },
        { name: "Playwright", icon: TestTubes, level: 3, levelText: "Intermediate", description: "Building robust E2E frameworks for modern web applications." },
        { name: "Postman", icon: SiPostman, level: 4, levelText: "Advanced", description: "Creating and executing collections for manual and automated REST API testing." },
        { name: "API Testing", icon: TbApi, level: 3, levelText: "Intermediate", description: "Schema validation, status codes, performance, and integration flows." },
        { name: "SQL", icon: Database, level: 2, levelText: "Beginner", description: "Relational database queries for data validation and manipulation." }
      ],
      soft: ["Agile Methodologies", "Problem Solving", "Teamwork", "Adaptability"]
    },
    ui: {
      transitionToQA: "Transitioning to QA Automation",
      downloadCV: "Download CV",
      contact: "Contact",
      remoteRelocation: "Remote / Relocation",
      experience: "Work Experience",
      education: "Education",
      projects: "Featured Projects",
      searchProjects: "Search projects...",
      noProjectsFound: "No projects found matching your search.",
      viewRepo: "View Repository",
      skills: "Skills",
      hardSkills: "Hard Skills",
      softSkills: "Soft Skills",
      courses: "Courses & Certifications",
      viewCertificate: "View Certificate"
    }
  }
};

function Card({ children, className = "", delay = 0, id }: { children: ReactNode, className?: string, delay?: number, id?: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay > 0.3 ? 0.1 : delay }}
      className={`bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-6 lg:p-8 hover:bg-zinc-900/60 hover:border-white/20 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [selectedSkill, setSelectedSkill] = useState<{name: string, description: string, icon: any, level: number, levelText: string} | null>(null);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);
  const [projects, setProjects] = useState<any[]>([]);
  const [projectSearchQuery, setProjectSearchQuery] = useState('');
  
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');
  
  const data = translations[lang];

  const filteredProjects = projects.filter(project => {
    const query = projectSearchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tech.some((t: string) => t.toLowerCase().includes(query))
    );
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateForm = () => {
    let isValid = true;
    const errors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      errors.name = lang === 'es' ? 'El nombre es requerido' : 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = lang === 'es' ? 'El email es requerido' : 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = lang === 'es' ? 'Email inválido' : 'Invalid email';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = lang === 'es' ? 'El mensaje es requerido' : 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus('idle');
      setSubmitErrorMessage('');
      
      try {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
          throw new Error(lang === 'es' ? "Falta la configuración de EmailJS. Por favor, verifica las variables de entorno." : "EmailJS configuration is missing. Please check your environment variables.");
        }

        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          publicKey
        );
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } catch (error: any) {
        console.error("Failed to send email:", error);
        setSubmitStatus('error');
        setSubmitErrorMessage(error?.text || error?.message || data.ui.formError);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Simulate async fetch for projects
  useEffect(() => {
    setIsLoadingProjects(true);
    const timer = setTimeout(() => {
      setProjects(data.projects);
      setIsLoadingProjects(false);
    }, 1500); // Simulate 1.5s network request
    
    return () => clearTimeout(timer);
  }, [lang, data.projects]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-200 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-emerald-500 opacity-20 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col gap-8 md:gap-12">
        
        {/* Header / Language Selector */}
        <header className="flex justify-end -mb-4 md:-mb-8">
          <div 
            className="inline-flex items-center bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-full p-1"
            role="group"
            aria-label={lang === 'es' ? "Selector de idioma" : "Language selector"}
          >
            <button
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${lang === 'es' ? 'bg-emerald-500/20 text-emerald-400' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              ES
            </button>
            <button
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${lang === 'en' ? 'bg-emerald-500/20 text-emerald-400' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              EN
            </button>
          </div>
        </header>

        {/* Top Row: Hero & Status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Hero Card */}
          <Card id="about" className="lg:col-span-2 flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left" delay={0.1}>
            <div className="relative shrink-0 group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border border-white/10 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <img src={data.profileImage} alt={data.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {data.ui.transitionToQA}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2">{data.name}</h1>
              <h2 className="text-lg md:text-xl text-emerald-400 font-medium mb-4">{data.title}</h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base"
              >
                {data.about}
              </motion.p>
              
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <a 
                  href="/cv-matias-escobar.pdf" 
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-zinc-200 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                  onClick={(e) => {
                    if (!document.querySelector('a[href="/cv-matias-escobar.pdf"]')?.hasAttribute('download')) {
                      e.preventDefault();
                      alert("Para que la descarga funcione, debes colocar tu archivo PDF en la carpeta 'public' con el nombre 'cv-matias-escobar.pdf'.");
                    }
                  }}
                >
                  <Download className="w-4 h-4" />
                  {data.ui.downloadCV}
                </a>
              </div>
            </div>
          </Card>

          {/* Contact & Status Card */}
          <Card id="contact" className="lg:col-span-1 flex flex-col justify-start gap-6" delay={0.2}>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              {data.ui.contact}
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-zinc-300">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Rosario, Argentina</p>
                  <p className="text-xs text-emerald-400/80">{data.ui.remoteRelocation}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between gap-2 group">
                <a href={`mailto:${data.email}`} className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors flex-1 min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1">
                  <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center shrink-0 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-medium truncate">{data.email}</p>
                </a>
                <button 
                  onClick={handleCopyEmail}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center shrink-0 transition-colors text-zinc-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-label={lang === 'es' ? "Copiar email" : "Copy email"}
                  title={lang === 'es' ? "Copiar email" : "Copy email"}
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between gap-2 group">
                <a href={`https://wa.me/549${data.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors flex-1 min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1">
                  <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center shrink-0 transition-colors">
                    {/* @ts-ignore */}
                    <FaWhatsapp className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-sm font-medium truncate">{data.phone}</p>
                </a>
              </div>

              <div className="flex gap-3 mt-2">
                <a href={data.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="flex-1 flex items-center justify-center gap-2 text-zinc-300 hover:text-white transition-colors group bg-white/5 hover:bg-white/10 py-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span className="text-xs font-medium">LinkedIn</span>
                </a>
                <a href={data.github} target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="flex-1 flex items-center justify-center gap-2 text-zinc-300 hover:text-white transition-colors group bg-white/5 hover:bg-white/10 py-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
                  <Github className="w-4 h-4" />
                  <span className="text-xs font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </Card>

        </div>

        {/* Middle Row: Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Experience */}
          <Card id="experience" delay={0.3}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-emerald-400" />
              {data.ui.experience}
            </h3>
            <div className="space-y-6">
              {data.experience.map(exp => (
                <div key={exp.id} className="relative pl-6 border-l border-white/10 before:absolute before:w-3 before:h-3 before:bg-zinc-900 before:border-2 before:border-emerald-400 before:rounded-full before:-left-[6.5px] before:top-1.5">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-2">
                    <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                    <span className="text-xs font-medium px-2.5 py-1 bg-white/5 text-zinc-300 rounded-full whitespace-nowrap border border-white/5">{exp.period}</span>
                  </div>
                  <div className="text-emerald-400/80 text-sm font-medium mb-2">{exp.company}</div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Education */}
          <Card id="education" delay={0.4}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              {data.ui.education}
            </h3>
            <div className="space-y-6">
              {data.education.map(edu => (
                <div key={edu.id} className="relative pl-6 border-l border-white/10 before:absolute before:w-3 before:h-3 before:bg-zinc-900 before:border-2 before:border-indigo-400 before:rounded-full before:-left-[6.5px] before:top-1.5">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-2">
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <span className="text-xs font-medium px-2.5 py-1 bg-white/5 text-zinc-300 rounded-full whitespace-nowrap border border-white/5">{edu.period}</span>
                  </div>
                  <div className="text-indigo-400/80 text-sm font-medium mb-2">{edu.institution}</div>
                </div>
              ))}
            </div>
          </Card>

        </div>

        {/* Projects and Skills Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Projects */}
          <Card id="projects" className="lg:col-span-2" delay={0.5}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Rocket className="w-5 h-5 text-sky-400" />
                {data.ui.projects}
              </h3>
              
              <div className="relative w-full sm:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-zinc-400" />
                </div>
                <input
                  type="text"
                  placeholder={data.ui.searchProjects}
                  value={projectSearchQuery}
                  onChange={(e) => setProjectSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-zinc-900/50 border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all"
                />
              </div>
            </div>
            
            <AnimatePresence mode="wait">
              {isLoadingProjects ? (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center justify-center py-12 text-sky-400"
                >
                  <Loader2 className="w-8 h-8 animate-spin mb-4" />
                  <p className="text-sm text-zinc-400 animate-pulse">
                    {lang === 'es' ? 'Cargando proyectos...' : 'Loading projects...'}
                  </p>
                </motion.div>
              ) : filteredProjects.length === 0 ? (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-zinc-500"
                >
                  <Search className="w-8 h-8 mb-4 opacity-50" />
                  <p className="text-sm">{data.ui.noProjectsFound}</p>
                </motion.div>
              ) : (
                <motion.div 
                  key="projects"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar"
                >
                  {filteredProjects.map(project => (
                    <div key={project.id} className="group flex flex-col p-6 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-sky-500/50 hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center border border-sky-500/20 mb-5 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all duration-300 shrink-0">
                      <Code2 className="w-6 h-6 text-sky-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">{project.title}</h4>
                    <p className="text-sm text-zinc-400 mb-6 leading-relaxed flex-grow">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t: string) => (
                        <span key={t} className="text-xs font-medium px-2.5 py-1 bg-sky-400/10 text-sky-300 rounded-lg border border-sky-400/20">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-5 border-t border-white/10">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label={`${data.ui.viewRepo} - ${project.title}`}
                        title={lang === 'es' ? "Abre en una nueva pestaña" : "Opens in a new tab"}
                        className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-white/5 hover:bg-sky-500 text-white rounded-xl font-medium transition-all duration-300 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                      >
                        <Github className="w-4 h-4" />
                        {data.ui.viewRepo}
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
            </AnimatePresence>
          </Card>

          {/* Skills */}
          <Card id="skills" className="lg:col-span-1" delay={0.6}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-amber-400" />
              {data.ui.skills}
            </h3>
            
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-zinc-500 mb-3 uppercase tracking-wider">{data.ui.hardSkills}</h4>
              <div className="flex flex-wrap gap-2">
                {data.skills.hard.map(skill => {
                  const Icon = skill.icon;
                  return (
                    <motion.button 
                      key={skill.name} 
                      onClick={() => setSelectedSkill(skill)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      animate={
                        selectedSkill?.name === skill.name 
                          ? { 
                              scale: [1, 0.9, 1.05, 1],
                              boxShadow: [
                                "0px 0px 0px 0px rgba(251,191,36,0)",
                                "0px 0px 0px 8px rgba(251,191,36,0.3)",
                                "0px 0px 0px 16px rgba(251,191,36,0)"
                              ]
                            } 
                          : {}
                      }
                      transition={{ duration: 0.4 }}
                      aria-haspopup="dialog"
                      aria-expanded={selectedSkill?.name === skill.name}
                      className="flex flex-col items-start gap-1.5 px-3 py-2 bg-amber-400/10 hover:bg-amber-400/25 hover:shadow-md hover:shadow-amber-400/20 text-amber-300 text-sm rounded-xl border border-amber-400/20 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    >
                      <div className="flex items-center gap-1.5">
                        <Icon className="w-4 h-4" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div 
                            key={star} 
                            className={`w-1.5 h-1.5 rounded-full ${star <= skill.level ? 'bg-amber-400' : 'bg-amber-400/20'}`}
                          />
                        ))}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-zinc-500 mb-3 uppercase tracking-wider">{data.ui.softSkills}</h4>
              <div className="flex flex-wrap gap-2">
                {data.skills.soft.map(skill => (
                  <motion.span 
                    key={skill} 
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-white/5 hover:bg-white/15 hover:shadow-md hover:shadow-white/10 text-zinc-300 text-sm rounded-xl border border-white/10 transition-all cursor-default inline-block"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Courses Row */}
        <div className="grid grid-cols-1 gap-6">
          {/* Courses */}
          <Card id="courses" delay={0.7}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-rose-400" />
              {data.ui.courses}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.courses.map(course => (
                <div key={course.id} className="group flex flex-col p-5 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-rose-500/40 hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-500/10 h-full">
                  <div className="flex justify-between items-center mb-4 gap-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-500/10 text-rose-300 text-xs font-semibold border border-rose-500/20">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {course.platform}
                    </span>
                    <span className="text-xs font-bold text-zinc-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      {course.year}
                    </span>
                  </div>
                  
                  <h4 className="text-base font-bold text-zinc-200 group-hover:text-rose-400 transition-colors mb-5 flex-grow leading-snug">
                    {course.name}
                  </h4>

                  {course.certificate && (
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <a 
                        href={course.certificate} 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label={`${data.ui.viewCertificate} - ${course.name}`}
                        title={lang === 'es' ? "Abre en una nueva pestaña" : "Opens in a new tab"}
                        className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-white/5 hover:bg-rose-500 text-zinc-300 hover:text-white rounded-xl text-sm font-medium transition-all duration-300 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                      >
                        <Award className="w-4 h-4" />
                        {data.ui.viewCertificate}
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>

        </div>

        {/* Contact Form Row */}
        <div className="grid grid-cols-1 gap-6 mt-6">
          <Card id="contact-form" delay={0.8}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-emerald-400" />
              {data.ui.contact}
            </h3>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder={data.ui.formName}
                    className={`w-full px-4 py-3 bg-zinc-900/50 border ${formErrors.name ? 'border-red-500' : 'border-white/10'} rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all`}
                  />
                  {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder={data.ui.formEmail}
                    className={`w-full px-4 py-3 bg-zinc-900/50 border ${formErrors.email ? 'border-red-500' : 'border-white/10'} rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all`}
                  />
                  {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder={data.ui.formMessage}
                  rows={4}
                  className={`w-full px-4 py-3 bg-zinc-900/50 border ${formErrors.message ? 'border-red-500' : 'border-white/10'} rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none`}
                />
                {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
              </div>
              
              {submitStatus === 'error' && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {data.ui.formError} {submitErrorMessage && <span className="block mt-1 text-xs opacity-80">Error: {submitErrorMessage}</span>}
                </div>
              )}
              
              {submitStatus === 'success' && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  {data.ui.formSuccess}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {data.ui.formSending}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {data.ui.formSend}
                  </>
                )}
              </button>
            </form>
          </Card>
        </div>
      </div>

      {/* Skill Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedSkill(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="skill-modal-title"
            aria-describedby="skill-modal-desc"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-white/10 rounded-2xl p-6 max-w-sm w-full shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedSkill(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center border border-amber-400/20 shrink-0">
                  <selectedSkill.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 id="skill-modal-title" className="text-xl font-bold text-white">{selectedSkill.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-medium text-amber-400/80 uppercase tracking-wider">{selectedSkill.levelText}</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div 
                          key={star} 
                          className={`w-1.5 h-1.5 rounded-full ${star <= selectedSkill.level ? 'bg-amber-400' : 'bg-amber-400/20'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p id="skill-modal-desc" className="text-zinc-300 leading-relaxed text-sm">
                {selectedSkill.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 shadow-lg backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
