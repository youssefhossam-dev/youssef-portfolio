import { useState } from 'react';

const YoussefPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 to-sand-100 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-egyptian-blue">Youssef Hossam</h1>
            <div className="hidden md:flex space-x-8">
              {['about', 'education', 'skills', 'goals', 'hobbies'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? 'text-egyptian-gold font-medium'
                      : 'text-gray-600 hover:text-egyptian-blue'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-2/5 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-egyptian-blue/10 rounded-full flex items-center justify-center">
                  <img 
                    src="/PersonalPortrait.jpg" 
                    alt="Professional portrait of Youssef Hossam" 
                    className="w-60 h-60 rounded-full object-cover shadow-lg"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-egyptian-gold rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-egyptian-blue mb-4">
                Youssef Hossam
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                17-Year-Old AI Developer & Aerospace Enthusiast
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Egyptian ambitious innovator with a passion for creating impact that extends beyond 
                myself to uplift my entire community. Currently blending STEM education with 
                cutting-edge AI development and research.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="px-6 py-3 bg-egyptian-blue text-white rounded-lg hover:bg-egyptian-blue/90 transition-colors"
                >
                  My Skills
                </button>
                <button 
                  onClick={() => scrollToSection('goals')}
                  className="px-6 py-3 border border-egyptian-blue text-egyptian-blue rounded-lg hover:bg-egyptian-blue/10 transition-colors"
                >
                  My Vision
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-egyptian-blue text-center mb-12">Education & Background</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-sand-50 p-6 rounded-xl shadow-sm border border-sand-200">
              <h3 className="text-xl font-semibold text-egyptian-blue mb-3">Obour STEM School</h3>
              <p className="text-gray-600 mb-2">11th Grade Student</p>
              <p className="text-gray-700">
                Pursuing advanced studies in Science, Technology, Engineering, and Mathematics 
                with a focus on aerospace applications and AI integration.
              </p>
            </div>
            <div className="bg-sand-50 p-6 rounded-xl shadow-sm border border-sand-200">
              <h3 className="text-xl font-semibold text-egyptian-blue mb-3">Research Foundation</h3>
              <p className="text-gray-600 mb-2">Emerging Researcher</p>
              <p className="text-gray-700">
                Actively engaged in research projects bridging AI development with practical 
                engineering solutions for community challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-r from-egyptian-blue/5 to-sand-100/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-egyptian-blue text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-sand-200 text-center">
              <div className="w-16 h-16 bg-egyptian-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-egyptian-blue">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-egyptian-blue mb-3">AI Development</h3>
              <p className="text-gray-700">
                Building intelligent systems and machine learning models with practical applications
                for real-world problems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-sand-200 text-center">
              <div className="w-16 h-16 bg-egyptian-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-egyptian-blue">🎬</span>
              </div>
              <h3 className="text-xl font-semibold text-egyptian-blue mb-3">Video Editing</h3>
              <p className="text-gray-700">
                Creating compelling visual stories through expert editing, effects, and 
                post-production techniques.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-sand-200 text-center">
              <div className="w-16 h-16 bg-egyptian-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-egyptian-blue">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-egyptian-blue mb-3">Research</h3>
              <p className="text-gray-700">
                Conducting thorough investigations and analysis to develop innovative solutions
                and advance knowledge boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-egyptian-blue text-center mb-12">Aspirations & Dreams</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-egyptian-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🎓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-egyptian-blue mb-2">MIT Aerospace Engineering</h3>
                <p className="text-gray-700">
                  Pursuing admission to MIT with financial aid to study aerospace engineering and 
                  contribute to advancements in aviation and space technology.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-egyptian-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🚀</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-egyptian-blue mb-2">Pre-College Entrepreneurship</h3>
                <p className="text-gray-700">
                  Launching a successful business venture before college to achieve financial 
                  independence and fund my educational and personal aspirations.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-egyptian-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🏎️</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-egyptian-blue mb-2">Lamborghini Aventador SVJ</h3>
                <p className="text-gray-700">
                  Working toward the dream of driving my Lamborghini Aventador SVJ, symbolizing 
                  the achievement of goals through relentless dedication and hard work.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-egyptian-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🌍</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-egyptian-blue mb-2">Community Impact</h3>
                <p className="text-gray-700">
                  Creating solutions and opportunities that extend beyond personal success to 
                  positively transform my community and inspire future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 px-6 bg-gradient-to-r from-egyptian-blue/5 to-sand-100/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-egyptian-blue text-center mb-12">Interests & Hobbies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-sand-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-egyptian-blue/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🎥</span>
                </div>
                <h3 className="text-xl font-semibold text-egyptian-blue">Egyptian Cinema</h3>
              </div>
              <p className="text-gray-700">
                Passionate about exploring the rich storytelling and cultural narratives 
                of Egyptian films, appreciating both classic masterpieces and contemporary works.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-sand-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-egyptian-blue/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">💪</span>
                </div>
                <h3 className="text-xl font-semibold text-egyptian-blue">Fitness Training</h3>
              </div>
              <p className="text-gray-700">
                Committed to physical wellness through regular gym sessions, understanding that 
                mental clarity and physical health are foundational to achieving ambitious goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-sand-200 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-egyptian-blue/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🚗</span>
                </div>
                <h3 className="text-xl font-semibold text-egyptian-blue">Exotic Cars</h3>
              </div>
              <p className="text-gray-700">
                Fascinated by the mechanical sophistication and design excellence of high-performance 
                vehicles, particularly studying the engineering behind exotic car motors and systems.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-egyptian-blue text-white py-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-4">Youssef Hossam</h3>
          <p className="text-blue-100 mb-6">
            Building the future through innovation, determination, and community impact
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-blue-100 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <span aria-hidden="true">📘</span>
            </a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <span aria-hidden="true">🐱</span>
            </a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <span aria-hidden="true">🐦</span>
            </a>
          </div>
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Youssef Hossam. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        :root {
          --egyptian-blue: #1a365d;
          --egyptian-gold: #d4af37;
          --sand-50: #faf7f2;
          --sand-100: #f5f0e6;
          --sand-200: #e8dfcf;
        }
        
        .bg-egyptian-blue { background-color: var(--egyptian-blue); }
        .text-egyptian-blue { color: var(--egyptian-blue); }
        .bg-egyptian-gold { background-color: var(--egyptian-gold); }
        .text-egyptian-gold { color: var(--egyptian-gold); }
        .bg-sand-50 { background-color: var(--sand-50); }
        .bg-sand-100 { background-color: var(--sand-100); }
        .border-sand-200 { border-color: var(--sand-200); }
      `}</style>
    </div>
  );
};

export default YoussefPortfolio;