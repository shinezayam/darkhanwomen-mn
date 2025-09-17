'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';

  const quickLinks = [
    { name: locale === 'mn' ? 'Нүүр' : 'Home', href: `/${locale}` },
    { name: locale === 'mn' ? 'Бидний тухай' : 'About', href: `/${locale}/about` },
    { name: locale === 'mn' ? 'Хөтөлбөрүүд' : 'Programs', href: `/${locale}/programs` },
    { name: locale === 'mn' ? 'Сургалт' : 'Training', href: `/${locale}/training` },
    { name: locale === 'mn' ? 'Мэдээ' : 'News', href: `/${locale}/blog` },
    { name: locale === 'mn' ? 'Оролцох' : 'Get Involved', href: `/${locale}/get-involved` },
    { name: locale === 'mn' ? 'Холбоо' : 'Contact', href: `/${locale}/contact` },
  ];

  const legalLinks = [
    { name: locale === 'mn' ? 'Нууцлалын бодлого' : 'Privacy Policy', href: `/${locale}/privacy` },
    { name: locale === 'mn' ? 'Үйлчилгээний нөхцөл' : 'Terms of Service', href: `/${locale}/terms` },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Modern Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/logo.png"
                    alt={locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation'}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display">
                  {locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation'}
                </h3>
                <p className="text-gray-400 text-sm font-medium tracking-wide">
                  {locale === 'mn' ? 'Дархан-Уул аймаг' : 'Darkhan-Uul Province'}
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              {locale === 'mn'
                ? '1962 оноос хойш эмэгтэйчүүдийн эрхийг хамгаалах, тэдний хөгжилд хувь нэмэр оруулах зорилготойгоор ажиллаж байна.'
                : 'Working since 1962 to protect women\'s rights and contribute to their development and empowerment.'
              }
            </p>

            {/* Modern Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-300 hover:text-pink-400 transition-colors duration-300">
                <div className="w-10 h-10 bg-pink-500/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-pink-400" />
                </div>
                <span className="font-medium">
                  {locale === 'mn' 
                    ? 'Эмэгтэйчүүдийн ордон, Дархан сум'
                    : 'Women\'s Palace, Darkhan District'
                  }
                </span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300 hover:text-pink-400 transition-colors duration-300">
                <div className="w-10 h-10 bg-pink-500/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <div className="font-medium">77358486, 99017277, 99003897</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-gray-300 hover:text-pink-400 transition-colors duration-300">
                <div className="w-10 h-10 bg-pink-500/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <div className="font-medium">info@darkhanwomen.mn</div>
                  <div className="font-medium">darkhanwomenfederation@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-gray-300 hover:text-pink-400 transition-colors duration-300">
                <div className="w-10 h-10 bg-pink-500/20 rounded-xl flex items-center justify-center">
                  <Facebook className="w-5 h-5 text-pink-400" />
                </div>
                <a 
                  href="https://www.facebook.com/WomensFederationOfDarkhanUulProvince" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium hover:text-pink-400 transition-colors duration-300"
                >
                  {locale === 'mn' ? 'Дархан-Уул аймгийн эмэгтэйчүүдийн холбоо' : 'Darkhan-Uul Women\'s Federation'}
                </a>
              </div>
            </div>
          </div>

          {/* Modern Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 font-display">
              {locale === 'mn' ? 'Хурдан холбоосууд' : 'Quick Links'}
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 font-medium hover:translate-x-2 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Modern Get Involved */}
          <div>
            <h4 className="text-xl font-bold mb-8 font-display">
              {locale === 'mn' ? 'Оролцох' : 'Get Involved'}
            </h4>
            <ul className="space-y-4 mb-8">
              <li>
                <Link 
                  href={`/${locale}/donate`}
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 font-medium hover:translate-x-2 transform inline-block"
                >
                  {locale === 'mn' ? 'Хандивлах' : 'Donate'}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/get-involved`}
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 font-medium hover:translate-x-2 transform inline-block"
                >
                  {locale === 'mn' ? 'Сайн дурын ажил' : 'Volunteer'}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/get-involved`}
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 font-medium hover:translate-x-2 transform inline-block"
                >
                  {locale === 'mn' ? 'Хамтрагч болох' : 'Partner With Us'}
                </Link>
              </li>
            </ul>

            {/* Modern Social Media */}
            <div>
              <h5 className="text-sm font-bold mb-6 text-gray-400 tracking-wide uppercase">
                {locale === 'mn' ? 'Сошиал медиа' : 'Social Media'}
              </h5>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-pink-500 transition-all duration-300 hover:scale-110 shadow-lg">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-pink-500 transition-all duration-300 hover:scale-110 shadow-lg">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-pink-500 transition-all duration-300 hover:scale-110 shadow-lg">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Bottom Section */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 font-medium">
              © 2025 {locale === 'mn' ? 'Эмэгтэйчүүдийн холбоо' : 'Women\'s Federation'}. 
              {locale === 'mn' ? 'Бүх эрх хуулиар хамгаалагдсан.' : 'All rights reserved.'} Designed by{' '}
              <a
                href="https://portfolio-sage-xi-54.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
              >
                Shinezaya Myagmar
              </a>
            </div>
            
            <div className="flex space-x-8">
              {legalLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}