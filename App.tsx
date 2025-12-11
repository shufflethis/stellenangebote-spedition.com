import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JobBoard } from './components/JobBoard';
import { EmployerSection } from './components/EmployerSection';
import { CandidateSection } from './components/CandidateSection';
import { AboutContact } from './components/AboutContact';

const App: React.FC = () => {
  const scrollToJobs = () => {
    const element = document.getElementById('jobs');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero onBrowseJobs={scrollToJobs} />
        <JobBoard />
        <EmployerSection />
        <CandidateSection />
        <AboutContact />
      </main>
    </div>
  );
};

export default App;