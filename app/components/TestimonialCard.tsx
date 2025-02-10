'use client';

import { motion } from 'framer-motion';

export interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
}

export default function TestimonialCard({ name, location, text }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">👤</span>
          </div>
          <div>
            <h4 className="font-bold text-lg text-right">{name}</h4>
            <p className="text-gray-600 text-right">{location}</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed text-right">{text}</p>
      </div>
      <div className="flex justify-end">
        <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
      </div>
    </motion.div>
  );
} 