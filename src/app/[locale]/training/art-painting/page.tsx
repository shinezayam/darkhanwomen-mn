'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar,
  Users,
  Clock,
  ArrowLeft,
  Star,
  CheckCircle,
  Globe,
  Award,
  Brush
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
        <section className="section-spacing bg-gradient-to-br from-indigo-50 via-white to-pink-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
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
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl shadow-2xl mb-8">
                <Brush className="w-12 h-12 text-white" />
              </div>

              {/* Program Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {locale === 'mn' ? 'Уран зураг' : 'Art Painting'}
                </span>
              </h1>

              {/* Program Description */}
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                {locale === 'mn' 
                  ? 'Хүүхэд, залуучууд, насанд хүрэгчдэд зориулсан уран зурагийн сургалт'
                  : 'Art painting training for children, youth, and adults'
                }
              </p>

              {/* Program Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
                  <Users className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">30</div>
                  <div className="text-sm text-gray-600 font-medium">
                    {locale === 'mn' ? 'Оролцогчид' : 'Participants'}
                  </div>
                </div>
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
                  <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {locale === 'mn' ? '2 сар' : '2 Months'}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {locale === 'mn' ? 'Хугацаа' : 'Duration'}
                  </div>
                </div>
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
                  <Award className="w-8 h-8 text-pink-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {locale === 'mn' ? 'Хөгжүүлэлт' : 'Development'}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {locale === 'mn' ? 'Төрөл' : 'Type'}
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
                        <Star className="w-6 h-6 text-indigo-500" />
                        <h3 className="brief-intro-title text-2xl">
                          {locale === 'mn' ? 'Сургалтын тухай' : 'About the Training'}
                        </h3>
                      </div>
                      <div className="brief-intro-divider-indigo"></div>
                    </div>
                    <div className="brief-intro-content">
                      <p className="brief-intro-text">
                        {locale === 'mn' 
                          ? 'Уран зурагийн сургалт нь хүүхэд, залуучууд, насанд хүрэгчдэд зориулсан бүтээлч ур чадварыг хөгжүүлэх сургалт юм. Энэ сургалт нь зурагийн онол, техник, өнгөний хэрэглээ, бүтээлч сэтгэлгээ зэрэг чухал асуудлуудыг хамардаг.'
                          : 'Art painting training is designed to develop creative skills for children, youth, and adults. This training covers drawing theory, techniques, color usage, creative thinking, and other important aspects.'
                        }
                      </p>
                    </div>
                  </div>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                        <span>{locale === 'mn' ? 'Сургалтын давуу тал' : 'Training Benefits'}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">
                            {locale === 'mn' ? 'Бүтээлч ур чадвар хөгжүүлэх' : 'Developing creative skills'}
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">
                            {locale === 'mn' ? 'Зурагийн техник, арга' : 'Drawing techniques and methods'}
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">
                            {locale === 'mn' ? 'Өнгөний хэрэглээ, дизайн' : 'Color usage and design'}
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">
                            {locale === 'mn' ? 'Хувь хөгжил, итгэл үнэмшил' : 'Personal growth and confidence'}
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column - Program Structure */}
                <div className="space-y-8">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <Calendar className="w-6 h-6 text-blue-500" />
                        <span>{locale === 'mn' ? 'Сургалтын бүтэц' : 'Training Structure'}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 p-3 bg-indigo-50 rounded-lg">
                          <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                          <span className="text-gray-700">
                            {locale === 'mn' ? 'Зурагийн онол, үндэс' : 'Drawing theory and basics'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                          <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                          <span className="text-gray-700">
                            {locale === 'mn' ? 'Зурагийн техник, арга' : 'Drawing techniques and methods'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg">
                          <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                          <span className="text-gray-700">
                            {locale === 'mn' ? 'Өнгөний хэрэглээ, дизайн' : 'Color usage and design'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                          <span className="text-gray-700">
                            {locale === 'mn' ? 'Бүтээлч төсөл, үзэсгэлэн' : 'Creative projects and exhibition'}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <Award className="w-6 h-6 text-purple-500" />
                        <span>{locale === 'mn' ? 'Хүлээн авах зүйлс' : 'What You\'ll Receive'}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-center space-x-3">
                          <Award className="w-5 h-5 text-purple-500" />
                          <span className="text-gray-600">
                            {locale === 'mn' ? 'Төгсөлтийн гэрчилгээ' : 'Completion certificate'}
                          </span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <Brush className="w-5 h-5 text-indigo-500" />
                          <span className="text-gray-600">
                            {locale === 'mn' ? 'Зурагийн багаж хэрэгсэл' : 'Art supplies and materials'}
                          </span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-blue-500" />
                          <span className="text-gray-600">
                            {locale === 'mn' ? 'Бүтээлч сүлжээ' : 'Creative network'}
                          </span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <Globe className="w-5 h-5 text-green-500" />
                          <span className="text-gray-600">
                            {locale === 'mn' ? 'Цаашдын дэмжлэг' : 'Ongoing support'}
                          </span>
                        </li>
                      </ul>
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
