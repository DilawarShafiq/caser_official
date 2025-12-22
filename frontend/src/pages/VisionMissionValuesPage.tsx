import React from 'react';

const VisionMissionValuesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-caser-navy mb-8">Vision, Mission & Values</h1>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-caser-navy mb-4">Vision</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            To be a trusted leader in evidence-based research and a catalyst for data-driven policymaking that improves lives and fosters inclusive development.
          </p>

          <h2 className="text-2xl font-bold text-caser-navy mb-4">Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We deliver high-quality surveys, evaluations, and advanced data analyses that inform policies, strengthen institutions, and amplify community voices. By combining methodological rigor, technological innovation, and deep local expertise, we ensure research translates into real-world solutions.
          </p>

          <h2 className="text-2xl font-bold text-caser-navy mb-4">Core Values</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="font-bold text-caser-gold mr-2">•</span>
              <span className="text-gray-700">Integrity – Upholding the highest standards of honesty, transparency, and accountability.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-caser-gold mr-2">•</span>
              <span className="text-gray-700">Rigor – Applying robust methodologies to generate credible, reliable evidence.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-caser-gold mr-2">•</span>
              <span className="text-gray-700">Innovation – Harnessing technology and AI-driven tools to push the boundaries of research.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-caser-gold mr-2">•</span>
              <span className="text-gray-700">Collaboration – Partnering with governments, donors, NGOs, and communities to co-create solutions.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-caser-gold mr-2">•</span>
              <span className="text-gray-700">Inclusion – Ensuring diverse voices and perspectives shape both research and outcomes.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-caser-gold mr-2">•</span>
              <span className="text-gray-700">Impact – Translating data into actionable insights that drive social change.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionValuesPage;