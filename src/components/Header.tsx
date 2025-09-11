'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  
  // Extract locale from pathname
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';

  // Close language menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Simplified navigation - no dropdowns, just essential pages
  const navigationItems = [
    {
      name: locale === 'mn' ? 'Бидний тухай' : 'About',
      href: `/${locale}/about`,
    },
    {
      name: locale === 'mn' ? 'Хөтөлбөрүүд' : 'Programs',
      href: `/${locale}/programs`,
    },
    {
      name: locale === 'mn' ? 'Сургалт' : 'Training',
      href: `/${locale}/training`,
    },
    {
      name: locale === 'mn' ? 'Мэдээ' : 'News',
      href: `/${locale}/news`,
    },
    {
      name: locale === 'mn' ? 'Оролцох' : 'Get Involved',
      href: `/${locale}/get-involved`,
    },
    {
      name: locale === 'mn' ? 'Холбоо' : 'Contact',
      href: `/${locale}/contact`,
    }
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };


  return (
    <header className="bg-white/95 backdrop-blur-xl shadow-sm border-b border-pink-100/50 sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 container-spacing">
          {/* Modern Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-[12px] overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-200 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt={locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation'}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-200">
                {locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation'}
              </h1>
            </div>
          </Link>

          {/* Modern Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-[6px] text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-pink-600 bg-pink-50'
                    : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Modern Right side - Language, Donate */}
          <div className="flex items-center space-x-4">
            {/* Enhanced language switcher with flags */}
            <div className="relative" ref={languageMenuRef}>
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-pink-600 bg-pink-50 rounded-[6px] transition-all duration-200 border border-pink-200 group"
              >
                <span className="text-lg">
                  {locale === 'mn' ? '🇲🇳' : '🇺🇸'}
                </span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isLanguageMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Language dropdown menu */}
              {isLanguageMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl border border-pink-200/50 rounded-[8px] shadow-xl z-50 overflow-hidden">
                  <Link
                    href={pathname.replace(/^\/[a-z]{2}/, '/mn')}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      locale === 'mn' 
                        ? 'bg-pink-50 text-pink-600 border-l-2 border-pink-500' 
                        : 'text-gray-700 hover:bg-pink-50/50 hover:text-pink-600'
                    }`}
                    onClick={() => setIsLanguageMenuOpen(false)}
                  >
                    <span className="text-lg">🇲🇳</span>
                    <div>
                      <div className="font-semibold">Монгол</div>
                      <div className="text-xs text-gray-500">Mongolian</div>
                    </div>
                  </Link>
                  <Link
                    href={pathname.replace(/^\/[a-z]{2}/, '/en')}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      locale === 'en' 
                        ? 'bg-pink-50 text-pink-600 border-l-2 border-pink-500' 
                        : 'text-gray-700 hover:bg-pink-50/50 hover:text-pink-600'
                    }`}
                    onClick={() => setIsLanguageMenuOpen(false)}
                  >
                    <span className="text-lg">🇺🇸</span>
                    <div>
                      <div className="font-semibold">English</div>
                      <div className="text-xs text-gray-500">English</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            
            <Link href={`/${locale}/donate`}>
              <Button 
                className="btn-primary group"
              >
                <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                {locale === 'mn' ? 'Хандивлах' : 'Donate'}
              </Button>
            </Link>

            {/* Modern mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-[6px] text-gray-700 hover:text-pink-600 hover:bg-pink-50/50 transition-all duration-200 border border-transparent hover:border-pink-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Modern Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-pink-100/50 bg-white/95 backdrop-blur-xl">
            <nav className="container-spacing py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 rounded-[6px] text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-pink-600 bg-pink-50 border-l-2 border-pink-500'
                      : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50/50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="border-t border-pink-100/50 pt-4 mt-4">
                <div className="text-sm font-medium text-gray-500 mb-3 px-4">
                  {locale === 'mn' ? 'Хэл сонгох' : 'Select Language'}
                </div>
                <div className="space-y-2">
                  <Link
                    href="/mn"
                    className={`flex items-center space-x-3 px-4 py-3 rounded-[6px] text-base font-medium transition-all duration-200 ${
                      locale === 'mn' 
                        ? 'text-pink-600 bg-pink-50 border-l-2 border-pink-500' 
                        : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50/50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-xl">🇲🇳</span>
                    <div>
                      <div className="font-semibold">Монгол</div>
                      <div className="text-xs text-gray-500">Mongolian</div>
                    </div>
                  </Link>
                  <Link
                    href="/en"
                    className={`flex items-center space-x-3 px-4 py-3 rounded-[6px] text-base font-medium transition-all duration-200 ${
                      locale === 'en' 
                        ? 'text-pink-600 bg-pink-50 border-l-2 border-pink-500' 
                        : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50/50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-xl">🇺🇸</span>
                    <div>
                      <div className="font-semibold">English</div>
                      <div className="text-xs text-gray-500">English</div>
                    </div>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}