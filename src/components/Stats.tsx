'use client';

import { usePathname } from 'next/navigation';
import { Users, Target, Heart, Award, TrendingUp, Star, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';

export default function Stats() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ members: 0, projects: 0, years: 0, beneficiaries: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const stats = useMemo(() => [
    {
      icon: Users,
      number: 500,
      suffix: '+',
      label: locale === 'mn' ? 'Гишүүд' : 'Members',
      description: locale === 'mn' ? 'Идэвхтэй гишүүд' : 'Active members',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      delay: 'delay-100'
    },
    {
      icon: Target,
      number: 25,
      suffix: '+',
      label: locale === 'mn' ? 'Төслүүд' : 'Projects',
      description: locale === 'mn' ? 'Амжилттай төслүүд' : 'Successful projects',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      delay: 'delay-200'
    },
    {
      icon: Award,
      number: 60,
      suffix: '+',
      label: locale === 'mn' ? 'Жил' : 'Years',
      description: locale === 'mn' ? 'Идэвхтэй ажиллаж байна' : 'Years of service',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      delay: 'delay-300'
    },
    {
      icon: Heart,
      number: 1000,
      suffix: '+',
      label: locale === 'mn' ? 'Хэрэглэгчид' : 'Beneficiaries',
      description: locale === 'mn' ? 'Тусламж авсан хүмүүс' : 'People helped',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      delay: 'delay-400'
    }
  ], [locale]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          stats.forEach((stat, index) => {
            setTimeout(() => {
              animateCounter(stat.number, index);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [stats]);

  const animateCounter = (target: number, index: number) => {
    const duration = 2000;
    const start = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);

      setCounts(prev => ({
        ...prev,
        [index === 0 ? 'members' : index === 1 ? 'projects' : index === 2 ? 'years' : 'beneficiaries']: currentValue
      }));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const getCurrentCount = (index: number) => {
    switch (index) {
      case 0: return counts.members;
      case 1: return counts.projects;
      case 2: return counts.years;
      case 3: return counts.beneficiaries;
      default: return 0;
    }
  };

  return (
    <section ref={sectionRef} className="section-spacing bg-gradient-to-br from-slate-50 via-white to-pink-50/30 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-100/30 to-purple-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-pink-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-professional relative z-10">
        {/* Professional Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm text-pink-700 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-professional border border-pink-100/50">
            <TrendingUp className="w-5 h-5" />
            <span className="tracking-wide uppercase">{locale === 'mn' ? 'Бидний нөлөө' : 'Our Impact'}</span>
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            {locale === 'mn' ? 'Тоон баримтууд' : 'Impact by Numbers'}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            {locale === 'mn'
              ? 'Эмэгтэйчүүдийн хөгжилд оруулсан хувь нэмэр, олж авсан амжилтууд'
              : 'The impact we\'ve made in women\'s development and achievements'
            }
          </p>
        </div>

        {/* Professional Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${stat.delay} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className={`${stat.bgColor} rounded-3xl p-10 text-center h-full border border-gray-100/50 shadow-professional hover:shadow-professional-lg transition-all duration-500 hover:-translate-y-2 group-hover:border-gray-200/50`}>
                {/* Professional Icon */}
                <div className={`w-24 h-24 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-professional group-hover:shadow-professional-lg transition-all duration-500 group-hover:scale-110`}>
                  <stat.icon className="w-12 h-12 text-white" />
                </div>
                
                {/* Animated Number */}
                <div className="text-6xl font-bold font-display bg-gradient-to-br from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                  {getCurrentCount(index)}{stat.suffix}
                </div>
                
                {/* Label */}
                <div className="text-2xl font-bold text-gray-900 mb-3">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-gray-600 text-base leading-relaxed font-medium">
                  {stat.description}
                </div>

                {/* Professional Hover Effect - Removed to prevent content disappearing */}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Call to Action */}
        <div className={`relative transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-pink-600 via-pink-700 to-purple-700 rounded-3xl p-16 text-white text-center relative overflow-hidden shadow-professional-xl">
            {/* Professional Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-80 h-80 bg-white rounded-full -translate-x-40 -translate-y-40 animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-40 translate-y-40 animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <Star className="w-10 h-10 text-yellow-300 animate-pulse" />
                <h3 className="font-display text-5xl font-bold">
                  {locale === 'mn' 
                    ? 'Эмэгтэйчүүдийн хөгжилд дэмжлэг үзүүлээрэй'
                    : 'Support Women\'s Development'
                  }
                </h3>
                <Star className="w-10 h-10 text-yellow-300 animate-pulse delay-500" />
              </div>
              
              <p className="text-xl text-pink-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                {locale === 'mn'
                  ? 'Таны хандив эмэгтэйчүүдийн хөгжилд чухал хувь нэмэр оруулна. Бид хамтдаа илүү сайн ертөнцийг бүтээж чадна.'
                  : 'Your donation makes a significant difference in women\'s development. Together we can create a better world.'
                }
              </p>
              
              <Link href={`/${locale}/donate`}>
                <button className="group bg-white text-pink-600 px-12 py-6 rounded-2xl font-bold text-lg hover:bg-pink-50 transition-all duration-500 hover:scale-105 shadow-professional-xl hover:shadow-professional-xl inline-flex items-center space-x-4">
                  <Heart className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span>{locale === 'mn' ? 'Хандивлах' : 'Donate Now'}</span>
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}