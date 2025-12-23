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
import SurveyPage from './pages/SurveyPage'; // New page for survey

import WhoWeAre from './pages/about/WhoWeAre';
import OurTeam from './pages/about/OurTeam';
import Partners from './pages/about/Partners';
import WhoAreWePage from './pages/WhoAreWePage'; // New page for "Who are we"
import OurTeamNewPage from './pages/OurTeamNewPage'; // New page for "Our Team"
import OurPartnersPage from './pages/OurPartnersPage'; // New page for "Our Partners"
import VisionMissionValuesPage from './pages/VisionMissionValuesPage'; // New page for "Vision, Mission & Values"
import OurEdgePage from './pages/OurEdgePage'; // New page for "Our Edge"
import OurMethodsToolsPage from './pages/OurMethodsToolsPage'; // New page for "Our Methods & Tools"
import PublicationsNewPage from './pages/PublicationsNewPage'; // New page for "Publications"
import ProjectsNewPage from './pages/ProjectsNewPage'; // New page for "Projects"
import FocusAreasNewPage from './pages/FocusAreasNewPage'; // New page for "Focus Areas"
import InsightsNewsPage from './pages/InsightsNewsPage'; // New page for "Insights News"
import InsightsPage from './pages/InsightsPage';
import InsightsArticlesPage from './pages/InsightsArticlesPage'; // New page for "Insights Articles"
import InsightsStoriesPage from './pages/InsightsStoriesPage'; // New page for "Insights Stories"
import ContactWriteTalkPage from './pages/ContactWriteTalkPage'; // New page for "Contact Write and talk to us"
import ContactJoinColleaguePage from './pages/ContactJoinColleaguePage'; // New page for "Contact Join as Colleague"
import ContactJoinPartnerPage from './pages/ContactJoinPartnerPage'; // New page for "Contact Join as Partner"

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* About Us Routes */}
          <Route path="/about" element={<WhoWeAre />} />
          <Route path="/about/who-we-are" element={<WhoAreWePage />} />
          <Route path="/about/vision" element={<VisionMissionValuesPage />} />
          <Route path="/about/our-team" element={<OurTeamNewPage />} />
          <Route path="/about/our-partners" element={<OurPartnersPage />} />
          <Route path="/about/our-edge" element={<OurEdgePage />} />
          <Route path="/about/methods" element={<OurMethodsToolsPage />} />
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
          <Route path="/publications" element={<PublicationsNewPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/news" element={<InsightsNewsPage />} />
          <Route path="/insights/articles" element={<InsightsArticlesPage />} />
          <Route path="/insights/stories" element={<InsightsStoriesPage />} />
          <Route path="/projects" element={<ProjectsNewPage />} />
          <Route path="/survey" element={<SurveyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/write-talk" element={<ContactWriteTalkPage />} />
          <Route path="/contact/join-colleague" element={<ContactJoinColleaguePage />} />
          <Route path="/contact/join-partner" element={<ContactJoinPartnerPage />} />
          <Route path="/focus-areas" element={<FocusAreasNewPage />} />
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