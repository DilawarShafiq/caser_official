import React from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, DollarSign, Cloud, Landmark, Users, Building, Globe, HandHelping, Laptop } from 'lucide-react';

const FocusAreasPage: React.FC = () => {
  const areas = [
    { name: "Health & Wellbeing", icon: <Heart size={40} />, desc: "Strengthening health systems and outcomes." },
    { name: "Education & Skills", icon: <BookOpen size={40} />, desc: "Improving access and quality of education." },
    { name: "Economy & Markets", icon: <DollarSign size={40} />, desc: "Fostering inclusive economic growth." },
    { name: "Technology & Society", icon: <Laptop size={40} />, desc: "Digital transformation and its impact." },
    { name: "Climate & Environment", icon: <Cloud size={40} />, desc: "Sustainable solutions for a changing planet." },
    { name: "Governance & Policy", icon: <Landmark size={40} />, desc: "Enhancing institutional transparency." },
    { name: "Gender & Inclusion", icon: <Users size={40} />, desc: "Advocating for equality and social justice." },
    { name: "Urban Development", icon: <Building size={40} />, desc: "Building resilient and smart cities." },
    { name: "Culture & Society", icon: <Globe size={40} />, desc: "Preserving heritage and social cohesion." },
    { name: "Crisis Response", icon: <HandHelping size={40} />, desc: "Humanitarian aid and disaster relief." },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-caser-navy text-white py-24 text-center">
        <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-montserrat font-bold"
        >
            Core Themes
        </motion.h1>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 p-8 rounded-xl hover:border-caser-gold hover:shadow-xl transition-all duration-300 group text-center"
                >
                    <div className="text-caser-cyan mb-6 mx-auto w-fit group-hover:text-caser-gold transition-colors duration-300">
                        {area.icon}
                    </div>
                    <h3 className="text-xl font-bold font-montserrat text-caser-navy mb-2">{area.name}</h3>
                    <p className="text-gray-600">{area.desc}</p>
                </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default FocusAreasPage;
