import React from 'react';

interface TabViewProps {
  currentTab: 'homepage' | 'statusPage' | 'profilePage';
  onTabChange: (tab: 'homepage' | 'statusPage' | 'profilePage') => void;
}

const TabView: React.FC<TabViewProps> = ({ currentTab, onTabChange }) => {
  const tabs = ['homepage', 'statusPage', 'profilePage'] as const;

  return (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: currentTab === tab ? '#007bff' : '#f0f0f0',
            color: currentTab === tab ? 'white' : 'black',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {tab === 'homepage' ? 'Portals' : tab === 'statusPage' ? 'Job Status' : 'Profile'}
        </button>
      ))}
    </div>
  );
};

export default TabView;
