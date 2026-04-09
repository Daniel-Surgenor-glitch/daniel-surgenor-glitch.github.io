import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isCoursePage = location.pathname === '/course';

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-white selection:bg-blue-100 selection:text-blue-900">
      <header className="bg-white py-4 border-b border-gray-100 sticky top-0 z-[1000] shadow-sm">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <Link to="/" className="font-extrabold text-xl sm:text-2xl tracking-tighter text-black uppercase">
            SURGENOR<span className="text-blue-600">PLASTERING</span>
          </Link>
          
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="hidden md:flex items-center gap-6">
              <Link 
                to="/" 
                className={`text-sm font-semibold transition-colors hover:text-blue-600 ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-900'}`}
              >
                Home
              </Link>
              <Link 
                to="/gallery" 
                className={`text-sm font-semibold transition-colors hover:text-blue-600 ${location.pathname === '/gallery' ? 'text-blue-600' : 'text-gray-900'}`}
              >
                Gallery
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-semibold transition-colors hover:text-blue-600 ${location.pathname === '/about' ? 'text-blue-600' : 'text-gray-900'}`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`text-sm font-semibold transition-colors hover:text-blue-600 ${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-900'}`}
              >
                Contact
              </Link>
            </div>
            
            <a 
              href="tel:07477650228" 
              className="flex items-center gap-2 font-bold text-blue-600 border-2 border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all text-sm sm:text-base whitespace-nowrap"
            >
              <Phone size={18} className="hidden sm:inline" />
              07477 650228
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">SURGENOR PLASTERING</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Expert K-Rend, Internal Skimming, and Structural Wall Removals across Belfast and Northern Ireland.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
             <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all">
              Get a Free Quote
            </Link>
          </div>
          <div className="pt-8 border-t border-gray-50 text-gray-400 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Surgenor Plastering. Fully Insured Specialists. Belfast, NI.
          </div>
        </div>
      </footer>
    </div>
  );
}
