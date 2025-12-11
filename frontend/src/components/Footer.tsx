// frontend/src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, Instagram, MapPin, Mail, Phone } from 'lucide-react'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-caser-navy text-white font-open-sans pt-16 pb-8 border-t-4 border-caser-gold">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Column 1: Branding & About */}
        <div className="space-y-4">
          <div className="flex flex-col items-start">
             <img src="/caser_official/caser_logo.png" alt="CASER Logo" className="h-16 mb-3" />
             <h3 className="text-base font-montserrat font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-caser-gold via-white to-caser-gold animate-pulse">
               Center for Advanced Survey and Economic Research
             </h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Building the future of evidence-based research in Pakistan through data-driven insights, rigorous surveys, and impactful policy advisory.
          </p>
          {/* Social Icons moved here or kept in Col 4? Let's keep them in Col 4 or under branding. 
              The prompt says "update footer with social icons". Let's put them in Col 4 for balance.
          */}
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xl font-montserrat font-bold text-caser-gold mb-6">Quick Links</h4>
          <ul className="space-y-3">
             <li><Link to="/about" className="hover:text-caser-cyan transition-colors duration-300">About Us</Link></li>
             <li><Link to="/what-we-do" className="hover:text-caser-cyan transition-colors duration-300">Our Expertise</Link></li>
             <li><Link to="/research" className="hover:text-caser-cyan transition-colors duration-300">Research</Link></li>
             <li><Link to="/whats-up" className="hover:text-caser-cyan transition-colors duration-300">News & Events</Link></li>
             <li><Link to="/careers" className="hover:text-caser-cyan transition-colors duration-300">Careers</Link></li>
             <li><Link to="/contact" className="hover:text-caser-cyan transition-colors duration-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-xl font-montserrat font-bold text-caser-gold mb-6">Contact Us</h4>
          <address className="not-italic space-y-4">
            <div className="flex items-start">
                <MapPin className="mr-3 text-caser-cyan flex-shrink-0" size={20} />
                <p>Bahria Orchard, Lahore, Pakistan</p>
            </div>
            <div className="flex items-center">
                <Mail className="mr-3 text-caser-cyan flex-shrink-0" size={20} />
                <a href="mailto:caser.org.pk@gmail.com" className="hover:text-caser-gold transition-colors duration-300">caser.org.pk@gmail.com</a>
            </div>
            <div className="flex items-center">
                <Phone className="mr-3 text-caser-cyan flex-shrink-0" size={20} />
                <a href="tel:+921234567890" className="hover:text-caser-gold transition-colors duration-300">+92 (123) 456-7890</a>
            </div>
          </address>
        </div>

        {/* Column 4: Newsletter */}
        <div>
           <h4 className="text-xl font-montserrat font-bold text-caser-gold mb-6">Stay Connected</h4>
           <p className="mb-4 text-sm text-gray-300">Subscribe for the latest updates.</p>
           <form className="flex flex-col space-y-3 mb-8">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 rounded bg-caser-neutral-dark text-white border border-gray-600 focus:outline-none focus:border-caser-gold"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-caser-gold text-caser-navy font-bold rounded hover:bg-yellow-400 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright & Socials */}
      <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-sm text-gray-400 text-center md:text-left flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                <span>&copy; {new Date().getFullYear()} Center for Advanced Survey and Economic Research. All rights reserved.</span>
                <span className="hidden md:block text-gray-600">|</span>
                <Link to="/privacy" className="hover:text-caser-gold transition-colors">Privacy Policy</Link>
                <span className="hidden md:block text-gray-600">|</span>
                <Link to="/terms" className="hover:text-caser-gold transition-colors">Terms of Service</Link>
                <span className="hidden md:block text-gray-600">|</span>
                <Link to="/cookies" className="hover:text-caser-gold transition-colors">Cookie Policy</Link>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-caser-gold font-bold text-base">Follow Us</span>
                <a href="#" aria-label="LinkedIn" className="bg-caser-neutral-dark p-2 rounded-full hover:bg-caser-gold hover:text-caser-navy transition-all duration-300"><Linkedin size={18} /></a>
                <a href="#" aria-label="Twitter" className="bg-caser-neutral-dark p-2 rounded-full hover:bg-caser-gold hover:text-caser-navy transition-all duration-300"><Twitter size={18} /></a>
                <a href="#" aria-label="Facebook" className="bg-caser-neutral-dark p-2 rounded-full hover:bg-caser-gold hover:text-caser-navy transition-all duration-300"><Facebook size={18} /></a>
                <a href="#" aria-label="YouTube" className="bg-caser-neutral-dark p-2 rounded-full hover:bg-caser-gold hover:text-caser-navy transition-all duration-300"><Youtube size={18} /></a>
                <a href="#" aria-label="Instagram" className="bg-caser-neutral-dark p-2 rounded-full hover:bg-caser-gold hover:text-caser-navy transition-all duration-300"><Instagram size={18} /></a>
              </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
