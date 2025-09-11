'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  ArrowLeft,
  MapPin,
  Clock,
  Users,
  Star,
  Heart,
  Mic,
  GraduationCap,
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function EventsPage() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';

  const events = [
    {
      id: 1,
      title: locale === 'mn' ? 'TEDxDarkhan 2024' : 'TEDxDarkhan 2024',
      date: '2024-08-15',
      time: '09:00 - 18:00',
      location: locale === 'mn' ? 'Дархан хот, Соёлын төв' : 'Darkhan City, Cultural Center',
      participants: '200+',
      category: locale === 'mn' ? 'Уулзалт' : 'Conference',
      icon: Mic,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      featured: true,
      description: locale === 'mn' 
        ? 'Олон улсын стандартын TEDx арга хэмжээ. Эмэгтэйчүүдийн манлайлал, хөгжилд чиглэсэн илтгэлүүд.'
        : 'International standard TEDx event. Presentations focused on women\'s leadership and development.'
    },
    {
      id: 2,
      title: locale === 'mn' ? 'Эмэгтэйчүүдийн манлайлалын академи' : 'Women\'s Leadership Academy',
      date: '2024-09-20',
      time: '10:00 - 16:00',
      location: locale === 'mn' ? 'Дархан хот, Зөвлөлийн танхим' : 'Darkhan City, Council Hall',
      participants: '50',
      category: locale === 'mn' ? 'Сургалт' : 'Training',
      icon: GraduationCap,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      featured: false,
      description: locale === 'mn'
        ? 'Эмэгтэйчүүдийн манлайлалын ур чадварыг хөгжүүлэх 6 сарын сургалт.'
        : '6-month training program to develop women\'s leadership skills.'
    },
    {
      id: 3,
      title: locale === 'mn' ? 'Охидын клубын арга хэмжээ' : 'Girls Club Event',
      date: '2024-10-05',
      time: '14:00 - 17:00',
      location: locale === 'mn' ? 'Дархан хот, Эмэгтэйчүүдийн ордон' : 'Darkhan City, Women\'s Palace',
      participants: '100+',
      category: locale === 'mn' ? 'Хөгжүүлэлт' : 'Development',
      icon: Heart,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      featured: false,
      description: locale === 'mn'
        ? 'Охид эмэгтэйчүүдийн хувь хөгжил, ур чадварыг хөгжүүлэх арга хэмжээ.'
        : 'Event to develop personal growth and skills for girls and women.'
    },
    {
      id: 4,
      title: locale === 'mn' ? 'Хөдөөгийн эмэгтэйчүүдийн уулзалт' : 'Rural Women\'s Meeting',
      date: '2024-11-12',
      time: '09:00 - 15:00',
      location: locale === 'mn' ? 'Хөдөөгийн сум' : 'Rural District',
      participants: '150+',
      category: locale === 'mn' ? 'Үйлчилгээ' : 'Service',
      icon: Globe,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      featured: false,
      description: locale === 'mn'
        ? 'Хөдөөгийн эмэгтэйчүүдэд зориулсан тусламж, сургалтын арга хэмжээ.'
        : 'Support and training event for rural women.'
    }
  ];

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
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {locale === 'mn' ? 'Арга хэмжээ' : 'Events'}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                  {locale === 'mn' ? 'АРГА ХЭМЖЭЭ' : 'EVENTS'}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                {locale === 'mn'
                  ? 'Эмэгтэйчүүдийн хөгжилд чиглэсэн арга хэмжээ, уулзалт, сургалтууд'
                  : 'Events, meetings, and training focused on women\'s development'
                }
              </p>

            </div>
          </div>
        </section>

        {/* Featured Event */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container-max container-spacing">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {locale === 'mn' ? 'Онцлох арга хэмжээ' : 'Featured Event'}
              </h2>
            </div>

            {events.filter(event => event.featured).map((event) => (
              <div key={event.id} className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Event Image/Icon */}
                  <div className={`${event.bgColor} p-12 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className={`w-32 h-32 bg-gradient-to-br ${event.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                        <event.icon className="w-16 h-16 text-white" />
                      </div>
                      <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                        <Star className="w-4 h-4" />
                        <span>{locale === 'mn' ? 'Онцлох' : 'Featured'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-12">
                    <div className="mb-6">
                      <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        <span>{event.category}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700 font-medium">
                          {new Date(event.date).toLocaleDateString(locale === 'mn' ? 'mn-MN' : 'en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700 font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700 font-medium">{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700 font-medium">
                          {event.participants} {locale === 'mn' ? 'оролцогч' : 'participants'}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <span className="flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          {locale === 'mn' ? 'Бүртгүүлэх' : 'Register'}
                        </span>
                      </Button>
                      <Button variant="outline" className="flex-1 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold py-4 rounded-xl transition-all duration-300">
                        <span className="flex items-center justify-center">
                          {locale === 'mn' ? 'Дэлгэрэнгүй' : 'Learn More'}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Events */}
        <section className="py-16 bg-white">
          <div className="container-max container-spacing">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {locale === 'mn' ? 'Бусад арга хэмжээнүүд' : 'Other Events'}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {locale === 'mn'
                  ? 'Ойролцоох арга хэмжээнүүд болон бүртгүүлэх боломжууд'
                  : 'Upcoming events and registration opportunities'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.filter(event => !event.featured).map((event) => (
                <Card key={event.id} className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className={`${event.bgColor} p-6`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <event.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                        <span>{event.category}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {event.description}
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span>
                          {new Date(event.date).toLocaleDateString(locale === 'mn' ? 'mn-MN' : 'en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Users className="w-4 h-4 flex-shrink-0" />
                        <span>{event.participants} {locale === 'mn' ? 'оролцогч' : 'participants'}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105">
                      <span className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {locale === 'mn' ? 'Бүртгүүлэх' : 'Register'}
                      </span>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-purple-500 to-purple-600">
          <div className="container-max container-spacing text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              {locale === 'mn' ? 'Арга хэмжээнд оролцоорой' : 'Join Our Events'}
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              {locale === 'mn'
                ? 'Эмэгтэйчүүдийн хөгжилд хувь нэмэр оруулах арга хэмжээнүүдэд оролцож, шинэ боломжуудыг бүрдүүлээрэй'
                : 'Participate in events that contribute to women\'s development and create new opportunities'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <span className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {locale === 'mn' ? 'Бүх арга хэмжээг харах' : 'View All Events'}
                </span>
              </Button>
              <Link href={`/${locale}/contact`}>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                  <span className="flex items-center">
                    {locale === 'mn' ? 'Холбоо барих' : 'Contact Us'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
