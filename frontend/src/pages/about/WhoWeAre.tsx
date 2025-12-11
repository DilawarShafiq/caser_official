import React from 'react';
import { motion } from 'framer-motion';
import { Target, Scale, Eye, Lightbulb } from 'lucide-react';

const WhoWeAre: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. Hero: Core Mission */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-caser-navy text-white">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/1A365D/FFFFFF?text=Mission+Focus')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-caser-navy via-caser-navy/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-caser-gold/20 rounded-full backdrop-blur-sm border border-caser-gold/30">
                            <Target className="text-caser-gold" size={32} />
                        </div>
                        <span className="text-caser-cyan font-bold uppercase tracking-widest text-sm">The "Why"</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-8 leading-tight">
                        The Core Mission
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed border-l-4 border-caser-gold pl-6">
                        The Centre for Advanced Survey and Economic Research (CASER) is an independent, not-for-profit research organization dedicated to the public good. Our fundamental mission is to bridge the gap between complex realities and informed decision-making.
                    </p>
                </motion.div>
            </div>
        </div>
      </section>

      {/* 2. Philosophy Block */}
      <section className="py-24 bg-caser-neutral-light">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-2xl md:text-3xl font-montserrat text-caser-navy font-bold leading-normal">
                "We believe that effective policy, equitable social development, and sustainable economic growth must be anchored in <span className="text-caser-cyan">verifiable facts</span>, not assumption or speculation."
            </p>
        </div>
      </section>

      {/* 3. Legal Structure (Split Layout) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2 relative"
                >
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-caser-neutral-light rounded-full -z-10"></div>
                    <img src="https://placehold.co/800x600/E2E8F0/1A365D?text=Transparency" alt="Legal Structure" className="rounded-tr-[80px] rounded-bl-[80px] shadow-2xl w-full" />
                    <div className="absolute bottom-10 right-10 bg-white p-6 rounded-lg shadow-xl border-l-8 border-caser-cyan max-w-xs">
                        <span className="text-4xl font-bold text-caser-navy block mb-1">Sec. 42</span>
                        <span className="text-sm text-gray-500 font-bold uppercase">Companies Act, 2017</span>
                    </div>
                </motion.div>

                <div className="lg:w-1/2">
                    <div className="flex items-center gap-3 mb-6">
                        <Scale className="text-caser-navy" size={28} />
                        <span className="text-caser-gold font-bold uppercase tracking-widest text-sm">The "What"</span>
                    </div>
                    <h2 className="text-4xl font-montserrat font-bold text-caser-navy mb-6">Legal Structure & Commitment</h2>
                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-6">
                            CASER is formally established with the commitment to operate strictly for public benefit. We are in the process of registration as a Section 42 Company under the Companies Act, 2017.
                        </p>
                        <p className="mb-6">
                            This legal structure ensures that <strong className="text-caser-cyan">all revenue is reinvested</strong> into our research capacity and public dissemination efforts, reinforcing our independence and commitment to transparency and unbiased findings.
                        </p>
                        <p>
                            Our work is governed by the highest ethical standards in research and data privacy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. Vision for Impact (Dark Card) */}
      <section className="py-24 bg-caser-navy text-white relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-6 backdrop-blur-md">
                    <Eye size={40} className="text-caser-gold" />
                </div>
                <span className="block text-caser-cyan font-bold uppercase tracking-widest text-sm mb-4">The "Future"</span>
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">Vision for Impact</h2>
                <p className="text-xl text-gray-300 font-light">
                    Our vision is to become a trusted national resource for independent, rigorous research.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <h3 className="text-2xl font-bold text-caser-gold mb-4 flex items-center gap-2">
                        <Lightbulb size={24} /> Transformative Impact
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                        We aim to drive change by focusing our efforts on critical areas of development, including public health, education reform, social welfare enhancement, and inclusive economic policy.
                    </p>
                </div>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <h3 className="text-2xl font-bold text-caser-cyan mb-4 flex items-center gap-2">
                        <Target size={24} /> Definitive Data
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                        By partnering with CASER, stakeholders gain access to the definitive data required to build effective programs and secure a more prosperous future.
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
