'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Award,
  BookOpen,
  Target,
  Scissors,
  Palette,
  Globe,
  Star,
  TrendingUp,
  Sparkles,
  Heart
} from 'lucide-react';
import Link from 'next/link';

export default function TrainingPage() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';

  const handleRegistration = (trainingId: string) => {
    window.location.href = `/${locale}/register?program=${trainingId}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Enhanced Hero Section */}
        <section className="relative pt-24 pb-20 bg-gradient-to-br from-pink-50 via-white to-pink-50 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-pink-200/30 to-pink-300/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
          </div>

          {/* Fixed Back Button */}
          <div className="fixed top-24 left-6 z-50">
            <Link 
              href={`/${locale}/programs`}
              className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-medium transition-all duration-200 hover:scale-105 group bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-pink-100"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="hidden sm:inline">{locale === 'mn' ? 'Хөтөлбөрүүд' : 'Programs'}</span>
            </Link>
          </div>

          <div className="container-max container-spacing relative z-10">

            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-pink-100">
                <Sparkles className="w-5 h-5 text-pink-600" />
                <span className="text-sm font-medium text-gray-700">
                  {locale === 'mn' ? 'Сургалтын төв' : 'Training Center'}
                </span>
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                  {locale === 'mn' ? 'СУРГАЛТ' : 'TRAINING'}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                {locale === 'mn'
                  ? 'Эмэгтэйчүүдийн ур чадвар, мэдлэгийг хөгжүүлэх мэргэжлийн сургалтын хөтөлбөрүүд'
                  : 'Professional training programs to develop women\'s skills and knowledge'
                }
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
                  <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                  <div className="text-sm text-gray-600 font-medium">
                    {locale === 'mn' ? 'Сургалтын төрөл' : 'Training Types'}
                  </div>
                </div>
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
                  <div className="text-3xl font-bold text-pink-600 mb-2">150+</div>
                  <div className="text-sm text-gray-600 font-medium">
                    {locale === 'mn' ? 'Төгсөгчид' : 'Graduates'}
                  </div>
                </div>
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
                  <div className="text-3xl font-bold text-pink-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600 font-medium">
                    {locale === 'mn' ? 'Амжилтын хувь' : 'Success Rate'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Training Section */}
        <section className="py-20 bg-white">
          <div className="container-max container-spacing">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg border border-pink-200/50">
                <Award className="w-5 h-5" />
                <span className="tracking-wide font-semibold">
                  {locale === 'mn' ? 'Мэргэжил олгох сургалт' : 'Professional Training'}
                </span>
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                {locale === 'mn' ? 'МЭРГЭЖЛИЙН ҮНЭМЛЭХ ОЛГОХ СУРГАЛТУУД' : 'PROFESSIONAL CERTIFICATION PROGRAMS'}
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {locale === 'mn'
                  ? 'Мэргэжлийн үнэмлэх олгох сургалтууд - ажлын байр олох боломжийг нэмэгдүүлэх'
                  : 'Professional certification training programs - increasing employment opportunities'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 'hair-stylist',
                  title: locale === 'mn' ? 'Үсчин' : 'Hair Stylist',
                  desc: locale === 'mn' ? 'Мэргэжлийн үсчин болох сургалт - үс засах, засал хийх ур чадвар' : 'Professional hair styling training - cutting, styling, and coloring skills',
                  duration: locale === 'mn' ? '6 сар' : '6 months',
                  participants: '15',
                  icon: Scissors,
                  category: locale === 'mn' ? 'Мэргэжлийн сургалт' : 'Professional Training',
                  color: 'from-teal-500 to-teal-600',
                  bgColor: 'bg-gradient-to-br from-teal-50 to-teal-100',
                  borderColor: 'border-teal-200',
                  features: [
                    locale === 'mn' ? 'Үс засах техник' : 'Hair cutting techniques',
                    locale === 'mn' ? 'Засал хийх ур чадвар' : 'Coloring skills',
                    locale === 'mn' ? 'Мэргэжлийн үнэмлэх' : 'Professional certificate'
                  ]
                },
                {
                  id: 'embroidery-maker',
                  title: locale === 'mn' ? 'Оѐмол бүтээгдэхүүн оѐдолчин' : 'Embroidery Product Maker',
                  desc: locale === 'mn' ? 'Оѐмол бүтээгдэхүүн үйлдвэрлэх - уран оѐмол, бэлэг дурсгалын зүйл' : 'Embroidery product manufacturing - artistic embroidery and souvenirs',
                  duration: locale === 'mn' ? '4 сар' : '4 months',
                  participants: '20',
                  icon: Target,
                  category: locale === 'mn' ? 'Мэргэжлийн сургалт' : 'Professional Training',
                  color: 'from-blue-500 to-blue-600',
                  bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
                  borderColor: 'border-blue-200',
                  features: [
                    locale === 'mn' ? 'Уран оѐмол техник' : 'Artistic embroidery techniques',
                    locale === 'mn' ? 'Бүтээгдэхүүн дизайн' : 'Product design',
                    locale === 'mn' ? 'Бизнес удирдлага' : 'Business management'
                  ]
                },
                {
                  id: 'gift-souvenir-craftsman',
                  title: locale === 'mn' ? 'Бэлэг дурсгалын зүйл урлаач' : 'Gift Souvenir Craftsman',
                  desc: locale === 'mn' ? 'Бэлэг дурсгалын зүйл урлах - уран зураг, гар урлал' : 'Creating gift souvenirs - painting and handicrafts',
                  duration: locale === 'mn' ? '3 сар' : '3 months',
                  participants: '12',
                  icon: Award,
                  category: locale === 'mn' ? 'Мэргэжлийн сургалт' : 'Professional Training',
                  color: 'from-green-500 to-green-600',
                  bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
                  borderColor: 'border-green-200',
                  features: [
                    locale === 'mn' ? 'Уран зураг' : 'Art painting',
                    locale === 'mn' ? 'Гар урлал' : 'Handicrafts',
                    locale === 'mn' ? 'Бүтээгдэхүүн борлуулалт' : 'Product sales'
                  ]
                }
              ].map((training, index) => (
                <Link key={index} href={`/${locale}/training/${training.id}`} className="block">
                  <Card className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 cursor-pointer">
                  {/* Enhanced Background */}
                  <div className={`relative ${training.bgColor} p-8 h-full min-h-[400px] flex flex-col`}>
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-xl"></div>
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6 relative z-10">
                      <div className="relative">
                        <div className={`w-20 h-20 bg-gradient-to-br ${training.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                          <training.icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      <Badge className="bg-white/90 text-gray-700 border-0 shadow-lg">
                        {training.category}
                      </Badge>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col relative z-10">
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                        {training.title}
                      </CardTitle>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                        {training.desc}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">
                          {locale === 'mn' ? 'Сургалтын агуулга:' : 'Training Content:'}
                        </h4>
                        <ul className="space-y-2">
                          {training.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    
                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm mb-6 p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                        <div className="text-center">
                          <div className="font-bold text-gray-900 text-lg">{training.participants}</div>
                          <div className="text-xs text-gray-500">{locale === 'mn' ? 'Оролцогч' : 'Participants'}</div>
                        </div>
                        <div className="w-px h-8 bg-gray-300"></div>
                        <div className="text-center">
                          <div className="font-bold text-gray-900 text-lg">{training.duration}</div>
                          <div className="text-xs text-gray-500">{locale === 'mn' ? 'Хугацаа' : 'Duration'}</div>
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <Button 
                        onClick={() => handleRegistration(training.id)}
                        className={`w-full bg-gradient-to-r ${training.color} hover:opacity-90 text-white font-bold py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl group border-0`}
                      >
                        <span className="flex items-center justify-center">
                          {locale === 'mn' ? 'Дэлгэрэнгүй' : 'Learn More'}
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                      </Button>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Development Training Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container-max container-spacing">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg border border-blue-200/50">
                <TrendingUp className="w-5 h-5" />
                <span className="tracking-wide font-semibold">
                  {locale === 'mn' ? 'Хөгжүүлэх сургалт' : 'Development Training'}
                </span>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                {locale === 'mn' ? 'ХӨГЖҮҮЛЭХ СУРГАЛТУУД' : 'DEVELOPMENT PROGRAMS'}
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {locale === 'mn'
                  ? 'Ур чадвар, мэдлэгийг хөгжүүлэх сургалтууд - хувь хүний хөгжилд чиглэсэн'
                  : 'Skills and knowledge development programs - focused on personal growth'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 'art-painting',
                  title: locale === 'mn' ? 'Уран зураг' : 'Art Painting',
                  desc: locale === 'mn' ? 'Хүүхэд, залуучуудын болон насанд хүрэгчид - уран зурагийн ур чадвар хөгжүүлэх' : 'For children, youth and adults - developing artistic painting skills',
                  duration: locale === 'mn' ? '2 сар' : '2 months',
                  participants: '25',
                  icon: Palette,
                  category: locale === 'mn' ? 'Хөгжүүлэх сургалт' : 'Development Training',
                  color: 'from-purple-500 to-purple-600',
                  bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
                  borderColor: 'border-purple-200',
                  features: [
                    locale === 'mn' ? 'Уран зурагийн техник' : 'Painting techniques',
                    locale === 'mn' ? 'Өнгөний хэрэглээ' : 'Color usage',
                    locale === 'mn' ? 'Бүтээл үүсгэх' : 'Creating artworks'
                  ]
                },
                {
                  id: 'english-language',
                  title: locale === 'mn' ? 'Англи хэлний сургалт' : 'English Language Training',
                  desc: locale === 'mn' ? 'Англи хэл сурах - ажил, суралцах боломжийг нэмэгдүүлэх' : 'Learn English language - increasing work and study opportunities',
                  duration: locale === 'mn' ? '6 сар' : '6 months',
                  participants: '30',
                  icon: Globe,
                  category: locale === 'mn' ? 'Хөгжүүлэх сургалт' : 'Development Training',
                  color: 'from-indigo-500 to-indigo-600',
                  bgColor: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
                  borderColor: 'border-indigo-200',
                  features: [
                    locale === 'mn' ? 'Англи хэлний үндэс' : 'English basics',
                    locale === 'mn' ? 'Ярианы дасгал' : 'Speaking practice',
                    locale === 'mn' ? 'Бичих ур чадвар' : 'Writing skills'
                  ]
                },
                {
                  id: 'japanese-language',
                  title: locale === 'mn' ? 'Япон хэлний сургалт' : 'Japanese Language Training',
                  desc: locale === 'mn' ? 'Япон хэл сурах - Японы соёл, ажил олох боломж' : 'Learn Japanese language - Japanese culture and job opportunities',
                  duration: locale === 'mn' ? '6 сар' : '6 months',
                  participants: '20',
                  icon: BookOpen,
                  category: locale === 'mn' ? 'Хөгжүүлэх сургалт' : 'Development Training',
                  color: 'from-indigo-500 to-indigo-600',
                  bgColor: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
                  borderColor: 'border-indigo-200',
                  features: [
                    locale === 'mn' ? 'Хирагана, катакана' : 'Hiragana, Katakana',
                    locale === 'mn' ? 'Япон соёл' : 'Japanese culture',
                    locale === 'mn' ? 'Ажил олох зөвлөгөө' : 'Job search advice'
                  ]
                }
              ].map((training, index) => (
                <Link key={index} href={`/${locale}/training/${training.id}`} className="block">
                  <Card className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 cursor-pointer">
                    {/* Enhanced Background */}
                    <div className={`relative ${training.bgColor} p-8 h-full min-h-[400px] flex flex-col`}>
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-xl"></div>
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6 relative z-10">
                      <div className="relative">
                        <div className={`w-20 h-20 bg-gradient-to-br ${training.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                          <training.icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      <Badge className="bg-white/90 text-gray-700 border-0 shadow-lg">
                        {training.category}
                      </Badge>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col relative z-10">
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                        {training.title}
                      </CardTitle>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                        {training.desc}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">
                          {locale === 'mn' ? 'Сургалтын агуулга:' : 'Training Content:'}
                        </h4>
                        <ul className="space-y-2">
                          {training.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    
                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm mb-6 p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                        <div className="text-center">
                          <div className="font-bold text-gray-900 text-lg">{training.participants}</div>
                          <div className="text-xs text-gray-500">{locale === 'mn' ? 'Оролцогч' : 'Participants'}</div>
                        </div>
                        <div className="w-px h-8 bg-gray-300"></div>
                        <div className="text-center">
                          <div className="font-bold text-gray-900 text-lg">{training.duration}</div>
                          <div className="text-xs text-gray-500">{locale === 'mn' ? 'Хугацаа' : 'Duration'}</div>
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <Button 
                        onClick={() => handleRegistration(training.id)}
                        className={`w-full bg-gradient-to-r ${training.color} hover:opacity-90 text-white font-bold py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl group border-0`}
                      >
                        <span className="flex items-center justify-center">
                          {locale === 'mn' ? 'Дэлгэрэнгүй' : 'Learn More'}
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                      </Button>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container-max container-spacing">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg border border-orange-200/50">
                <Heart className="w-5 h-5" />
                <span className="tracking-wide font-semibold">
                  {locale === 'mn' ? 'Төгсөгчдийн сэтгэгдэл' : 'Graduate Testimonials'}
                </span>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                {locale === 'mn' ? 'ТӨГСӨГЧДИЙН АМЖИЛТ' : 'SUCCESS STORIES'}
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {locale === 'mn'
                  ? 'Манай сургалтад хамрагдаж, амжилт олсон төгсөгчдийн түүх'
                  : 'Stories of graduates who participated in our training and achieved success'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: locale === 'mn' ? 'Батцэцэг' : 'Battsetseg',
                  training: locale === 'mn' ? 'Үсчин' : 'Hair Stylist',
                  quote: locale === 'mn' 
                    ? 'Сургалт дууссаны дараа өөрийн үс засах газар нээж, сайн орлого олж байна.'
                    : 'After completing the training, I opened my own hair salon and earn good income.',
                  rating: 5
                },
                {
                  name: locale === 'mn' ? 'Сайханбилэг' : 'Saikhanbilig',
                  training: locale === 'mn' ? 'Оѐмолчин' : 'Embroidery',
                  quote: locale === 'mn'
                    ? 'Оѐмол бүтээгдэхүүн үйлдвэрлэж, онлайн борлуулалт хийж байна.'
                    : 'I produce embroidery products and sell them online.',
                  rating: 5
                },
                {
                  name: locale === 'mn' ? 'Мөнхбаяр' : 'Munkhbayar',
                  training: locale === 'mn' ? 'Англи хэл' : 'English Language',
                  quote: locale === 'mn'
                    ? 'Англи хэл сурснаар ажил олох боломж нэмэгдэж, илүү сайн цалин авч байна.'
                    : 'Learning English increased my job opportunities and I now earn better salary.',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <Card key={index} className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-600 mb-6 leading-relaxed italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.training}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-max container-spacing">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-3xl p-12 text-center shadow-xl border border-gray-100">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  {locale === 'mn' ? 'Өнөөдөр эхлээрэй' : 'Start Today'}
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {locale === 'mn'
                    ? 'Эмэгтэйчүүдийн хөгжилд хувь нэмэр оруулах аялал эхлүүлэхэд бэлэн үү?'
                    : 'Ready to start your journey of contributing to women\'s development?'
                  }
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    {locale === 'mn' ? 'Оролцох' : 'Get Involved'}
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105"
                  >
                    {locale === 'mn' ? 'Холбоо барих' : 'Contact Us'}
                  </Button>
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