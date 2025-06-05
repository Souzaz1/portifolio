import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Palette, Database, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'portfolio', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Sistema de Podologia",
      description: "Sistema completo para gerenciamento de clínicas de podologia desenvolvido em Java",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["Java", "MySQL", "HTML", "CSS"],
      github: "https://github.com/Souzaz1/podologia_sistema_pi.git",
      demo: "#"
    },
    {
      title: "Sistema de Cinema - Spring MVC",
      description: "Aplicação web para gerenciamento de cinema utilizando Spring MVC",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      technologies: ["Java", "Spring MVC", "MySQL", "HTML"],
      github: "https://github.com/Souzaz1/AtividadeCinemaSpringMVC.git",
      demo: "#"
    },
    {
      title: "Sistema de Leilões",
      description: "Plataforma de leilões online desenvolvida em Java com interface web",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      technologies: ["Java", "MySQL", "HTML", "CSS"],
      github: "https://github.com/Souzaz1/leiloes_uc11.git",
      demo: "#"
    }
  ];

  const skills = [
    { name: "Java", level: 85, icon: Code },
    { name: "MySQL", level: 80, icon: Database },
    { name: "HTML", level: 90, icon: Code },
    { name: "CSS", level: 85, icon: Palette },
    { name: "JavaScript", level: 75, icon: Code },
    { name: "Python", level: 70, icon: Code }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-white flex items-center">
              <Code className="w-6 h-6 mr-2" />
              {"Gabriel"}
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'portfolio', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 ${
                    activeSection === section ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {section === 'portfolio' ? 'Projetos' : 
                   section === 'about' ? 'Sobre' :
                   section === 'skills' ? 'Habilidades' :
                   section === 'contact' ? 'Contato' :
                   'Início'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="w-32 h-32 rounded-full mx-auto mb-8 animate-float overflow-hidden border-4 border-gray-600">
              <img 
                src="/lovable-uploads/e462db5b-d00b-4f79-8260-599639a995d8.png" 
                alt="Gabriel Pereira" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.log('Erro ao carregar imagem:', e);
                  // Fallback para um ícone se a imagem não carregar
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full bg-gray-700 flex items-center justify-center"><svg class="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.1 3.89 23 5 23H19C20.1 23 21 22.1 21 21V9H21ZM19 21H5V3H13V9H19V21Z"/></svg></div>';
                  }
                }}
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Olá, eu sou</span>
              <br />
              <span className="text-gray-400">Gabriel</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Desenvolvedor apaixonado por criar soluções inovadoras e experiências digitais 
              incríveis usando tecnologias modernas.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-white text-black hover:bg-gray-200 px-8 py-3"
              >
                Ver Projetos
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Souzaz1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/gabriel-pereira-89a173235/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/souzazq/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Desenvolvedor & Estudante
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Meu nome é Gabriel, tenho 19 anos. Sou formado em Técnico em Análise e 
                Desenvolvimento de Sistemas pelo SENAC e atualmente curso Ciência da 
                Computação na Universidade Presbiteriana Mackenzie.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Tenho interesse em desenvolvimento de software e estou sempre em busca de 
                novos aprendizados e desafios na área da tecnologia. Este portfólio foi 
                desenvolvido utilizando React e TypeScript com auxílio de IA.
              </p>
              <div className="flex items-center space-x-4 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
            <div className="gradient-border hover-glow">
              <div className="gradient-border-content">
                <h4 className="text-xl font-semibold mb-4 text-white">Experiência</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-white">Desenvolvedor Freelancer</h5>
                    <p className="text-gray-400">Projetos Java • 2023 - 2024</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">Formação Técnica</h5>
                    <p className="text-gray-400">SENAC • Análise e Desenvolvimento de Sistemas</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">Graduação</h5>
                    <p className="text-gray-400">Mackenzie • Ciência da Computação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Meus Projetos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover-glow">
                <CardContent className="p-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                    <a 
                      href={project.demo} 
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-900/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Habilidades</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="gradient-border hover-glow">
                <div className="gradient-border-content">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <skill.icon className="w-5 h-5 mr-3 text-gray-400" />
                      <span className="font-medium text-white">{skill.name}</span>
                    </div>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-gray-600 to-gray-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Entre em Contato</h2>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 text-white">Vamos Conversar</h3>
            <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Entre em contato comigo através das redes sociais!
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a href="https://github.com/Souzaz1" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
                <Github className="w-8 h-8 mb-2" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/gabriel-pereira-89a173235/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-8 h-8 mb-2" />
                <span>LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/souzazq/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
                <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Gabriel Pereira. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
