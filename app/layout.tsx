import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-kufi',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Wall Street English - Saudi Arabia",
  description: "Learn English with confidence at Wall Street English Saudi Arabia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${notoKufiArabic.variable} font-noto antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
