import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { whatsUpData } from '../data/whatsUpData';

interface Props {
  filterCategory?: 'Project' | 'News' | 'Event'; // Grouped categories
}

const WhatsUpPage: React.FC<Props> = ({ filterCategory }) => {
  // Filter Logic
  const filteredData = React.useMemo(() => {
    if (!filterCategory) return whatsUpData;
    
    return whatsUpData.filter(item => {
        if (filterCategory === 'Project') return item.category === 'Project';
        if (filterCategory === 'News') return item.category === 'News';
        if (filterCategory === 'Event') return ['Event', 'Seminar', 'Workshop'].includes(item.category);
        return true;
    });
  }, [filterCategory]);

  // Featured Item (only for main page or if data exists)
  const featured = !filterCategory ? filteredData[0] : null;
  const listItems = !filterCategory ? filteredData.slice(1) : filteredData;

  // Dynamic Title
  const pageTitle = filterCategory 
    ? (filterCategory === 'Project' ? 'Ongoing Projects' : (filterCategory === 'News' ? 'News & Announcements' : 'Events & Workshops'))
    : "What's Up";

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      {!filterCategory ? (
        // Main Landing Hero
        <section className="relative h-[50vh] w-full overflow-hidden">
            <img src={featured?.heroImage} alt={featured?.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-caser-navy via-caser-navy/60 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white z-10">
                <div className="container mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="bg-caser-cyan text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                            {featured?.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-montserrat font-bold mb-3 max-w-4xl leading-tight">
                            {featured?.title}
                        </h1>
                        <div className="flex items-center gap-6 text-gray-300 mb-4 text-sm">
                            <span className="flex items-center gap-2"><Calendar size={16} /> {featured?.date}</span>
                            <span className="flex items-center gap-2"><Clock size={16} /> 5 min read</span>
                        </div>
                        <p className="text-base text-gray-200 max-w-2xl mb-6 line-clamp-2 hidden md:block">
                            {featured?.excerpt}
                        </p>
                        <Link to={`/whats-up/${featured?.slug}`} className="text-caser-gold font-bold text-base hover:underline decoration-2 underline-offset-4">
                            Read Full Story
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
      ) : (
        // Category Page Hero
        <section className="bg-caser-navy text-white py-24 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-4">{pageTitle}</h1>
                <p className="text-caser-cyan text-xl">Latest updates from CASER</p>
            </motion.div>
        </section>
      )}

      {/* Grid */}
      <section className="py-20 container mx-auto px-4">
        {!filterCategory && (
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl font-montserrat font-bold text-caser-navy">Recent Updates</h2>
                    <div className="w-12 h-1 bg-caser-gold mt-2"></div>
                </div>
                <Link to="/whats-up/news" className="text-caser-cyan font-bold hover:text-caser-navy transition-colors">View All News</Link>
            </div>
        )}

        {listItems.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {listItems.map((item, idx) => (
                    <motion.div 
                        key={item.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-shadow group h-full"
                    >
                        <Link to={`/whats-up/${item.slug}`} className="block h-56 overflow-hidden relative">
                            <img src={item.heroImage} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-xs font-bold text-caser-navy uppercase shadow-sm">
                                {item.category}
                            </div>
                        </Link>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center text-gray-400 text-xs mb-3 font-medium">
                                <Calendar size={14} className="mr-1" /> {item.date}
                            </div>
                            <h3 className="text-xl font-bold font-montserrat text-caser-navy mb-3 leading-snug group-hover:text-caser-cyan transition-colors">
                                <Link to={`/whats-up/${item.slug}`}>{item.title}</Link>
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                            <div className="mt-auto pt-4 border-t border-gray-100">
                                <Link to={`/whats-up/${item.slug}`} className="text-sm font-semibold text-gray-500 group-hover:text-caser-navy transition-colors flex items-center">
                                    Read Details
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        ) : (
            <div className="text-center py-20 text-gray-500">
                <p>No updates found in this category.</p>
            </div>
        )}
      </section>
    </div>
  );
};

export default WhatsUpPage;