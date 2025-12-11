import React from 'react';
import { Button } from './Button';
import { Users, BarChart3, Zap, ShieldCheck } from 'lucide-react';

export const EmployerSection: React.FC = () => {
  return (
    <div id="employers" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              Recruiting für die Logistik der nächsten Generation.
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              In einer Branche, in der Zeit Geld ist, dürfen Sie keine Ressourcen mit ineffizienten Recruiting-Prozessen verschwenden. stellenangebote-spedition.com wurde entwickelt, um Speditionen, Fuhrparks und Logistikdienstleister direkt mit qualifiziertem Fachpersonal zu vernetzen.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Unsere Plattform nutzt modernste REACT-Technologie für blitzschnelle Ladezeiten und eine optimale Darstellung Ihrer Stellenanzeigen auf allen Endgeräten – vom Büro-Desktop bis zum Smartphone in der Fahrerkabine. Erreichen Sie Kandidaten dort, wo sie sich aufhalten, und präsentieren Sie Ihr Unternehmen als attraktiven Arbeitgeber in einem professionellen, industriellen Umfeld.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-blue-700">
                    <Zap className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-slate-900">Sofortige Sichtbarkeit</h4>
                  <p className="mt-2 text-base text-slate-500">Ihre Anzeigen sind in Sekunden online und sofort für Tausende Fachkräfte sichtbar.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-blue-700">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-slate-900">Zielgerichtete Bewerber</h4>
                  <p className="mt-2 text-base text-slate-500">Spezialisiert auf Kraftfahrer, Disponenten und Lagerlogistik. Kein Streuverlust.</p>
                </div>
              </div>
            </div>

            <Button variant="primary">Stellenanzeige schalten</Button>
            <Button variant="secondary" className="ml-4">Preise & Konditionen</Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-700 rounded-3xl transform rotate-3 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1566576912906-253c72352125?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Disponent am Arbeitsplatz mit mehreren Monitoren" 
              className="relative rounded-2xl shadow-2xl w-full object-cover h-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center mb-2">
                <BarChart3 className="text-green-500 w-5 h-5 mr-2" />
                <span className="font-bold text-slate-900">Recruiting Erfolg</span>
              </div>
              <p className="text-sm text-slate-600">"Dank dieser Plattform haben wir unsere offenen Fahrerstellen in Rekordzeit besetzt."</p>
              <p className="text-xs text-slate-400 mt-2">- Schmidt Logistik GmbH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};