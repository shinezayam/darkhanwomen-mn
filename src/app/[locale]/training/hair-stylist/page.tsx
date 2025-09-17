'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Scissors, 
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

export default function HairStylistPage() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';

  const handleRegistration = () => {
    window.location.href = `/${locale}/register?program=hair-stylist`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-teal-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-100/40 to-teal-100/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-100/40 to-cyan-100/40 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-teal-100/20 to-teal-100/20 rounded-full blur-2xl"></div>
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
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-xl">
                <Scissors className="w-4 h-4" />
                <span>{locale === 'mn' ? 'Мэргэжлийн сургалт' : 'Professional Training'}</span>
              </div>


              {/* Program Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                {locale === 'mn' ? 'Үсчин' : 'Hair Stylist'}
              </h1>

              {/* Program Description */}
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                {locale === 'mn' 
                  ? 'Онол практик хосолсон үсчин мэргэжил олгох сургалт'
                  : 'Hair stylist training combining theory and practice'
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
                    <CardHeader className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-t-2xl">
                      <CardTitle className="flex items-center space-x-3 text-white">
                        <Scissors className="w-6 h-6" />
                        <span>{locale === 'mn' ? 'Сургалтын тухай' : 'About the Training'}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed">
                          {locale === 'mn' 
                            ? 'Үсчний мэргэжил олгох сургалт нь 45 хоног үргэлжлэх, онол практик хосолсон мэргэжлийн сургалт юм. Хөдөлмөр нийгмийн хамгааллын яамны 2-р зэргийн үсчин мэргэжлийн чадамжийн гэрчилгээ олгоно.'
                            : 'The hair stylist professional training is a 45-day comprehensive program combining theory and practice. Participants will receive a Level 2 professional competency certificate from the Ministry of Labor and Social Protection.'
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
                                  <span className="text-gray-600">{locale === 'mn' ? '4 төрлийн мэргэжлийн үс засалтын техник' : '4 types of professional hair styling techniques'}</span>
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
                                  <span className="text-gray-600">{locale === 'mn' ? 'Дадлагад суурилсан, цөөн хүнтэй 1 ангид 4-5 хүнтэй' : 'Practice-based training, small class size of 4-5 people'}</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600">{locale === 'mn' ? 'Мэргэжлийн салоны хэрэгслээр бид хангаж сургалт явуулна' : 'Training conducted with professional salon equipment provided by us'}</span>
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
                        {/* Hair Cutting Techniques */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                          <h4 className="font-semibold text-gray-800 mb-4 text-lg flex items-center space-x-2">
                            <Scissors className="w-5 h-5 text-blue-500" />
                            <span>{locale === 'mn' ? 'Үс засах техник' : 'Hair Cutting Techniques'}</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-medium text-gray-700 mb-3 text-base">
                                {locale === 'mn' ? 'Эрэгтэй үс засах' : 'Men\'s Hair Cutting'}
                              </h5>
                              <div className="space-y-2">
                                {[
                                  {mn: 'Толгойн хэлбэрийг судлах, тодорхойлох', en: 'Studying and identifying head shape'},
                                  {mn: 'Хуруун дээр засах арга', en: 'Cutting technique on fingers'},
                                  {mn: 'Дасгуулан засах арга', en: 'Comb cutting technique'},
                                  {mn: 'Жигдлэн засах арга', en: 'Even cutting technique'},
                                  {mn: 'Шингэлэх арга', en: 'Thinning technique'},
                                  {mn: 'Үсийг машинаар засах арга', en: 'Machine cutting technique'},
                                  {mn: 'Талбай гарган засах арга', en: 'Section cutting technique'},
                                  {mn: 'Захлах засах арга', en: 'Edge cutting technique'}
                                ].map((item, index) => (
                                  <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/60 transition-colors duration-200">
                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{locale === 'mn' ? item.mn : item.en}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-700 mb-3 text-base">
                                {locale === 'mn' ? 'Эмэгтэй үс засах' : 'Women\'s Hair Cutting'}
                              </h5>
                              <div className="space-y-2">
                                {[
                                  {mn: 'Нүүрний хэлбэрийг тодорхойлох', en: 'Identifying face shape'},
                                  {mn: 'Толгойн цэгийн дагуу шугамаар хуваах', en: 'Dividing along head points with lines'},
                                  {mn: 'Гар, хурууны дасгал хийх', en: 'Hand and finger exercises'},
                                  {mn: 'Үс засах үндсэн техник эзэмших', en: 'Mastering basic cutting techniques'}
                                ].map((item, index) => (
                                  <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/60 transition-colors duration-200">
                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{locale === 'mn' ? item.mn : item.en}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Hair Care and Washing */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                          <h4 className="font-semibold text-gray-800 mb-4 text-lg flex items-center space-x-2">
                            <Star className="w-5 h-5 text-purple-500" />
                            <span>{locale === 'mn' ? 'Үс хуйх, арчлах' : 'Hair Washing and Care'}</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              {mn: 'Арьс, хуйхны хэв шинж механик аргаар тодорхойлох', en: 'Identifying hair and scalp characteristics mechanically'},
                              {mn: 'Арьс, хуйхны хэв шинжийг аппаратаар тодорхойлох', en: 'Identifying hair and scalp characteristics with equipment'},
                              {mn: 'Үсний хэв шинжийг харах аргаар тодорхойлох', en: 'Identifying hair characteristics by visual inspection'},
                              {mn: 'Арьс, хуйханд тохиолддог гэмтэл, өвчлөлийг илрүүлэх', en: 'Detecting damage and diseases in hair and scalp'}
                            ].map((item, index) => (
                              <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/60 transition-colors duration-200">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{locale === 'mn' ? item.mn : item.en}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Hair Care Products */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                          <h4 className="font-semibold text-gray-800 mb-4 text-lg flex items-center space-x-2">
                            <Star className="w-5 h-5 text-purple-500" />
                            <span>{locale === 'mn' ? 'Үс арчилгааны бүтээгдэхүүн' : 'Hair Care Products'}</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              {mn: 'Энгийн шампунь хэрэглэх', en: 'Using regular shampoo'},
                              {mn: 'Эмчилгээний шампунь хэрэглэх', en: 'Using medicated shampoo'},
                              {mn: 'Ангижруулагч хэрэглэх', en: 'Using conditioner'},
                              {mn: 'Тэжээлийн тос хэрэглэх', en: 'Using nourishing oil'},
                              {mn: 'Уураг хэрэглэх', en: 'Using protein treatments'},
                              {mn: 'Үсний эссенц хэрэглэх', en: 'Using hair essence'},
                              {mn: 'Үсний серум хэрэглэх', en: 'Using hair serum'},
                              {mn: 'Хуйхны лосьон хэрэглэх', en: 'Using scalp lotion'},
                              {mn: 'Хуйхны тоник хэрэглэх', en: 'Using scalp tonic'}
                            ].map((item, index) => (
                              <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/60 transition-colors duration-200">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{locale === 'mn' ? item.mn : item.en}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Customer Service */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                          <h4 className="font-semibold text-gray-800 mb-4 text-lg flex items-center space-x-2">
                            <Users className="w-5 h-5 text-teal-500" />
                            <span>{locale === 'mn' ? 'Үйлчлүүлэгчтэй харилцах' : 'Customer Service'}</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              {mn: 'Харилцааны тухай ойлголт', en: 'Understanding communication'},
                              {mn: 'Харилцааны төрөл', en: 'Types of communication'},
                              {mn: 'Байгууллагын соёл', en: 'Organizational culture'},
                              {mn: 'Хамт олон нийгмийн харилцаанд оролцох', en: 'Participating in social communication'},
                              {mn: 'Харилцааны сэтгэл зүй', en: 'Communication psychology'},
                              {mn: 'Харилцаанд тохиолдох саад бэрхшээл', en: 'Communication barriers and difficulties'},
                              {mn: 'Хүний ан араншин, онцлог шинжийг таних', en: 'Recognizing personality and characteristics'},
                              {mn: 'Үйлчүүлэгчийг сонсох, ярилцах', en: 'Listening and communicating with customers'},
                              {mn: 'Үйлчлүүлэгчид зөвлөлгөө өгөх', en: 'Providing advice to customers'}
                            ].map((item, index) => (
                              <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/60 transition-colors duration-200">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{locale === 'mn' ? item.mn : item.en}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Hair Styling Techniques */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                          <h4 className="font-semibold text-gray-800 mb-4 text-lg flex items-center space-x-2">
                            <Star className="w-5 h-5 text-yellow-500" />
                            <span>{locale === 'mn' ? 'Үс хэлбэржүүлэх техник' : 'Hair Styling Techniques'}</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              {mn: 'Үсийг хэлбэржүүлэхийн өмнөх бүтээгдэхүүн хэрэглэх', en: 'Using pre-styling products'},
                              {mn: 'Үсний хэлбэржүүлэлтийн дараах бүтээгдэхүүн хэрэглэх', en: 'Using post-styling products'},
                              {mn: 'Бигуди сонгож хэрэглэх', en: 'Selecting and using curlers'},
                              {mn: 'Үсэнд бигуди ороох', en: 'Rolling hair with curlers'},
                              {mn: 'Бигудээр үс хэлбэржүүлэх', en: 'Shaping hair with curlers'}
                            ].map((item, index) => (
                              <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/60 transition-colors duration-200">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{locale === 'mn' ? item.mn : item.en}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Hot Tools Usage */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                          <h4 className="font-semibold text-gray-800 mb-4 text-lg flex items-center space-x-2">
                            <Scissors className="w-5 h-5 text-teal-500" />
                            <span>{locale === 'mn' ? 'Халуун хэрэгсэл ашиглах' : 'Using Hot Tools'}</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              {mn: 'Халуун хайч, индүү хэрэглэх', en: 'Using hot tools and curling irons'},
                              {mn: 'Үсийг халуун хайчаар хэлбэржүүлэх', en: 'Styling hair with hot tools'},
                              {mn: 'Үсийг индүүгээр хэлбэржүүлэх', en: 'Styling hair with curling irons'},
                              {mn: 'Сэнс бөөрөнхий сойзон сам хэрэглэх', en: 'Using round brush blow dryer'},
                              {mn: 'Сэнс уг босгогч сам хэрэглэх', en: 'Using volume brush blow dryer'},
                              {mn: 'Үсийг сэнсээр хэлбэржүүлэх', en: 'Styling hair with blow dryer'}
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
                  {/* Event Details Card */}
                  <Card className="border-0 shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-t-2xl">
                      <CardTitle className="flex items-center space-x-3 text-white">
                        <Calendar className="w-6 h-6" />
                        <span>{locale === 'mn' ? 'Сургалтын мэдээлэл' : 'Training Details'}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-teal-500" />
                          <div>
                            <div className="font-semibold text-gray-900">20</div>
                            <div className="text-sm text-gray-600">{locale === 'mn' ? 'Оролцогчид' : 'Participants'}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-teal-500" />
                          <div>
                            <div className="font-semibold text-gray-900">{locale === 'mn' ? '45 хоног' : '45 Days'}</div>
                            <div className="text-sm text-gray-600">{locale === 'mn' ? 'Хугацаа' : 'Duration'}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-teal-500" />
                          <div>
                            <div className="font-semibold text-gray-900">{locale === 'mn' ? '2-р зэрэг' : 'Level 2'}</div>
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