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
        <section className="section-spacing bg-gradient-to-br from-rose-50 via-white to-pink-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
          </div>

          <div className="container-max container-spacing relative z-10">
            {/* Top Left Back Button */}
            <div className="absolute top-6 left-6 z-50">
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-medium transition-all duration-200 hover:scale-105 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="hidden sm:inline">{locale === 'mn' ? 'Буцах' : 'Back'}</span>
              </button>
            </div>

            <div className="text-center pt-16">
              {/* Program Icon */}
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-rose-500 to-rose-600 rounded-3xl shadow-2xl mb-8">
                <Scissors className="w-12 h-12 text-white" />
              </div>

              {/* Program Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  {locale === 'mn' ? 'Үс засагч' : 'Hair Stylist'}
                </span>
              </h1>

              {/* Program Description */}
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                {locale === 'mn' 
                  ? '45 хоног үргэлжлэх, онол практик хосолсон үсчин мэргэжил олгох сургалт'
                  : '45-day comprehensive hair stylist training combining theory and practice'
                }
              </p>

              {/* Program Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
                  <Users className="w-8 h-8 text-rose-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">20</div>
                  <div className="text-sm text-gray-600 font-medium">
                    {locale === 'mn' ? 'Оролцогчид' : 'Participants'}
                  </div>
                </div>
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
                  <Clock className="w-8 h-8 text-pink-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {locale === 'mn' ? '45 хоног' : '45 Days'}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {locale === 'mn' ? 'Хугацаа' : 'Duration'}
                  </div>
                </div>
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
                  <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {locale === 'mn' ? '2-р зэрэг' : 'Level 2'}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {locale === 'mn' ? 'Сертификат' : 'Certificate'}
                  </div>
                </div>
              </div>

              {/* Registration Button */}
              <div className="text-center pt-6">
                <Button className="btn-primary" onClick={handleRegistration}>
                  {locale === 'mn' ? 'Бүртгүүлэх' : 'Register Now'}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="section-spacing bg-white">
          <div className="container-max container-spacing">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Program Info */}
                <div className="space-y-8">
                  <div className="brief-intro-card">
                    <div className="text-center mb-8">
                      <div className="flex items-center justify-center space-x-3 mb-4">
                        <Star className="w-6 h-6 text-rose-500" />
                        <h3 className="brief-intro-title text-2xl">
                          {locale === 'mn' ? 'Сургалтын тухай' : 'About the Training'}
                        </h3>
                      </div>
                      <div className="brief-intro-divider-rose"></div>
                    </div>
                    <div className="brief-intro-content">
                      <p className="brief-intro-text mb-6">
                        {locale === 'mn' 
                          ? 'Үсчний мэргэжил олгох сургалт нь 45 хоног үргэлжлэх, онол практик хосолсон мэргэжлийн сургалт юм. Хөдөлмөр нийгмийн хамгааллын яамны 2-р зэргийн үсчин мэргэжлийн чадамжийн гэрчилгээ олгоно.'
                          : 'The hair stylist professional training is a 45-day comprehensive program combining theory and practice. Participants will receive a Level 2 professional competency certificate from the Ministry of Labor and Social Protection.'
                        }
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-800 mb-3">
                            {locale === 'mn' ? 'Сургалтын онцлог:' : 'Training Features:'}
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{locale === 'mn' ? 'Олон улсын стандартын дагуу бэлтгэсэн хичээлийн хөтөлбөр' : 'Curriculum prepared according to international standards'}</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{locale === 'mn' ? 'Мэргэжлийн дадлага туршлагатай багш боловсон хүчин' : 'Professional instructors with practical experience'}</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{locale === 'mn' ? '4 төрлийн мэргэжлийн үс засалтын техник' : '4 types of professional hair styling techniques'}</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{locale === 'mn' ? 'Орчин үеийн шаардлага хангасан анги танхим' : 'Modern classroom facilities meeting current requirements'}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-800 mb-3">
                            {locale === 'mn' ? 'Сургалтын нөхцөл:' : 'Training Conditions:'}
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{locale === 'mn' ? 'Дадлагад суурилсан, цөөн хүнтэй 1 ангид 4-5 хүнтэй' : 'Practice-based training, small class size of 4-5 people'}</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{locale === 'mn' ? 'Мэргэжлийн салоны хэрэгслээр бид хангаж сургалт явуулна' : 'Training conducted with professional salon equipment provided by us'}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <Scissors className="w-6 h-6 text-rose-500" />
                        <span>{locale === 'mn' ? 'Сургалтын хөтөлбөр' : 'Training Curriculum'}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                            {locale === 'mn' ? '1. Эрэгтэй үс засалт' : '1. Men\'s Hair Styling'}
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• {locale === 'mn' ? 'Толгойн хэлбэр ба хэсгүүдийн харьцааг тодорхойлох' : 'Identifying head shape and proportions'}</li>
                            <li>• {locale === 'mn' ? 'Толгойн үс, сахал хусаж засах' : 'Cutting and styling head hair and beard'}</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                            {locale === 'mn' ? '2. Эмэгтэй тайралт' : '2. Women\'s Hair Cutting'}
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• {locale === 'mn' ? 'Нүүрний хэлбэр ба хэсгүүдийн харьцааг тодорхойлох' : 'Identifying face shape and proportions'}</li>
                            <li>• {locale === 'mn' ? 'Толгойн цэгийн дагуу шугамаар хуваах' : 'Dividing hair along head points with lines'}</li>
                            <li>• {locale === 'mn' ? 'Үсийг үндсэн техникээр тайрах' : 'Cutting hair with basic techniques'}</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                            {locale === 'mn' ? '3. Үс хуйх, арчлах' : '3. Hair Washing and Care'}
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• {locale === 'mn' ? 'Арьс үсний хэв шинж тодорхойлох' : 'Identifying hair and scalp characteristics'}</li>
                            <li>• {locale === 'mn' ? 'Үс арчилгааны бүтээгдэхүүн хэрэглэх' : 'Using hair care products'}</li>
                            <li>• {locale === 'mn' ? 'Үс угаах, арчлах, хуйх арчлах' : 'Washing, caring, and scalp care'}</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                            {locale === 'mn' ? '4. Үс долгионтуулан хэлбэржүүлэх' : '4. Hair Styling and Shaping'}
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• {locale === 'mn' ? 'Хэлбэржүүлэлтийн бүтээгдэхүүн хэрэглэх' : 'Using styling products'}</li>
                            <li>• {locale === 'mn' ? 'Үсийг халуун хайч, индүүгээр хэлбэржүүлэх' : 'Styling hair with hot tools and curling irons'}</li>
                            <li>• {locale === 'mn' ? 'Үсийг сэнсээр хэлбэржүүлэх' : 'Styling hair with blow dryer'}</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                            {locale === 'mn' ? '5. Үйлчлүүлэгчтэй харилцах' : '5. Customer Service'}
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• {locale === 'mn' ? 'Үйлчилгээний соёл, ёс зүй эзэмших' : 'Learning service culture and ethics'}</li>
                            <li>• {locale === 'mn' ? 'Үйлчлүүлэгчид зөвлөгөө өгөх' : 'Providing advice to customers'}</li>
                            <li>• {locale === 'mn' ? 'Үйлчилгээний ажилтны мэргэжлийн ёс зүй' : 'Professional ethics for service staff'}</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column - Program Structure */}
                <div className="space-y-8">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <BookOpen className="w-6 h-6 text-blue-500" />
                        <span>{locale === 'mn' ? 'Дэлгэрэнгүй хичээлийн сэдвүүд' : 'Detailed Course Topics'}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                            {locale === 'mn' ? 'Эрэгтэй үс засах' : 'Men\'s Hair Cutting'}
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• {locale === 'mn' ? 'Толгойн хэлбэрийг судлах, тодорхойлох' : 'Studying and identifying head shape'}</li>
                            <li>• {locale === 'mn' ? 'Хуруун дээр засах арга' : 'Cutting technique on fingers'}</li>
                            <li>• {locale === 'mn' ? 'Дасгуулан засах арга' : 'Comb cutting technique'}</li>
                            <li>• {locale === 'mn' ? 'Жигдлэн засах арга' : 'Even cutting technique'}</li>
                            <li>• {locale === 'mn' ? 'Шингэлэх арга' : 'Thinning technique'}</li>
                            <li>• {locale === 'mn' ? 'Үсийг машинаар засах арга' : 'Machine cutting technique'}</li>
                            <li>• {locale === 'mn' ? 'Талбай гарган засах арга' : 'Section cutting technique'}</li>
                            <li>• {locale === 'mn' ? 'Захлах засах арга' : 'Edge cutting technique'}</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                            {locale === 'mn' ? 'Эмэгтэй үс засах' : 'Women\'s Hair Cutting'}
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• {locale === 'mn' ? 'Нүүрний хэлбэрийг тодорхойлох' : 'Identifying face shape'}</li>
                            <li>• {locale === 'mn' ? 'Толгойн цэгийн дагуу шугамаар хуваах' : 'Dividing along head points with lines'}</li>
                            <li>• {locale === 'mn' ? 'Гар, хурууны дасгал хийх' : 'Hand and finger exercises'}</li>
                            <li>• {locale === 'mn' ? 'Үс засах үндсэн техник эзэмших' : 'Mastering basic cutting techniques'}</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                            {locale === 'mn' ? 'Үс хуйх, арчлах' : 'Hair Washing and Care'}
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• {locale === 'mn' ? 'Арьс, хуйхны хэв шинж механик аргаар тодорхойлох' : 'Identifying hair and scalp characteristics mechanically'}</li>
                            <li>• {locale === 'mn' ? 'Арьс, хуйхны хэв шинжийг аппаратаар тодорхойлох' : 'Identifying hair and scalp characteristics with equipment'}</li>
                            <li>• {locale === 'mn' ? 'Үсний хэв шинжийг харах аргаар тодорхойлох' : 'Identifying hair characteristics by visual inspection'}</li>
                            <li>• {locale === 'mn' ? 'Арьс, хуйханд тохиолддог гэмтэл, өвчлөлийг илрүүлэх' : 'Detecting damage and diseases in hair and scalp'}</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <Scissors className="w-6 h-6 text-purple-500" />
                        <span>{locale === 'mn' ? 'Бүтээгдэхүүн хэрэглэх, үйлчлүүлэгчтэй харилцах' : 'Product Usage & Customer Service'}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                            {locale === 'mn' ? 'Үс арчилгааны бүтээгдэхүүн' : 'Hair Care Products'}
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• {locale === 'mn' ? 'Энгийн шампунь хэрэглэх' : 'Using regular shampoo'}</li>
                            <li>• {locale === 'mn' ? 'Эмчилгээний шампунь хэрэглэх' : 'Using medicated shampoo'}</li>
                            <li>• {locale === 'mn' ? 'Ангижруулагч хэрэглэх' : 'Using conditioner'}</li>
                            <li>• {locale === 'mn' ? 'Тэжээлийн тос хэрэглэх' : 'Using nourishing oil'}</li>
                            <li>• {locale === 'mn' ? 'Уураг хэрэглэх' : 'Using protein treatments'}</li>
                            <li>• {locale === 'mn' ? 'Үсний эссенц хэрэглэх' : 'Using hair essence'}</li>
                            <li>• {locale === 'mn' ? 'Үсний серум хэрэглэх' : 'Using hair serum'}</li>
                            <li>• {locale === 'mn' ? 'Хуйхны лосьон хэрэглэх' : 'Using scalp lotion'}</li>
                            <li>• {locale === 'mn' ? 'Хуйхны тоник хэрэглэх' : 'Using scalp tonic'}</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                            {locale === 'mn' ? 'Үйлчлүүлэгчтэй харилцах' : 'Customer Service'}
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• {locale === 'mn' ? 'Харилцааны тухай ойлголт' : 'Understanding communication'}</li>
                            <li>• {locale === 'mn' ? 'Харилцааны төрөл' : 'Types of communication'}</li>
                            <li>• {locale === 'mn' ? 'Байгууллагын соёл' : 'Organizational culture'}</li>
                            <li>• {locale === 'mn' ? 'Хамт олон нийгмийн харилцаанд оролцох' : 'Participating in social communication'}</li>
                            <li>• {locale === 'mn' ? 'Харилцааны сэтгэл зүй' : 'Communication psychology'}</li>
                            <li>• {locale === 'mn' ? 'Харилцаанд тохиолдох саад бэрхшээл' : 'Communication barriers and difficulties'}</li>
                            <li>• {locale === 'mn' ? 'Хүний ан араншин, онцлог шинжийг таних' : 'Recognizing personality and characteristics'}</li>
                            <li>• {locale === 'mn' ? 'Үйлчүүлэгчийг сонсох, ярилцах' : 'Listening and communicating with customers'}</li>
                            <li>• {locale === 'mn' ? 'Үйлчлүүлэгчид зөвлөлгөө өгөх' : 'Providing advice to customers'}</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Training Content */}
        <section className="section-spacing bg-gray-50">
          <div className="container-max container-spacing">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {locale === 'mn' ? 'Үс долгионтуулан хэлбэржүүлэх техник' : 'Hair Styling and Shaping Techniques'}
                </h2>
                <p className="text-lg text-gray-600">
                  {locale === 'mn' ? 'Орчин үеийн үс засалтын бүх техникийг эзэмших' : 'Master all modern hair styling techniques'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Star className="w-6 h-6 text-yellow-500" />
                      <span>{locale === 'mn' ? 'Үс хэлбэржүүлэх техник' : 'Hair Shaping Techniques'}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• {locale === 'mn' ? 'Үсийг хэлбэржүүлэхийн өмнөх бүтээгдэхүүн хэрэглэх' : 'Using pre-styling products'}</li>
                      <li>• {locale === 'mn' ? 'Үсний хэлбэржүүлэлтийн дараах бүтээгдэхүүн хэрэглэх' : 'Using post-styling products'}</li>
                      <li>• {locale === 'mn' ? 'Бигуди сонгож хэрэглэх' : 'Selecting and using curlers'}</li>
                      <li>• {locale === 'mn' ? 'Үсэнд бигуди ороох' : 'Rolling hair with curlers'}</li>
                      <li>• {locale === 'mn' ? 'Бигудээр үс хэлбэржүүлэх' : 'Shaping hair with curlers'}</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Scissors className="w-6 h-6 text-rose-500" />
                      <span>{locale === 'mn' ? 'Халуун хэрэгсэл ашиглах' : 'Using Hot Tools'}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• {locale === 'mn' ? 'Халуун хайч, индүү хэрэглэх' : 'Using hot tools and curling irons'}</li>
                      <li>• {locale === 'mn' ? 'Үсийг халуун хайчаар хэлбэржүүлэх' : 'Styling hair with hot tools'}</li>
                      <li>• {locale === 'mn' ? 'Үсийг индүүгээр хэлбэржүүлэх' : 'Styling hair with curling irons'}</li>
                      <li>• {locale === 'mn' ? 'Сэнс бөөрөнхий сойзон сам хэрэглэх' : 'Using round brush blow dryer'}</li>
                      <li>• {locale === 'mn' ? 'Сэнс уг босгогч сам хэрэглэх' : 'Using volume brush blow dryer'}</li>
                      <li>• {locale === 'mn' ? 'Үсийг сэнсээр хэлбэржүүлэх' : 'Styling hair with blow dryer'}</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
