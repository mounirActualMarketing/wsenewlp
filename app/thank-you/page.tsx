'use client';

import { motion } from "framer-motion";
import { BsCheckCircleFill, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

const nextSteps = [
  {
    title: "تفعيل حسابك",
    description: "ستصلك رسالة على بريدك الإلكتروني خلال الدقائق القادمة لتفعيل حسابك"
  },
  {
    title: "انضم لمجموعة WhatsApp",
    description: "انضم لمجموعة الدعم المباشر للحصول على المساعدة الفورية والتواصل مع زملائك"
  },
  {
    title: "احجز جلستك الأولى",
    description: "قم بجدولة جلستك التعريفية المجانية مع مرشدك الأكاديمي"
  },
  {
    title: "ابدأ رحلة التعلم",
    description: "استكشف المنصة وابدأ بالدروس التفاعلية المباشرة"
  }
];

const resources = [
  {
    title: "دليل البداية السريعة",
    description: "تعرف على كيفية استخدام المنصة بأقصى فعالية"
  },
  {
    title: "تقويم الفعاليات",
    description: "اطلع على جدول الفعاليات والدورات القادمة"
  },
  {
    title: "مكتبة الموارد",
    description: "اكتشف مجموعتنا الواسعة من المواد التعليمية"
  }
];

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Success Message */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
            <BsCheckCircleFill className="text-6xl text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            🎉 مبروك! تم تسجيلك بنجاح
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            نحن متحمسون لمساعدتك في رحلة تعلم اللغة الإنجليزية
          </p>
        </motion.div>

        {/* Next Steps */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">الخطوات التالية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3 text-right">{step.title}</h3>
                <p className="text-gray-600 text-right">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">موارد مفيدة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-blue-50 p-6 rounded-xl text-right"
              >
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Link
                  href="#"
                  className="text-blue-500 hover:text-blue-600 inline-block"
                >
                  اكتشف المزيد ←
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Support Section */}
        <section className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">نحن هنا لمساعدتك</h2>
            <p className="text-gray-600 mb-6">
              هل لديك أي أسئلة؟ فريق الدعم متواجد على مدار الساعة لمساعدتك
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/your-number"
                className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center gap-2"
              >
                <BsWhatsapp className="text-xl" />
                تواصل معنا
              </motion.a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 