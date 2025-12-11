import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-caser-navy text-white py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x800/1A365D/FFFFFF?text=Connect+With+Us')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-caser-navy/90"></div>
        
        <div className="container mx-auto px-4 text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-montserrat font-bold mb-6 tracking-tight"
          >
            Contact Us
          </motion.h1>
          <p className="text-xl md:text-2xl text-caser-cyan font-open-sans max-w-2xl mx-auto font-light">
            We'd love to hear from you. Let's start a conversation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 container mx-auto px-4 bg-caser-neutral-light -mt-10 relative z-20 rounded-t-3xl shadow-xl border-t border-gray-100">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-10"
            >
                <div>
                    <h2 className="text-4xl font-bold font-montserrat text-caser-navy mb-6">Get in Touch</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Whether you have a question about our research, need policy advisory, or want to partner with us, our dedicated team is ready to assist you.
                    </p>
                </div>

                <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                        <div className="bg-white p-4 rounded-full text-caser-gold shadow-md group-hover:bg-caser-gold group-hover:text-caser-navy transition-colors">
                            <MapPin size={28} />
                        </div>
                        <div>
                            <h4 className="font-bold text-caser-navy text-xl mb-1">Visit Us</h4>
                            <p className="text-gray-600">Bahria Orchard, Lahore,<br/>Pakistan</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6 group">
                        <div className="bg-white p-4 rounded-full text-caser-gold shadow-md group-hover:bg-caser-gold group-hover:text-caser-navy transition-colors">
                            <Mail size={28} />
                        </div>
                        <div>
                            <h4 className="font-bold text-caser-navy text-xl mb-1">Email Us</h4>
                            <p className="text-gray-600">caser.org.pk@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6 group">
                        <div className="bg-white p-4 rounded-full text-caser-gold shadow-md group-hover:bg-caser-gold group-hover:text-caser-navy transition-colors">
                            <Phone size={28} />
                        </div>
                        <div>
                            <h4 className="font-bold text-caser-navy text-xl mb-1">Call Us</h4>
                            <p className="text-gray-600">+92 (123) 456-7890</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-100"
            >
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-caser-gold focus:ring-2 focus:ring-caser-gold/50 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-caser-gold focus:ring-2 focus:ring-caser-gold/50 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-caser-gold focus:ring-2 focus:ring-caser-gold/50 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="How can we help?" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                        <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-caser-gold focus:ring-2 focus:ring-caser-gold/50 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Your message here..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-caser-navy text-white font-bold py-4 rounded-lg hover:bg-caser-gold hover:text-caser-navy transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-lg">
                        Send Message <Send size={20} />
                    </button>
                </form>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
