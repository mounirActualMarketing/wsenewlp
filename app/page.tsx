'use client';

import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { BsWhatsapp, BsCheckCircleFill } from "react-icons/bs";
import { FaPlane, FaFootballBall, FaMobile } from "react-icons/fa";
import type { TestimonialCardProps } from '../components/TestimonialCard';
import { BackgroundBeamsWithCollision } from './components/ui/BackgroundBeamsWithCollision';
import Image from 'next/image';

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
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-noto">
      {/* Hero Section */}
      <BackgroundBeamsWithCollision>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-10 text-right">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white space-y-4"
            >
              <span className="block leading-tight">تعلم الإنجليزية بثقة</span>
              <div className="relative inline-block">
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-violet-200 via-white to-violet-200 leading-relaxed">
                  واحصل على مكافآت حصرية!
                </span>
              </div>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-white/90 text-lg border border-white/10"
            >
              ⚡ عرض لفترة محدودة – سجل اليوم و استفد من خصومات وعروض لا تُفوّت!
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white text-xl px-12 py-4 rounded-full shadow-lg font-bold overflow-hidden relative transition-all duration-300 hover:shadow-2xl"
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
                className="bg-[linear-gradient(to_right,#123256,#de4146,#123256,#de4146,#123256)] absolute z-0 inset-0 w-[400%]"
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 rounded-3xl transform rotate-6 opacity-20" />
            <div className="relative h-full rounded-2xl overflow-hidden">
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
      </BackgroundBeamsWithCollision>

      {/* Container for all content below hero */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Value Proposition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Content Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-right">
                🌟 استثمر في مستقبلك مع وول ستريت إنجلش – نظام تعلم اللغة الإنجليزية الأكثر ثقة في العالم
              </p>
              
              {/* Target Audience */}
              <div dir="rtl">
                <h2 className="text-2xl font-bold mb-4">🎯 لمن هذا العرض؟</h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-lg">
                    <BsCheckCircleFill className="text-green-500 flex-shrink-0" />
                    <span>الأفراد الطموحين الذين يسعون إلى تطوير مسيرتهم المهنية والدراسية</span>
                  </li>
                  <li className="flex items-center gap-2 text-lg">
                    <BsCheckCircleFill className="text-green-500 flex-shrink-0" />
                    <span>المهنيين الذين يرغبون في التحدث بثقة وإتقان</span>
                  </li>
                  <li className="flex items-center gap-2 text-lg">
                    <BsCheckCircleFill className="text-green-500 flex-shrink-0" />
                    <span>الطلاب الذين يستعدون للاختبارات الدولية والتفوق الأكاديمي</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-xl shadow-lg order-1 md:order-2"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/sectiontwo.jpg"
                alt="طالب يتعلم اللغة الإنجليزية"
                className="object-cover"
                fill
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Prizes Section */}
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="bg-gradient-to-r from-violet-600 to-purple-800 text-white p-8 rounded-xl mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-right">🎁 جوائز حصرية وفرص للفوز بجوائز كبرى!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-end gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <span>هاتف آيفون 16</span>
              <FaMobile className="text-2xl" />
            </div>
            <div className="flex items-center justify-end gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <span>تذكرتان سفر إلى لندن</span>
              <FaPlane className="text-2xl" />
            </div>
            <div className="flex items-center justify-end gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <span>تذاكر VIP لحضور مباريات كرة القدم</span>
              <FaFootballBall className="text-2xl" />
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-right">🎓 لماذا تختار وول ستريت إنجلش؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div dir="rtl">
                <h3 className="text-xl font-bold mb-4">🔹 تعلم مخصص ومرونة لا حدود لها</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <BsCheckCircleFill className="text-green-500 flex-shrink-0" />
                    <span>ادرس في أي وقت ومن أي مكان</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BsCheckCircleFill className="text-green-500 flex-shrink-0" />
                    <span>دروس تفاعلية مباشرة 24/7</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BsCheckCircleFill className="text-green-500 flex-shrink-0" />
                    <span>حجز فصول VIP أولًا</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div dir="rtl">
                <h3 className="text-xl font-bold mb-4">🔹 امتيازات عضوية حصرية</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <BsCheckCircleFill className="text-green-500 flex-shrink-0" />
                    <span>عضوية Speak+ مجانًا</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BsCheckCircleFill className="text-green-500 flex-shrink-0" />
                    <span>جلسات تدريب فردية 1-1</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BsCheckCircleFill className="text-green-500 flex-shrink-0" />
                    <span>إرشاد أكاديمي ومهني</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <CountdownTimer />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white text-xl px-12 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 font-bold"
          >
            👉 سجل الآن وابدأ رحلتك
          </motion.button>
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
    </div>
  );
}
