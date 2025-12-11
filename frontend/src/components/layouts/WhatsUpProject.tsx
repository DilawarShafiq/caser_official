import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Target, Clock, MapPin, CheckCircle } from 'lucide-react';
import type { WhatsUpItem } from '../../data/whatsUpData';

interface Props {
  item: WhatsUpItem;
}

const WhatsUpProject: React.FC<Props> = ({ item }) => {
  return (
    <div className="bg-white font-sans min-h-screen">
        {/* Full-width visual header */}
        <section className="relative h-[60vh] w-full overflow-hidden bg-caser-navy">
            <img src={item.heroImage} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-caser-navy via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white z-10">
                <div className="container mx-auto max-w-5xl">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                Ongoing Project
                            </span>
                            <span className="flex items-center gap-1 text-sm font-semibold bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                                <Clock size={14} /> {item.date}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 leading-tight">{item.title}</h1>
                    </motion.div>
                </div>
            </div>
        </section>

        <section className="py-20 container mx-auto px-4">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <div className="lg:w-3/4">
                    <div className="flex items-center mb-8">
                        <Link to="/whats-up/projects" className="flex items-center text-gray-500 hover:text-caser-navy font-bold transition-colors">
                            <ChevronLeft size={20} className="mr-1" /> Back to Projects
                        </Link>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.2 }}
                        className="prose prose-lg prose-blue max-w-none text-gray-700"
                    >
                        <h3 className="text-2xl font-bold text-caser-navy mb-4 font-montserrat flex items-center gap-2">
                            <Target className="text-caser-gold" /> Project Overview
                        </h3>
                        <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
                            {item.excerpt}
                        </p>
                        {item.content}
                    </motion.div>
                </div>

                {/* Sidebar Stats */}
                <div className="lg:w-1/4 space-y-6">
                    <div className="bg-caser-neutral-light p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24">
                        <h4 className="font-bold text-caser-navy mb-4 font-montserrat text-lg">Key Facts</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 pb-4 border-b border-gray-200">
                                <MapPin className="text-caser-cyan shrink-0 mt-1" size={20} />
                                <div>
                                    <span className="block text-xs font-bold text-gray-400 uppercase">Region</span>
                                    <span className="text-gray-800 font-medium">Punjab, Pakistan</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 pb-4 border-b border-gray-200">
                                <Users className="text-caser-cyan shrink-0 mt-1" size={20} />
                                <div>
                                    <span className="block text-xs font-bold text-gray-400 uppercase">Beneficiaries</span>
                                    <span className="text-gray-800 font-medium">Public Schools</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                                <div>
                                    <span className="block text-xs font-bold text-gray-400 uppercase">Status</span>
                                    <span className="text-gray-800 font-medium">Phase 2: Data Collection</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default WhatsUpProject;
