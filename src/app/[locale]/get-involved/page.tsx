'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  HandHeart, 
  Users,
  ArrowLeft,
  Star,
  CheckCircle,
  Heart,
  Target,
  Award,
  Calendar,
  UserPlus,
  Handshake,
  Gift
} from 'lucide-react';
import Link from 'next/link';

export default function GetInvolvedPage() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Enhanced Hero Section */}
        <section className="relative pt-24 pb-20 bg-gradient-to-br from-slate-50 via-white to-pink-50 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-pink-200/30 to-pink-300/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
          </div>

          {/* Fixed Back Button */}
          <div className="fixed top-24 left-6 z-50">
            <Link 
              href={`/${locale}`}
              className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-medium transition-all duration-200 hover:scale-105 group bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-pink-100"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="hidden sm:inline">{locale === 'mn' ? 'Нүүр хуудас' : 'Home'}</span>
            </Link>
          </div>

          <div className="container-max container-spacing relative z-10">
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-pink-700 px-6 py-3 mb-8 shadow-lg border border-pink-100 rounded-full">
                <HandHeart className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {locale === 'mn' ? 'Оролцох' : 'Get Involved'}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                  {locale === 'mn' ? 'ОРОЛЦОХ' : 'GET INVOLVED'}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                {locale === 'mn'
                  ? 'Эмэгтэйчүүдийн хөгжилд хувь нэмэр оруулах янз бүрийн арга замууд. Та ч бас нэг хэсэг болж чадна.'
                  : 'Various ways to contribute to women\'s development. You can also be a part of our mission.'
                }
              </p>

            </div>
          </div>
        </section>

        {/* Ways to Get Involved Section */}
        <section id="cta-buttons" className="py-20 bg-white">
          <div className="container-max container-spacing">
            {/* Ways to Get Involved */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
              {/* Volunteer */}
              <Card className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0">
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 h-full min-h-[450px] flex flex-col">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <UserPlus className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    <Badge 
                      variant="secondary" 
                      className="text-xs font-semibold px-4 py-2 rounded-full shadow-sm border-0 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700"
                    >
                      {locale === 'mn' ? 'Сайн дурын' : 'Volunteer'}
                    </Badge>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-4 leading-tight font-display">
                      {locale === 'mn' ? 'Сайн дурын ажил' : 'Volunteer'}
                    </CardTitle>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-base flex-1">
                      {locale === 'mn'
                        ? 'Бидний хөтөлбөр, арга хэмжээнд сайн дураар оролцож, эмэгтэйчүүдэд туслаарай.'
                        : 'Volunteer in our programs and events to help women in need.'
                      }
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{locale === 'mn' ? 'Сургалт зохион байгуулах' : 'Organize training'}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{locale === 'mn' ? 'Арга хэмжээнд туслах' : 'Help with events'}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{locale === 'mn' ? 'Мэдээлэл тараах' : 'Spread awareness'}</span>
                      </div>
                    </div>
                    
                    <Link href={`/${locale}/volunteer/apply`}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl border-0">
                        {locale === 'mn' ? 'Сайн дураар оролцох' : 'Volunteer'}
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>

              {/* Partner */}
              <Card className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0">
                <div className="relative bg-gradient-to-br from-purple-50 to-violet-50 p-8 h-full min-h-[450px] flex flex-col">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <Handshake className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    <Badge 
                      variant="secondary" 
                      className="text-xs font-semibold px-4 py-2 rounded-full shadow-sm border-0 bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700"
                    >
                      {locale === 'mn' ? 'Хамтрал' : 'Partnership'}
                    </Badge>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-4 leading-tight font-display">
                      {locale === 'mn' ? 'Хамтрагч болох' : 'Partner'}
                    </CardTitle>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-base flex-1">
                      {locale === 'mn'
                        ? 'Байгууллага, компанитай хамтран ажиллаж, илүү том нөлөө үзүүлье.'
                        : 'Partner with organizations and companies to create greater impact.'
                      }
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{locale === 'mn' ? 'Хөтөлбөр хамтран хэрэгжүүлэх' : 'Joint programs'}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{locale === 'mn' ? 'Нөөц хуваалцах' : 'Share resources'}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{locale === 'mn' ? 'Мэдлэг солилцох' : 'Knowledge exchange'}</span>
                      </div>
                    </div>
                    
                    <Link href={`/${locale}/partner/apply`}>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl border-0">
                        {locale === 'mn' ? 'Хамтрах' : 'Partner'}
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>

              {/* Donate */}
              <Card className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0">
                <div className="relative bg-gradient-to-br from-pink-50 to-rose-50 p-8 h-full min-h-[450px] flex flex-col">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <Gift className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    <Badge 
                      variant="secondary" 
                      className="text-xs font-semibold px-4 py-2 rounded-full shadow-sm border-0 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700"
                    >
                      {locale === 'mn' ? 'Хандив' : 'Donation'}
                    </Badge>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-4 leading-tight font-display">
                      {locale === 'mn' ? 'Хандивлах' : 'Donate'}
                    </CardTitle>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-base flex-1">
                      {locale === 'mn'
                        ? 'Санхүүгийн дэмжлэг үзүүлж, хөтөлбөрүүдийг хэрэгжүүлэхэд тусална уу.'
                        : 'Provide financial support to help implement our programs.'
                      }
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{locale === 'mn' ? 'Сургалт санхүүжүүлэх' : 'Fund training'}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{locale === 'mn' ? 'Арга хэмжээ зохион байгуулах' : 'Organize events'}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{locale === 'mn' ? 'Тоног төхөөрөмж худалдан авах' : 'Buy equipment'}</span>
                      </div>
                    </div>
                    
                    <Link href={`/${locale}/donate`}>
                      <Button className="w-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl border-0">
                        {locale === 'mn' ? 'Хандивлах' : 'Donate Now'}
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            </div>
          </div>
        </section>

        {/* Specific Opportunities Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-max container-spacing">
            {/* Specific Opportunities Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
                  {locale === 'mn' ? 'Тодорхой боломжууд' : 'Specific Opportunities'}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {locale === 'mn'
                    ? 'Таны сонирхол, ур чадварт тохирох тодорхой боломжууд'
                    : 'Specific opportunities that match your interests and skills'
                  }
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Volunteer Opportunities */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <UserPlus className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {locale === 'mn' ? 'Сайн дурын ажлын боломжууд' : 'Volunteer Opportunities'}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl">
                      <Calendar className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {locale === 'mn' ? 'Арга хэмжээний туслах' : 'Event Assistant'}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {locale === 'mn' ? 'TEDx, сургалт зэрэг арга хэмжээнд туслах' : 'Help with TEDx, training events'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-xl">
                      <Users className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {locale === 'mn' ? 'Охидын клубын удирдагч' : 'Girls Club Leader'}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {locale === 'mn' ? 'Охид эмэгтэйчүүдтэй ажиллах' : 'Work with girls and women'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-xl">
                      <Target className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {locale === 'mn' ? 'Төслийн туслах' : 'Project Assistant'}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {locale === 'mn' ? 'Төрөл бүрийн төслүүдэд туслах' : 'Assist with various projects'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partnership Types */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <Handshake className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {locale === 'mn' ? 'Хамтралын төрлүүд' : 'Partnership Types'}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-xl">
                      <Gift className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {locale === 'mn' ? 'Санхүүгийн хамтрал' : 'Financial Partnership'}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {locale === 'mn' ? 'Хөтөлбөрүүдийг санхүүжүүлэх' : 'Fund our programs'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-4 bg-pink-50 rounded-xl">
                      <Award className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {locale === 'mn' ? 'Мэдлэгийн хамтрал' : 'Knowledge Partnership'}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {locale === 'mn' ? 'Мэдлэг, туршлага солилцох' : 'Share knowledge and experience'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl">
                      <Star className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {locale === 'mn' ? 'Стратегийн хамтрал' : 'Strategic Partnership'}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {locale === 'mn' ? 'Урт хугацааны хамтын ажиллагаа' : 'Long-term collaboration'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container-max container-spacing">
            {/* Benefits Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
                  {locale === 'mn' ? 'Оролцооны давуу тал' : 'Benefits of Getting Involved'}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {locale === 'mn'
                    ? 'Бидэнтэй нэгдэхэд олж авах давуу талууд'
                    : 'Benefits you\'ll gain by joining our mission'
                  }
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 font-display">
                    {locale === 'mn' ? 'Сэтгэл ханамж' : 'Satisfaction'}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {locale === 'mn' ? 'Бусдад туслах сэтгэл ханамж' : 'Satisfaction of helping others'}
                  </p>
                </div>
                
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 font-display">
                    {locale === 'mn' ? 'Танилын хүрээ' : 'Networking'}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {locale === 'mn' ? 'Шинэ хүмүүстэй танилцах' : 'Meet new people'}
                  </p>
                </div>
                
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 font-display">
                    {locale === 'mn' ? 'Ур чадвар' : 'Skills'}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {locale === 'mn' ? 'Шинэ ур чадвар эзэмших' : 'Learn new skills'}
                  </p>
                </div>
                
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 font-display">
                    {locale === 'mn' ? 'Зорилго' : 'Purpose'}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {locale === 'mn' ? 'Амьдралын зорилго олох' : 'Find life purpose'}
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 rounded-3xl p-12 border border-green-100/50 shadow-lg">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 font-display">
                  {locale === 'mn' ? 'Өнөөдөр эхлээрэй' : 'Start Today'}
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  {locale === 'mn'
                    ? 'Эмэгтэйчүүдийн хөгжилд хувь нэмэр оруулах аялал эхлүүлэхэд бэлэн үү?'
                    : 'Ready to start your journey of contributing to women\'s development?'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button 
                    className="btn-primary px-8 py-4 text-lg"
                    onClick={() => {
                      document.getElementById('cta-buttons')?.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                  >
                    {locale === 'mn' ? 'Оролцох' : 'Get Involved'}
                  </Button>
                  <Link href={`/${locale}/contact`}>
                    <Button variant="outline" className="btn-secondary px-8 py-4 text-lg">
                      {locale === 'mn' ? 'Холбоо барих' : 'Contact Us'}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
