import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-gray-50 py-20 px-4 text-center border-b border-gray-200">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          About <span className="text-blue-600">Surgenor Plastering</span>
        </h1>
        <p className="text-gray-500 mt-4 text-xl font-medium">Belfast's Wall & Ceiling Specialists</p>
      </div>

      <article className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 inline-block border-b-4 border-blue-600 pb-2">Our Legacy of Quality</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            With a reputation built on precision and reliability, <strong className="text-gray-900">Surgenor Plastering</strong> is a leading plastering contractor in Belfast. We provide expert wall and ceiling solutions for both the commercial sector and private residential projects throughout Northern Ireland.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We pride ourselves on delivering a <strong className="text-blue-600">"glass-smooth" finish</strong>, whether we are working on a modern office development or a period home renovation.
          </p>
        </div>

        <div className="space-y-16">
          <section className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 inline-block border-b-4 border-blue-600 pb-2">Specialist Internal Plastering</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Professional Skimming</h3>
                <p className="text-gray-600">High-quality skimming for walls and ceilings, creating a flawless, polished surface prepped for decoration.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Complete Plastering</h3>
                <p className="text-gray-600">From patching small repairs to full room re-plastering, ensuring durable, crack-resistant surfaces.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Ceiling Restoration</h3>
                <p className="text-gray-600">Repairing damaged ceilings, fixing water damage, and overboarding old lath-and-plaster.</p>
              </div>
            </div>
          </section>

          <section className="bg-[#1a1c1e] text-white p-12 md:p-20 rounded-[3rem] text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 inline-block border-b-4 border-blue-600 pb-2">Plasterboarding & Structural</h2>
            <p className="text-gray-400 text-lg mb-12">Moving away from traditional "wet" methods when necessary, we offer expert plasterboarding services to speed up project timelines.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold text-blue-500 mb-3">Expert Plasterboarding</h3>
                <p className="text-gray-400 text-sm">High-performance boards including moisture-resistant and fire-rated options.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-500 mb-3">Stud Wall Partitioning</h3>
                <p className="text-gray-400 text-sm">Bespoke framing to redefine your space—ideal for new rooms or offices.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-500 mb-3">Wall Removal</h3>
                <p className="text-gray-400 text-sm">Load-bearing wall removal and RSJ installation with seamless finishing.</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 inline-block border-b-4 border-blue-600 pb-2">External Rendering</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">K-Rend & Monocouche</h3>
                <p className="text-gray-600">Modern, through-coloured renders that are weatherproof and low-maintenance. Experts in K-Rend Belfast.</p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Warm Wall Systems</h3>
                <p className="text-gray-600">Internal wall insulation (IWI) and thermal systems to reduce energy bills and improve comfort.</p>
              </div>
            </div>
          </section>

          <section className="bg-blue-600 text-white p-12 md:p-16 rounded-[3rem] text-center shadow-xl">
            <h2 className="text-3xl font-extrabold mb-6">Why Choose a Local Contractor?</h2>
            <p className="text-lg mb-8 opacity-90">
              When you search for a "plasterer near me," you want someone who understands local building styles. We are fully insured, highly experienced, and committed to leaving every site "broom-clean."
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {['Belfast', 'Lisburn', 'Holywood', 'Newtownabbey'].map((loc) => (
                <span key={loc} className="bg-white/20 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                  {loc}
                </span>
              ))}
            </div>
            <Link to="/contact" className="bg-[#1a1c1e] text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform inline-block">
              Request A Free Quote
            </Link>
          </section>
        </div>
      </article>
    </div>
  );
}
