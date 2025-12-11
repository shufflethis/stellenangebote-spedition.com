import { Job, JobCategory } from './types';
import { Truck, Package, Calendar, MapPin, Briefcase } from 'lucide-react';
import React from 'react';

export const NAVIGATION_ITEMS = [
  { label: 'Startseite', id: 'home' },
  { label: 'Stellenangebote', id: 'jobs' },
  { label: 'Für Arbeitgeber', id: 'employers' },
  { label: 'Für Bewerber', id: 'candidates' },
  { label: 'Über uns', id: 'about' },
];

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Berufskraftfahrer (m/w/d) CE im Fernverkehr',
    company: 'TransLogistik Müller GmbH',
    location: 'Hamburg / Bundesweit',
    type: 'Vollzeit',
    category: JobCategory.DRIVER,
    salaryRange: '2.800€ - 3.400€',
    description: 'Wir suchen zuverlässige Fahrer für unsere moderne Scania-Flotte. Touren im nationalen Fernverkehr, feste Zuteilung.',
    postedDate: 'Heute',
    isUrgent: true
  },
  {
    id: '2',
    title: 'Disponent (m/w/d) Nationale Verkehre',
    company: 'SpeedCargo Express',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    category: JobCategory.DISPATCH,
    salaryRange: '3.500€ - 4.200€',
    description: 'Koordination der eigenen Flotte sowie Subunternehmer. Sie arbeiten mit modernster Telematik-Software.',
    postedDate: 'Gestern',
    isUrgent: false
  },
  {
    id: '3',
    title: 'Lagerleiter (m/w/d) Kontraktlogistik',
    company: 'BlueBox Logistics',
    location: 'Dortmund',
    type: 'Vollzeit',
    category: JobCategory.WAREHOUSE,
    salaryRange: 'Attraktiv',
    description: 'Verantwortung für ein Team von 40 Mitarbeitern im 3-Schicht-Betrieb. Erfahrung mit SAP EWM erforderlich.',
    postedDate: 'Vor 2 Tagen',
    isUrgent: true
  },
  {
    id: '4',
    title: 'Speditionskaufmann (m/w/d) Seefracht Import',
    company: 'Hanseatic Shipping',
    location: 'Bremen',
    type: 'Vollzeit',
    category: JobCategory.ADMIN,
    description: 'Abwicklung der kompletten Importverzollung und Nachlaufdisposition. Englischkenntnisse zwingend.',
    postedDate: 'Vor 3 Tagen',
    isUrgent: false
  },
  {
    id: '5',
    title: 'Auslieferungsfahrer (m/w/d) KEP-Dienst',
    company: 'CitySprint 24',
    location: 'München',
    type: 'Vollzeit / Teilzeit',
    category: JobCategory.DRIVER,
    salaryRange: '16,50€ / Std.',
    description: 'Zustellung von Paketen im Stadtgebiet München. Führerschein Klasse B ausreichend.',
    postedDate: 'Heute',
    isUrgent: true
  },
  {
    id: '6',
    title: 'Fachkraft für Lagerlogistik (m/w/d)',
    company: 'IndustriePartner Süd',
    location: 'Stuttgart',
    type: 'Vollzeit',
    category: JobCategory.WAREHOUSE,
    description: 'Kommissionierung von Automobilteilen, Bedienung von Flurförderzeugen und Wareneingangskontrolle.',
    postedDate: 'Vor 1 Woche',
    isUrgent: false
  }
];

export const CATEGORY_ICONS = {
  [JobCategory.DRIVER]: <Truck className="w-5 h-5" />,
  [JobCategory.WAREHOUSE]: <Package className="w-5 h-5" />,
  [JobCategory.DISPATCH]: <Calendar className="w-5 h-5" />,
  [JobCategory.ADMIN]: <Briefcase className="w-5 h-5" />,
  [JobCategory.MANAGEMENT]: <MapPin className="w-5 h-5" /> // Representative icon
};