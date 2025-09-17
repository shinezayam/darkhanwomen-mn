'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  Calendar,
  Users,
  Clock,
  ArrowLeft,
  Star,
  CheckCircle,
  Globe,
  Palette,
  BookOpen
} from 'lucide-react';

export default function GiftSouvenirCraftsmanPage() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';

  const handleRegistration = () => {
    window.location.href = `/${locale}/register?program=gift-souvenir-craftsman`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-100/40 to-emerald-100/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-100/20 to-emerald-100/20 rounded-full blur-2xl"></div>
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
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-xl">
                <Award className="w-4 h-4" />
                <span>{locale === 'mn' ? 'Мэргэжлийн сургалт' : 'Professional Training'}</span>
              </div>

              {/* Program Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                {locale === 'mn' ? 'Бэлэг дурсгалын зүйл урлаач' : 'Gift Souvenir Craftsman'}
              </h1>

              {/* Program Description */}
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                {locale === 'mn' 
                  ? 'Бэлэг дурсгалын зүйл урлах - уран зураг, гар урлал'
                  : 'Creating gift souvenirs - painting and handicrafts'
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
                    <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-2xl">
                      <CardTitle className="flex items-center space-x-3 text-white">
                        <Award className="w-6 h-6" />
                        <span>{locale === 'mn' ? 'Сургалтын тухай' : 'About the Training'}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed">
                          {locale === 'mn' 
                            ? 'Бэлэг дурсгалын зүйл урлаач сургалт нь 90 хоног үргэлжлэх, онол практик хосолсон мэргэжлийн сургалт юм. Хөдөлмөр нийгмийн хамгааллын яамны 4-р зэргийн гар урлаач мэргэжлийн чадамжийн гэрчилгээ олгоно. Монгол уран зураг, гар урлал, дизайн, бизнес удирдлага зэрэг бүрэн мэдлэг олгоно.'
                            : 'The gift souvenir craftsman training is a 90-day comprehensive program combining theory and practice. Participants will receive a Level 4 professional competency certificate from the Ministry of Labor and Social Protection. The program covers Mongolian art painting, handicrafts, design, and business management.'
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
                                  <span className="text-gray-600">{locale === 'mn' ? 'Олон улсын стандартын дагуу бэлтгэсэн хичээлийн хөтөлбөр' : 'Curriculum prepared according to international standards'}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? 'Мэргэжлийн дадлага туршлагатай багш боловсон хүчин' : 'Professional instructors with practical experience'}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? '25 төрлийн гар урлалын техник' : '25 types of handicraft techniques'}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? 'Орчин үеийн шаардлага хангасан анги танхим' : 'Modern classroom facilities meeting current requirements'}</span>
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
                                  <span className="text-gray-600">{locale === 'mn' ? 'Цөөн хүнтэй анги - 12 хүн' : 'Small class size - 12 people'}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? 'Бүх хэрэгсэл, материал, будаг, даавуу бид хангана' : 'All tools, materials, paints, and fabrics provided by us'}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? 'Онол практик хосолсон сургалт' : 'Theory and practice combined training'}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? 'Хувь хүний хөгжүүлэлт, бизнес удирдлага' : 'Personal development and business management'}</span>
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
                        {/* Art Painting Techniques */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                          <h4 className="font-semibold text-gray-800 mb-4 text-lg flex items-center space-x-2">
                            <Palette className="w-5 h-5 text-purple-500" />
                            <span>{locale === 'mn' ? 'Уран зурагийн техник' : 'Art Painting Techniques'}</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              {mn: 'Уран зурагийн үндэс - шугам, хэлбэр, гэрэл сүүдэр', en: 'Art basics - lines, shapes, light and shadow'},
                              {mn: 'Өнгөний хэрэглээ, холилт, төлөвлөлт', en: 'Color usage, mixing, and planning'},
                              {mn: 'Акварель техник - 8 төрөл', en: 'Watercolor techniques - 8 types'},
                              {mn: 'Гуаш техник - 6 төрөл', en: 'Gouache techniques - 6 types'},
                              {mn: 'Акрил будаг - 10 төрөл', en: 'Acrylic painting - 10 types'},
                              {mn: 'Тосны будаг - 5 төрөл', en: 'Oil painting - 5 types'},
                              {mn: 'Хуудас, даавуу, модон, чулуу дээр зурах', en: 'Painting on paper, fabric, wood, and stone'},
                              {mn: 'Монгол уран зурагийн онцлог - 15 төрөл', en: 'Mongolian art characteristics - 15 types'},
                              {mn: 'Олон улсын уран зурагийн хэв маяг', en: 'International art styles'},
                              {mn: 'Зурагийн композици, төлөвлөлт', en: 'Painting composition and planning'}
                            ].map((item, index) => (
                              <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/60 transition-colors duration-200">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{locale === 'mn' ? item.mn : item.en}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Handicraft Techniques */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                          <h4 className="font-semibold text-gray-800 mb-4 text-lg flex items-center space-x-2">
                            <Star className="w-5 h-5 text-yellow-500" />
                            <span>{locale === 'mn' ? 'Гар урлалын техник' : 'Handicraft Techniques'}</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              {mn: 'Оёмол техник - 12 төрөл', en: 'Embroidery techniques - 12 types'},
                              {mn: 'Сүлжмэл техник - 8 төрөл', en: 'Knitting techniques - 8 types'},
                              {mn: 'Мод сийлбэрлэх - 10 төрөл', en: 'Wood carving - 10 types'},
                              {mn: 'Чулуу сийлбэрлэх - 6 төрөл', en: 'Stone carving - 6 types'},
                              {mn: 'Арьс ажиллагаа - 15 төрөл', en: 'Leather work - 15 types'},
                              {mn: 'Даавуу ажиллагаа - 20 төрөл', en: 'Fabric work - 20 types'},
                              {mn: 'Шилэн эдлэл - 8 төрөл', en: 'Glass work - 8 types'},
                              {mn: 'Шаазан эдлэл - 10 төрөл', en: 'Ceramic work - 10 types'},
                              {mn: 'Металл ажиллагаа - 12 төрөл', en: 'Metal work - 12 types'},
                              {mn: 'Цэцэг, ургамал ашиглан хийх - 15 төрөл', en: 'Using flowers and plants - 15 types'}
                            ].map((item, index) => (
                              <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/60 transition-colors duration-200">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{locale === 'mn' ? item.mn : item.en}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Design and Marketing */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                          <h4 className="font-semibold text-gray-800 mb-4 text-lg flex items-center space-x-2">
                            <Globe className="w-5 h-5 text-blue-500" />
                            <span>{locale === 'mn' ? 'Дизайн, борлуулалт' : 'Design and Sales'}</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              {mn: 'Бүтээгдэхүүн дизайн, зураглал, эскиз', en: 'Product design, sketching, and creating sketches'},
                              {mn: 'Adobe Photoshop, Illustrator ашиглах', en: 'Using Adobe Photoshop and Illustrator'},
                              {mn: 'Брэнд, логотип бүтээх, бэлтгэх', en: 'Creating and preparing brand and logo'},
                              {mn: 'Зураг авалт, видео бэлтгэх', en: 'Photography and video production'},
                              {mn: 'Маркетинг, сурталчилгаа, сурталчилгаа', en: 'Marketing, advertising, and promotion'},
                              {mn: 'Онлайн борлуулалт, e-commerce', en: 'Online sales and e-commerce'},
                              {mn: 'Үнэ тогтоох, ашиг тооцоо, зардлын шинжилгээ', en: 'Pricing, profit calculation, and cost analysis'},
                              {mn: 'Хэрэглэгчдэд хүргэх, үйлчилгээ', en: 'Customer delivery and service'},
                              {mn: 'Бизнес төлөвлөлт, стратеги', en: 'Business planning and strategy'},
                              {mn: 'Харилцаа холбоо, түншлэл', en: 'Communication and partnerships'}
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
                    <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-2xl">
                      <CardTitle className="flex items-center space-x-3 text-white">
                        <Calendar className="w-6 h-6" />
                        <span>{locale === 'mn' ? 'Сургалтын мэдээлэл' : 'Training Details'}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-green-500" />
                          <div>
                            <div className="font-semibold text-gray-900">12</div>
                            <div className="text-sm text-gray-600">{locale === 'mn' ? 'Оролцогчид' : 'Participants'}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-green-500" />
                          <div>
                            <div className="font-semibold text-gray-900">{locale === 'mn' ? '90 хоног' : '90 Days'}</div>
                            <div className="text-sm text-gray-600">{locale === 'mn' ? 'Хугацаа' : 'Duration'}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-green-500" />
                          <div>
                            <div className="font-semibold text-gray-900">{locale === 'mn' ? '4-р зэрэг' : 'Level 4'}</div>
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

