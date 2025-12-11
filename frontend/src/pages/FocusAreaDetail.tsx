import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { focusAreasData } from '../data/focusAreasData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const FocusAreaDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = focusAreasData[slug || ''];

  if (!data) {
    return <Navigate to="/focus-areas" replace />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Stunning Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: `url(${data.heroImage})` }}
        ></div>
        <div className={`absolute inset-0 ${data.color} opacity-80 z-10 mix-blend-multiply`}></div>
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mx-auto bg-white/20 backdrop-blur-md p-4 rounded-full w-fit mb-6">
                {React.cloneElement(data.icon as React.ReactElement, { size: 48, className: "text-white" })}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6 tracking-tight shadow-sm">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl font-open-sans max-w-3xl mx-auto font-light leading-relaxed">
              {data.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Floating Stats */}
      <div className="container mx-auto px-4 -mt-16 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.stats.length > 0 ? data.stats.map((stat, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="bg-white p-8 rounded-xl shadow-xl text-center border-b-4 border-caser-navy"
                >
                    <div className={`text-4xl font-bold font-montserrat mb-2 text-transparent bg-clip-text bg-gradient-to-r ${data.color.replace('bg-', 'from-').replace('600', '500')} to-caser-navy`}>
                        {stat.value}
                    </div>
                    <div className="text-gray-500 font-semibold uppercase tracking-wide text-sm">{stat.label}</div>
                </motion.div>
            )) : (
                // Fallback if no stats
                <div className="col-span-3 bg-white p-8 rounded-xl shadow-xl text-center">
                    <p className="text-gray-500 italic">Detailed statistics coming soon.</p>
                </div>
            )}
        </div>
      </div>

      {/* Main Content: Story Layout */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Column: Context */}
            <div className="lg:w-1/2">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-montserrat font-bold text-caser-navy mb-6">Why It Matters</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        {data.description}
                    </p>
                    <div className="bg-caser-neutral-light p-8 rounded-xl border-l-4 border-caser-gold">
                        <h3 className="font-bold text-caser-navy mb-4 text-xl">Our Approach</h3>
                        <p className="text-gray-600">
                            {data.approach || "We adopt a multi-faceted strategy aimed at uncovering root causes and designing sustainable, long-term solutions."}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Right Column: Challenges */}
            <div className="lg:w-1/2">
                 <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-montserrat font-bold text-caser-navy mb-8">Key Challenges</h2>
                    <div className="space-y-6">
                        {data.challenges.length > 0 ? data.challenges.map((challenge, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className={`flex-shrink-0 w-12 h-12 rounded-full ${data.color.replace('bg-', 'bg-').replace('600', '100')} flex items-center justify-center`}>
                                    <div className={`w-3 h-3 rounded-full ${data.color}`}></div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-caser-navy mb-2">{challenge.title}</h4>
                                    <p className="text-gray-600">{challenge.desc}</p>
                                </div>
                            </div>
                        )) : (
                            <p className="text-gray-500">Challenges analysis in progress.</p>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-caser-neutral-light">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-montserrat font-bold text-caser-navy mb-12 text-center">Featured Initiatives</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {data.keyProjects.length > 0 ? data.keyProjects.map((project, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${data.color}`}>
                                {project.year}
                            </span>
                            <span className="text-caser-cyan text-sm font-semibold flex items-center">
                                <CheckCircle2 size={16} className="mr-1" /> {project.status}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold font-montserrat text-caser-navy mb-3">{project.title}</h3>
                        <a href="/research" className="inline-flex items-center text-gray-500 hover:text-caser-gold font-semibold transition-colors mt-4">
                            View Case Study <ArrowRight size={18} className="ml-2" />
                        </a>
                    </motion.div>
                )) : (
                    <div className="col-span-2 text-center text-gray-500">Projects will be listed here soon.</div>
                )}
            </div>
        </div>
      </section>
    </div>
  );
};

export default FocusAreaDetail;
