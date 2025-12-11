import React from 'react';
import { Video, Users } from 'lucide-react';

export interface WhatsUpItem {
  slug: string;
  title: string;
  date: string;
  category: 'Event' | 'News' | 'Workshop' | 'Seminar' | 'Project';
  layoutType: 'article' | 'event' | 'media' | 'project'; 
  heroImage: string;
  excerpt: string;
  content: React.ReactNode;
  meta?: {
    location?: string;
    time?: string;
    organizer?: string;
    registrationLink?: string;
  };
}

export const whatsUpData: WhatsUpItem[] = [
  {
    slug: 'punjab-education-reform',
    title: "Punjab Education Reform Initiative",
    date: "Ongoing",
    category: "Project",
    layoutType: 'project',
    heroImage: "https://placehold.co/1920x800/1e40af/FFFFFF?text=Education+Reform+Project",
    excerpt: "A 3-year longitudinal study assessing the impact of digital literacy programs in 500 public schools across Punjab.",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          This ambitious project aims to modernize the curriculum and teaching methodologies in government schools. By integrating smart classrooms and teacher training modules, we are tracking student performance metrics in real-time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <span className="block text-3xl font-bold text-caser-navy mb-1">500</span>
                <span className="text-sm text-gray-600 font-semibold uppercase">Schools</span>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <span className="block text-3xl font-bold text-caser-navy mb-1">50k+</span>
                <span className="text-sm text-gray-600 font-semibold uppercase">Students Impacted</span>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <span className="block text-3xl font-bold text-caser-navy mb-1">2026</span>
                <span className="text-sm text-gray-600 font-semibold uppercase">Completion Target</span>
            </div>
        </div>
      </>
    )
  },
  {
    slug: 'climate-summit-takeaways',
    title: "Global Summit on Climate Action: Key Takeaways",
    date: "Jan 20, 2026",
    category: "News",
    layoutType: 'article',
    heroImage: "https://placehold.co/1920x800/1A365D/FFFFFF?text=Climate+Summit+Hero",
    excerpt: "World leaders gathered to discuss urgent steps for carbon neutrality. CASER presented its findings on localized adaptation strategies for South Asia.",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          The 2026 Global Summit on Climate Action marked a pivotal moment in international environmental policy. Delegations from over 150 countries convened to ratify new targets for emission reductions. CASER was proud to represent Pakistan's civil society sector, highlighting the disproportionate impact of climate change on developing economies.
        </p>
        <h3 className="text-2xl font-bold font-montserrat text-caser-navy mb-4">CASER's Contribution</h3>
        <p className="mb-6 leading-relaxed text-gray-600">
          Our team presented a longitudinal study titled <em>"Resilience in the Indus Basin,"</em> which maps the socio-economic effects of changing monsoon patterns. The study advocates for a shift from large-scale infrastructure projects to community-led adaptation mechanisms.
        </p>
        <blockquote className="border-l-4 border-caser-gold pl-6 py-2 my-8 italic text-xl text-gray-600 bg-gray-50 rounded-r-lg">
          "Adaptation is no longer a choice but a survival strategy. Local data is the compass we need to navigate this storm." 
          <footer className="text-sm font-bold text-caser-navy mt-2">– Dr. Ayesha Khan, Executive Director</footer>
        </blockquote>
        <h3 className="text-2xl font-bold font-montserrat text-caser-navy mb-4">Future Directions</h3>
        <p className="leading-relaxed text-gray-600">
          Following the summit, CASER will be launching a pilot project in Southern Punjab to test drought-resistant crop varieties in partnership with local agricultural universities.
        </p>
      </>
    )
  },
  {
    slug: 'sustainable-cities-conference',
    title: "Conference on Sustainable Cities",
    date: "Jan 15, 2026",
    category: "Event",
    layoutType: 'event',
    heroImage: "https://placehold.co/1920x800/00B5D4/FFFFFF?text=Urban+Conference",
    excerpt: "Join urban planners, architects, and policymakers as we explore the blueprint for Pakistan's future smart cities.",
    meta: {
      location: "Serena Hotel, Islamabad",
      time: "09:00 AM - 05:00 PM",
      organizer: "CASER Urban Unit",
      registrationLink: "#"
    },
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          Rapid urbanization presents both a challenge and an opportunity. This one-day conference brings together the brightest minds to discuss sustainable infrastructure, waste management, and digital governance.
        </p>
        <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
                <div className="bg-caser-neutral-light p-2 rounded-full text-caser-cyan"><Users size={20} /></div>
                <div>
                    <strong className="block text-caser-navy">Panel 1: Green Infrastructure</strong>
                    <span className="text-gray-600">Integrating nature-based solutions into city planning.</span>
                </div>
            </li>
            <li className="flex items-start gap-3">
                <div className="bg-caser-neutral-light p-2 rounded-full text-caser-cyan"><Video size={20} /></div>
                <div>
                    <strong className="block text-caser-navy">Panel 2: The Digital Citizen</strong>
                    <span className="text-gray-600">Leveraging data for better municipal services.</span>
                </div>
            </li>
        </ul>
      </>
    )
  },
  {
    slug: 'ministry-partnership',
    title: "Partnership with Ministry of Climate",
    date: "Dec 20, 2025",
    category: "News",
    layoutType: 'article',
    heroImage: "https://placehold.co/1920x800/059669/FFFFFF?text=MoU+Signing",
    excerpt: "CASER signs a historic MoU to serve as the primary data partner for the National Climate Resilience Fund.",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          In a move to strengthen evidence-based governance, CASER has officially partnered with the Ministry of Climate Change. This partnership establishes CASER as the technical lead for monitoring and evaluating projects funded by the National Climate Resilience Fund.
        </p>
        <p className="leading-relaxed text-gray-600">
          The MoU covers data sharing, capacity building for ministry staff, and the development of a real-time climate dashboard accessible to the public.
        </p>
      </>
    )
  },
  {
    slug: 'digital-economy-report',
    title: "New Report Launch: Digital Economy",
    date: "Dec 05, 2025",
    category: "News",
    layoutType: 'media', 
    heroImage: "https://placehold.co/1920x800/7c3aed/FFFFFF?text=Digital+Report+Launch",
    excerpt: "Unveiling the comprehensive analysis of Pakistan's burgeoning digital freelance market.",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-gray-300">
          The freelance economy contributes over $1 Billion to Pakistan's exports. Our latest report unpacks the demographics, challenges, and opportunities of this sector.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700">
                <span className="block text-4xl font-bold text-caser-gold mb-2">4th</span>
                <span className="text-gray-400">Fastest growing freelance market globally</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700">
                <span className="block text-4xl font-bold text-caser-gold mb-2">45%</span>
                <span className="text-gray-400">Female participation rate</span>
            </div>
        </div>
      </>
    )
  },
  {
    slug: 'women-leadership-seminar',
    title: "Seminar: Women in Leadership",
    date: "Nov 28, 2025",
    category: "Seminar",
    layoutType: 'event',
    heroImage: "https://placehold.co/1920x800/db2777/FFFFFF?text=Women+Leadership",
    excerpt: "Celebrating and empowering women leaders in research and policy.",
    meta: {
        location: "LUMS, Lahore",
        time: "02:00 PM - 06:00 PM",
        organizer: "CASER Gender Unit",
    },
    content: (
        <p className="text-lg text-gray-700">
            A specialized seminar aimed at mentoring young female researchers. Guest speakers include prominent parliamentarians and academic deans.
        </p>
    )
  },
  {
    slug: 'data-workshop',
    title: "Workshop: Data for Good",
    date: "Nov 15, 2025",
    category: "Workshop",
    layoutType: 'event',
    heroImage: "https://placehold.co/1920x800/4F46E5/FFFFFF?text=Data+Workshop",
    excerpt: "A hands-on training session on using R and Python for social impact analysis.",
    meta: {
        location: "CASER HQ, Islamabad",
        time: "Full Day",
        organizer: "CASER Analytics Team",
    },
    content: (
        <p className="text-lg text-gray-700">
            This technical workshop targets NGO workers and junior researchers. Participants will learn how to clean datasets, create compelling visualizations, and interpret statistical significance.
        </p>
    )
  },
];
