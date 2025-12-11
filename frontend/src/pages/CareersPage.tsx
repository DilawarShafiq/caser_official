import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

const CareersPage: React.FC = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Research Analyst",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      department: "Data Analytics",
      description: "We are looking for an experienced analyst to lead our quantitative research projects. Proficiency in Stata/R and 5+ years of experience required.",
      deadline: "Jan 15, 2026"
    },
    {
      id: 2,
      title: "Field Coordinator",
      location: "Lahore, Pakistan",
      type: "Contract",
      department: "Operations",
      description: "Manage field teams for our upcoming education reform survey in Punjab. Must have extensive experience in large-scale data collection.",
      deadline: "Jan 20, 2026"
    },
    {
      id: 3,
      title: "Communications Officer",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      department: "Advocacy",
      description: "Drive our digital presence and stakeholder engagement strategies. Excellent writing skills and social media management required.",
      deadline: "Feb 01, 2026"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-caser-navy text-white py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x800/1e293b/FFFFFF?text=Join+Our+Team')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-caser-navy via-caser-navy/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 tracking-tight">
              Build Your Career <br/>
              <span className="text-caser-gold">With Impact</span>
            </h1>
            <p className="text-xl text-gray-200 font-open-sans max-w-2xl font-light leading-relaxed">
              Join a team of passionate researchers, data scientists, and changemakers dedicated to solving Pakistan's most pressing development challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values / Why Join Us */}
      <section className="py-24 bg-caser-neutral-light">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-montserrat font-bold text-caser-navy mb-4">Why Work at CASER?</h2>
                <p className="text-gray-600">We offer more than just a job. We offer a platform to influence policy and improve lives.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Professional Growth", desc: "Continuous learning through workshops, international conferences, and mentorship.", icon: <Briefcase size={32} /> },
                    { title: "Inclusive Culture", desc: "A diverse workspace that values every voice and fosters gender equity.", icon: <UsersIcon size={32} /> },
                    { title: "Meaningful Work", desc: "Contribute to high-impact projects that shape national discourse and development.", icon: <CheckCircle2 size={32} /> }
                ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300"
                    >
                        <div className="inline-flex p-4 bg-caser-cyan/10 text-caser-cyan rounded-full mb-6">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold font-montserrat text-caser-navy mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-4xl font-montserrat font-bold text-caser-navy mb-12 border-l-8 border-caser-gold pl-6">Open Positions</h2>
        
        <div className="space-y-6">
            {jobs.map((job) => (
                <motion.div 
                    key={job.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-caser-cyan/30 transition-all duration-300 group"
                >
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-6">
                        <div>
                            <h3 className="text-2xl font-bold font-montserrat text-caser-navy group-hover:text-caser-cyan transition-colors">{job.title}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2 font-medium">
                                <span className="flex items-center gap-1"><Briefcase size={16} /> {job.department}</span>
                                <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                                <span className="flex items-center gap-1"><Clock size={16} /> {job.type}</span>
                            </div>
                        </div>
                        <a href={`mailto:careers@caser.org.pk?subject=Application for ${job.title}`} className="bg-caser-navy text-white px-6 py-3 rounded-lg font-bold hover:bg-caser-gold hover:text-caser-navy transition-all duration-300 whitespace-nowrap text-center shadow-md">
                            Apply Now
                        </a>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed max-w-4xl">
                        {job.description}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-caser-gold">
                        Application Deadline: <span className="text-gray-500 ml-2">{job.deadline}</span>
                        <ArrowRight size={16} className="ml-auto md:hidden" />
                    </div>
                </motion.div>
            ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-xl text-center border border-dashed border-gray-300">
            <h3 className="text-xl font-bold text-caser-navy mb-2">Don't see a perfect fit?</h3>
            <p className="text-gray-600 mb-6">We are always looking for talent. Send your CV to our HR department for future consideration.</p>
            <a href="mailto:careers@caser.org.pk" className="text-caser-cyan font-bold hover:underline">careers@caser.org.pk</a>
        </div>
      </section>
    </div>
  );
};

// Helper component for icon
const UsersIcon = ({ size }: { size: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

export default CareersPage;
