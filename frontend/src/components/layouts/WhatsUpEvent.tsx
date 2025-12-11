import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ChevronLeft, ExternalLink } from 'lucide-react';
import type { WhatsUpItem } from '../../data/whatsUpData';

interface Props {
  item: WhatsUpItem;
}

const WhatsUpEvent: React.FC<Props> = ({ item }) => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
        <div className="bg-caser-navy text-white pt-20 pb-32 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="container mx-auto px-4 relative z-10">
                <Link to="/whats-up" className="inline-flex items-center text-caser-cyan hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-wider">
                    <ChevronLeft size={16} className="mr-1" /> All Events
                </Link>
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">{item.title}</h1>
                    <div className="flex flex-wrap gap-6 text-gray-300 text-lg">
                        <span className="flex items-center gap-2"><Calendar size={20} className="text-caser-gold" /> {item.date}</span>
                        {item.meta?.location && <span className="flex items-center gap-2"><MapPin size={20} className="text-caser-gold" /> {item.meta.location}</span>}
                    </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto px-4 -mt-20 pb-20 relative z-20">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Visual & Content */}
                <div className="lg:w-2/3 space-y-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                    >
                        <img src={item.heroImage} alt={item.title} className="w-full h-[450px] object-cover" />
                    </motion.div>
                    
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                        <h3 className="text-3xl font-bold text-caser-navy mb-8 font-montserrat flex items-center gap-3">
                            Event Details <span className="h-px flex-1 bg-gray-200"></span>
                        </h3>
                        <div className="prose prose-lg max-w-none text-gray-600">
                            {item.content}
                        </div>
                    </div>
                </div>

                {/* Sticky Sidebar */}
                <div className="lg:w-1/3">
                    <div className="sticky top-24 space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }} 
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-50"
                        >
                            <h3 className="text-xl font-bold font-montserrat text-caser-navy mb-6">Registration</h3>
                            <div className="space-y-5 mb-8">
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-gray-500 text-sm font-medium">Time</span>
                                    <span className="font-bold text-caser-navy">{item.meta?.time || 'TBD'}</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-gray-500 text-sm font-medium">Organizer</span>
                                    <span className="font-bold text-caser-navy">{item.meta?.organizer || 'CASER'}</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-gray-500 text-sm font-medium">Entry Fee</span>
                                    <span className="font-bold text-green-600">Free</span>
                                </div>
                            </div>
                            <button className="w-full bg-caser-cyan text-white font-bold py-4 rounded-xl hover:bg-caser-navy transition-all duration-300 shadow-lg shadow-cyan-500/20 flex justify-center items-center gap-2 transform active:scale-95">
                                Reserve Your Spot <ExternalLink size={18} />
                            </button>
                        </motion.div>

                        <div className="bg-caser-navy p-1 rounded-3xl shadow-lg">
                            <div className="bg-caser-navy p-6 rounded-[20px] text-white">
                                <h4 className="font-bold mb-4 flex items-center gap-2"><MapPin size={18} className="text-caser-gold"/> Venue Map</h4>
                                <div className="h-48 bg-white/10 rounded-xl flex items-center justify-center text-sm text-gray-400 border border-white/10">
                                    Interactive Map Loading...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default WhatsUpEvent;
