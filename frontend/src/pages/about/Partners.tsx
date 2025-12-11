import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Globe, Building2 } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    "UNICEF", "World Bank", "UNDP", "USAID", "Oxford Policy Management", "SDPI", "LUMS", "PIDE"
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. Header */}
      <section className="bg-caser-navy text-white py-32 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6">Partners & Collaborators</h1>
            <p className="text-xl text-caser-cyan font-light max-w-2xl mx-auto">
                Building a more prosperous future through strategic alliances.
            </p>
        </motion.div>
      </section>

      {/* 2. Collaboration Philosophy */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
                <h2 className="text-3xl font-montserrat font-bold text-caser-navy mb-6">Stakeholder Engagement</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our success relies on effectively translating complex findings into clear, actionable recommendations for government bodies, development organizations, and community leaders.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    By partnering with CASER, stakeholders gain access to the definitive data required to build effective programs and secure a more prosperous future.
                </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-caser-neutral-light p-6 rounded-xl text-center">
                    <Building2 size={40} className="mx-auto text-caser-gold mb-3" />
                    <span className="font-bold text-caser-navy">Govt Bodies</span>
                </div>
                <div className="bg-caser-neutral-light p-6 rounded-xl text-center mt-8">
                    <Globe size={40} className="mx-auto text-caser-cyan mb-3" />
                    <span className="font-bold text-caser-navy">Intl. NGOs</span>
                </div>
                <div className="bg-caser-neutral-light p-6 rounded-xl text-center">
                    <Handshake size={40} className="mx-auto text-caser-navy mb-3" />
                    <span className="font-bold text-caser-navy">Private Sector</span>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Logo Grid */}
      <section className="py-20 bg-caser-neutral-light">
        <div className="container mx-auto px-4">
            <h3 className="text-center font-montserrat font-bold text-gray-400 uppercase tracking-widest mb-12">Trusted By</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {partners.map((partner, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-white h-32 rounded-xl shadow-sm flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500 hover:shadow-md cursor-default"
                    >
                        <span className="text-xl md:text-2xl font-bold text-gray-700">{partner}</span>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
