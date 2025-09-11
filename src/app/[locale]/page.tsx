'use client';

export const dynamic = 'force-dynamic';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import FeaturedPrograms from '@/components/FeaturedPrograms';
import RecentNews from '@/components/RecentNews';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <FeaturedPrograms />
        <RecentNews />
      </main>
      <Footer />
    </div>
  );
}
