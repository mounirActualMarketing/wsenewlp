'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f20a7] text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <p className="text-sm">
            © {currentYear} Wall Street English. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
} 