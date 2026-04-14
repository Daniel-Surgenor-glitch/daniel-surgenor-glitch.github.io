import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Video, Home as HomeIcon, Users, Target, ArrowRight } from 'lucide-react';

export default function CourseInfo() {
  return (
    <div className="animate-in fade-in duration-700">
      <Helmet>
        <title>Plastering Course Belfast | Learn Plastering & Skimming | Surgenor Plastering</title>
        <meta name="description" content="Master the art of plastering with our 3-day hands-on course in Belfast. Learn skimming, rendering, and plasterboarding from experts. Perfect for beginners and DIYers." />
        <link rel="canonical" href="https://www.surgenorplastering.com/plastering-course" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-[#1a1c1e] text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Learn Plastering – <span className="text-blue-500">From Beginner to Real Results</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Our plastering course is designed to take you from complete beginner to confidently working on your own walls — with a structured mix of online learning and hands-on training.
          </motion.p>
        </div>
      </section>

      {/* Already Booked CTA */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 font-bold mb-4 uppercase tracking-widest text-sm">Already booked?</p>
          <Link 
            to="/course" 
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-extrabold text-lg hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all inline-flex items-center gap-3 shadow-lg"
          >
            Find your course here <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Online Training */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
          >
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-blue-600">
              <Video size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Start With the Fundamentals (Online Training)</h3>
            <p className="text-gray-600 mb-8">Before any in-person training, you’ll complete our Plastering Foundations Course. This means you arrive prepared, so we can focus fully on practical skills.</p>
            
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wider">This covers:</h4>
              {[
                "Tools and materials",
                "Mixing plaster correctly",
                "Basic application techniques",
                "Common mistakes to avoid"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 size={20} className="text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hands-On Training */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-600 p-8 md:p-12 rounded-3xl shadow-xl text-white"
          >
            <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <HomeIcon size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">3 Days Hands-On at Your Property</h3>
            <p className="text-blue-50 mb-8">We come to your home and work with you over three full days of practical training. All tools and materials are provided.</p>
            
            <div className="space-y-4">
              <h4 className="font-bold uppercase text-sm tracking-wider text-blue-200">Together, we will:</h4>
              {[
                "Prepare surfaces properly",
                "Apply plaster step-by-step",
                "Learn correct technique in real time",
                "Work on your own walls",
                "Complete a room while you learn"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-blue-200" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Learn by Doing & Who It's For */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="md:col-span-2 bg-gray-50 p-10 rounded-3xl border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <Target className="text-blue-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Learn by Doing</h3>
            </div>
            <p className="text-gray-600 mb-8 text-lg">This course is built around real results — not just theory. By the end, you’ll have:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Hands-on experience",
                "A completed surface in your home",
                "The confidence to take on your own plastering"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <CheckCircle2 size={20} className="text-blue-600 mt-1" />
                  <span className="font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <Users className="text-blue-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Who It’s For</h3>
            </div>
            <ul className="space-y-4">
              {["Homeowners", "Landlords", "DIY enthusiasts", "Anyone wanting to learn a trade"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-blue-50 p-12 rounded-3xl border border-blue-100">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Ready to Master the Trade?</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
            Spaces are limited as we only train one student at a time to ensure maximum hands-on experience.
          </p>
          <Link 
            to="/contact" 
            className="bg-blue-600 text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl inline-flex items-center gap-3"
          >
            Enquire About Dates <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}
