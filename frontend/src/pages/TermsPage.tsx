import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShieldAlert, Scale, Info } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-caser-navy text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-montserrat font-bold">Terms of Service</h1>
        <p className="text-caser-cyan mt-4">Guidelines for using our services and website.</p>
      </section>

      <section className="py-16 container mx-auto px-4 max-w-4xl">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
        >
            <div>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Welcome to the Centre for Advanced Survey and Research (CASER). By accessing our website and utilizing our resources, you agree to comply with the following terms and conditions.
                </p>
                <p className="text-sm text-gray-500 mt-4">Last Updated: December 11, 2025</p>
            </div>

            <div className="flex gap-6">
                <div className="bg-caser-neutral-light p-4 rounded-full h-fit text-caser-gold">
                    <Info size={32} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold font-montserrat text-caser-navy mb-3">1. Use of Content</h2>
                    <p className="text-gray-600">
                        All research reports, articles, and data visualizations on this site are the intellectual property of CASER unless otherwise stated. You may download and share our content for educational and non-commercial purposes, provided clear attribution is given.
                    </p>
                </div>
            </div>

            <div className="flex gap-6">
                <div className="bg-caser-neutral-light p-4 rounded-full h-fit text-caser-gold">
                    <ShieldAlert size={32} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold font-montserrat text-caser-navy mb-3">2. User Conduct</h2>
                    <p className="text-gray-600">
                        You agree not to use this website for any unlawful purpose or to solicit others to perform or participate in any unlawful acts. Data mining, scraping, or any automated method of data collection from our site is strictly prohibited without prior written consent.
                    </p>
                </div>
            </div>

            <div className="flex gap-6">
                <div className="bg-caser-neutral-light p-4 rounded-full h-fit text-caser-gold">
                    <Scale size={32} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold font-montserrat text-caser-navy mb-3">3. Disclaimer</h2>
                    <p className="text-gray-600">
                        While we strive for accuracy, CASER makes no warranties regarding the completeness or reliability of the information provided. Policy recommendations are based on research findings and should be interpreted within their specific context.
                    </p>
                </div>
            </div>

            <div className="flex gap-6">
                <div className="bg-caser-neutral-light p-4 rounded-full h-fit text-caser-gold">
                    <FileText size={32} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold font-montserrat text-caser-navy mb-3">4. Limitation of Liability</h2>
                    <p className="text-gray-600">
                        CASER shall not be liable for any direct, indirect, or consequential damages arising from the use or inability to use the materials on this website.
                    </p>
                </div>
            </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TermsPage;
