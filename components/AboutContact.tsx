import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const AboutContact: React.FC = () => {
  return (
    <div className="bg-slate-50 border-t border-slate-200">
      {/* About Section */}
      <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Über stellenangebote-spedition.com</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Diese Plattform entstand aus der Vision heraus, dem massiven Fachkräftemangel in der Logistikbranche mit technologischer Exzellenz zu begegnen. Wir sind unabhängig, spezialisiert und leidenschaftlich. Unser Ziel ist es, die Barrieren zwischen Arbeitgebern und Arbeitnehmern abzubauen.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Wir haben uns bewusst für eine Entwicklung auf Basis von REACT entschieden, um eine User Experience zu bieten, die der Präzision moderner Logistikprozesse entspricht: stabil, schnell und zuverlässig. Wir verstehen uns nicht nur als Jobbörse, sondern als Partner einer Branche, die niemals schläft.
          </p>
        </div>
      </div>

      {/* Footer / Contact */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Kontaktieren Sie uns</h3>
            <p className="mb-4">Haben Sie Fragen oder Anregungen? Unser Team steht Ihnen zur Verfügung, um die Plattform ständig zu verbessern.</p>
            <ul className="space-y-3">
              <li className="flex items-center"><Mail className="w-5 h-5 mr-3 text-blue-500"/> support@stellenangebote-spedition.com</li>
              <li className="flex items-center"><Phone className="w-5 h-5 mr-3 text-blue-500"/> +49 (0) 40 123 456 78</li>
              <li className="flex items-center"><MapPin className="w-5 h-5 mr-3 text-blue-500"/> Logistikweg 1, 20457 Hamburg</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Für Arbeitgeber</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Stelle inserieren</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preisliste</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recruiting-Tipps</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kooperationen</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Datenschutzerklärung</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nutzungsbedingungen</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} stellenangebote-spedition.com. Alle Rechte vorbehalten. Entwickelt mit React & Tailwind.
        </div>
      </footer>
    </div>
  );
};