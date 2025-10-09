'use client';

export const dynamic = 'force-dynamic';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import FeaturedPrograms from '@/components/FeaturedPrograms';
import RecentNews from '@/components/RecentNews';
import Magazines from '@/components/Magazines';
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';

export default function HomePage() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <FeaturedPrograms />
        <Magazines locale={locale} />
        <RecentNews />
      </main>
      <Footer />
    </div>
  );
}
