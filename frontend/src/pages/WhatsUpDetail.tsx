import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { whatsUpData } from '../data/whatsUpData';
import WhatsUpArticle from '../components/layouts/WhatsUpArticle';
import WhatsUpEvent from '../components/layouts/WhatsUpEvent';
import WhatsUpMedia from '../components/layouts/WhatsUpMedia';
import WhatsUpProject from '../components/layouts/WhatsUpProject';

const WhatsUpDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = whatsUpData.find(i => i.slug === slug);

  if (!item) {
    return <Navigate to="/whats-up" replace />;
  }

  // Render based on layout type
  switch (item.layoutType) {
    case 'event': return <WhatsUpEvent item={item} />;
    case 'media': return <WhatsUpMedia item={item} />;
    case 'project': return <WhatsUpProject item={item} />;
    case 'article':
    default: return <WhatsUpArticle item={item} />;
  }
};

export default WhatsUpDetail;