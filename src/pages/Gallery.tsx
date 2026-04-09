import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const galleryItems = [
  { src: 'rendering_new.jpg', label: 'External Rendering' },
  { src: 'skimming_pro.jpg', label: 'Internal Skimming' },
  { src: 'warm_wall.jpg', label: 'Warm Wall System' },
  { src: 'render_wall1.jpg', label: 'External Render Wall' },
  { src: 'Loft_replaster_1.jpg', label: 'Loft Re-plastering' },
  { src: 'Damp_repair_1.jpg', label: 'Damp Repair & Finish' },
  { src: 'Fireplace_Repair_1.jpg', label: 'Fireplace Restoration' },
  { src: 'Shed_plaster_1.jpg', label: 'Outbuilding Plastering' },
  { src: 'Room_replaster_1.jpg', label: 'Full Room Re-plaster' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-gray-50 py-16 px-4 text-center border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Our Portfolio</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Expert craftsmanship in rendering, skimming, and structural restoration across Belfast.
        </p>
      </div>

      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative h-[350px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
              onClick={() => setSelectedImage(item.src)}
            >
              <img 
                src={`/site-image/${item.src}`} 
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-blue-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={48} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={`/site-image/${selectedImage}`} 
              className="max-w-full max-h-full rounded-lg border-4 border-white shadow-2xl"
              alt="Full view"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
