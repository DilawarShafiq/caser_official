import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Search, Lightbulb, GraduationCap, Scale, ChevronRight, Settings, Users, FileBarChart } from 'lucide-react';

const WhatWeDoPage: React.FC = () => {
  const services = [
    {
      icon: <BarChart size={40} className="text-white" />,
      title: "Data Analytics & Visualization",
      description: "We transform complex, raw datasets into clear, actionable visual narratives. Our team uses cutting-edge tools (Python, R, Tableau) to uncover hidden patterns that drive strategic decision-making.",
      img: "https://placehold.co/600x400/1A365D/FFFFFF?text=Analytics",
      color: "bg-blue-600"
    },
    {
      icon: <Search size={40} className="text-white" />,
      title: "Surveys & Field Research",
      description: "From household surveys to large-scale polls, we conduct rigorous primary data collection ensuring the highest standards of accuracy and ethics via CAPI/CATI systems.",
      img: "https://placehold.co/600x400/00B5D4/FFFFFF?text=Surveys",
      color: "bg-cyan-600"
    },
    {
      icon: <Lightbulb size={40} className="text-white" />,
      title: "Policy Advisory",
      description: "We provide evidence-based policy briefs and consultation to government bodies and NGOs, bridging the gap between research and legislation to effect real-world change.",
      img: "https://placehold.co/600x400/ECC94B/1A365D?text=Policy",
      color: "bg-yellow-500"
    },
    {
      icon: <GraduationCap size={40} className="text-white" />,
      title: "Capacity Building",
      description: "Empowering organizations through workshops on research methodology, data literacy, and monitoring & evaluation systems to build sustainable local expertise.",
      img: "https://placehold.co/600x400/2D3748/FFFFFF?text=Training",
      color: "bg-gray-700"
    },
    {
      icon: <Scale size={40} className="text-white" />,
      title: "Impact Evaluation",
      description: "Assessing the real-world effectiveness of social programs using randomized control trials (RCTs) and other rigorous evaluation methods to measure true ROI.",
      img: "https://placehold.co/600x400/4F46E5/FFFFFF?text=Impact",
      color: "bg-indigo-600"
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-caser-navy text-white py-32 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x800/000000/FFFFFF?text=Process+Background')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-montserrat font-bold mb-6"
          >
            Our Expertise
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Comprehensive, rigorous, and tailored research solutions for complex challenges.
          </p>
        </div>
      </section>

      {/* Services List - Zig Zag Layout */}
      <section className="py-20 container mx-auto px-4">
        <div className="space-y-24">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="md:w-1/2 relative group">
                <div className={`absolute top-4 left-4 w-full h-full ${service.color} opacity-20 rounded-2xl transform transition-transform group-hover:translate-x-2 group-hover:translate-y-2`}></div>
                <img src={service.img} alt={service.title} className="relative z-10 rounded-2xl shadow-xl w-full object-cover" />
              </div>

              {/* Text Side */}
              <div className="md:w-1/2 space-y-6">
                <div className={`inline-flex p-4 rounded-xl ${service.color} shadow-lg`}>
                    {service.icon}
                </div>
                <h3 className="text-3xl font-montserrat font-bold text-caser-navy">{service.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                <button className="flex items-center text-caser-navy font-bold hover:text-caser-gold transition-colors text-lg group">
                    Learn More <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-caser-neutral-light">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-montserrat font-bold text-caser-navy mb-16">How We Work</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

                {['Design', 'Collect', 'Analyze', 'Deliver'].map((step, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="bg-white p-8 rounded-full shadow-xl w-48 h-48 flex flex-col items-center justify-center border-4 border-white hover:border-caser-cyan transition-all duration-300"
                    >
                        {idx === 0 && <Settings size={32} className="text-caser-gold mb-2" />}
                        {idx === 1 && <Users size={32} className="text-caser-gold mb-2" />}
                        {idx === 2 && <Search size={32} className="text-caser-gold mb-2" />}
                        {idx === 3 && <FileBarChart size={32} className="text-caser-gold mb-2" />}
                        <h4 className="font-bold text-caser-navy text-lg">{step}</h4>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoPage;