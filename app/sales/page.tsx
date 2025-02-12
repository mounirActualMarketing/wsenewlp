'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BsCheckCircleFill, BsWhatsapp, BsShieldCheck, BsCreditCard } from "react-icons/bs";
import { FaGraduationCap, FaUsers, FaTrophy } from "react-icons/fa";
import Image from "next/image";
import dynamic from "next/dynamic";

const CountdownTimer = dynamic(() => import("../components/CountdownTimer"), {
  ssr: false
});

const plans = [
  {
    name: "الخطة الأساسية",
    originalPrice: 1997,
    price: 997,
    features: [
      "دروس تفاعلية غير محدودة",
      "عضوية Speak+ مجانية",
      "دعم فني على مدار الساعة",
      "شهادة إتمام معتمدة"
    ],
    mostPopular: false,
    color: "#0f20a7"
  },
  {
    name: "خطة VIP",
    originalPrice: 3997,
    price: 1997,
    popular: true,
    features: [
      "جميع مميزات الخطة الأساسية",
      "جلسات تدريب فردية أسبوعية",
      "إرشاد أكاديمي ومهني",
      "أولوية الحجز للفصول الدراسية",
      "فرصة مضاعفة للفوز بالجوائز الكبرى"
    ],
    mostPopular: true,
    color: "#df3f41"
  },
  {
    name: "خطة العائلة",
    originalPrice: 5997,
    price: 2997,
    features: [
      "3 حسابات VIP كاملة",
      "خصم 30% على كل حساب إضافي",
      "جلسات تدريب جماعية خاصة",
      "دعم مخصص للعائلة",
      "هدايا حصرية للعائلة"
    ],
    mostPopular: false,
    color: "#0f20a7"
  }
];

const socialProof = [
  { number: "15,000+", text: "طالب نشط" },
  { number: "98%", text: "نسبة رضا الطلاب" },
  { number: "4.9/5", text: "تقييم على جوجل" }
];

const testimonials = [
  {
    name: "محمد السيد",
    role: "مدير تنفيذي",
    text: "بفضل وول ستريت إنجلش، تمكنت من تحسين مهاراتي في اللغة الإنجليزية وحصلت على ترقية في عملي.",
    image: "/testimonial1.jpg"
  },
  {
    name: "سارة أحمد",
    role: "طالبة جامعية",
    text: "المدربون محترفون جداً والمنهج ممتاز. أنصح به بشدة لكل من يريد تعلم الإنجليزية بشكل احترافي.",
    image: "/testimonial2.jpg"
  }
];

export default function SalesPage() {
  const [remainingSpots, setRemainingSpots] = useState(15);
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    // Simulate decreasing spots
    const spotInterval = setInterval(() => {
      setRemainingSpots(prev => Math.max(prev - 1, 3));
    }, 300000); // Every 5 minutes

    // Simulate active users
    setActiveUsers(Math.floor(Math.random() * (350 - 280) + 280));
    const userInterval = setInterval(() => {
      setActiveUsers(Math.floor(Math.random() * (350 - 280) + 280));
    }, 30000);

    return () => {
      clearInterval(spotInterval);
      clearInterval(userInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0f20a7] to-[#df3f41]">
              ابدأ رحلتك نحو إتقان اللغة الإنجليزية اليوم
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              انضم إلى أكثر من 15,000 طالب يتعلمون معنا. احجز مقعدك قبل نفاد العرض!
            </p>
            <CountdownTimer />
          </motion.div>
        </div>

        {/* Social Proof Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialProof.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#0f20a7] mb-2">{item.number}</div>
                <div className="text-gray-600">{item.text}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Active Users Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-[#0f20a7]/5 rounded-full px-6 py-3 mb-8 text-center"
        >
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[#0f20a7]">
              {activeUsers} شخص يتصفح هذه الصفحة الآن | باقي {remainingSpots} مقعد فقط بالسعر الحالي
            </span>
          </div>
        </motion.div>

        {/* Pricing Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                plan.mostPopular ? 'ring-2 ring-[#df3f41]' : ''
              }`}
            >
              {plan.mostPopular && (
                <div className="bg-[#df3f41] text-white text-center py-2 font-bold">
                  الأكثر شعبية
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-right">{plan.name}</h3>
                <div className="mb-6 text-right">
                  <span className="text-gray-400 line-through text-lg">
                    {plan.originalPrice} ريال
                  </span>
                  <div className="text-4xl font-bold" style={{ color: plan.color }}>
                    {plan.price} ريال
                    <span className="text-lg text-gray-500">/سنوياً</span>
                  </div>
                  <div className="text-[#df3f41] font-bold">
                    وفر {plan.originalPrice - plan.price} ريال!
                  </div>
                </div>
                <ul className="space-y-4 mb-8 text-right">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-end gap-2">
                      <span>{feature}</span>
                      <BsCheckCircleFill className="text-green-500 flex-shrink-0" />
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-full text-center text-white font-bold
                    ${plan.mostPopular ? 'bg-[#df3f41] hover:bg-[#df3f41]/90' : 'bg-[#0f20a7] hover:bg-[#0f20a7]/90'}`}
                  onClick={() => window.location.href = '/thank-you'}
                >
                  ابدأ الآن
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <BsShieldCheck className="text-4xl text-[#0f20a7] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">ضمان استرداد الأموال</h3>
            <p className="text-gray-600">100% ضمان استرداد خلال 30 يوم</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <BsCreditCard className="text-4xl text-[#0f20a7] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">دفع آمن</h3>
            <p className="text-gray-600">جميع المعاملات مشفرة ومؤمنة</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <FaGraduationCap className="text-4xl text-[#0f20a7] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">شهادة معتمدة</h3>
            <p className="text-gray-600">معترف بها دولياً</p>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">ماذا يقول طلابنا؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{testimonial.role}</p>
                    <p className="text-gray-700">{testimonial.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-[#0f20a7] to-[#df3f41] text-white p-8 rounded-2xl max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-4">
              لا تفوت الفرصة! ابدأ رحلتك اليوم
            </h2>
            <p className="mb-6">
              احصل على خصم 50% لفترة محدودة + 3 جلسات تدريب فردية مجانية
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0f20a7] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              onClick={() => window.location.href = '/thank-you'}
            >
              ابدأ الآن
            </motion.button>
          </motion.div>
        </div>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/your-number"
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-8 left-8 bg-green-500 text-white p-4 rounded-full shadow-lg z-50"
        >
          <BsWhatsapp className="text-2xl" />
        </motion.a>
      </div>
    </div>
  );
} 