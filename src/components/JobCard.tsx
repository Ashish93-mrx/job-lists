import React from 'react';
import type { JobPortalLink } from '../types';
import './JobCard.css';

interface JobCardProps {
  portal: JobPortalLink;
  linkType: 'homepage' | 'statusPage' | 'profilePage';
}

const JobCard: React.FC<JobCardProps> = ({ portal, linkType }) => {
  const handleClick = () => {
    const url = portal[linkType];
    window.open(url, '_blank');
  };

  return (
    <article className="job-card" onClick={handleClick}>
      <img src={portal.icon} alt={`${portal.name} icon`} width={40} height={40} />
      <h4 style={{ marginTop: '0.5rem', color:'white' }}>{portal.name}</h4>
    </article>
  );
};

export default JobCard;
