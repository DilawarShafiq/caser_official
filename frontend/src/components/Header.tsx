// frontend/src/components/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react'; // Using Lucide React for icons
import { cn } from '../utils/cn'; // Utility for conditional classes

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    href: '/about',
    subItems: [
      { name: 'Who are we', href: '/about/who-we-are' },
      { name: 'Vision, Mission & Values', href: '/about/vision' },
      { name: 'Our Team', href: '/about/our-team' },
      { name: 'Our Partners', href: '/about/our-partners' },
      { name: 'Our Edge', href: '/about/our-edge' },
      { name: 'Our Methods & Tools', href: '/about/methods' },
    ],
  },
  { name: 'Focus Areas', href: '/focus-areas' },
  { name: 'Publications', href: '/publications' },
  {
    name: 'Insights',
    href: '/insights',
    subItems: [
      { name: 'News', href: '/insights/news' },
      { name: 'Articles', href: '/insights/articles' },
      { name: 'Stories', href: '/insights/stories' },
    ],
  },
  { name: 'Projects', href: '/projects' },
  {
    name: 'Contact Us',
    href: '/contact',
    subItems: [
      { name: 'Write and talk to us', href: '/contact/write-talk' },
      { name: 'Join as Colleague', href: '/contact/join-colleague' },
      { name: 'Join as Partner', href: '/contact/join-partner' },
    ],
  },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-[#E49B0F] text-[#FAF3E0] shadow-md font-montserrat sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}caser_logo.png`}
              alt="CASER Logo"
              className="h-12"
              style={{ transform: 'scaleX(1.1)' }}
            />
          </Link>
          <span className="hidden lg:block font-montserrat font-bold text-lg text-white">
            Center for Advanced Survey and Economic Research
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 items-center">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.href}
                className="flex items-center hover:text-[#4A6FA5] transition-colors duration-300 py-2"
              >
                {item.name}
                {item.subItems && <ChevronDown size={16} className="ml-1" />}
              </Link>
              {/* Dropdown Menu */}
              {item.subItems && (
                <div
                  className={cn(
                    "absolute left-0 top-full w-64 bg-[#FAF3E0] text-[#2B2B2B] shadow-xl rounded-md overflow-hidden transition-all duration-300 transform origin-top",
                    activeDropdown === item.name
                      ? "opacity-100 scale-y-100 translate-y-0"
                      : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
                  )}
                >
                  <ul className="py-2">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          to={subItem.href}
                          className="block px-4 py-2 hover:bg-[#E5E5E5] hover:text-[#E49B0F] transition-colors text-sm"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={cn(
          "lg:hidden bg-[#E49B0F] absolute w-full left-0 z-40 transition-all duration-300 ease-in-out transform overflow-y-auto max-h-[90vh]",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <ul className="flex flex-col p-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.name} className="border-b border-[#2B2B2B]/30 last:border-0 pb-2">
              <div className="flex justify-between items-center">
                 <Link to={item.href} className="block text-[#FAF3E0] hover:text-[#4A6FA5] text-lg font-medium py-2" onClick={() => !item.subItems && setIsOpen(false)}>
                    {item.name}
                 </Link>
                 {item.subItems && (
                     <button onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)} className="text-[#FAF3E0] p-2">
                        <ChevronDown size={20} className={cn("transition-transform", activeDropdown === item.name ? "rotate-180" : "")} />
                     </button>
                 )}
              </div>

              {/* Mobile Submenu */}
              {item.subItems && (
                <ul className={cn(
                    "pl-4 space-y-2 overflow-hidden transition-all duration-300",
                    activeDropdown === item.name ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
                )}>
                  {item.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <Link to={subItem.href} className="block text-[#FAF3E0]/80 hover:text-[#4A6FA5] text-sm py-1" onClick={() => setIsOpen(false)}>
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
