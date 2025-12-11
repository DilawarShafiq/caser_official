import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ChevronRight, X, ChevronLeft } from 'lucide-react';

// --- Types ---
interface Report {
  id: string;
  title: string;
  type: 'Report' | 'Policy Brief' | 'Article';
  date: string;
  img: string;
  pdfUrl: string; // URL to the full PDF
  previewPages: string[]; // URLs of images for the first few pages
}

// --- Mock Data ---
const publications: Report[] = [
  { 
    id: 'edu-2024',
    title: "State of Education 2024", 
    type: "Report", 
    date: "Nov 2024", 
    img: "https://placehold.co/300x400/1A365D/FFFFFF?text=Education+Cover",
    pdfUrl: "/sample.pdf", // Placeholder
    previewPages: [
        "https://placehold.co/600x800/FFFFFF/000000?text=Page+1:+Executive+Summary",
        "https://placehold.co/600x800/FFFFFF/000000?text=Page+2:+Key+Findings",
        "https://placehold.co/600x800/FFFFFF/000000?text=Page+3:+Methodology"
    ]
  },
  { 
    id: 'sme-inflation',
    title: "Impact of Inflation on SMEs", 
    type: "Policy Brief", 
    date: "Oct 2024", 
    img: "https://placehold.co/300x400/00B5D4/FFFFFF?text=Inflation+Cover",
    pdfUrl: "/sample.pdf",
    previewPages: [
        "https://placehold.co/600x800/FFFFFF/000000?text=Brief+Page+1",
        "https://placehold.co/600x800/FFFFFF/000000?text=Brief+Page+2"
    ]
  },
  { 
    id: 'digital-lit',
    title: "Digital Literacy in Rural Areas", 
    type: "Article", 
    date: "Sept 2024", 
    img: "https://placehold.co/300x400/ECC94B/1A365D?text=Digital+Cover",
    pdfUrl: "/sample.pdf",
    previewPages: [
        "https://placehold.co/600x800/FFFFFF/000000?text=Article+View"
    ]
  },
  { 
    id: 'climate-framework',
    title: "Climate Resilience Framework", 
    type: "Report", 
    date: "Aug 2024", 
    img: "https://placehold.co/300x400/2D3748/FFFFFF?text=Climate+Cover",
    pdfUrl: "/sample.pdf",
    previewPages: [
        "https://placehold.co/600x800/FFFFFF/000000?text=Framework+Overview",
        "https://placehold.co/600x800/FFFFFF/000000?text=Risk+Matrix"
    ]
  },
  { 
    id: 'youth-unemployment',
    title: "Youth Unemployment Trends", 
    type: "Policy Brief", 
    date: "July 2024", 
    img: "https://placehold.co/300x400/4F46E5/FFFFFF?text=Youth+Cover",
    pdfUrl: "/sample.pdf",
    previewPages: [
        "https://placehold.co/600x800/FFFFFF/000000?text=Trend+Analysis"
    ]
  },
];

const ResearchPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredPubs = activeTab === 'All' ? publications : publications.filter(p => p.type === activeTab);

  // --- Modal Handlers ---
  const openPreview = (report: Report) => {
    setSelectedReport(report);
    setCurrentPage(0);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    setSelectedReport(null);
    document.body.style.overflow = 'unset';
  };

  const nextPage = () => {
    if (selectedReport && currentPage < selectedReport.previewPages.length - 1) {
        setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
        setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Featured Hero */}
      <section className="bg-caser-navy text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="md:w-1/2"
                >
                    <span className="text-caser-gold font-bold uppercase tracking-wider mb-2 block">Featured Publication</span>
                    <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 leading-tight">
                        The Future of <br/> Work in Pakistan
                    </h1>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        A comprehensive analysis of labor market shifts, automation, and the gig economy. This report offers a roadmap for policymakers to prepare the workforce for 2030.
                    </p>
                    <div className="flex gap-4">
                        <button 
                            onClick={() => openPreview(publications[0])} // Just using first as mock featured link
                            className="bg-transparent border-2 border-caser-cyan text-caser-cyan px-8 py-3 rounded-lg font-bold hover:bg-caser-cyan hover:text-white transition-colors flex items-center"
                        >
                            Read Preview
                        </button>
                        <a 
                            href="/sample.pdf" 
                            download 
                            className="bg-caser-cyan text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-caser-navy transition-colors flex items-center"
                        >
                            Download PDF <Download size={20} className="ml-2" />
                        </a>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <img src="https://placehold.co/400x550/FFFFFF/1A365D?text=Cover+Image" alt="Report Cover" className="shadow-2xl rounded-lg rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer" onClick={() => openPreview(publications[0])} />
                </motion.div>
            </div>
        </div>
      </section>

      {/* Library Section */}
      <section className="py-20 container mx-auto px-4">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-montserrat font-bold text-caser-navy mb-4 md:mb-0">Latest Publications</h2>
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto">
                {['All', 'Report', 'Policy Brief', 'Article'].map(tab => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-2 rounded-full font-medium transition-all text-sm whitespace-nowrap ${activeTab === tab ? 'bg-caser-navy text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        {tab}s
                    </button>
                ))}
            </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
                {filteredPubs.map((pub, idx) => (
                    <motion.div
                        layout
                        key={pub.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-shadow group flex flex-col"
                    >
                        <div className="h-48 overflow-hidden relative cursor-pointer" onClick={() => openPreview(pub)}>
                            <div className="absolute inset-0 bg-caser-navy/20 group-hover:bg-transparent transition-colors z-10"></div>
                            <img src={pub.img} alt={pub.title} className="w-full h-full object-cover" />
                            <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-caser-navy text-xs font-bold px-3 py-1 rounded-full z-20">
                                {pub.type}
                            </span>
                            
                            {/* Hover Overlay Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                <div className="bg-caser-navy/80 p-3 rounded-full text-white">
                                    <FileText size={24} />
                                </div>
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <span className="text-xs text-gray-400 font-semibold mb-2 block">{pub.date}</span>
                            <h3 className="text-xl font-bold font-montserrat text-caser-navy mb-3 line-clamp-2 group-hover:text-caser-cyan transition-colors cursor-pointer" onClick={() => openPreview(pub)}>
                                {pub.title}
                            </h3>
                            
                            <div className="mt-auto pt-4 flex gap-3">
                                <button 
                                    onClick={() => openPreview(pub)}
                                    className="flex-1 text-sm font-bold text-caser-navy bg-gray-100 hover:bg-gray-200 py-2 rounded transition-colors text-center"
                                >
                                    Read Preview
                                </button>
                                <a 
                                    href={pub.pdfUrl} 
                                    download 
                                    className="flex-shrink-0 bg-caser-gold text-caser-navy p-2 rounded hover:bg-yellow-400 transition-colors"
                                    title="Download PDF"
                                >
                                    <Download size={18} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
      </section>

      {/* PDF Reader Modal */}
      <AnimatePresence>
        {selectedReport && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col"
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-4 bg-caser-navy text-white shadow-lg">
                    <h3 className="font-montserrat font-bold text-lg truncate max-w-md">{selectedReport.title}</h3>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-400 hidden sm:inline">
                            Page {currentPage + 1} of {selectedReport.previewPages.length}
                        </span>
                        <a 
                            href={selectedReport.pdfUrl} 
                            download 
                            className="bg-caser-gold text-caser-navy px-4 py-2 rounded text-sm font-bold hover:bg-yellow-400 transition-colors flex items-center gap-2"
                        >
                            <Download size={16} /> <span className="hidden sm:inline">Download Full PDF</span>
                        </a>
                        <button onClick={closePreview} className="text-white hover:text-red-400 transition-colors p-1">
                            <X size={28} />
                        </button>
                    </div>
                </div>

                {/* Modal Content (Reader) */}
                <div className="flex-1 overflow-auto flex items-center justify-center p-4 md:p-8 relative">
                    {/* Prev Button */}
                    <button 
                        onClick={prevPage}
                        disabled={currentPage === 0}
                        className={`absolute left-4 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all ${currentPage === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
                    >
                        <ChevronLeft size={32} />
                    </button>

                    {/* Page Image */}
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="max-h-full w-full max-w-3xl shadow-2xl bg-white"
                    >
                        <img 
                            src={selectedReport.previewPages[currentPage]} 
                            alt={`Page ${currentPage + 1}`} 
                            className="w-full h-auto object-contain max-h-[85vh]" 
                        />
                    </motion.div>

                    {/* Next Button */}
                    <button 
                        onClick={nextPage}
                        disabled={currentPage === selectedReport.previewPages.length - 1}
                        className={`absolute right-4 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all ${currentPage === selectedReport.previewPages.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>
                
                {/* Thumbnails (Optional, bottom bar) */}
                <div className="h-20 bg-caser-neutral-dark border-t border-gray-700 flex items-center justify-center gap-2 px-4 overflow-x-auto">
                    {selectedReport.previewPages.map((page, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setCurrentPage(idx)}
                            className={`h-16 w-12 flex-shrink-0 border-2 transition-all rounded overflow-hidden ${currentPage === idx ? 'border-caser-gold opacity-100' : 'border-transparent opacity-50 hover:opacity-80'}`}
                        >
                            <img src={page} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResearchPage;
