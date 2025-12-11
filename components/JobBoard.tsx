import React, { useState, useMemo } from 'react';
import { MOCK_JOBS, CATEGORY_ICONS } from '../constants';
import { Job, JobCategory } from '../types';
import { MapPin, Clock, ArrowRight, Filter, Briefcase } from 'lucide-react';
import { Button } from './Button';
import { ApplyModal } from './ApplyModal';

export const JobBoard: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<JobCategory | 'ALL'>('ALL');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredJobs = useMemo(() => {
    if (activeCategory === 'ALL') return MOCK_JOBS;
    return MOCK_JOBS.filter(job => job.category === activeCategory);
  }, [activeCategory]);

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <div id="jobs" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Aktuelle Stellenangebote
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Von der Straße ins Lager, vom Dispo-Tisch bis in die Führungsebene. Unsere Plattform bietet eine deutschlandweite Auswahl an Positionen. Nutzen Sie unsere intelligente Filtertechnologie, um genau den Job zu finden, der zu Ihrer Qualifikation passt. 
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('ALL')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'ALL' 
                ? 'bg-blue-700 text-white shadow-md' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Alle Angebote
          </button>
          {Object.values(JobCategory).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeCategory === category
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {activeCategory === category && <Filter className="w-3 h-3" />}
              {category}
            </button>
          ))}
        </div>

        {/* Job Grid */}
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-2">
          {filteredJobs.map((job) => (
            <div 
              key={job.id} 
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${job.isUrgent ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                      {CATEGORY_ICONS[job.category]}
                    </div>
                    <div>
                       <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                        {job.category}
                      </span>
                      {job.isUrgent && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                          Dringend
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-slate-400">{job.postedDate}</span>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-lg text-blue-700 font-medium">
                    {job.company}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
                  <div className="flex items-center">
                    <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-slate-400" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="flex-shrink-0 mr-1.5 h-4 w-4 text-slate-400" />
                    {job.type}
                  </div>
                  {job.salaryRange && (
                    <div className="flex items-center font-medium text-slate-900">
                      <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-slate-400" />
                      {job.salaryRange}
                    </div>
                  )}
                </div>

                <p className="mt-4 text-slate-600 text-sm leading-relaxed line-clamp-2">
                  {job.description}
                </p>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                <button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                  Details ansehen
                </button>
                <Button variant="primary" onClick={() => handleApply(job)} className="text-sm py-2 px-4">
                  Jetzt bewerben <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
           <p className="text-slate-500 mb-4">Zeige {filteredJobs.length} von 142 verfügbaren Stellen</p>
           <Button variant="outline">Weitere Stellen laden</Button>
        </div>
      </div>

      <ApplyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        job={selectedJob} 
      />
    </div>
  );
};