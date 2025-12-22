// frontend/src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2B2B2B] text-[#FAF3E0] font-open-sans py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 md:mb-0">
            <Link to="/" className="hover:text-[#E49B0F] transition-colors">Home</Link>
            <span className="text-gray-500">|</span>
            <Link to="/about" className="hover:text-[#E49B0F] transition-colors">About</Link>
            <span className="text-gray-500">|</span>
            <Link to="/publications" className="hover:text-[#E49B0F] transition-colors">Publications</Link>
            <span className="text-gray-500">|</span>
            <Link to="/insights" className="hover:text-[#E49B0F] transition-colors">Insights</Link>
            <span className="text-gray-500">|</span>
            <Link to="/contact" className="hover:text-[#E49B0F] transition-colors">Contact</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/profile.php?id=61581066233769" aria-label="Facebook" className="hover:text-[#E49B0F] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#E49B0F] transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#E49B0F] transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Contact Information */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-2">
                <MapPin className="mr-2 text-[#E49B0F]" size={16} />
                <span>Bahria Orchard, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center mb-2">
                <Mail className="mr-2 text-[#E49B0F]" size={16} />
                <span>caser.org.pk@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 text-[#E49B0F]" size={16} />
                <span>+92 (123) 456-7890</span>
              </div>
            </div>

            {/* Empty space for layout */}
            <div></div>

            {/* Empty space for layout */}
            <div></div>
          </div>

          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2025 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
