import { useState, useEffect } from 'react';
import { FiHome, FiUser, FiBriefcase, FiFolder, FiMail, FiMap } from 'react-icons/fi';
import { FiMenu, FiX } from 'react-icons/fi';

const AdvanceNavbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      const sections = ['home', 'about', 'experience', 'projects', 'contact', 'roadmap'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      setTimeout(() => setIsScrolling(false), 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    if (isScrolling) return;
    
    const element = document.getElementById(sectionId);
    if (element) {
      setIsMobileMenuOpen(false);
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'home', icon: <FiHome />, label: 'Home' },
    { id: 'about', icon: <FiUser />, label: 'About' },
    { id: 'experience', icon: <FiBriefcase />, label: 'Experience' },
    { id: 'projects', icon: <FiFolder />, label: 'Projects' },
    { id: 'roadmap', icon: <FiMap />, label: 'Roadmap' },
    { id: 'contact', icon: <FiMail />, label: 'Contact' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-violet-950/20 bg-opacity-90 backdrop-blur-sm border-b border-indigo-900/30">
        <div className="container mx-auto px-6 py-4">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center cursor-pointer px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-indigo-400 bg-indigo-900/20 border border-indigo-800/50'
                      : 'text-gray-300 hover:text-indigo-300 hover:bg-gray-800'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 drop-shadow-[0_0_10px_#ffffff] text-4xl left-4 z-50 p-3 rounded-md  text-indigo-200   shadow-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-gray-900/80 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <aside
        className={`md:hidden fixed top-0 left-0 z-40 w-64 h-screen bg-gray-900  transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-md transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-indigo-400 bg-indigo-900/20 border border-indigo-800/50'
                      : 'text-gray-300 hover:text-indigo-300 hover:bg-gray-800'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AdvanceNavbar;