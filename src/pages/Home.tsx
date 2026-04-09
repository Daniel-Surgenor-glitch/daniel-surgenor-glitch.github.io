import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Chris Fearon",
    text: "Danny was prompt to respond and attend to quote for the work. He followed up quickly with a written quote, with transparent pricing and availability to start. He arrived on time and work was complete within the agreed timeframe.",
    date: "November 13, 2023"
  },
  {
    name: "Gareth Barker",
    text: "Had Daniel and Carter in to skim a kitchen ceiling today.. great communication and arrived on time, very tidy work. Will definitely be using you guys again. Thanks",
    date: "March 1, 2023"
  },
  {
    name: "Conor O'Hare",
    text: "Had Daniel in recently to block up a fireplace and skim the rest of the walls. Did a very clean job, has freshened up the walls amazingly. A rare trait with tradespeople today I'm finding.",
    date: "January 26, 2023"
  },
  {
    name: "Glenn Archer",
    text: "Danny recently skimmed our hall, landing and stairs. He turned up when he said he would, a dying art! The standard of finish on the walls was excellent. 5 out of 5 stars.",
    date: "May 17, 2025"
  },
  {
    name: "Nicole McLaughlin",
    text: "Amazing customer service, very quick to respond to all queries! Small room reskimmed today and it looks amazing. Very happy with the outcome.",
    date: "January 22, 2024"
  },
  {
    name: "Kathy Simpson",
    text: "Daniel did a great job plastering a wall in my house. He came he said he would, despite the bad weather. He also cleaned up after him. I would certainly recommend him.",
    date: "January 21, 2023"
  }
];

export default function Home() {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full bg-black flex items-center justify-center overflow-hidden">
        <img 
          src="/site-image/hero.jpg" 
          className="absolute inset-0 w-full h-full object-cover object-bottom opacity-70"
          alt="Belfast Plastering Experts"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-white text-center px-4 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 drop-shadow-2xl"
          >
            Belfast's Rendering & <br className="hidden md:block" /> Plastering Specialists
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl mb-10 drop-shadow-lg font-medium"
          >
            Expert K-Rend, Monocouche Rendering, and Internal Skimming.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-700 hover:-translate-y-1 transition-all inline-block shadow-xl"
            >
              Request A Free Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section - MOVED UP */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: External Rendering */}
          <motion.div 
            whileHover={{ scale: 1.02, translateY: -5 }}
            className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-blue-600"
          >
            <img 
              src="/site-image/card-1.jpg" 
              alt="External Rendering" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative h-full p-10 flex flex-col justify-end">
              <div className="group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-2xl font-bold mb-4 text-white">External Rendering</h3>
                <p className="text-gray-200 leading-relaxed">
                  Specialists in K-Rend Belfast and weatherproof rendering systems. Durable finishes that protect and beautify your home.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Internal Plastering */}
          <motion.div 
            whileHover={{ scale: 1.02, translateY: -5 }}
            className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-blue-600"
          >
            <img 
              src="/site-image/card-2.jpg" 
              alt="Internal Plastering" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative h-full p-10 flex flex-col justify-end">
              <div className="group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-2xl font-bold mb-4 text-white">Internal Plastering</h3>
                <p className="text-gray-200 leading-relaxed">
                  Expert skimming for a flawless, mirror-smooth finish every time. Perfect preparation for high-end decoration.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Plastering Course */}
          <motion.div 
            whileHover={{ scale: 1.02, translateY: -5 }}
            className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg cursor-pointer bg-blue-600"
          >
            <img 
              src="/site-image/card-3.jpg" 
              alt="Plastering Course" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative h-full p-10 flex flex-col justify-end">
              <div className="group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-2xl font-bold mb-4 text-white">Plastering Course</h3>
                <p className="text-gray-200 leading-relaxed">
                  Offering high-quality in-person and online plastering courses. Learn from the experts and master the trade.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Marquee Section */}
      <section className="py-20 bg-gray-50 overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">What Our Customers Say</h2>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-yellow-400" size={24} />
            ))}
          </div>
        </div>
        
        <div className="relative flex">
          <motion.div 
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: [0, -1920] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div 
                key={index} 
                className="inline-block w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 whitespace-normal"
              >
                <Quote className="text-blue-100 mb-4" size={32} />
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-gray-900">{review.name}</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest">{review.date}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dark CTA Section - MOVED DOWN */}
      <section className="bg-[#1a1c1e] py-20 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Already Booked?</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10">
            Access your full course here.
          </p>
          <Link 
            to="/course" 
            className="bg-white text-[#1a1c1e] px-10 py-4 rounded-md font-extrabold text-lg hover:bg-gray-100 transition-all inline-block"
          >
            Click for Course Information
          </Link>
        </div>
      </section>
    </div>
  );
}
