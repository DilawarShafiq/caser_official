import React from 'react';
import { Heart, BookOpen, DollarSign, Laptop, Cloud, Landmark, Users, Building, Globe, HandHelping } from 'lucide-react';

export interface FocusArea {
  slug: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  heroImage: string;
  subtitle: string;
  description: string;
  stats: { value: string; label: string }[];
  challenges: { title: string; desc: string }[];
  approach: string;
  keyProjects: { title: string; year: string; status: string }[];
}

export const focusAreasData: Record<string, FocusArea> = {
  'health': {
    slug: 'health',
    title: "Health & Wellbeing",
    icon: <Heart size={40} />,
    color: "bg-rose-600", // Tailwind class for theme
    heroImage: "https://placehold.co/1920x600/e11d48/FFFFFF?text=Health+&+Wellbeing",
    subtitle: "Strengthening health systems for a healthier Pakistan.",
    description: "Our research delves into the complexities of public health, focusing on maternal and child health, nutrition, and the efficacy of healthcare delivery systems. We provide the evidence needed to bridge the gap between policy and practice.",
    stats: [
      { value: "50+", label: "Districts Surveyed" },
      { value: "10k+", label: "Households Interviewed" },
      { value: "15", label: "Policy Briefs Published" }
    ],
    challenges: [
      { title: "Access Disparities", desc: "Rural populations face significant barriers to accessing quality primary care." },
      { title: "Malnutrition", desc: "High rates of stunting and wasting among children require urgent, data-backed interventions." }
    ],
    approach: "We utilize mixed-methods research, combining large-scale quantitative surveys with qualitative inquiry to understand the barriers to health access.",
    keyProjects: [
      { title: "National Nutrition Survey Assessment", year: "2024", status: "Ongoing" },
      { title: "Evaluation of Basic Health Units", year: "2023", status: "Completed" }
    ]
  },
  'education': {
    slug: 'education',
    title: "Education & Skills",
    icon: <BookOpen size={40} />,
    color: "bg-blue-600",
    heroImage: "https://placehold.co/1920x600/2563eb/FFFFFF?text=Education+&+Skills",
    subtitle: "Unlocking potential through quality learning.",
    description: "We analyze educational ecosystems to identify gaps in access, quality, and equity. From out-of-school children to vocational training, our insights drive reforms that empower the next generation.",
    stats: [
      { value: "2M+", label: "Students Represented" },
      { value: "500", label: "Schools Assessed" },
      { value: "98%", label: "Data Accuracy" }
    ],
    challenges: [
      { title: "Gender Gap", desc: "Persistent disparities in female enrollment and retention in secondary education." },
      { title: "Skills Mismatch", desc: "Aligning vocational training with actual market demands." }
    ],
    approach: "Our approach integrates learning assessments, school infrastructure audits, and labor market analysis.",
    keyProjects: [
      { title: "Girls' Education Initiative Evaluation", year: "2024", status: "Active" },
      { title: "Curriculum Reform Impact Study", year: "2023", status: "Published" }
    ]
  },
  'economy': {
    slug: 'economy',
    title: "Economy & Labour",
    icon: <DollarSign size={40} />,
    color: "bg-emerald-600",
    heroImage: "https://placehold.co/1920x600/059669/FFFFFF?text=Economy+&+Markets",
    subtitle: "Fostering inclusive and sustainable economic growth.",
    description: "We investigate labor market dynamics, informal economies, and social protection mechanisms. Our goal is to inform economic policies that create jobs and reduce poverty.",
    stats: [
      { value: "5", label: "Major Sector Studies" },
      { value: "300+", label: "SME Interviews" },
      { value: "4", label: "Provinces Covered" }
    ],
    challenges: [
      { title: "Youth Unemployment", desc: "Creating viable pathways for the youth bulge." },
      { title: "Informal Sector", desc: "Documenting and supporting the undocumented workforce." }
    ],
    approach: "We conduct firm-level surveys, labor force analysis, and value chain assessments.",
    keyProjects: [
      { title: "SME Digitalization Readiness", year: "2024", status: "Ongoing" },
      { title: "Post-Crisis Economic Recovery", year: "2023", status: "Completed" }
    ]
  },
  // Add other areas similarly...
  'tech': { slug: 'tech', title: "Technology & Society", icon: <Laptop size={40} />, color: "bg-violet-600", heroImage: "https://placehold.co/1920x600/7c3aed/FFFFFF?text=Tech+&+Society", subtitle: "Navigating the digital transformation.", description: "Analyzing the impact of technology on social behavior and governance.", stats: [], challenges: [], approach: "", keyProjects: [] },
  'climate': { slug: 'climate', title: "Climate & Environment", icon: <Cloud size={40} />, color: "bg-teal-600", heroImage: "https://placehold.co/1920x600/0d9488/FFFFFF?text=Climate+Change", subtitle: "Building resilience against environmental shifts.", description: "Researching adaptation strategies for climate-vulnerable communities.", stats: [], challenges: [], approach: "", keyProjects: [] },
  'governance': { slug: 'governance', title: "Governance & Policy", icon: <Landmark size={40} />, color: "bg-slate-600", heroImage: "https://placehold.co/1920x600/475569/FFFFFF?text=Governance", subtitle: "Enhancing institutional transparency.", description: "Evaluating the effectiveness of public sector reforms.", stats: [], challenges: [], approach: "", keyProjects: [] },
  'gender': { slug: 'gender', title: "Gender & Inclusion", icon: <Users size={40} />, color: "bg-pink-600", heroImage: "https://placehold.co/1920x600/db2777/FFFFFF?text=Gender+Equality", subtitle: "Advocating for equality.", description: "Highlighting gender disparities in social and economic spheres.", stats: [], challenges: [], approach: "", keyProjects: [] },
  'urban': { slug: 'urban', title: "Urban Development", icon: <Building size={40} />, color: "bg-orange-600", heroImage: "https://placehold.co/1920x600/ea580c/FFFFFF?text=Urban+Development", subtitle: "Smart solutions for growing cities.", description: "Addressing challenges of urbanization and infrastructure.", stats: [], challenges: [], approach: "", keyProjects: [] },
  'culture': { slug: 'culture', title: "Culture & Society", icon: <Globe size={40} />, color: "bg-indigo-600", heroImage: "https://placehold.co/1920x600/4f46e5/FFFFFF?text=Culture", subtitle: "Preserving heritage.", description: "Understanding the cultural fabric of society.", stats: [], challenges: [], approach: "", keyProjects: [] },
  'crisis': { slug: 'crisis', title: "Crisis Response", icon: <HandHelping size={40} />, color: "bg-red-600", heroImage: "https://placehold.co/1920x600/dc2626/FFFFFF?text=Crisis+Response", subtitle: "Humanitarian aid effectiveness.", description: "Improving disaster response mechanisms.", stats: [], challenges: [], approach: "", keyProjects: [] },
};
