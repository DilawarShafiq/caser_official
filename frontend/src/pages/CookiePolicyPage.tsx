import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, MousePointer } from 'lucide-react';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-caser-navy text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-montserrat font-bold">Cookie Policy</h1>
        <p className="text-caser-cyan mt-4">Understanding how we use cookies.</p>
      </section>

      <section className="py-16 container mx-auto px-4 max-w-4xl">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
        >
            <div>
                <p className="text-gray-700 leading-relaxed text-lg">
                    This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use on the CASER website.
                </p>
            </div>

            <div className="flex gap-6">
                <div className="bg-caser-neutral-light p-4 rounded-full h-fit text-caser-gold">
                    <Cookie size={32} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold font-montserrat text-caser-navy mb-3">What Are Cookies?</h2>
                    <p className="text-gray-600">
                        Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and analyze how you use our site to improve your experience.
                    </p>
                </div>
            </div>

            <div className="flex gap-6">
                <div className="bg-caser-neutral-light p-4 rounded-full h-fit text-caser-gold">
                    <MousePointer size={32} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold font-montserrat text-caser-navy mb-3">How We Use Cookies</h2>
                    <p className="text-gray-600 mb-4">We use the following types of cookies:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li><strong>Essential Cookies:</strong> Necessary for the website to function correctly.</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand visitor traffic and page popularity (e.g., Google Analytics).</li>
                        <li><strong>Functional Cookies:</strong> Remember your language or region preferences.</li>
                    </ul>
                </div>
            </div>

            <div className="flex gap-6">
                <div className="bg-caser-neutral-light p-4 rounded-full h-fit text-caser-gold">
                    <Settings size={32} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold font-montserrat text-caser-navy mb-3">Managing Your Choices</h2>
                    <p className="text-gray-600">
                        You can control and delete cookies through your browser settings. Please note that disabling cookies may affect the functionality of certain parts of our website.
                    </p>
                </div>
            </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;
