import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BarChart, Search, Lightbulb, GraduationCap, Scale,
  ChevronLeft, ChevronRight
} from 'lucide-react';

const HomePage: React.FC = () => {
  // --- Data Definitions ---

  const featuredProjects = [
    {
      title: "National Health Survey 2024",
      category: "Health",
      summary: "A comprehensive assessment of public health metrics across 30 districts.",
      image: "https://placehold.co/600x400/1A365D/FFFFFF?text=Health+Survey"
    },
    {
      title: "Economic Resilience Report",
      category: "Economy",
      summary: "Evaluating the impact of recent fiscal policies on small businesses.",
      image: "https://placehold.co/600x400/00B5D4/FFFFFF?text=Economic+Report"
    },
    {
      title: "Climate Adaptation Strategies",
      category: "Environment",
      summary: "Developing frameworks for rural communities to adapt to climate change.",
      image: "https://placehold.co/600x400/ECC94B/1A365D?text=Climate+Study"
    }
  ];

  const services = [
    {
      icon: <BarChart size={32} className="text-caser-cyan" />,
      title: "Data Analytics",
    },
    {
      icon: <Search size={32} className="text-caser-cyan" />,
      title: "Surveys & Research",
    },
    {
      icon: <Lightbulb size={32} className="text-caser-cyan" />,
      title: "Policy Advisory",
    },
    {
      icon: <GraduationCap size={32} className="text-caser-cyan" />,
      title: "Capacity Building",
    },
     {
      icon: <Scale size={32} className="text-caser-cyan" />,
      title: "Impact Evaluation",
    },
  ];

  const partners = [
    "Partners Coming Soon...",
  ];

  // --- State for Carousel ---
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };
  
  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextProject, 5000);
    return () => clearInterval(timer);
  }, []);


  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative bg-[#FAF3E0] text-[#2B2B2B] py-24 md:py-32 flex items-center justify-center min-h-[70vh]">
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E49B0F_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="container mx-auto px-4 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-6 text-[#E49B0F]"
          >
            From Numbers to Narratives...
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl font-open-sans text-[#2B2B2B] max-w-3xl mx-auto mb-10"
          >
            A new initiative dedicated to high-quality, data-driven insights for policy, business, and society. Our first projects are on the way.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/survey"
              className="px-8 py-3 bg-[#E49B0F] text-white font-montserrat font-bold rounded-lg hover:bg-[#4A6FA5] transition-colors duration-300 shadow-lg"
            >
              Take a Short Survey
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border-2 border-[#4A6FA5] text-[#4A6FA5] font-montserrat font-bold rounded-lg hover:bg-[#4A6FA5] hover:text-white transition-colors duration-300 shadow-lg"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Mission Intro */}
      <section className="py-16 bg-[#E5E5E5]">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={sectionVariants}
             transition={{ duration: 0.6 }}
           >
              <h2 className="text-3xl font-montserrat font-bold text-[#E49B0F] mb-6">Advancing Knowledge for Impact</h2>
              <p className="text-lg text-[#2B2B2B] leading-relaxed">
                CASER bridges the gap between rigorous academic research and actionable public policy. We leverage advanced data analytics and on-the-ground surveys to provide clear, objective insights that empower decision-makers across Pakistan.
              </p>
           </motion.div>
        </div>
      </section>

      {/* 3. Sectoral Interests */}
      <section className="py-16 bg-[#FAF3E0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-[#E49B0F]">Sectoral Interests</h2>
            <div className="w-16 h-1 bg-[#E49B0F] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Health */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#E49B0F] hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6C8E6E]">
                  <path d="M18 6V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2" />
                  <path d="M8 6v14c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V6" />
                  <path d="M14 12V8.5" />
                  <path d="M10 12V8.5" />
                  <path d="M14 15.5V15" />
                  <path d="M10 15.5V15" />
                  <path d="M8 4h8" />
                  <path d="M16 4h2a2 2 0 0 1 1.73 1" />
                  <path d="M8 4H6a2 2 0 0 0-1.73 1" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-[#E49B0F] mb-3 text-center">Health</h3>
              <p className="text-[#2B2B2B] font-open-sans text-sm">
                Immunization, nutrition, polio eradication, maternal & child health, healthcare regulation, awareness campaigns.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#E49B0F] hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6C8E6E]">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  <path d="M10 2v20" />
                  <path d="M10 7h8" />
                  <path d="M10 12h8" />
                  <path d="M10 17h8" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-[#E49B0F] mb-3 text-center">Education</h3>
              <p className="text-[#2B2B2B] font-open-sans text-sm">
                Enrollment/retention studies, literacy monitoring, baseline studies on school performance, digital education.
              </p>
            </motion.div>

            {/* Governance & Rights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#E49B0F] hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6C8E6E]">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 12h-4" />
                  <path d="M12 8v4" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-[#E49B0F] mb-3 text-center">Governance & Rights</h3>
              <p className="text-[#2B2B2B] font-open-sans text-sm">
                Women's inheritance rights, legal awareness, human rights, social inclusion, access to justice.
              </p>
            </motion.div>

            {/* WASH (Water, Sanitation & Hygiene) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#E49B0F] hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6C8E6E]">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-[#E49B0F] mb-3 text-center">WASH (Water, Sanitation & Hygiene)</h3>
              <p className="text-[#2B2B2B] font-open-sans text-sm">
                Water supply, sanitation, hygiene practices, behavior change communication.
              </p>
            </motion.div>

            {/* Agriculture & Climate */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#E49B0F] hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6C8E6E]">
                  <path d="M12 10V2l8 4-8 4Z" />
                  <path d="m8 12-3 5" />
                  <path d="m16 12 3 5" />
                  <path d="M4 22h16" />
                  <path d="M12 10v10" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-[#E49B0F] mb-3 text-center">Agriculture & Climate</h3>
              <p className="text-[#2B2B2B] font-open-sans text-sm">
                Productivity surveys, food security, environmental resilience, rural livelihoods, climate-smart farming.
              </p>
            </motion.div>

            {/* Labor & Employment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#E49B0F] hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6C8E6E]">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-[#E49B0F] mb-3 text-center">Labor & Employment</h3>
              <p className="text-[#2B2B2B] font-open-sans text-sm">
                Child labor, labor force dynamics, informal studies, skills development & vocational training
              </p>
            </motion.div>

            {/* Social Protection & Poverty Alleviation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#E49B0F] hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6C8E6E]">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="M8 8h8" />
                  <path d="M8 12h8" />
                  <path d="M8 16h6" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-[#E49B0F] mb-3 text-center">Social Protection & Poverty Alleviation</h3>
              <p className="text-[#2B2B2B] font-open-sans text-sm">
                Cash transfers, household vulnerability assessments, social safety nets, program monitoring.
              </p>
            </motion.div>

            {/* Technology & Innovation in Research */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#E49B0F] hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6C8E6E]">
                  <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.328 4.744 3 3 0 0 0-1.365 4.1 1 1 0 0 0-.277 1.365A2.5 2.5 0 0 0 4.5 19" />
                  <path d="M12 4.5a2.5 2.5 0 0 1 4.96-.46 2.5 2.5 0 0 1 1.98 3 2.5 2.5 0 0 1 1.328 4.744 3 3 0 0 1 1.365 4.1 1 1 0 0 1 .277 1.365A2.5 2.5 0 0 1 19.5 19" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-[#E49B0F] mb-3 text-center">Technology & Innovation in Research</h3>
              <p className="text-[#2B2B2B] font-open-sans text-sm">
                AI-powered analytics, chatbot surveys, workflow automation, digital data collection systems.
              </p>
            </motion.div>

            {/* Geospatial & Environmental Research */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#E49B0F] hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6C8E6E]">
                  <circle cx="12" cy="10" r="1" />
                  <circle cx="12" cy="10" r="9" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-[#E49B0F] mb-3 text-center">Geospatial & Environmental Research</h3>
              <p className="text-[#2B2B2B] font-open-sans text-sm">
                GIS-based mapping, remote sensing, land use planning, disaster risk reduction.
              </p>
            </motion.div>

            {/* Community Engagement & Mobilization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#E49B0F] hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6C8E6E]">
                  <path d="M14 19a6 6 0 0 0-12 0" />
                  <circle cx="8" cy="9" r="4" />
                  <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-[#E49B0F] mb-3 text-center">Community Engagement & Mobilization</h3>
              <p className="text-[#2B2B2B] font-open-sans text-sm">
                Awareness-building, participatory research, inclusivity campaigns, behavior change initiatives.
              </p>
            </motion.div>

            {/* Training & Capacity Building */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#E49B0F] hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6C8E6E]">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-[#E49B0F] mb-3 text-center">Training & Capacity Building</h3>
              <p className="text-[#2B2B2B] font-open-sans text-sm">
                Enumerator & supervisor training, technical workshops on research tools, methods, and reporting.
              </p>
            </motion.div>

            {/* Market & Consumer Research */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#E49B0F] hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6C8E6E]">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-[#E49B0F] mb-3 text-center">Market & Consumer Research</h3>
              <p className="text-[#2B2B2B] font-open-sans text-sm">
                Product testing, demand analysis, customer perception surveys, market segmentation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 3. Featured Research & Projects (Carousel) */}
      <section className="py-20 bg-[#E49B0F] text-[#2B2B2B] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
                <h2 className="text-3xl font-montserrat font-bold text-[#2B2B2B]">Featured Research</h2>
                <p className="text-[#4A6FA5] mt-2">Latest insights from our team</p>
            </div>

            {/* Carousel Controls */}
            <div className="flex gap-2">
                <button onClick={prevProject} className="p-2 rounded-full border border-[#2B2B2B] hover:bg-[#4A6FA5] hover:border-[#4A6FA5] hover:text-[#FAF3E0] transition-all">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={nextProject} className="p-2 rounded-full border border-[#2B2B2B] hover:bg-[#4A6FA5] hover:border-[#4A6FA5] hover:text-[#FAF3E0] transition-all">
                    <ChevronRight size={24} />
                </button>
            </div>
          </div>

          {/* Carousel Content */}
          <div className="relative h-[400px] md:h-[300px] w-full">
            <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-[#2B2B2B] rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-full"
            >
                <div className="md:w-1/2 h-48 md:h-full relative">
                    <img
                        src={featuredProjects[currentProject].image}
                        alt={featuredProjects[currentProject].title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#E49B0F] text-[#2B2B2B] text-xs font-bold px-3 py-1 rounded-full uppercase">
                        {featuredProjects[currentProject].category}
                    </div>
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-montserrat font-bold mb-4 text-[#FAF3E0]">{featuredProjects[currentProject].title}</h3>
                    <p className="text-gray-300 mb-6 font-open-sans text-lg">{featuredProjects[currentProject].summary}</p>
                    <a href="/research" className="inline-block bg-transparent border-2 border-[#FAF3E0] text-[#FAF3E0] px-6 py-2 rounded hover:bg-[#FAF3E0] hover:text-[#2B2B2B] transition-colors font-semibold w-fit">
                        Read Report
                    </a>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Our Services Preview */}
      <section className="py-16 bg-[#E5E5E5]">
        <div className="container mx-auto px-4">
             <div className="text-center mb-10">
                <h2 className="text-2xl font-montserrat font-bold text-[#4A6FA5] uppercase tracking-widest">Our Expertise</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {services.map((service, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-3 w-32 md:w-40 text-center group cursor-default">
                        <div className="p-4 bg-[#FAF3E0] rounded-full group-hover:bg-[#4A6FA5]/10 transition-colors">
                            {service.icon}
                        </div>
                        <span className="font-montserrat font-semibold text-[#E49B0F] text-sm md:text-base">{service.title}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. Partners & Collaborators (Slider) */}
      <section className="py-12 bg-[#FAF3E0] border-t border-[#4A6FA5] overflow-hidden">
        <div className="container mx-auto px-4 mb-6">
             <p className="text-center font-montserrat font-semibold text-[#E49B0F]">Trusted by Partners & Collaborators</p>
        </div>

        {/* Simple Auto-scrolling Slider Implementation */}
        <div className="relative w-full overflow-hidden">
            <div className="flex whitespace-nowrap animate-infinite-scroll w-[200%]">
                 {/* Duplicate list for seamless loop */}
                 {[...partners, ...partners, ...partners].map((partner, index) => (
                     <div key={index} className="mx-8 md:mx-16 text-2xl font-bold text-gray-300 select-none">
                         {partner}
                     </div>
                 ))}
            </div>
        </div>
      </section>
      
      {/* 6. Latest Updates */}
      <section className="py-16 bg-[#E5E5E5]">
          <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-montserrat font-bold text-[#E49B0F]">Latest Updates</h2>
                <a href="/whats-up" className="text-[#E49B0F] font-semibold hover:underline">View All</a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Update Card 1 */}
                  <div className="flex gap-4 items-start">
                      <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
                      <div>
                          <span className="text-xs font-bold text-[#4A6FA5] uppercase">News</span>
                          <h3 className="text-lg font-bold text-[#2B2B2B] leading-tight mt-1 mb-2 hover:text-[#E49B0F] cursor-pointer transition-colors">
                              CASER Launches New Initiative for Urban Development
                          </h3>
                          <p className="text-sm text-gray-500">December 10, 2025</p>
                      </div>
                  </div>
                   {/* Update Card 2 */}
                   <div className="flex gap-4 items-start">
                      <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
                      <div>
                          <span className="text-xs font-bold text-[#E49B0F] uppercase">Event</span>
                          <h3 className="text-lg font-bold text-[#2B2B2B] leading-tight mt-1 mb-2 hover:text-[#E49B0F] cursor-pointer transition-colors">
                              Upcoming Webinar: The Future of Digital Economy in South Asia
                          </h3>
                          <p className="text-sm text-gray-500">January 15, 2026</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Final Call to Action Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        variants={sectionVariants}
        className="py-20 bg-[#2B2B2B] text-[#FAF3E0] text-center"
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#E49B0F] via-[#FAF3E0] to-[#E49B0F] animate-pulse">Join Our Network and Contribute to Evidence-Based Research</h2>
          <p className="text-lg font-open-sans mb-10">
            Whether you are a researcher, policymaker, or an organization, partner with us to drive impactful change through data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3 bg-[#E49B0F] text-[#2B2B2B] font-montserrat font-semibold rounded-lg hover:bg-[#4A6FA5] transition-colors duration-300 shadow-lg"
            >
              Partner With Us
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-[#FAF3E0] text-[#FAF3E0] font-montserrat font-semibold rounded-lg hover:bg-[#FAF3E0] hover:text-[#2B2B2B] transition-colors duration-300 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
