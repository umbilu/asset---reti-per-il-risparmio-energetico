/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2,
  Factory,
  Landmark,
  User,
  Leaf,
  Zap,
  ShieldCheck,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  ArrowRight,
  MapPin
} from 'lucide-react';

const sections = [
  {
    id: 'condominii',
    title: 'Condominii',
    icon: <Building2 className="w-6 h-6" />,
    description: 'Soluzioni integrate per la riqualificazione energetica di complessi residenziali. Gestiamo l\'intero processo, dalla diagnosi energetica alla realizzazione degli interventi.',
    features: [
      'Cappotto termico e isolamento',
      'Sostituzione centrali termiche',
      'Impianti fotovoltaici condominiali',
      'Gestione pratiche incentivi fiscali'
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'pmi',
    title: 'PMI',
    icon: <Factory className="w-6 h-6" />,
    description: 'Efficientamento energetico per uffici, laboratori e siti produttivi. Riduciamo i costi operativi migliorando il comfort e la sostenibilità della tua impresa.',
    features: [
      'Audit energetici industriali',
      'Relamping LED',
      'Sistemi di monitoraggio consumi',
      'Soluzioni di mobilità elettrica'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'pa',
    title: 'Pubblica Amministrazione',
    icon: <Landmark className="w-6 h-6" />,
    description: 'Partner strategico per la transizione ecologica del patrimonio pubblico. Interventi mirati su scuole, uffici e illuminazione pubblica.',
    features: [
      'Riqualificazione scuole e uffici',
      'Project Financing',
      'Gestione calore e manutenzione',
      'Comunità Energetiche Rinnovabili'
    ],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'privati',
    title: 'Privati cittadini',
    icon: <User className="w-6 h-6" />,
    description: 'Rendi la tua casa intelligente, efficiente e sostenibile. Offriamo pacchetti completi per il massimo risparmio in bolletta e il benessere abitativo.',
    features: [
      'Pompe di calore e ibridi',
      'Infissi ad alte prestazioni',
      'Sistemi di accumulo energia',
      'Domotica per il risparmio'
    ],
    image: 'https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('condominii');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentData = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <img src="/images/logo_asset.png" alt="Asset Logo" className="h-12 w-auto" />
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#servizi" className="text-sm font-medium text-slate-600 hover:text-[#afc816] transition-colors">Servizi</a>
              <a href="#chi-siamo" className="text-sm font-medium text-slate-600 hover:text-[#afc816] transition-colors">Chi Siamo</a>
              <a href="#contatti" className="px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-[#afc816] transition-all shadow-sm">Contattaci</a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-[#afc816] bg-blue-50 rounded-full">
              Asset Sostenibile
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
              Noi forniamo soluzioni per la gestione del vostro <span className="text-[#afc816]">patrimonio immobiliare</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Presentiamo un'offerta integrata di prodotti e servizi per la gestione efficiente degli immobili, garantendo risparmio, comfort e rispetto per l'ambiente.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Interactive Selection Section */}
      <section id="servizi" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 border ${activeSection === section.id
                  ? 'bg-[#afc816] text-white border-[#afc816] shadow-lg shadow-blue-200 scale-105'
                  : 'bg-white text-slate-600 border-slate-100 hover:border-[#afc816] hover:bg-blue-50/50'
                  }`}
              >
                {section.icon}
                <span className="font-semibold">{section.title}</span>
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Soluzioni per {currentData.title}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {currentData.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {currentData.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="mt-1">
                        <ShieldCheck className="w-5 h-5 text-[#76BC21]" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button className="group flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-[#afc816] transition-all">
                    Scopri l'offerta completa
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection + '-img'}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={currentData.image}
                  alt={currentData.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-[#FFD100]" />
                    <span className="text-xs font-bold uppercase tracking-widest">Efficienza Garantita</span>
                  </div>
                  <p className="text-sm font-medium opacity-90">Risparmio energetico stimato fino al 60%</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Detailed Info Section */}
      <section id="chi-siamo" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Asset Servizi Srl propone soluzioni per l'efficientamento energetico e per l'edilizia sostenibile
              </h2>
              <p className="text-xl text-[#afc816] font-semibold">
                A consumo di energia Nearly Point Zero e molto altro.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-slate-600 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Metodologie costruttive e materiali innovativi, comunità energetiche, GAC, CER-CACER, per condomini, PMI e PA, tramite ESCo, PPP e formule finanziate.
                </p>
                <p>
                  Offriamo il cambio di centrali termiche con formula <strong>Energy+ (costo zero)</strong>, finanza agevolata, RAS, e gestione della Compliance Privacy (fatta da DPO).
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Controllo acque, certificazioni, assicurazioni e trattamento dell'umidità di risalita di edifici fino a 3000mq sono solo alcune delle nostre proposte...
                </p>
                <p className="font-medium text-slate-900">
                  Qualsiasi sia la vostra necessità, noi siamo in grado di offrire più soluzioni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Perché scegliere Asset?</h2>
            <p className="text-slate-600">Il nostro approccio integrato per risultati concreti e duraturi.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Chiavi in Mano', desc: 'Dalla progettazione alla realizzazione, pensiamo a tutto noi.', icon: <ShieldCheck className="w-8 h-8 text-[#76BC21]" /> },
              { title: 'Sostenibilità', desc: 'Materiali e tecnologie a basso impatto ambientale.', icon: <Leaf className="w-8 h-8 text-[#76BC21]" /> },
              { title: 'Risparmio', desc: 'Ottimizzazione dei costi e accesso a tutti gli incentivi.', icon: <Zap className="w-8 h-8 text-[#FFD100]" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contatti" className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img src="/images/logo_asset.png" alt="Asset Logo" className="h-12 w-auto brightness-0 invert" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Leader nella riqualificazione energetica e nell'edilizia sostenibile. Trasformiamo gli edifici per un futuro migliore.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6">Contatti</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#afc816] mt-1 shrink-0" />
                  <span>Via Paolo Fabbri 1/3<br />40138 – Bologna (IT)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#afc816] mt-1 shrink-0" />
                  <span>339 582 2066<br />328 626 0407</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#afc816] mt-1 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="mailto:segreteria@reteasset.it" className="hover:text-white transition-colors">segreteria@reteasset.it</a>
                    <a href="mailto:assetpec@pec.it" className="hover:text-white transition-colors text-[10px] opacity-70">PEC: assetpec@pec.it</a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Link Rapidi</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termini e Condizioni</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lavora con noi</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Newsletter</h4>
              <p className="text-slate-400 text-sm mb-4">Rimani aggiornato sulle ultime novità e incentivi.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="La tua email"
                  className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-[#afc816]"
                />
                <button className="bg-[#afc816] px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
            © 2024 Asset - Reti per il Risparmio Energetico. P.IVA 03613121205. Tutti i diritti riservati.
          </div>
        </div>
      </footer>
    </div>
  );
}
