'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BsCheckCircleFill, BsWhatsapp } from "react-icons/bs";

const plans = [
  {
    name: "الخطة الأساسية",
    price: 997,
    features: [
      "دروس تفاعلية غير محدودة",
      "عضوية Speak+ مجانية",
      "دعم فني على مدار الساعة",
      "شهادة إتمام معتمدة"
    ]
  },
  {
    name: "خطة VIP",
    price: 1997,
    popular: true,
    features: [
      "جميع مميزات الخطة الأساسية",
      "جلسات تدريب فردية أسبوعية",
      "إرشاد أكاديمي ومهني",
      "أولوية الحجز للفصول الدراسية",
      "فرصة مضاعفة للفوز بالجوائز الكبرى"
    ]
  },
  {
    name: "خطة العائلة",
    price: 2997,
    features: [
      "3 حسابات VIP كاملة",
      "خصم 30% على كل حساب إضافي",
      "جلسات تدريب جماعية خاصة",
      "دعم مخصص للعائلة",
      "هدايا حصرية للعائلة"
    ]
  }
];

export default function SalesPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-8"></div>
            <div className="aspect-video max-w-4xl mx-auto bg-gray-200 rounded-xl mb-16"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-200 h-96 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-8">
            اكتشف قوة التعلم مع وول ستريت إنجلش
          </h1>
          <div className="aspect-video max-w-4xl mx-auto bg-black rounded-xl overflow-hidden">
            {/* Replace with actual video player */}
            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">
              Video Player Placeholder
            </div>
          </div>
        </motion.div>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">اختر خطتك المثالية</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-center py-2">
                    الأكثر شعبية
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-right">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-6 text-right">
                    {plan.price} ريال
                    <span className="text-lg text-gray-500">/سنوياً</span>
                  </div>
                  <ul className="space-y-4 mb-8">
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
                    onClick={() => setSelectedPlan(index)}
                    className={`w-full py-3 rounded-full text-center ${
                      plan.popular
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    اختر هذه الخطة
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trust Badges */}
        <section className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-8">موثوق به من قبل</h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold">3M+</div>
              <div className="text-gray-600">متعلم</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-gray-600">نسبة الرضا</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-gray-600">دعم متواصل</div>
            </div>
          </div>
        </section>

        {/* Money-back Guarantee */}
        <section className="text-center mb-16">
          <div className="bg-blue-50 p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🔒 ضمان استرداد الأموال</h3>
            <p className="text-lg">
              نحن نثق في جودة خدماتنا. إذا لم تكن راضياً عن تجربتك خلال أول 30 يوماً،
              سنقوم بإرجاع أموالك كاملة دون أي أسئلة.
            </p>
          </div>
        </section>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/your-number"
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg z-50"
        >
          <BsWhatsapp className="text-2xl" />
        </motion.a>
      </div>
    </div>
  );
} 