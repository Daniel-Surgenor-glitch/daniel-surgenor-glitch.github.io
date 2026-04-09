import { Phone, MessageSquare, Mail, Facebook, Instagram, Search, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const contactMethods = [
    { 
      name: 'Call', 
      icon: Phone, 
      href: 'tel:07477650228', 
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    { 
      name: 'WhatsApp', 
      icon: MessageSquare, 
      href: 'https://wa.me/447477650228', 
      bgColor: 'bg-[#25d366]',
      hoverColor: 'hover:bg-[#1ebe57]'
    },
    { 
      name: 'Text', 
      icon: MessageSquare, 
      href: 'sms:+447477650228', 
      bgColor: 'bg-[#34495e]',
      hoverColor: 'hover:bg-[#2c3e50]'
    },
    { 
      name: 'Email', 
      icon: Mail, 
      href: 'mailto:surgenorplastering@gmail.com', 
      bgColor: 'bg-[#7f8c8d]',
      hoverColor: 'hover:bg-[#707b7c]'
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: 'https://www.facebook.com/surgenorplastering/', 
      bgColor: 'bg-[#1877f2]',
      hoverColor: 'hover:bg-[#166fe5]'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://www.instagram.com/surgenorplastering/', 
      bgColor: 'bg-[#e1306c]',
      hoverColor: 'hover:bg-[#d62976]'
    },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-gray-50 py-16 px-4 text-center border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Contact Us</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Expert <span className="font-bold text-blue-600">K-Rend</span>, <span className="font-bold text-blue-600">Skimming</span>, and <span className="font-bold text-blue-600">Wall Removals</span> across Belfast.
        </p>
      </div>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Free Quotes & Enquiries:</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {contactMethods.map((method, index) => (
                <motion.a 
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -5 }}
                  className={`${method.bgColor} ${method.hoverColor} text-white p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-all shadow-lg`}
                >
                  <method.icon size={32} className="mb-3" />
                  <span className="font-bold">{method.name}</span>
                </motion.a>
              ))}
              <motion.a 
                href="https://www.google.com/search?q=surgenor+plastering"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="col-span-2 sm:col-span-3 bg-[#db4437] hover:bg-[#c53727] text-white p-6 rounded-2xl flex items-center justify-center gap-4 transition-all shadow-lg"
              >
                <Search size={32} />
                <span className="font-bold text-lg">View Reviews & Google Profile</span>
              </motion.a>
            </div>

            <div className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-extrabold text-blue-600 mb-6">Our Belfast Services:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'K-Rend Specialists',
                  'Internal Skimming',
                  'Room Knock-throughs',
                  'Plaster Boarding',
                  'Warm Wall Systems',
                  'Fully Insured'
                ].map((service, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 size={20} className="text-blue-600" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map Section */}
          <div className="h-[400px] lg:h-auto min-h-[500px] rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d148454.4069811467!2d-6.075485908615392!3d54.59728500414418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4860f034509748b3%3A0x6ce6a52479f64c12!2sBelfast!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk" 
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
