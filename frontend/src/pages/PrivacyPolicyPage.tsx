import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileText, Database } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-caser-navy text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-montserrat font-bold">Privacy Policy</h1>
        <p className="text-caser-cyan mt-4">Committed to protecting your data and privacy.</p>
      </section>

      <section className="py-16 container mx-auto px-4 max-w-4xl">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
        >
            {/* Intro */}
            <div>
                <p className="text-gray-700 leading-relaxed text-lg">
                    At the Center for Advanced Survey and Economic Research (CASER), we adhere to the highest ethical standards in data collection and management. This Privacy Policy outlines how we handle personal information collected through our surveys, website, and other channels.
                </p>
                <p className="text-sm text-gray-500 mt-4">Last Updated: December 11, 2025</p>
            </div>

            {/* Section 1 */}
            <div className="flex gap-6">
                <div className="bg-caser-neutral-light p-4 rounded-full h-fit text-caser-gold">
                    <Database size={32} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold font-montserrat text-caser-navy mb-3">1. Data Collection & Usage</h2>
                    <p className="text-gray-600">
                        We collect data primarily for research purposes. This may include demographic information, opinions, and socio-economic indicators. All survey participation is voluntary, and informed consent is obtained prior to data collection. We anonymize data wherever possible to protect individual identities.
                    </p>
                </div>
            </div>

            {/* Section 2 */}
            <div className="flex gap-6">
                <div className="bg-caser-neutral-light p-4 rounded-full h-fit text-caser-gold">
                    <Lock size={32} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold font-montserrat text-caser-navy mb-3">2. Data Security</h2>
                    <p className="text-gray-600">
                        We implement robust technical and organizational measures to safeguard data against unauthorized access, loss, or misuse. Our servers are encrypted, and access to sensitive datasets is restricted to authorized personnel only.
                    </p>
                </div>
            </div>

            {/* Section 3 */}
            <div className="flex gap-6">
                <div className="bg-caser-neutral-light p-4 rounded-full h-fit text-caser-gold">
                    <ShieldCheck size={32} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold font-montserrat text-caser-navy mb-3">3. Third-Party Sharing</h2>
                    <p className="text-gray-600">
                        We do not sell personal data to third parties. Aggregated, anonymized research findings may be shared with partners, policymakers, and the public to advance development goals.
                    </p>
                </div>
            </div>

             {/* Section 4 */}
             <div className="flex gap-6">
                <div className="bg-caser-neutral-light p-4 rounded-full h-fit text-caser-gold">
                    <FileText size={32} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold font-montserrat text-caser-navy mb-3">4. Your Rights</h2>
                    <p className="text-gray-600">
                        Participants have the right to withdraw from a survey at any time. If you have concerns about your data, you may contact our Ethics Review Committee.
                    </p>
                </div>
            </div>

            <div className="bg-caser-neutral-light p-8 rounded-xl border-l-4 border-caser-cyan">
                <h3 className="font-bold text-caser-navy mb-2">Contact Our Data Protection Officer</h3>
                <p className="text-gray-600">Email: <a href="mailto:privacy@caser.org" className="text-caser-cyan hover:underline">privacy@caser.org</a></p>
            </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
