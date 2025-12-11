import React from 'react';
import { motion } from 'framer-motion';
import { History, Award, CheckCircle } from 'lucide-react';

const OurTeam: React.FC = () => {
  // Placeholder team data - can be expanded later
  const team = [
    { name: "Dr. Ayesha Khan", role: "Executive Director", img: "https://placehold.co/400x500/1A365D/FFFFFF?text=AK" },
    { name: "Mr. Bilal Ahmed", role: "Director of Research", img: "https://placehold.co/400x500/00B5D4/FFFFFF?text=BA" },
    { name: "Ms. Zara Ali", role: "Senior Policy Analyst", img: "https://placehold.co/400x500/ECC94B/1A365D?text=ZA" },
    { name: "Dr. Omar Farooq", role: "Head of Data Analytics", img: "https://placehold.co/400x500/2D3748/FFFFFF?text=OF" },
    { name: "Sarah Ahmed", role: "Field Operations Lead", img: "https://placehold.co/400x500/4F46E5/FFFFFF?text=SA" },
    { name: "Ali Raza", role: "Economist", img: "https://placehold.co/400x500/059669/FFFFFF?text=AR" },
  ];

  return (
    <div className="bg-caser-neutral-light min-h-screen font-sans">
      {/* 1. Header: Expertise & History */}
      <section className="bg-white pt-32 pb-20 rounded-b-[60px] shadow-sm">
        <div className="container mx-auto px-4 max-w-5xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="text-caser-gold font-bold uppercase tracking-widest text-sm mb-4 block">The "How" & "Track Record"</span>
                <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-caser-navy mb-8">
                    Our Expertise & History
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                    While formalizing our organizational structure, CASER is built upon a strong foundation of practical experience. Our core team has successfully conducted numerous freelance surveys and small-scale research projects across various sectors.
                </p>
            </motion.div>

            {/* Capabilities Cards */}
            <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-caser-navy hover:-translate-y-2 transition-transform">
                    <History className="text-caser-cyan mb-4" size={32} />
                    <h3 className="text-xl font-bold font-montserrat text-caser-navy mb-3">Applied Survey Methodology</h3>
                    <p className="text-gray-500">Designing statistically sound and culturally sensitive data collection instruments.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-caser-gold hover:-translate-y-2 transition-transform">
                    <Award className="text-caser-cyan mb-4" size={32} />
                    <h3 className="text-xl font-bold font-montserrat text-caser-navy mb-3">Economic Analysis</h3>
                    <p className="text-gray-500">Providing sharp, relevant analysis of market trends, poverty indicators, and program impact.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-caser-navy hover:-translate-y-2 transition-transform">
                    <CheckCircle className="text-caser-cyan mb-4" size={32} />
                    <h3 className="text-xl font-bold font-montserrat text-caser-navy mb-3">Stakeholder Engagement</h3>
                    <p className="text-gray-500">Translating complex findings into clear, actionable recommendations for leaders.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 2. Team Grid */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl font-montserrat font-bold text-caser-navy mb-12 text-center">Meet the Core Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden rounded-xl bg-white shadow-md"
                >
                    <div className="h-96 overflow-hidden">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    {/* Bio Card Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white p-6 rounded-lg shadow-xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg font-bold font-montserrat text-caser-navy">{member.name}</h3>
                        <p className="text-caser-cyan text-sm font-semibold uppercase">{member.role}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
