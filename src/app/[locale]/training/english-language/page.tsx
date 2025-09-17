'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Calendar,
  Users,
  Clock,
  ArrowLeft,
  Star,
  CheckCircle,
  BookOpen,
  Award,
  MessageSquare
} from 'lucide-react';

export default function EnglishLanguagePage() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';

  const handleRegistration = () => {
    window.location.href = `/${locale}/register?program=english-language`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-100/40 to-blue-100/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-100/20 to-blue-100/20 rounded-full blur-2xl"></div>
          </div>

          <div className="container-max container-spacing relative z-10">
            {/* Top Left Back Button */}
            <div className="absolute top-6 left-6 z-50">
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-medium transition-all duration-200 hover:scale-105 group bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-pink-100"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="hidden sm:inline">{locale === 'mn' ? 'Буцах' : 'Back'}</span>
              </button>
            </div>

            <div className="text-center pt-16">
              {/* Category Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-xl">
                <Globe className="w-4 h-4" />
                <span>{locale === 'mn' ? 'Хөгжүүлэх сургалт' : 'Development Training'}</span>
              </div>

              {/* Program Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                {locale === 'mn' ? 'Англи хэлний сургалт' : 'English Language Training'}
              </h1>

              {/* Program Description */}
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                {locale === 'mn' 
                  ? 'Англи хэл сурах - ажил, суралцах боломжийг нэмэгдүүлэх'
                  : 'Learn English language - increasing work and study opportunities'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-20 bg-white">
          <div className="container-max container-spacing">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  <Card className="border-0 shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-t-2xl">
                      <CardTitle className="flex items-center space-x-3 text-white">
                        <Globe className="w-6 h-6" />
                        <span>{locale === 'mn' ? 'Сургалтын тухай' : 'About the Training'}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed">
                          {locale === 'mn' 
                            ? 'Англи хэлний сургалт нь 6 сар үргэлжлэх, ажил, суралцах боломжийг нэмэгдүүлэх зорилготой хөгжүүлэх сургалт юм. Орчин үеийн арга техник ашиглан яриа, бичих, сонсох, унших чадварыг хөгжүүлнэ.'
                            : 'The English language training is a 6-month development program aimed at increasing work and study opportunities. Using modern methods, we develop speaking, writing, listening, and reading skills.'
                          }
                        </p>
                        
                        {/* Training Information Section */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-800 text-xl">
                              {locale === 'mn' ? 'Сургалтын тухай' : 'About the Training'}
                            </h4>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <h5 className="font-semibold text-gray-800 text-lg">
                                {locale === 'mn' ? 'Сургалтын онцлог:' : 'Training Features:'}
                              </h5>
                              <ul className="space-y-3">
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? 'Англи хэлний үндэс' : 'English basics'}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? 'Ярианы дасгал' : 'Speaking practice'}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? 'Бичих ур чадвар' : 'Writing skills'}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? 'Сонсох, унших чадвар' : 'Listening and reading skills'}</span>
                                </li>
                              </ul>
                            </div>
                            
                            <div className="space-y-4">
                              <h5 className="font-semibold text-gray-800 text-lg">
                                {locale === 'mn' ? 'Сургалтын нөхцөл:' : 'Training Conditions:'}
                              </h5>
                              <ul className="space-y-3">
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? 'Цөөн хүнтэй анги - 30 хүн' : 'Small class size - 30 people'}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? 'Орчин үеийн сургалтын хэрэгсэл' : 'Modern training equipment'}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? 'Туршлагатай багш нар' : 'Experienced teachers'}</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="bg-white border-b border-gray-200 rounded-t-2xl">
                      <CardTitle className="text-gray-900 group-hover:scale-105 transition-transform duration-300">
                        {locale === 'mn' ? 'Сургалтын хөтөлбөр' : 'Training Curriculum'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="space-y-8">
                        {/* Basic English */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                          <h4 className="font-semibold text-gray-800 mb-4 text-lg flex items-center space-x-2">
                            <BookOpen className="w-5 h-5 text-blue-500" />
                            <span>{locale === 'mn' ? 'Англи хэлний үндэс' : 'English Basics'}</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              {mn: 'Үсэг, дууны систем', en: 'Alphabet and sound system'},
                              {mn: 'Үндсэн үгсийн сан', en: 'Basic vocabulary'},
                              {mn: 'Грамматикийн үндэс', en: 'Basic grammar'},
                              {mn: 'Өдөр тутмын хэллэгүүд', en: 'Daily expressions'},
                              {mn: 'Тоо, цаг, огноо', en: 'Numbers, time, dates'},
                              {mn: 'Өнгө, хэлбэр, хэмжээ', en: 'Colors, shapes, sizes'}
                            ].map((item, index) => (
                              <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/60 transition-colors duration-200">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{locale === 'mn' ? item.mn : item.en}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Speaking Skills */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                          <h4 className="font-semibold text-gray-800 mb-4 text-lg flex items-center space-x-2">
                            <MessageSquare className="w-5 h-5 text-green-500" />
                            <span>{locale === 'mn' ? 'Ярианы дасгал' : 'Speaking Practice'}</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              {mn: 'Өөрийгөө танилцуулах', en: 'Self-introduction'},
                              {mn: 'Гэр бүлийн тухай ярих', en: 'Talking about family'},
                              {mn: 'Ажлын тухай ярих', en: 'Talking about work'},
                              {mn: 'Амралт, сонирхол', en: 'Hobbies and interests'},
                              {mn: 'Хоол, ундаа захиалах', en: 'Ordering food and drinks'},
                              {mn: 'Зам заах, асуух', en: 'Giving and asking directions'},
                              {mn: 'Дэлгүүр, банканд явах', en: 'Going to shops and banks'},
                              {mn: 'Эмнэлэг, эрүүл мэндийн тухай', en: 'Hospital and health topics'}
                            ].map((item, index) => (
                              <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/60 transition-colors duration-200">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{locale === 'mn' ? item.mn : item.en}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Writing Skills */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                          <h4 className="font-semibold text-gray-800 mb-4 text-lg flex items-center space-x-2">
                            <BookOpen className="w-5 h-5 text-purple-500" />
                            <span>{locale === 'mn' ? 'Бичих ур чадвар' : 'Writing Skills'}</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              {mn: 'И-мэйл бичих', en: 'Writing emails'},
                              {mn: 'Ажлын өргөдөл бичих', en: 'Writing job applications'},
                              {mn: 'Тайлан, мэдээлэл бичих', en: 'Writing reports and information'},
                              {mn: 'Өдрийн тэмдэглэл', en: 'Daily journal'},
                              {mn: 'Товч мэдээлэл', en: 'Short messages'},
                              {mn: 'Албан бичиг', en: 'Official documents'}
                            ].map((item, index) => (
                              <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/60 transition-colors duration-200">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{locale === 'mn' ? item.mn : item.en}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Business English */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                          <h4 className="font-semibold text-gray-800 mb-4 text-lg flex items-center space-x-2">
                            <Award className="w-5 h-5 text-orange-500" />
                            <span>{locale === 'mn' ? 'Бизнесийн англи хэл' : 'Business English'}</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              {mn: 'Ажлын ярилцлага', en: 'Job interviews'},
                              {mn: 'Хурал, уулзалт', en: 'Meetings and conferences'},
                              {mn: 'Харилцаа холбоо', en: 'Communication'},
                              {mn: 'Төлөвлөлт, тайлан', en: 'Planning and reporting'},
                              {mn: 'Хэрэглэгчдэд үйлчлэх', en: 'Customer service'},
                              {mn: 'Маркетинг, борлуулалт', en: 'Marketing and sales'}
                            ].map((item, index) => (
                              <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/60 transition-colors duration-200">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{locale === 'mn' ? item.mn : item.en}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column - Sidebar */}
                <div className="space-y-8">
                  {/* Training Details Card */}
                  <Card className="border-0 shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-t-2xl">
                      <CardTitle className="flex items-center space-x-3 text-white">
                        <Calendar className="w-6 h-6" />
                        <span>{locale === 'mn' ? 'Сургалтын мэдээлэл' : 'Training Details'}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-indigo-500" />
                          <div>
                            <div className="font-semibold text-gray-900">30</div>
                            <div className="text-sm text-gray-600">{locale === 'mn' ? 'Оролцогчид' : 'Participants'}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-indigo-500" />
                          <div>
                            <div className="font-semibold text-gray-900">{locale === 'mn' ? '6 сар' : '6 Months'}</div>
                            <div className="text-sm text-gray-600">{locale === 'mn' ? 'Хугацаа' : 'Duration'}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-indigo-500" />
                          <div>
                            <div className="font-semibold text-gray-900">{locale === 'mn' ? 'Хөгжүүлэх гэрчилгээ' : 'Development Certificate'}</div>
                            <div className="text-sm text-gray-600">{locale === 'mn' ? 'Сертификат' : 'Certificate'}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Registration Card */}
                  <Card className="border-0 shadow-lg bg-white">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          {locale === 'mn' ? 'Бүртгүүлэх' : 'Register'}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {locale === 'mn' 
                            ? 'Сургалтад бүртгүүлэхэд бэлэн байна уу?'
                            : 'Ready to register for the training?'
                          }
                        </p>
                        <Button 
                          className="w-full btn-primary" 
                          onClick={handleRegistration}
                        >
                          {locale === 'mn' ? 'Бүртгүүлэх' : 'Register Now'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
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

