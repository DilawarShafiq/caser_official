import React from 'react';
import { motion } from 'framer-motion';
import { TabletSmartphone, ClipboardCheck, Map, Users, BarChart3, ShieldCheck, CheckCircle } from 'lucide-react';

const SurveysPage: React.FC = () => {
  const stats = [
    { value: "500k+", label: "Households Surveyed" },
    { value: "99.8%", label: "Data Accuracy" },
    { value: "350+", label: "Field Enumerators" },
    { value: "100%", label: "Districts Reachable" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-caser-navy text-white py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x800/00B5D4/FFFFFF?text=Field+Work')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-caser-navy/90 to-caser-navy/60"></div>
        
        <div className="container mx-auto px-4 text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-montserrat font-bold mb-6 tracking-tight"
          >
            Surveys & Field Research
          </motion.h1>
          <p className="text-xl md:text-2xl text-caser-cyan font-open-sans max-w-4xl mx-auto font-light leading-relaxed">
            Designing and executing high-fidelity applied surveys and rigorous economic evaluations to capture the most accurate picture of community needs and market realities.
          </p>
        </div>
      </section>

      {/* Focus: Our Approach */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-montserrat font-bold text-caser-navy mb-6">Our Survey & Research Approach</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
                The Centre for Advanced Survey and Economic Research (CASER) is an independent, not-for-profit entity committed to evidence-based development. We specialize in transforming raw data into reliable insights. Our rigorous methodologies ensure that every study we conduct stands up to the highest standards of statistical integrity and ethical scrutiny.
            </p>
        </div>

        {/* Our Process: 3-Step Flow */}
        <div className="mb-24">
            <h3 className="text-3xl font-montserrat font-bold text-caser-navy text-center mb-12">Our Process</h3>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-10 right-10 h-1 bg-caser-neutral-light -z-10 border-t-2 border-dashed border-gray-300"></div>

                {[
                    { title: "Precision Sampling", icon: <BarChart3 size={32} />, desc: "Employing advanced statistical techniques to ensure our samples are nationally representative and locally relevant." },
                    { title: "Field Expertise", icon: <Users size={32} />, desc: "Mobilizing trained, multilingual field teams capable of ethical data collection across diverse geographical landscapes." },
                    { title: "Data Integrity", icon: <ShieldCheck size={32} />, desc: "Utilizing cutting-edge digital data collection methods (CAPI/CATI) with real-time quality control." }
                ].map((step, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex-1 text-center max-w-md mx-auto z-10 relative"
                    >
                        <div className="bg-caser-navy text-caser-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white">
                            {step.icon}
                        </div>
                        <h4 className="text-xl font-bold font-montserrat text-caser-navy mb-4">{step.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Our Impact Section */}
        <div className="bg-caser-neutral-light rounded-3xl p-12 md:p-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-montserrat font-bold text-caser-navy mb-4">Our Impact</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">We transform validated data into actionable policy recommendations, directly informing key sectors:</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-caser-cyan mb-4"><Users size={40} /></div>
                    <h4 className="text-xl font-bold text-caser-navy mb-2">Social Welfare</h4>
                    <p className="text-gray-600 text-sm">Identifying gaps in public service delivery and measuring program effectiveness.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-caser-cyan mb-4"><ClipboardCheck size={40} /></div>
                    <h4 className="text-xl font-bold text-caser-navy mb-2">Health & Education</h4>
                    <p className="text-gray-600 text-sm">Providing baseline and end-line data for development projects.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-caser-cyan mb-4"><BarChart3 size={40} /></div>
                    <h4 className="text-xl font-bold text-caser-navy mb-2">Economic Policy</h4>
                    <p className="text-gray-600 text-sm">Analyzing employment trends, market dynamics, and poverty indicators to drive sustainable growth.</p>
                </div>
            </div>

            <div className="mt-12 text-center border-t border-gray-200 pt-8">
                <p className="text-caser-navy font-medium italic text-lg">
                    "As a Section 42 not-for-profit organization, every survey and research finding is dedicated to public benefit, empowering decision-makers to replace speculation with proven facts."
                </p>
            </div>
        </div>
      </section>

      {/* Technical Capabilities (Existing Grid, Refined) */}
      <section className="pb-24 container mx-auto px-4">
        <h3 className="text-2xl font-montserrat font-bold text-gray-400 mb-8 text-center uppercase tracking-widest">Technical Capabilities</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-80 hover:opacity-100 transition-opacity duration-500">
            {/* Kept simplified versions of original cards for technical depth */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex items-start gap-4">
                <TabletSmartphone className="text-gray-400 shrink-0" />
                <div>
                    <h4 className="font-bold text-gray-700">Digital Collection</h4>
                    <p className="text-sm text-gray-500">CAPI/CATI systems for speed & accuracy.</p>
                </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex items-start gap-4">
                <Map className="text-gray-400 shrink-0" />
                <div>
                    <h4 className="font-bold text-gray-700">GIS Mapping</h4>
                    <p className="text-sm text-gray-500">Spatial analysis for targeted interventions.</p>
                </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex items-start gap-4">
                <ShieldCheck className="text-gray-400 shrink-0" />
                <div>
                    <h4 className="font-bold text-gray-700">IRB Compliance</h4>
                    <p className="text-sm text-gray-500">Adherence to strict ethical guidelines.</p>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default SurveysPage;
