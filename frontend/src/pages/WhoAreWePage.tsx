import React from 'react';

const WhoAreWePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-caser-navy mb-8">Who are we</h1>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            We are a research and consulting organisation dedicated to turning data into meaningful impact. Founded with the belief that research is more than numbers, it is about giving voice to communities, uncovering truths, and guiding evidence-based decisions, we design and implement surveys, evaluations, and studies that strengthen accountability and inform real change.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            Our work bridges rigorous methodologies with innovative tools, from household surveys to AI-driven analytics, ensuring insights are both accurate and actionable. Guided by principles of ethical field practices, cultural sensitivity, and people-centred solutions, we strive to empower policymakers, development partners, and communities alike.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWePage;