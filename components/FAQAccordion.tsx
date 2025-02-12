'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'هل يمكنني التسجيل حتى لو كنت مبتدئًا؟',
    answer: 'نعم! دوراتنا مصممة لجميع المستويات، من المبتدئ إلى المتقدم.'
  },
  {
    question: 'ماذا لو فاتتني إحدى الحصص الدراسية؟',
    answer: 'لا مشكلة! يمكنك إعادة الجدولة في أي وقت عبر نظام حجز VIP.'
  },
  {
    question: 'كيف يمكنني الاستفادة من عضوية Speak+ المجانية؟',
    answer: 'ستحصل على الوصول الحصري بمجرد إتمام التسجيل.'
  },
  {
    question: 'هل هناك ضمان لاسترداد الأموال؟',
    answer: 'نعم! نحن نقدم ضمان رضا 100% – تعلم بدون أي مخاطرة!'
  }
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <motion.button
            className="w-full p-4 bg-white hover:bg-gray-50 flex items-center gap-2"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <motion.span
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              className="text-[#df3f41] flex-shrink-0"
            >
              ▼
            </motion.span>
            <span className="font-semibold flex-grow text-[#0f20a7]">{item.question}</span>
          </motion.button>
          
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-[#0f20a7]/5">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion; 