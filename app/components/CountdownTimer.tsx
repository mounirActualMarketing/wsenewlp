'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-8 text-center">
      <h3 className="text-xl font-bold mb-4">⏳ العرض ينتهي خلال:</h3>
      <div className="flex justify-center gap-4 text-2xl font-bold">
        <motion.div whileHover={{ scale: 1.1 }} className="bg-blue-900 text-white px-4 py-2 rounded-lg">
          {timeLeft.days} أيام
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="bg-blue-800 text-white px-4 py-2 rounded-lg">
          {timeLeft.hours} ساعة
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="bg-blue-700 text-white px-4 py-2 rounded-lg">
          {timeLeft.minutes} دقيقة
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          {timeLeft.seconds} ثانية
        </motion.div>
      </div>
    </div>
  );
} 