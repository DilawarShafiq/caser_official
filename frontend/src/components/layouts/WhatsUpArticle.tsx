import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronLeft, Share2, Download } from 'lucide-react';
import type { WhatsUpItem } from '../../data/whatsUpData';

interface Props {
  item: WhatsUpItem;
}

const WhatsUpArticle: React.FC<Props> = ({ item }) => {
  return (
    <div className="bg-white font-serif">
        <section className="relative h-[45vh] w-full overflow-hidden bg-caser-navy">
            <img src={item.heroImage} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white text-center z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
                    <span className="bg-caser-gold text-caser-navy px-4 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-wider mb-6 inline-block">
                        {item.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 leading-tight shadow-sm">
                        {item.title}
                    </h1>
                    <div className="flex justify-center items-center gap-8 text-gray-200 font-sans text-sm">
                        <span className="flex items-center gap-2"><Calendar size={16} /> {item.date}</span>
                        <span className="flex items-center gap-2"><Clock size={16} /> 5 min read</span>
                    </div>
                </motion.div>
            </div>
        </section>

        <section className="py-16 container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-12 border-b border-gray-100 pb-6 font-sans">
                    <Link to="/whats-up" className="flex items-center text-gray-500 hover:text-caser-navy font-bold transition-colors">
                        <ChevronLeft size={20} className="mr-1" /> Back to News
                    </Link>
                    <div className="flex gap-4">
                        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"><Share2 size={20} /></button>
                        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"><Download size={20} /></button>
                    </div>
                </div>
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.2 }}
                    className="prose prose-lg prose-slate max-w-none text-gray-800 leading-loose"
                >
                    <p className="text-2xl text-gray-600 italic mb-10 leading-relaxed font-light">
                        {item.excerpt}
                    </p>
                    {item.content}
                </motion.div>
                
                <div className="mt-16 pt-8 border-t border-gray-200 font-sans">
                    <div className="flex flex-wrap gap-2">
                        <span className="text-gray-400 font-bold text-sm mr-2">Tags:</span>
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">Policy</span>
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">Development</span>
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">Pakistan</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default WhatsUpArticle;
