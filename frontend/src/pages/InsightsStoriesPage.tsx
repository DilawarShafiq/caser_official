import React from 'react';
import { Wrench } from 'lucide-react';

const InsightsStoriesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <Wrench size={64} className="text-caser-gold" />
          </div>
          
          {/* Heading */}
          <h1 className="text-3xl font-bold text-caser-navy mb-4">We're Working Through</h1>
          
          {/* Body Text */}
          <p className="text-gray-600 text-lg">
            Our site is currently undergoing maintenance. We apologize that the content on this page is temporarily unavailable. Please check back soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsightsStoriesPage;