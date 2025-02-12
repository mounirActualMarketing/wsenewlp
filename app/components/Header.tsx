'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-center">
          <Link href="/" className="relative w-[200px] h-[80px]">
            <Image
              src="/wall-street-english-logo.png"
              alt="Wall Street English"
              fill
              className="object-contain"
              priority
              quality={100}
            />
          </Link>
        </div>
      </div>
    </header>
  );
} 