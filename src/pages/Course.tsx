import React, { useState, useEffect } from 'react';
import { Lock, LogOut, Wrench, Package, Layers, Droplets, Paintbrush, AlertCircle, ShieldCheck, CheckCircle, Clock, Download, FileText, ClipboardCheck, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PASS = "plaster1to6";

const modules = [
  { id: 1, title: 'Tools', icon: Wrench, videoId: '3-hS1wtYrjc' },
  { id: 2, title: 'Materials', icon: Package, videoId: 'ipFg4JmX07I' },
  { id: 3, title: 'Preparing the Background', icon: Layers, videoId: 'Y7LAkNlXJ_8' },
  { id: 4, title: 'Mixing Plaster', icon: Droplets, videoId: 'S2_7ebNr6NM' },
  { id: 5, title: 'Applying Plaster', icon: Paintbrush, videoId: 'OfDHHUrZYi0' },
  { id: 6, title: 'Common Mistakes', icon: AlertCircle, videoId: 'bINibclphBI' },
];

export default function Course() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("course_auth") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (password === PASS) {
      sessionStorage.setItem("course_auth", "true");
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("course_auth");
    setIsAuthenticated(false);
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#1a1c1e] to-[#2c3e50] flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-10 rounded-3xl w-full max-w-md text-center shadow-2xl"
        >
          <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
            <Lock size={40} />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Student Access</h2>
          <p className="text-gray-500 mb-8 text-sm">
            Please enter the access code provided in your confirmation email.
          </p>
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full p-4 border-2 border-gray-100 rounded-xl text-center text-lg focus:outline-none focus:border-blue-600 transition-colors mb-6"
            />
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-extrabold text-lg hover:bg-blue-700 transition-all shadow-lg"
            >
              Unlock Portal
            </button>
          </form>
          {error && (
            <p className="text-red-500 mt-4 font-bold animate-pulse">Invalid access code.</p>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-700 bg-gray-50 min-h-screen pb-20">
      <div className="bg-white border-b border-gray-100 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <div className="font-extrabold text-lg">Surgenor <span className="text-blue-600">Plastering</span></div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-500 font-semibold text-sm hover:text-red-600 transition-colors"
          >
            <LogOut size={18} /> Log Out
          </button>
        </div>
      </div>

      <section className="bg-[#1a1c1e] text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Pre-Course Learning</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Please complete all 6 modules and review the Health & Safety module below.
        </p>
      </section>

      <main className="max-w-4xl mx-auto px-4 -mt-10">
        <div className="bg-white border-l-8 border-blue-600 p-8 rounded-2xl shadow-xl mb-10">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Mandatory Prep</h3>
          <p className="text-gray-600">
            Study all videos and the safety module carefully. A 10-question quiz (80% pass) is required on Day 1.
          </p>
        </div>

        <div className="space-y-10">
          {modules.map((module) => (
            <div key={module.id} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
                <module.icon className="text-blue-600" size={28} />
                Module {module.id}: {module.title}
              </h3>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
                <iframe 
                  src={`https://www.youtube.com/embed/${module.videoId}`} 
                  title={`Module ${module.id}`}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Course Resources & Downloads</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Health & Safety */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <ShieldCheck className="text-blue-600 mb-4" size={40} />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Health & Safety Module</h4>
              <p className="text-gray-500 text-sm mb-6 flex-grow">Essential safety guidelines and procedures for the training site.</p>
              <a 
                href="/site-pdf/health-safety.pdf" 
                download="health-safety.pdf"
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-md"
              >
                <Download size={18} /> Download PDF
              </a>
            </div>

            {/* Starter Kit */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <BookOpen className="text-blue-600 mb-4" size={40} />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Beginner Plastering Starter Kit</h4>
              <p className="text-gray-500 text-sm mb-6 flex-grow">Everything you need to know to get started with your first project.</p>
              <a 
                href="/site-pdf/starter-kit.pdf" 
                download="starter-kit.pdf"
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-md"
              >
                <Download size={18} /> Download PDF
              </a>
            </div>

            {/* Prep Checklist */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <ClipboardCheck className="text-blue-600 mb-4" size={40} />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Prep Checklist</h4>
              <p className="text-gray-500 text-sm mb-6 flex-grow">A step-by-step guide to preparing your workspace for a perfect finish.</p>
              <a 
                href="/site-pdf/prep-checklist.pdf" 
                download="prep-checklist.pdf"
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-md"
              >
                <Download size={18} /> Download PDF
              </a>
            </div>

            {/* Mixing Cheat Sheet */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <FileText className="text-blue-600 mb-4" size={40} />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Mixing Cheat Sheet</h4>
              <p className="text-gray-500 text-sm mb-6 flex-grow">Quick reference for perfect plaster consistency every time.</p>
              <a 
                href="/site-pdf/mixing-cheat-sheet.pdf" 
                download="mixing-cheat-sheet.pdf"
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-md"
              >
                <Download size={18} /> Download PDF
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h4 className="text-xl font-extrabold mb-6 flex items-center gap-2">
              <CheckCircle className="text-blue-600" size={24} /> Day 1 Essentials
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle size={18} className="text-green-500 flex-shrink-0" /> Steel-toecap boots (Mandatory)
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle size={18} className="text-green-500 flex-shrink-0" /> Hair tied back & secured
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle size={18} className="text-green-500 flex-shrink-0" /> Long-sleeved work clothing
              </li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h4 className="text-xl font-extrabold mb-6 flex items-center gap-2">
              <Clock className="text-blue-600" size={24} /> Logistics
            </h4>
            <div className="space-y-4 text-gray-700">
              <p className="flex justify-between border-b border-gray-50 pb-2">
                <strong>Start:</strong> <span>9:00 AM</span>
              </p>
              <p className="flex justify-between border-b border-gray-50 pb-2">
                <strong>Finish:</strong> <span>3:30 PM</span>
              </p>
              <p className="text-sm text-gray-400 mt-4">Belfast, NI Training Site</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
