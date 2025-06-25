import { useState } from 'react';
import { jobPortals } from './data/portals';
import JobCard from './components/JobCard';
import TabView from './components/TabView';

function App() {
  const [currentTab, setCurrentTab] = useState<'homepage' | 'statusPage' | 'profilePage'>('homepage');

  return (
    <main className="container centered">
      <h1>Job Checker</h1>

      <TabView currentTab={currentTab} onTabChange={setCurrentTab} />

      <section style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
        {jobPortals.map((portal) => (
          <JobCard key={portal.name} portal={portal} linkType={currentTab} />
        ))}
      </section>
    </main>
  );
}

export default App;