import React, { useState } from 'react';
import { X, Upload, CheckCircle } from 'lucide-react';
import { Button } from './Button';
import { Job } from '../types';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: Job | null;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose, job }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');

  if (!isOpen || !job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep('success');
    }, 1000);
  };

  const resetAndClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity" 
          aria-hidden="true" 
          onClick={resetAndClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal Panel */}
        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-slate-400 hover:text-slate-500 focus:outline-none"
              onClick={resetAndClose}
            >
              <span className="sr-only">Schließen</span>
              <X className="h-6 w-6" />
            </button>
          </div>

          {step === 'form' ? (
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 className="text-xl leading-6 font-bold text-slate-900" id="modal-title">
                    Bewerbung für <span className="text-blue-700">{job.title}</span>
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-slate-500 mb-6">
                      Bewerben Sie sich in wenigen Sekunden direkt bei {job.company}. Ihre Daten werden sicher und verschlüsselt übertragen.
                    </p>
                    
                    <form id="applicationForm" onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700">Vollständiger Name</label>
                        <input required type="text" id="name" className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Max Mustermann" />
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700">E-Mail Adresse</label>
                          <input required type="email" id="email" className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="max@beispiel.de" />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Telefonnummer</label>
                          <input required type="tel" id="phone" className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="+49 170 123456" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-slate-700">Kurzprofil & Erfahrung</label>
                        <textarea id="experience" rows={3} className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Beschreiben Sie kurz Ihre Erfahrung im Bereich Spedition/Logistik..."></textarea>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700">Lebenslauf / Dokumente (Optional)</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-md hover:bg-slate-50 transition-colors cursor-pointer">
                          <div className="space-y-1 text-center">
                            <Upload className="mx-auto h-12 w-12 text-slate-400" />
                            <div className="flex text-sm text-slate-600">
                              <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                                <span>Datei auswählen</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                              </label>
                              <p className="pl-1">oder hierher ziehen</p>
                            </div>
                            <p className="text-xs text-slate-500">
                              PDF, DOC bis zu 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center">
               <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl leading-6 font-bold text-slate-900">Bewerbung erfolgreich!</h3>
              <p className="mt-2 text-sm text-slate-500">
                Vielen Dank für Ihre Bewerbung bei {job.company}. Der Arbeitgeber hat Ihre Unterlagen erhalten und wird sich in Kürze bei Ihnen melden.
              </p>
            </div>
          )}

          <div className="bg-slate-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            {step === 'form' ? (
              <>
                <Button 
                  type="submit" 
                  form="applicationForm"
                  className="w-full sm:w-auto sm:ml-3"
                >
                  Jetzt absenden
                </Button>
                <Button 
                  variant="outline" 
                  onClick={resetAndClose}
                  className="mt-3 w-full sm:mt-0 sm:w-auto"
                >
                  Abbrechen
                </Button>
              </>
            ) : (
              <Button 
                onClick={resetAndClose}
                fullWidth
              >
                Zurück zu den Angeboten
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};