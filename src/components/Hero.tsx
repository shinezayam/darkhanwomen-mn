'use client';

import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const images = [
    '/images/hero_2_new.jpg?v=4',
    '/images/hero_2_last.jpeg?v=4', 
    '/images/hero_3.jpg?v=4',
    '/images/hero_4.jpg?v=4',
    '/images/hero_5.jpg?v=4',
    '/images/hero_6.jpg?v=4'
  ];

  return (
    <section className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-white py-8 sm:py-0">

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Badge */}
        <div className={`inline-flex items-center space-x-1 sm:space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-lg border border-pink-100 transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-500 rounded-full animate-pulse"></div>
          <span className="text-xs sm:text-sm font-medium text-gray-700">
            {locale === 'mn' ? '1962 оноос хойш' : 'since 1962'}
          </span>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-500 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        {/* Main Headline */}
        <h1 className={`text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-snug sm:leading-tight px-2 transition-all duration-800 delay-200 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700 bg-clip-text text-transparent">
            {locale === 'mn' 
              ? 'ДАРХАН-УУЛ АЙМГИЙН ЭМЭГТЭЙЧҮҮДИЙН ХОЛБОО'
              : 'DARKHAN-UUL WOMEN\'S FEDERATION'
            }
          </span>
        </h1>
        
        {/* Tagline */}
        <div className={`mb-8 sm:mb-12 max-w-5xl mx-auto px-2 transition-all duration-800 delay-300 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg sm:text-2xl lg:text-3xl text-gray-600 leading-relaxed font-light">
            {locale === 'mn'
              ? 'Эртэч, эерэг, эрүүл Дарханы төлөө'
              : 'For a Smart, Active, Healthy Darkhan'
            }
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center mb-8 sm:mb-16 w-full max-w-xs sm:max-w-none mx-auto transition-all duration-700 delay-500 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link href={`/${locale}/donate`} className="w-full sm:w-auto">
            <Button 
              size="lg" 
              className="w-full group bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold px-4 sm:px-6 md:px-10 py-3 sm:py-3 md:py-4 rounded-2xl shadow-sm transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Heart className="w-4 h-4 mr-2" />
                {locale === 'mn' ? 'Хандивлах' : 'Donate'}
              </span>
            </Button>
          </Link>
          
          <Link href={`/${locale}/about`} className="w-full sm:w-auto">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full group border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white font-bold px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-6 rounded-2xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <span className="flex items-center justify-center">
                {locale === 'mn' ? 'Дэлгэрэнгүй' : 'Learn More'}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
        </div>

        {/* Symmetrical Image Grid - Fixed layout */}
        <div className="relative max-w-4xl mx-auto mb-12 sm:mb-16">
          
          {/* Mobile: 2x3 grid - Perfectly symmetrical */}
          <div className="sm:hidden">
            <div className="grid grid-cols-2 gap-3">
              {images.map((src, idx) => (
                <div
                  key={src}
                  className={`relative aspect-square rounded-xl overflow-hidden bg-gray-200 shadow-md transition-all duration-700 ease-out ${
                    mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{
                    transitionDelay: `${idx * 100}ms`
                  }}
                >
                  <img
                    src={src}
                    alt={locale === 'mn' ? 'Үйл ажиллагааны зурак' : 'Activity photo'}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading={idx < 2 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: 3x2 grid - Perfectly symmetrical */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-3 gap-4">
              {images.map((src, idx) => (
                <div
                  key={src}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 shadow-lg transition-all duration-700 ease-out ${
                    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } hover:scale-105 hover:shadow-xl hover:z-10`}
                  style={{
                    transitionDelay: `${idx * 150}ms`
                  }}
                >
                  <img
                    src={src}
                    alt={locale === 'mn' ? 'Үйл ажиллагааны зураг' : 'Activity photo'}
                    className="w-full h-full object-cover transition-transform duration-500"
                    loading={idx < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-2 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 transition-all duration-1000 delay-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex flex-col items-center space-y-1">
            <span className="text-xs text-gray-500 font-medium">
              {locale === 'mn' ? 'Доош гүйлгэх' : 'Scroll Down'}
            </span>
            <div className="w-4 h-6 sm:w-6 sm:h-10 border-2 border-brand-300 rounded-full flex justify-center">
              <div className="w-1 h-1.5 sm:h-3 bg-brand-500 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-5% w-20 h-20 sm:w-32 sm:h-32 bg-brand-50 rounded-full blur-3xl transition-opacity duration-1000 ${
          mounted ? 'opacity-40' : 'opacity-0'
        }`}></div>
        <div className={`absolute bottom-20 right-5% w-24 h-24 sm:w-40 sm:h-40 bg-pink-50 rounded-full blur-3xl transition-opacity duration-1000 delay-500 ${
          mounted ? 'opacity-40' : 'opacity-0'
        }`}></div>
      </div>
    </section>
  );
}
