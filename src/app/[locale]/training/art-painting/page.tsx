'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Palette, 
  Calendar,
  Users,
  Clock,
  ArrowLeft,
  Star,
  CheckCircle,
  Globe,
  Award,
  BookOpen
} from 'lucide-react';

export default function ArtPaintingPage() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';

  const handleRegistration = () => {
    window.location.href = `/${locale}/register?program=art-painting`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-100/40 to-violet-100/40 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-2xl"></div>
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
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-xl">
                <Palette className="w-4 h-4" />
                <span>{locale === 'mn' ? 'Хөгжүүлэх сургалт' : 'Development Training'}</span>
              </div>

              {/* Program Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                {locale === 'mn' ? 'Уран зураг' : 'Art Painting'}
              </h1>

              {/* Program Description */}
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                {locale === 'mn' 
                  ? 'Хүүхэд, залуучуудын болон насанд хүрэгчид - уран зурагийн ур чадвар хөгжүүлэх'
                  : 'For children, youth and adults - developing artistic painting skills'
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
                    <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-2xl">
                      <CardTitle className="flex items-center space-x-3 text-white">
                        <Palette className="w-6 h-6" />
                        <span>{locale === 'mn' ? 'Сургалтын тухай' : 'About the Training'}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed">
                          {locale === 'mn' 
                            ? 'Уран зурагийн сургалт нь 2 сар үргэлжлэх, хүүхэд, залуучуудын болон насанд хүрэгчдийн уран зурагийн ур чадвар хөгжүүлэх хөгжүүлэх сургалт юм. Орчин үеийн арга техник ашиглан уран зурагийн үндэс, техникийг эзэмшүүлнэ.'
                            : 'The art painting training is a 2-month development program for children, youth and adults to develop artistic painting skills. Using modern methods, participants will learn the basics and techniques of art painting.'
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
                                  <span className="text-gray-600">{locale === 'mn' ? 'Уран зурагийн техник' : 'Painting techniques'}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? 'Өнгөний хэрэглээ' : 'Color usage'}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? 'Бүтээл үүсгэх' : 'Creating artworks'}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? 'Уран зурагийн түүх' : 'Art history'}</span>
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
                                  <span className="text-gray-600">{locale === 'mn' ? 'Цөөн хүнтэй анги - 25 хүн' : 'Small class size - 25 people'}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? 'Бүх хэрэгсэл, материал бид хангана' : 'All tools and materials provided by us'}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? 'Дадлагад суурилсан сургалт' : 'Practice-based training'}</span>
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
                        {/* Basic Painting Techniques */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                          <h4 className="font-semibold text-gray-800 mb-4 text-lg flex items-center space-x-2">
                            <Palette className="w-5 h-5 text-purple-500" />
                            <span>{locale === 'mn' ? 'Уран зурагийн үндэс' : 'Basic Painting Techniques'}</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              {mn: 'Шугам, хэлбэр зурах', en: 'Drawing lines and shapes'},
                              {mn: 'Өнгөний үндэс, холилт', en: 'Color basics and mixing'},
                              {mn: 'Акварель техник', en: 'Watercolor techniques'},
                              {mn: 'Гуаш техник', en: 'Gouache techniques'},
                              {mn: 'Акрил будаг', en: 'Acrylic painting'},
                              {mn: 'Тосны будаг', en: 'Oil painting'},
                              {mn: 'Хуудас, даавуу дээр зурах', en: 'Painting on paper and fabric'},
                              {mn: 'Мод, чулуу дээр зурах', en: 'Painting on wood and stone'}
                            ].map((item, index) => (
                              <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/60 transition-colors duration-200">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{locale === 'mn' ? item.mn : item.en}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Color Theory */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                          <h4 className="font-semibold text-gray-800 mb-4 text-lg flex items-center space-x-2">
                            <Star className="w-5 h-5 text-yellow-500" />
                            <span>{locale === 'mn' ? 'Өнгөний онол' : 'Color Theory'}</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              {mn: 'Өнгөний дугуй', en: 'Color wheel'},
                              {mn: 'Үндсэн өнгөнүүд', en: 'Primary colors'},
                              {mn: 'Хоёрдогч өнгөнүүд', en: 'Secondary colors'},
                              {mn: 'Гуравдагч өнгөнүүд', en: 'Tertiary colors'},
                              {mn: 'Халуун, хүйтэн өнгө', en: 'Warm and cool colors'},
                              {mn: 'Өнгөний харьцаа', en: 'Color harmony'},
                              {mn: 'Өнгөний сэтгэл зүй', en: 'Color psychology'},
                              {mn: 'Өнгөний хэрэглээ', en: 'Color application'}
                            ].map((item, index) => (
                              <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/60 transition-colors duration-200">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{locale === 'mn' ? item.mn : item.en}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Art History and Styles */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                          <h4 className="font-semibold text-gray-800 mb-4 text-lg flex items-center space-x-2">
                            <BookOpen className="w-5 h-5 text-blue-500" />
                            <span>{locale === 'mn' ? 'Уран зурагийн түүх, хэв маяг' : 'Art History and Styles'}</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              {mn: 'Монгол уран зураг', en: 'Mongolian art'},
                              {mn: 'Олон улсын уран зураг', en: 'International art'},
                              {mn: 'Сонгодог уран зураг', en: 'Classical painting'},
                              {mn: 'Орчин үеийн уран зураг', en: 'Modern art'},
                              {mn: 'Абстракт уран зураг', en: 'Abstract art'},
                              {mn: 'Реалист уран зураг', en: 'Realistic art'},
                              {mn: 'Импрессионист уран зураг', en: 'Impressionist art'},
                              {mn: 'Экспрессионист уран зураг', en: 'Expressionist art'}
                            ].map((item, index) => (
                              <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/60 transition-colors duration-200">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{locale === 'mn' ? item.mn : item.en}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Creative Expression */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                          <h4 className="font-semibold text-gray-800 mb-4 text-lg flex items-center space-x-2">
                            <Globe className="w-5 h-5 text-green-500" />
                            <span>{locale === 'mn' ? 'Бүтээлч илэрхийлэл' : 'Creative Expression'}</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              {mn: 'Өөрийн бүтээл үүсгэх', en: 'Creating personal artworks'},
                              {mn: 'Бүтээл тайлбарлах', en: 'Explaining artworks'},
                              {mn: 'Уран зурагийн үзэсгэлэн', en: 'Art exhibitions'},
                              {mn: 'Бүтээл хуваалцах', en: 'Sharing artworks'},
                              {mn: 'Уран зурагийн сэтгэлгээ', en: 'Artistic thinking'},
                              {mn: 'Бүтээлч асуудал шийдвэрлэх', en: 'Creative problem solving'}
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
                    <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-2xl">
                      <CardTitle className="flex items-center space-x-3 text-white">
                        <Calendar className="w-6 h-6" />
                        <span>{locale === 'mn' ? 'Сургалтын мэдээлэл' : 'Training Details'}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-purple-500" />
                          <div>
                            <div className="font-semibold text-gray-900">25</div>
                            <div className="text-sm text-gray-600">{locale === 'mn' ? 'Оролцогчид' : 'Participants'}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-purple-500" />
                          <div>
                            <div className="font-semibold text-gray-900">{locale === 'mn' ? '2 сар' : '2 Months'}</div>
                            <div className="text-sm text-gray-600">{locale === 'mn' ? 'Хугацаа' : 'Duration'}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-purple-500" />
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
                            ? 'Сургалтад бүртгүүлэхэд бэлэн үү?'
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