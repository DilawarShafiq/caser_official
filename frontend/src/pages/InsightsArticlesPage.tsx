import React from 'react';
import { Link } from 'react-router-dom';

const InsightsArticlesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-caser-navy mb-8 text-center">Articles</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Climate Research Article */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
              <h3 className="text-lg font-bold text-caser-navy mb-2">Pakistan's Climate Clock: A 60-Year Deep Dive into a Warming Nation</h3>
              <p className="text-gray-600 text-sm mb-3">By Ayaz Haider Naqvi</p>
              <Link
                to="/climate-research-article"
                className="text-caser-gold font-semibold hover:underline inline-block mt-2"
              >
                Read Article →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsArticlesPage;