'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Card, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getNewsData } from '@/data/news';

export default function RecentNews() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';

  const allNews = getNewsData(locale);
  const news = allNews.slice(0, 6); // Show first 6 news items

  return (
    <section className="section-spacing bg-white">
      <div className="container-max container-spacing">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            {locale === 'mn' ? 'Мэдээ мэдээлэл' : 'Latest News'}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {locale === 'mn'
              ? 'Бидний хэрэгжүүлж буй хөтөлбөр, арга хэмжээ, түүхүүд'
              : 'Updates from our programs, events and community stories'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-stretch">
          {news.map((item) => (
            <Link key={item.id} href={`/${locale}/news/${item.id}`} className="block">
              <Card className="overflow-hidden rounded-2xl shadow-lg border-0 hover:-translate-y-1 transition-transform h-full flex flex-col cursor-pointer">
                <div className="aspect-[16/9] relative overflow-hidden">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-brand-50 to-white" />
                )}
              </div>
                <div className="p-6 bg-white flex flex-col flex-grow">
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-3">{item.title}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{item.excerpt}</p>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                    <Button variant="outline" className="text-sm px-5 py-2 border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white rounded-xl w-full transition-all duration-300">{locale === 'mn' ? 'Дэлгэрэнгүй' : 'Read More'}</Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Link href={`/${locale}/news`}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-bold px-12 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group border-0"
            >
              <span className="flex items-center">
                {locale === 'mn' ? 'Бүх мэдээг харах' : 'View All News'}
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}