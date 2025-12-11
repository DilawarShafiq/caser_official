import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BarChart, Search, Lightbulb, GraduationCap, Scale,
  Activity, TrendingUp, Leaf, ChevronLeft, ChevronRight, ArrowRight
} from 'lucide-react';

const HomePage: React.FC = () => {
  // --- Data Definitions ---
  
  const highlightedFocusAreas = [
    { 
        name: "Health & Wellbeing", 
        icon: <Activity className="text-caser-gold" size={40} />, 
        description: "Improving public health outcomes through data-driven policy recommendations." 
    },
    { 
        name: "Economy & Labour", 
        icon: <TrendingUp className="text-caser-gold" size={40} />, 
        description: "Analyzing market trends to foster sustainable economic growth and employment." 
    },
    { 
        name: "Climate & Environment", 
        icon: <Leaf className="text-caser-gold" size={40} />, 
        description: "Addressing climate challenges with actionable research on sustainability." 
    },
  ];

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
      <section className="relative bg-caser-navy text-white py-24 md:py-32 flex items-center justify-center min-h-[70vh]">
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ECC94B_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="container mx-auto px-4 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-6"
          >
            Building the Future of <br/>
            <span className="text-caser-gold">Evidence-Based Research</span> in Pakistan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl font-open-sans text-gray-200 max-w-3xl mx-auto mb-10"
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
              to="/about"
              className="px-8 py-3 bg-caser-gold text-caser-navy font-montserrat font-bold rounded-lg hover:bg-yellow-400 transition-colors duration-300 shadow-lg"
            >
              Learn More About Us
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-caser-cyan text-caser-cyan font-montserrat font-bold rounded-lg hover:bg-caser-cyan hover:text-white transition-colors duration-300 shadow-lg"
            >
              Join Our Network
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Mission Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={sectionVariants}
             transition={{ duration: 0.6 }}
           >
              <h2 className="text-3xl font-montserrat font-bold text-caser-navy mb-6">Advancing Knowledge for Impact</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                CASER bridges the gap between rigorous academic research and actionable public policy. We leverage advanced data analytics and on-the-ground surveys to provide clear, objective insights that empower decision-makers across Pakistan.
              </p>
           </motion.div>
        </div>
      </section>

      {/* 3. Highlighted Focus Areas (Curated Grid) */}
      <section className="py-16 bg-caser-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-caser-navy">Key Focus Areas</h2>
            <div className="w-16 h-1 bg-caser-gold mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightedFocusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md border-t-4 border-caser-gold hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                </div>
                <h3 className="text-xl font-montserrat font-bold text-caser-navy mb-3">{area.name}</h3>
                <p className="text-gray-600 font-open-sans">{area.description}</p>
                <a href="/focus-areas" className="inline-flex items-center text-caser-navy font-semibold mt-4 hover:text-caser-cyan transition-colors">
                    Learn more <ArrowRight size={16} className="ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Research & Projects (Carousel) */}
      <section className="py-20 bg-caser-navy text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
                <h2 className="text-3xl font-montserrat font-bold text-white">Featured Research</h2>
                <p className="text-caser-cyan mt-2">Latest insights from our team</p>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex gap-2">
                <button onClick={prevProject} className="p-2 rounded-full border border-gray-500 hover:bg-caser-gold hover:border-caser-gold hover:text-caser-navy transition-all">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={nextProject} className="p-2 rounded-full border border-gray-500 hover:bg-caser-gold hover:border-caser-gold hover:text-caser-navy transition-all">
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
                className="bg-caser-neutral-dark rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-full"
            >
                <div className="md:w-1/2 h-48 md:h-full relative">
                    <img 
                        src={featuredProjects[currentProject].image} 
                        alt={featuredProjects[currentProject].title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-caser-gold text-caser-navy text-xs font-bold px-3 py-1 rounded-full uppercase">
                        {featuredProjects[currentProject].category}
                    </div>
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-montserrat font-bold mb-4">{featuredProjects[currentProject].title}</h3>
                    <p className="text-gray-300 mb-6 font-open-sans text-lg">{featuredProjects[currentProject].summary}</p>
                    <a href="/research" className="inline-block bg-transparent border-2 border-white text-white px-6 py-2 rounded hover:bg-white hover:text-caser-navy transition-colors font-semibold w-fit">
                        Read Report
                    </a>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Our Services Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
             <div className="text-center mb-10">
                <h2 className="text-2xl font-montserrat font-bold text-gray-500 uppercase tracking-widest">Our Expertise</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {services.map((service, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-3 w-32 md:w-40 text-center group cursor-default">
                        <div className="p-4 bg-caser-neutral-light rounded-full group-hover:bg-caser-cyan/10 transition-colors">
                            {service.icon}
                        </div>
                        <span className="font-montserrat font-semibold text-caser-navy text-sm md:text-base">{service.title}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 6. Partners & Collaborators (Slider) */}
      <section className="py-12 bg-caser-neutral-light border-t border-gray-200 overflow-hidden">
        <div className="container mx-auto px-4 mb-6">
             <p className="text-center font-montserrat font-semibold text-caser-navy">Trusted by Partners & Collaborators</p>
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
      
      {/* 7. Latest Updates */}
      <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-montserrat font-bold text-caser-navy">Latest Updates</h2>
                <a href="/whats-up" className="text-caser-gold font-semibold hover:underline">View All</a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Update Card 1 */}
                  <div className="flex gap-4 items-start">
                      <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
                      <div>
                          <span className="text-xs font-bold text-caser-cyan uppercase">News</span>
                          <h3 className="text-lg font-bold text-caser-navy leading-tight mt-1 mb-2 hover:text-caser-gold cursor-pointer transition-colors">
                              CASER Launches New Initiative for Urban Development
                          </h3>
                          <p className="text-sm text-gray-500">December 10, 2025</p>
                      </div>
                  </div>
                   {/* Update Card 2 */}
                   <div className="flex gap-4 items-start">
                      <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
                      <div>
                          <span className="text-xs font-bold text-caser-gold uppercase">Event</span>
                          <h3 className="text-lg font-bold text-caser-navy leading-tight mt-1 mb-2 hover:text-caser-gold cursor-pointer transition-colors">
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
        className="py-20 bg-caser-navy text-white text-center"
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-caser-gold via-white to-caser-gold animate-pulse">Join Our Network and Contribute to Evidence-Based Research</h2>
          <p className="text-lg font-open-sans mb-10">
            Whether you are a researcher, policymaker, or an organization, partner with us to drive impactful change through data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3 bg-caser-gold text-caser-navy font-montserrat font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300 shadow-lg"
            >
              Partner With Us
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white font-montserrat font-semibold rounded-lg hover:bg-white hover:text-caser-navy transition-colors duration-300 shadow-lg"
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
