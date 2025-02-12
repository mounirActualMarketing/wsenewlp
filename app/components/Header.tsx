'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-center">
          <Link href="/" className="relative w-48 h-16">
            <Image
              src="/logo.png"
              alt="Wall Street English"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
} 