'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail,
  MapPin,
  Clock,
  ArrowLeft,
  Send,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
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
                <Phone className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {locale === 'mn' ? 'Холбоо барих' : 'Contact Us'}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                  {locale === 'mn' ? 'ХОЛБОО' : 'CONTACT'}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                {locale === 'mn'
                  ? 'Асуулт, санал хүсэлт, хамтын ажиллагааны талаар бидэнтэй холбогдоорой.'
                  : 'Contact us for questions, suggestions, or collaboration opportunities.'
                }
              </p>

            </div>
          </div>
        </section>

        {/* Contact Information & Form Section */}
        <section className="py-20 bg-white">
          <div className="container-max container-spacing">
            {/* Contact Information & Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="card-modern p-6 border border-pink-100 shadow-sm bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {locale === 'mn' ? 'Холбоо барих мэдээлэл' : 'Contact Information'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {locale === 'mn' ? 'Утас' : 'Phone'}
                        </h4>
                        <p className="text-gray-600">77358486, 99017277, 99003897</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-green-500 to-green-600 text-white">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {locale === 'mn' ? 'Имэйл' : 'Email'}
                        </h4>
                        <p className="text-gray-600">info@darkhanwomen.mn</p>
                        
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {locale === 'mn' ? 'Хаяг' : 'Address'}
                        </h4>
                        <p className="text-gray-600">
                          {locale === 'mn' 
                            ? 'Дархан сум, 13-р баг, Эмэгтэйчүүдийн ордон'
                            : 'Darkhan sum, 13th bag, Women\'s Palace'
                          }
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-pink-500 to-pink-600 text-white">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {locale === 'mn' ? 'Ажлын цаг' : 'Working Hours'}
                        </h4>
                        <p className="text-gray-600">
                          {locale === 'mn' 
                            ? 'Даваа - Баасан: 09:00 - 18:00'
                            : 'Monday - Friday: 9:00 AM - 6:00 PM'
                          }
                        </p>
                        <p className="text-gray-600">
                          {locale === 'mn' 
                            ? 'Бямба: 10:00 - 16:00'
                            : 'Saturday: 10:00 AM - 4:00 PM'
                          }
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-modern p-6 border border-pink-100 shadow-sm bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {locale === 'mn' ? 'Сошиал сүлжээ' : 'Social Media'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {locale === 'mn' ? 'Facebook' : 'Facebook'}
                          </h4>
                          <a 
                            href="https://www.facebook.com/WomensFederationOfDarkhanUulProvince" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                          >
                            {locale === 'mn' ? 'Дархан-Уул аймгийн эмэгтэйчүүдийн холбоо' : 'Darkhan-Uul Women\'s Federation'}
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="card-modern px-4 sm:px-6 py-8 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                    {locale === 'mn' ? 'Бидэнд захидал илгээх' : 'Send us a Message'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {locale === 'mn' ? 'Нэр' : 'Name'}
                        </label>
                        <input
                          type="text"
                          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                          placeholder={locale === 'mn' ? 'Нэрээ оруулна уу' : 'Enter your name'}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {locale === 'mn' ? 'Имэйл' : 'Email'}
                        </label>
                        <input
                          type="email"
                          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                          placeholder={locale === 'mn' ? 'Имэйл хаягаа оруулна уу' : 'Enter your email'}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {locale === 'mn' ? 'Сэдэв' : 'Subject'}
                      </label>
                      <input
                        type="text"
                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        placeholder={locale === 'mn' ? 'Сэдвийг оруулна уу' : 'Enter subject'}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {locale === 'mn' ? 'Захидал' : 'Message'}
                      </label>
                      <textarea
                        rows={5}
                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        placeholder={locale === 'mn' ? 'Захидлаа бичнэ үү' : 'Write your message'}
                      ></textarea>
                    </div>
                    
                    <Button className="w-full btn-primary">
                      <Send className="w-5 h-5 mr-2" />
                      {locale === 'mn' ? 'Илгээх' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map Section */}
            <Card className="card-modern p-8 mb-16 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  {locale === 'mn' ? 'Байршил' : 'Location'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-xl overflow-hidden border border-pink-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.313276049315!2d105.96840491275269!3d49.45969505808321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5da2dd2454e6141b%3A0xf0bd29e55d9d747!2sDarkhan%20Women%20Federation%20NGO!5e0!3m2!1sen!2smn!4v1757339208616!5m2!1sen!2smn"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
