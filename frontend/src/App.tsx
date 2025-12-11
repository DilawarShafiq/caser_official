import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import WhatWeDoPage from './pages/WhatWeDoPage';
import FocusAreasPage from './pages/FocusAreasPage';
import FocusAreaDetail from './pages/FocusAreaDetail';
import ResearchPage from './pages/ResearchPage';
import WhatsUpPage from './pages/WhatsUpPage';
import WhatsUpDetail from './pages/WhatsUpDetail';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import SurveysPage from './pages/SurveysPage';
import CareersPage from './pages/CareersPage';

import WhoWeAre from './pages/about/WhoWeAre';
import OurTeam from './pages/about/OurTeam';
import Partners from './pages/about/Partners';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* About Us Routes */}
          <Route path="/about" element={<WhoWeAre />} />
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/team" element={<OurTeam />} />
          <Route path="/about/partners" element={<Partners />} />

          <Route path="/services/surveys" element={<SurveysPage />} />
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/services/*" element={<WhatWeDoPage />} />
          <Route path="/focus-areas" element={<FocusAreasPage />} />
          <Route path="/focus/:slug" element={<FocusAreaDetail />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/*" element={<ResearchPage />} />
          <Route path="/whats-up" element={<WhatsUpPage />} />
          <Route path="/whats-up/projects" element={<WhatsUpPage filterCategory="Project" />} />
          <Route path="/whats-up/news" element={<WhatsUpPage filterCategory="News" />} />
          <Route path="/whats-up/events" element={<WhatsUpPage filterCategory="Event" />} />
          <Route path="/whats-up/:slug" element={<WhatsUpDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiePolicyPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/sitemap" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;