'use client';

import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-pink-100">
          <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">
            {locale === 'mn' ? '1962 оноос хойш' : 'since 1962'}
          </span>
          <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700 bg-clip-text text-transparent">
            {locale === 'mn' 
              ? 'ДАРХАН-УУЛ АЙМГИЙН ЭМЭГТЭЙЧҮҮДИЙН ХОЛБОО'
              : 'DARKHAN-UUL WOMEN\'S FEDERATION'
            }
          </span>
        </h1>
        
        {/* Tagline */}
        <div className="mb-12 max-w-5xl mx-auto">
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 leading-relaxed font-light">
            {locale === 'mn'
              ? 'Эртэч, эерэг, эрүүл Дарханы төлөө'
              : 'For a Smart, Active, Healthy Darkhan'
            }
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link href={`/${locale}/donate`}>
            <Button 
              size="lg" 
              className="btn-primary group bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                <Heart className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                {locale === 'mn' ? 'Хандивлах' : 'Donate Now'}
              </span>
            </Button>
          </Link>
          
          <Link href={`/${locale}/about`}>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-secondary group border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white font-bold px-10 py-6 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center">
                {locale === 'mn' ? 'Дэлгэрэнгүй' : 'Learn More'}
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
        </div>

        {/* Stats removed per request */}

        {/* Image grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
          {['/images/hero_2_new.jpg?v=4','/images/hero_1_new.jpg?v=4','/images/hero_3.jpg?v=4','/images/hero_4.jpg?v=4','/images/hero_5.jpg?v=4','/images/hero_6.jpg?v=4'].map((src, idx) => (
            <div key={src} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200">
              <img
                src={src}
                alt={locale === 'mn' ? 'Үйл ажиллагааны зураг' : 'Activity photo'}
                className="w-full h-full object-cover"
                loading={idx < 3 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-500 font-medium">
              {locale === 'mn' ? 'Доош гүйлгэх' : 'Scroll Down'}
            </span>
            <div className="w-6 h-10 border-2 border-brand-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-brand-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements removed per request */}
    </section>
  );
}
