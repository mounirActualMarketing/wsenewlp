'use client';

import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from "framer-motion";
import { BsWhatsapp, BsCheckCircleFill } from "react-icons/bs";
import { FaPlane, FaFutbol, FaMobile } from "react-icons/fa";
import type { TestimonialCardProps } from '../components/TestimonialCard';
import { BackgroundBeamsWithCollision } from './components/ui/BackgroundBeamsWithCollision';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Dynamically import components with ssr: false to prevent hydration mismatch
const CountdownTimer = dynamic(() => import("../components/CountdownTimer"), { 
  ssr: false,
  loading: () => (
    <div className="mb-8 text-center animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
      <div className="flex justify-center gap-4">
        <div className="h-12 w-24 bg-gray-200 rounded"></div>
        <div className="h-12 w-24 bg-gray-200 rounded"></div>
        <div className="h-12 w-24 bg-gray-200 rounded"></div>
        <div className="h-12 w-24 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
});

const TestimonialCard = dynamic<TestimonialCardProps>(() => import("../components/TestimonialCard"), {
  loading: () => (
    <div className="bg-white p-6 rounded-xl shadow-lg animate-pulse">
      <div className="h-24 bg-gray-200 rounded mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mr-auto"></div>
    </div>
  )
});

const FAQAccordion = dynamic(() => import("../components/FAQAccordion"), {
  loading: () => (
    <div className="space-y-4 animate-pulse">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-16 bg-gray-200 rounded"></div>
      ))}
    </div>
  )
});

export default function Home() {
  const [currentReview, setCurrentReview] = useState({
    name: "أحمد",
    time: "قبل 2 دقيقة",
    text: "تجربة رائعة! تعلمت الكثير في وقت قصير"
  });
  const [showReview, setShowReview] = useState(true);
  const [onlineUsers, setOnlineUsers] = useState(0);

  const reviews = [
    {
      name: "أحمد",
      time: "قبل 2 دقيقة",
      text: "تجربة رائعة! تعلمت الكثير في وقت قصير"
    },
    {
      name: "سارة",
      time: "قبل 5 دقائق",
      text: "المدربين محترفين جداً والمنهج ممتاز"
    },
    {
      name: "فهد",
      time: "قبل 10 دقائق",
      text: "أفضل استثمار في تعليم اللغة الإنجليزية"
    },
    {
      name: "نورة",
      time: "قبل 15 دقيقة",
      text: "الدروس التفاعلية ساعدتني كثيراً في تحسين مهاراتي"
    }
  ];

  useEffect(() => {
    // Set initial online users count
    setOnlineUsers(Math.floor(Math.random() * (350 - 280) + 280));

    // Reviews interval
    const reviewsInterval = setInterval(() => {
      setShowReview(false);
      setTimeout(() => {
        setCurrentReview(reviews[Math.floor(Math.random() * reviews.length)]);
        setShowReview(true);
      }, 1000);
    }, 8000);

    return () => clearInterval(reviewsInterval);
  }, []);

  return (
    <div className="font-noto">
      {/* Hero Section */}
      <BackgroundBeamsWithCollision>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-10 text-right">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white space-y-4">
                  <span className="block leading-tight">تعلم الإنجليزية بثقة</span>
                  <div className="relative inline-block">
                    <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#df3f41] via-white to-[#df3f41] leading-relaxed">
                      واحصل على مكافآت حصرية!
                    </span>
                  </div>
                </h1>
                <p className="text-xl text-white/90">
                  🌟 انضم إلى أكثر من 3 ملايين طالب نجحوا في تحقيق أهدافهم مع وول ستريت إنجلش
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-white/90 text-lg border border-white/10"
              >
                <div className="space-y-4">
                  <p className="font-bold text-xl">⚡ عرض خاص لفترة محدودة</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span>خصم 50% على جميع الباقات</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span>3 جلسات تدريب فردية مجانية</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span>فرصة مضاعفة للفوز بالجوائز الكبرى</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white text-xl px-12 py-4 rounded-full shadow-lg font-bold overflow-hidden relative transition-all duration-300 hover:shadow-2xl w-full md:w-auto"
                onClick={() => window.location.href = '/sales'}
              >
                <span className="relative z-10">👋 ابدأ رحلتك الآن</span>
                <motion.div
                  initial={{ left: 0 }}
                  animate={{ left: "-300%" }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 4,
                    ease: "linear",
                  }}
                  className="bg-[linear-gradient(to_right,#0f20a7,#df3f41,#0f20a7,#df3f41,#0f20a7)] absolute z-0 inset-0 w-[400%]"
                />
              </motion.button>
            </div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f20a7] via-[#df3f41] to-[#0f20a7] rounded-3xl transform rotate-6 opacity-20" />
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image
                  src="/hero.jpg"
                  alt="طالب يتعلم اللغة الإنجليزية"
                  className="object-cover"
                  fill
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      {/* Container for all content below hero */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Modern Stats & Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0f20a7] to-[#df3f41] mb-4">
              نظام تعليمي متكامل يناسب طموحك
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              انضم إلى مجتمع وول ستريت إنجلش واكتشف لماذا يختارنا الطلاب للوصول إلى أهدافهم
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="text-3xl font-bold text-[#0f20a7] mb-2">+3M</div>
              <div className="text-gray-600">طالب حول العالم</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="text-3xl font-bold text-[#df3f41] mb-2">98%</div>
              <div className="text-gray-600">نسبة رضا الطلاب</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="text-3xl font-bold text-[#0f20a7] mb-2">24/7</div>
              <div className="text-gray-600">دعم متواصل</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="text-3xl font-bold text-[#df3f41] mb-2">15+</div>
              <div className="text-gray-600">سنة خبرة</div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#0f20a7]/5 to-[#df3f41]/5 p-8 rounded-2xl shadow-lg border border-[#0f20a7]/20"
            >
              <div className="bg-[#0f20a7]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0f20a7]">تعلم مخصص لأهدافك</h3>
              <p className="text-gray-600">
                منهج تعليمي مصمم خصيصاً لمستواك وأهدافك، مع متابعة مستمرة لتقدمك
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#df3f41]/5 to-[#0f20a7]/5 p-8 rounded-2xl shadow-lg border border-[#df3f41]/20"
            >
              <div className="bg-[#df3f41]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💫</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#df3f41]">مدربون محترفون</h3>
              <p className="text-gray-600">
                نخبة من المدربين المعتمدين دولياً مع خبرة تدريس تتجاوز 10 سنوات
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#0f20a7]/5 to-[#df3f41]/5 p-8 rounded-2xl shadow-lg border border-[#0f20a7]/20"
            >
              <div className="bg-[#0f20a7]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0f20a7]">تقدم سريع</h3>
              <p className="text-gray-600">
                تقنيات تعلم متقدمة تساعدك على تحقيق أهدافك بأسرع وقت ممكن
              </p>
            </motion.div>
          </div>
        </div>

        {/* Prizes Section */}
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="bg-gradient-to-r from-[#0f20a7] to-[#df3f41] text-white p-8 rounded-2xl mb-12 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-8 text-right">🎁 جوائز حصرية تنتظرك!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-4 bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <FaMobile className="text-5xl text-rose-300" />
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">آيفون 16</h3>
                <p className="text-sm text-gray-200">أحدث إصدار من آيفون مع جميع المميزات الحصرية</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-4 bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <FaPlane className="text-5xl text-blue-300" />
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">رحلة إلى لندن</h3>
                <p className="text-sm text-gray-200">تذكرتان + إقامة فندقية لمدة 5 أيام مع برنامج سياحي متكامل</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-4 bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <FaFutbol className="text-5xl text-yellow-300" />
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">تذاكر VIP</h3>
                <p className="text-sm text-gray-200">لحضور أهم مباريات الدوري الإنجليزي في موسم 2024</p>
              </div>
            </motion.div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg mb-4">🎯 فرصتك للفوز تزداد مع كل شهر اشتراك!</p>
            <div className="inline-block bg-white/20 px-6 py-3 rounded-lg backdrop-blur-sm">
              <span className="font-bold">السحب الشهري يوم 15 من كل شهر</span>
            </div>
          </div>
        </motion.div>

        {/* Features Section with Enhanced Design */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-right">🎓 لماذا وول ستريت إنجلش الخيار الأمثل لك؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <div dir="rtl">
                <h3 className="text-2xl font-bold mb-6 text-[#0f20a7]">🔹 تعلم مخصص ومرونة مطلقة</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <BsCheckCircleFill className="text-green-500 flex-shrink-0 text-xl" />
                    <span className="text-lg">دروس تفاعلية على مدار 24/7 تناسب جدولك</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BsCheckCircleFill className="text-green-500 flex-shrink-0 text-xl" />
                    <span className="text-lg">منهج تعليمي مخصص حسب مستواك وأهدافك</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BsCheckCircleFill className="text-green-500 flex-shrink-0 text-xl" />
                    <span className="text-lg">أولوية الحجز في الفصول الخاصة VIP</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <div dir="rtl">
                <h3 className="text-2xl font-bold mb-6 text-[#0f20a7]">🔹 مميزات حصرية للأعضاء</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <BsCheckCircleFill className="text-green-500 flex-shrink-0 text-xl" />
                    <span className="text-lg">عضوية Speak+ المميزة مجاناً</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BsCheckCircleFill className="text-green-500 flex-shrink-0 text-xl" />
                    <span className="text-lg">جلسات تدريب فردية مع أفضل المدربين</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BsCheckCircleFill className="text-green-500 flex-shrink-0 text-xl" />
                    <span className="text-lg">شهادات معتمدة دولياً</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <div className="text-center mb-16 bg-gradient-to-r from-[#0f20a7]/5 to-[#df3f41]/5 p-8 rounded-2xl shadow-lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0f20a7] to-[#df3f41]">
              ابدأ رحلتك نحو إتقان اللغة الإنجليزية اليوم!
            </h2>
            <p className="text-lg mb-8 text-gray-600">
              انضم إلى آلاف الطلاب الذين حققوا أهدافهم مع وول ستريت إنجلش
            </p>
            <CountdownTimer />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#0f20a7] to-[#df3f41] text-white text-xl px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-bold"
              onClick={() => window.location.href = '/sales'}
            >
              👉 سجل الآن واحصل على خصم 50%
            </motion.button>
          </div>
        </div>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-right">⭐ ماذا يقول طلابنا؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              name="عائشة"
              location="جدة"
              text="ساعدني وول ستريت إنجلش في تغيير مسيرتي المهنية! بفضل مرونة التعلم والتدريب الاحترافي، حصلت على وظيفتي الحلم."
            />
            <TestimonialCard
              name="محمد"
              location="الرياض"
              text="أحببت تجربة VIP وجلسات التدريب الفردية! جعلتني أكثر ثقة في التحدث بالإنجليزية."
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-right">🤔 الأسئلة الشائعة</h2>
          <FAQAccordion />
        </section>
      </div>

      {/* WhatsApp Button - Outside container to be fixed to viewport */}
      <motion.a
        href="https://wa.me/your-number"
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 left-8 bg-green-500 text-white p-4 rounded-full shadow-lg z-50"
      >
        <BsWhatsapp className="text-2xl" />
      </motion.a>

      {/* Online Users Counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-50 flex items-center gap-2"
      >
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-sm font-medium text-gray-700">
          {onlineUsers > 0 ? `${onlineUsers} شخص يتصفح الآن` : 'جاري التحميل...'}
        </span>
      </motion.div>

      {/* Recent Reviews Popup */}
      <AnimatePresence mode="wait">
        {showReview && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed bottom-24 left-8 max-w-xs bg-white rounded-lg shadow-lg z-50 p-4"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">👤</span>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <span className="font-semibold">{currentReview.name}</span>
                  <span className="text-sm text-gray-500">{currentReview.time}</span>
                </div>
                <div className="flex text-yellow-400 text-sm mb-1">{'★'.repeat(5)}</div>
                <p className="text-sm text-gray-600">
                  "{currentReview.text}"
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
