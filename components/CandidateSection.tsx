import React from 'react';
import { Button } from './Button';
import { ArrowRight, Star, Heart, TrendingUp } from 'lucide-react';

export const CandidateSection: React.FC = ({}) => {
  return (
    <div id="candidates" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="lg:w-2/3">
             <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-8">
              Logistik ist das Rückgrat der Wirtschaft.<br/>
              <span className="text-blue-500">Seien Sie ein Teil davon.</span>
            </h2>
            <div className="prose prose-lg prose-invert text-slate-300">
              <p>
                Ohne Sie stehen die Regale leer. Ohne Sie kommt keine Produktion zustande. Die Arbeit in der Spedition und Logistik ist mehr als nur ein Job – sie ist eine essentielle Dienstleistung, die Millionen von Menschen täglich versorgt. Egal ob Sie als Berufskraftfahrer tonnenschwere Güter über die Autobahn steuern, als Disponent komplexe Lieferketten orchestrieren oder im Lager für den reibungslosen Umschlag sorgen: Ihre Arbeit zählt.
              </p>
              <p>
                Die Branche wandelt sich rasant. Digitalisierung, Telematik und moderne Fahrzeugtechnik machen die Berufe anspruchsvoller und spannender denn je. Wir bei stellenangebote-spedition.com wissen um den Wert Ihrer Arbeit. Deshalb haben wir eine Plattform geschaffen, die Ihnen Respekt zollt: durch transparente Angebote, faire Arbeitgeber und einen Bewerbungsprozess, der so effizient ist wie eine gut geplante Tour.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors">
                <TrendingUp className="h-8 w-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Krisensicher</h3>
                <p className="text-slate-400">Ein Sektor mit Zukunftsperspektive und konstantem Wachstum.</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors">
                <Star className="h-8 w-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Karrierechancen</h3>
                <p className="text-slate-400">Vom Azubi zum Logistikleiter – Aufstieg ist hier Programm.</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors">
                <Heart className="h-8 w-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Teamgeist</h3>
                <p className="text-slate-400">Kollegialität und Zusammenhalt werden großgeschrieben.</p>
              </div>
            </div>

            <div className="mt-10">
               <Button variant="accent">
                 Jetzt Traumjob finden <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
            </div>
          </div>
          
          <div className="hidden lg:block absolute top-0 right-0 -mr-20 w-1/3 h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-l-3xl opacity-80"
              src="https://images.unsplash.com/photo-1605218427306-022ba8c6f661?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="LKW Fahrer in Kabine"
            />
             <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
};