import React from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { Button } from './Button';

interface HeroProps {
  onBrowseJobs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBrowseJobs }) => {
  return (
    <div className="relative bg-slate-900 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Modernes Logistikzentrum und LKW Flotte"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          <span className="block">Bewegen Sie Ihre Zukunft</span>
          <span className="block text-blue-500 mt-2">Jobs für Spedition & Logistik</span>
        </h1>
        
        <p className="mt-6 text-xl text-slate-300 max-w-3xl leading-relaxed">
          Willkommen auf stellenangebote-spedition.com – der zentralen Schnittstelle, wo moderne Transportlogistik auf qualifizierte Fachkräfte trifft. Wir verbinden deutsche Speditionsunternehmen mit den Talenten, die unsere Wirtschaft am Laufen halten. Technologisch fortschrittlich, branchenspezifisch und für Bewerber vollständig kostenlos. Entdecken Sie Ihre nächste Herausforderung in einem Sektor, der niemals stillsteht.
        </p>

        <div className="mt-10 max-w-xl sm:flex sm:gap-4">
          <div className="relative rounded-md shadow-sm flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-lg py-4 border-slate-300 rounded-md"
              placeholder="Berufstitel, PLZ oder Firma..."
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:flex-shrink-0">
             <Button variant="accent" className="w-full h-full text-lg font-bold" onClick={onBrowseJobs}>
               Jobs finden <ArrowRight className="ml-2 w-5 h-5"/>
             </Button>
          </div>
        </div>
        
        <div className="mt-8 flex gap-4 text-sm text-slate-400 font-medium">
          <span className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> 500+ neue Jobs heute</span>
          <span className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Top Arbeitgeber</span>
          <span className="flex items-center"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span> 100% Kostenlos für Bewerber</span>
        </div>
      </div>
    </div>
  );
};