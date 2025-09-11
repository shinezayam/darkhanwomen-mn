'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Calendar,
  Users,
  MapPin,
  Clock,
  ArrowLeft,
  CheckCircle,
  Target,
  Lightbulb
} from 'lucide-react';

export default function SmartDarkhanClubPage() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';

  const handleRegistration = () => {
    window.location.href = `/${locale}/register?program=smart-darkhan-club`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-violet-50 via-white to-pink-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-100/40 to-pink-100/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-100/40 to-violet-100/40 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-violet-100/20 to-pink-100/20 rounded-full blur-2xl"></div>
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

            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-violet-500 to-violet-600 text-white px-6 py-3 rounded-2xl text-sm font-semibold mb-8 shadow-xl border border-violet-500/20">
                <Brain className="w-5 h-5" />
                <span className="tracking-wide">{locale === 'mn' ? 'Клуб' : 'Club'}</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                {locale === 'mn' ? 'Эртэч Дархан клуб' : 'Smart Darkhan Club'}
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {locale === 'mn'
                  ? 'Оюунлаг, хөгжүүлэлтийн клуб. Оюун ухаан, хөгжүүлэлт, шинэлэг санаа, технологи.'
                  : 'Smart and development club. Intelligence, development, innovative ideas, and technology.'
                }
              </p>
            </div>

            {/* Program Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Card className="card-modern shadow-2xl border-0 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-violet-500 to-violet-600 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/90 to-violet-600/90"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                    <div className="relative z-10">
                      <CardTitle className="text-3xl font-bold text-center mb-2">
                        {locale === 'mn' ? 'Хөтөлбөрийн тухай' : 'About the Program'}
                      </CardTitle>
                      <p className="text-violet-100 text-center text-lg">
                        {locale === 'mn' ? 'Эртэч Дархан клубын дэлгэрэнгүй мэдээлэл' : 'Detailed information about Smart Darkhan Club'}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 bg-white space-y-6">
                    <p className="body-text text-gray-700">
                      {locale === 'mn'
                        ? 'Эртэч Дархан клуб нь оюунлаг, хөгжүүлэлтийн клуб юм. Энэ клуб нь эмэгтэйчүүдэд оюун ухаан, хөгжүүлэлт, шинэлэг санаа, технологийн талаар мэдлэг, ур чадвар өгдөг. Оролцогчид нь орчин үеийн технологи, шинэлэг санаа, хөгжүүлэлтийн боломжуудтай танилцдаг.'
                        : 'Smart Darkhan Club is a smart and development club. This club provides women with knowledge and skills about intelligence, development, innovative ideas, and technology. Participants get acquainted with modern technology, innovative ideas, and development opportunities.'
                      }
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start space-x-3">
                        <Brain className="w-6 h-6 text-violet-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {locale === 'mn' ? 'Оюун ухаан' : 'Intelligence'}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {locale === 'mn' ? 'Оюун ухааны хөгжүүлэлт' : 'Intelligence development'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Lightbulb className="w-6 h-6 text-yellow-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {locale === 'mn' ? 'Шинэлэг санаа' : 'Innovation'}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {locale === 'mn' ? 'Шинэлэг санаа, технологи' : 'Innovative ideas and technology'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Target className="w-6 h-6 text-blue-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {locale === 'mn' ? 'Хөгжүүлэлт' : 'Development'}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {locale === 'mn' ? 'Хувь хөгжил, ур чадвар' : 'Personal growth and skills'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Users className="w-6 h-6 text-purple-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {locale === 'mn' ? 'Сүлжээ' : 'Network'}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {locale === 'mn' ? 'Мэргэжлийн сүлжээ' : 'Professional network'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Program Details */}
                <Card className="card-modern shadow-xl border-0 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-violet-500 to-violet-600 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/90 to-violet-600/90"></div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="relative z-10">
                      <CardTitle className="text-xl font-bold text-center">
                        {locale === 'mn' ? 'Арга хэмжээний мэдээлэл' : 'Event Details'}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 bg-white space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-violet-500" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {locale === 'mn' ? 'Хугацаа' : 'Duration'}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {locale === 'mn' ? 'Тасралтгүй' : 'Ongoing'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-green-500" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {locale === 'mn' ? 'Цаг' : 'Time'}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {locale === 'mn' ? 'Амралтын өдрүүд' : 'Weekends'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-red-500" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {locale === 'mn' ? 'Байршил' : 'Location'}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {locale === 'mn' ? 'Дархан хот' : 'Darkhan City'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-purple-500" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {locale === 'mn' ? 'Оролцогчид' : 'Participants'}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {locale === 'mn' ? '50 хүн' : '50 people'}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Registration */}
                <Card className="card-modern shadow-xl border-0">
                  <CardHeader className="p-6 pb-0">
                    <CardTitle className="text-xl font-bold text-center text-gray-900">
                      {locale === 'mn' ? 'Бүртгүүлэх' : 'Registration'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-4">
                    <p className="text-gray-600 mb-6 leading-relaxed text-center">
                      {locale === 'mn'
                        ? 'Эртэч Дархан клубт оролцохыг хүсвэл бүртгүүлээрэй'
                        : 'Register to participate in Smart Darkhan Club'
                      }
                    </p>
                    <Button className="w-full btn-primary py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300" onClick={handleRegistration}>
                      {locale === 'mn' ? 'Бүртгүүлэх' : 'Register Now'}
                    </Button>
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
