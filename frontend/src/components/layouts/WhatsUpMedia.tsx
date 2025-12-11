import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Image as ImageIcon, Download, Play, ExternalLink, FileText } from 'lucide-react';
import type { WhatsUpItem } from '../../data/whatsUpData';

interface Props {
  item: WhatsUpItem;
}

const WhatsUpMedia: React.FC<Props> = ({ item }) => {
  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans">
        {/* Full Screen Split */}
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Visual Side */}
            <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-screen lg:fixed lg:left-0 lg:top-0 h-full">
                <img src={item.heroImage} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-12 w-full z-10">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                        <div className="bg-caser-gold/20 backdrop-blur-md text-caser-gold px-4 py-2 rounded-full w-fit mb-8 flex items-center gap-2 border border-caser-gold/30 text-sm font-bold uppercase tracking-wider">
                            <ImageIcon size={16} /> Multimedia Report
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-montserrat font-bold leading-tight mb-6 tracking-tight">{item.title}</h1>
                        <p className="text-xl text-slate-300 max-w-xl font-light leading-relaxed border-l-2 border-caser-cyan pl-6">{item.excerpt}</p>
                    </motion.div>
                </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2 lg:ml-[50%] p-8 lg:p-24 overflow-y-auto min-h-screen bg-slate-900">
                <Link to="/whats-up" className="inline-flex items-center text-slate-400 hover:text-white mb-16 transition-colors font-semibold group">
                    <ChevronLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back
                </Link>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.4 }}
                    className="space-y-16"
                >
                    <div className="prose prose-invert prose-lg max-w-none prose-headings:font-montserrat prose-p:text-slate-300 prose-a:text-caser-cyan">
                        {item.content}
                    </div>

                    {/* Resources / Downloads Area */}
                    <div className="bg-slate-800/50 rounded-3xl p-10 border border-slate-700 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold font-montserrat text-white mb-8 flex items-center gap-3">
                            <Download size={24} className="text-caser-cyan" /> Downloads & Resources
                        </h3>
                        <div className="space-y-4">
                            <button className="w-full flex items-center justify-between bg-slate-700 hover:bg-slate-600 p-5 rounded-2xl transition-all group hover:scale-[1.02]">
                                <span className="flex items-center gap-4 font-semibold text-slate-200"><FileText className="text-caser-gold" /> Executive Summary.pdf</span>
                                <Download className="text-slate-500 group-hover:text-white transition-colors" />
                            </button>
                            <button className="w-full flex items-center justify-between bg-slate-700 hover:bg-slate-600 p-5 rounded-2xl transition-all group hover:scale-[1.02]">
                                <span className="flex items-center gap-4 font-semibold text-slate-200"><Play className="text-caser-gold" /> Launch Event Recording</span>
                                <ExternalLink className="text-slate-500 group-hover:text-white transition-colors" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  );
};

export default WhatsUpMedia;
