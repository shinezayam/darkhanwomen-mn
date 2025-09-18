'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  CreditCard,
  ArrowLeft,
  Star,
  CheckCircle,
  Users,
  Shield,
  Globe,
  Sparkles,
  TrendingUp,
  Award,
  ArrowRight,
  Calendar,
  Lock,
  Eye,
  FileText
} from 'lucide-react';
import Link from 'next/link';

export default function DonatePage() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';
  
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [customAmount, setCustomAmount] = useState('');
  const [dedicationType, setDedicationType] = useState<'honor' | 'memory' | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'online' | null>(null);

  const impactStats = [
    { amount: 50000, impact: locale === 'mn' ? '1 эмэгтэйд 1 сарын сургалт' : '1 month training for 1 woman', icon: Users },
    { amount: 100000, impact: locale === 'mn' ? '2 эмэгтэйд 1 сарын сургалт' : '1 month training for 2 women', icon: Users },
    { amount: 200000, impact: locale === 'mn' ? 'Жижиг арга хэмжээ зохион байгуулах' : 'Organize a small event', icon: Calendar },
    { amount: 500000, impact: locale === 'mn' ? 'Том арга хэмжээ зохион байгуулах' : 'Organize a major event', icon: Award },
  ];


  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden bg-gray-50">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-200/30 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          <div className="container-max container-spacing relative z-10">
            {/* Enhanced Back Button */}
            <div className="absolute top-6 left-6 z-50">
              <Link
                href={`/${locale}`}
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-brand-500 hover:text-pink-700 font-medium transition-all duration-200 hover:scale-105 group px-4 py-2 rounded-full shadow-lg border border-pink-100/50"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="hidden sm:inline">{locale === 'mn' ? 'Нүүр хуудас' : 'Home'}</span>
              </Link>
            </div>

            <div className="text-center mb-16 pt-16">
              {/* Enhanced Badge */}
              <div className="inline-flex items-center space-x-2 bg-brand-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-xl border border-brand-500/20">
                <Heart className="w-5 h-5" />
                <span className="tracking-wide">{locale === 'mn' ? 'Хандив' : 'Donate'}</span>
                <Sparkles className="w-4 h-4" />
              </div>
              
              {/* Enhanced Title */}
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                {locale === 'mn' ? 'Эмэгтэйчүүдийн хөгжилд дэмжлэг үзүүлээрэй' : 'Support Women\'s Development'}
              </h1>
              
              {/* Enhanced Subtitle */}
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                {locale === 'mn'
                  ? 'Таны хандив эмэгтэйчүүдийн амьдралыг өөрчилж, илүү сайн ирээдүйг бүтээхэд чухал хувь нэмэр оруулна.'
                  : 'Your donation makes a crucial difference in transforming women\'s lives and building a better future.'
                }
              </p>

              {/* Impact Counter */}
              <div className="flex justify-center items-center space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-500">500+</div>
                  <div className="text-sm text-gray-600">{locale === 'mn' ? 'Эмэгтэйчүүд' : 'Women Helped'}</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">{locale === 'mn' ? 'Хөтөлбөр' : 'Programs'}</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-500">100%</div>
                  <div className="text-sm text-gray-600">{locale === 'mn' ? 'Ил тод байдал' : 'Transparency'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Donation Options Section */}
        <section className="py-20 bg-white">
          <div className="container-max container-spacing">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Enhanced Donation Form */}
              <Card className="card-modern p-8 shadow-2xl border-2 border-pink-300 bg-gradient-to-br from-white to-pink-50/30 backdrop-blur-sm ring-4 ring-pink-200 scale-105">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-brand-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-4xl font-bold text-gray-900 mb-4">
                    {locale === 'mn' ? 'Хандив өгөх' : 'Make a Donation'}
                  </CardTitle>
                  <p className="text-gray-600 text-lg">
                    {locale === 'mn' ? 'Таны хандив эмэгтэйчүүдийн амьдралыг өөрчилнө' : 'Your donation transforms women\'s lives'}
                  </p>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Enhanced Donation Type */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-800 mb-4">
                      {locale === 'mn' ? 'Хандивын төрөл' : 'Donation Type'}
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={() => setDonationType('one-time')}
                        className={`p-6 border-2 rounded-2xl transition-all duration-300 text-center group ${
                          donationType === 'one-time' 
                            ? 'border-brand-500 bg-brand-50 shadow-lg scale-105' 
                            : 'border-gray-200 hover:border-brand-500 hover:bg-brand-50 hover:scale-105'
                        }`}
                      >
                        <div className={`font-bold text-lg ${donationType === 'one-time' ? 'text-pink-700' : 'text-gray-900 group-hover:text-pink-700'}`}>
                          {locale === 'mn' ? 'Нэг удаа' : 'One-time'}
                        </div>
                        <div className={`text-sm mt-1 ${donationType === 'one-time' ? 'text-brand-500' : 'text-gray-500 group-hover:text-brand-500'}`}>
                          {locale === 'mn' ? 'Нэг удаагийн хандив' : 'Single donation'}
                        </div>
                      </button>
                      <button 
                        onClick={() => setDonationType('monthly')}
                        className={`p-6 border-2 rounded-2xl transition-all duration-300 text-center group ${
                          donationType === 'monthly' 
                            ? 'border-brand-500 bg-brand-50 shadow-lg scale-105' 
                            : 'border-gray-200 hover:border-brand-500 hover:bg-brand-50 hover:scale-105'
                        }`}
                      >
                        <div className={`font-bold text-lg ${donationType === 'monthly' ? 'text-pink-700' : 'text-gray-900 group-hover:text-pink-700'}`}>
                          {locale === 'mn' ? 'Сар бүр' : 'Monthly'}
                        </div>
                        <div className={`text-sm mt-1 ${donationType === 'monthly' ? 'text-brand-500' : 'text-gray-500 group-hover:text-brand-500'}`}>
                          {locale === 'mn' ? 'Тогтмол хандив' : 'Recurring donation'}
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Enhanced Amount Selection */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-800 mb-4">
                      {locale === 'mn' ? 'Хэмжээ сонгох' : 'Select Amount'}
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {impactStats.map((stat) => (
                        <button
                          key={stat.amount}
                          onClick={() => setSelectedAmount(stat.amount)}
                          className={`p-6 border-2 rounded-2xl transition-all duration-300 text-center group relative overflow-hidden ${
                            selectedAmount === stat.amount 
                              ? 'border-brand-500 bg-brand-50 shadow-lg scale-105' 
                              : 'border-gray-200 hover:border-brand-500 hover:bg-brand-50 hover:scale-105'
                          }`}
                        >
                          <div className="absolute top-2 right-2">
                            <stat.icon className={`w-5 h-5 ${selectedAmount === stat.amount ? 'text-brand-500' : 'text-gray-400 group-hover:text-pink-500'}`} />
                          </div>
                          <div className={`font-bold text-xl ${selectedAmount === stat.amount ? 'text-pink-700' : 'text-gray-900 group-hover:text-pink-700'}`}>
                            {stat.amount.toLocaleString()}₮
                          </div>
                          <div className={`text-xs mt-2 ${selectedAmount === stat.amount ? 'text-brand-500' : 'text-gray-500 group-hover:text-brand-500'}`}>
                            {stat.impact}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Custom Amount */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-800 mb-3">
                      {locale === 'mn' ? 'Өөрийн хэмжээ' : 'Custom Amount'}
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-bold text-lg">₮</span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder={locale === 'mn' ? 'Хэмжээ оруулах' : 'Enter amount'}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-lg font-medium transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Enhanced Dedication Option */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-800 mb-4">
                      {locale === 'mn' ? 'Хэнтэй холбоотой хандив (сонгох)' : 'Dedicate Donation (Optional)'}
                    </label>
                    <div className="space-y-3">
                      <button 
                        onClick={() => setDedicationType(dedicationType === 'honor' ? null : 'honor')}
                        className={`w-full p-4 border-2 rounded-2xl transition-all duration-200 text-left group ${
                          dedicationType === 'honor' 
                            ? 'border-brand-500 bg-brand-50' 
                            : 'border-gray-200 hover:border-brand-500 hover:bg-brand-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${dedicationType === 'honor' ? 'bg-brand-500' : 'bg-gray-200 group-hover:bg-pink-200'}`}>
                            <Heart className={`w-4 h-4 ${dedicationType === 'honor' ? 'text-white' : 'text-gray-600 group-hover:text-brand-500'}`} />
                          </div>
                          <div>
                            <div className={`font-semibold ${dedicationType === 'honor' ? 'text-pink-700' : 'text-gray-900 group-hover:text-pink-700'}`}>
                              {locale === 'mn' ? 'Хэнтэй холбоотой' : 'In Honor Of'}
                            </div>
                            <div className={`text-sm ${dedicationType === 'honor' ? 'text-brand-500' : 'text-gray-500 group-hover:text-brand-500'}`}>
                              {locale === 'mn' ? 'Хэн нэгний хүндэтгэлд' : 'To honor someone special'}
                            </div>
                          </div>
                        </div>
                      </button>
                      <button 
                        onClick={() => setDedicationType(dedicationType === 'memory' ? null : 'memory')}
                        className={`w-full p-4 border-2 rounded-2xl transition-all duration-200 text-left group ${
                          dedicationType === 'memory' 
                            ? 'border-brand-500 bg-brand-50' 
                            : 'border-gray-200 hover:border-brand-500 hover:bg-brand-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${dedicationType === 'memory' ? 'bg-brand-500' : 'bg-gray-200 group-hover:bg-pink-200'}`}>
                            <Star className={`w-4 h-4 ${dedicationType === 'memory' ? 'text-white' : 'text-gray-600 group-hover:text-brand-500'}`} />
                          </div>
                          <div>
                            <div className={`font-semibold ${dedicationType === 'memory' ? 'text-pink-700' : 'text-gray-900 group-hover:text-pink-700'}`}>
                              {locale === 'mn' ? 'Дурсгалд' : 'In Memory Of'}
                            </div>
                            <div className={`text-sm ${dedicationType === 'memory' ? 'text-brand-500' : 'text-gray-500 group-hover:text-brand-500'}`}>
                              {locale === 'mn' ? 'Нас барсан хүний дурсгалд' : 'To remember someone who passed'}
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Enhanced Payment Method */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-800 mb-4">
                      {locale === 'mn' ? 'Төлбөрийн арга' : 'Payment Method'}
                    </label>
                    <div className="space-y-3">
                      <button 
                        onClick={() => setPaymentMethod('card')}
                        className={`w-full p-4 border-2 rounded-2xl transition-all duration-200 flex items-center space-x-4 group ${
                          paymentMethod === 'card' 
                            ? 'border-brand-500 bg-brand-50' 
                            : 'border-gray-200 hover:border-brand-500 hover:bg-brand-50'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${paymentMethod === 'card' ? 'bg-brand-500' : 'bg-gray-200 group-hover:bg-pink-200'}`}>
                          <CreditCard className={`w-5 h-5 ${paymentMethod === 'card' ? 'text-white' : 'text-gray-600 group-hover:text-brand-500'}`} />
                        </div>
                        <div>
                          <span className={`font-semibold ${paymentMethod === 'card' ? 'text-pink-700' : 'text-gray-900 group-hover:text-pink-700'}`}>
                            {locale === 'mn' ? 'Банкны карт' : 'Bank Card'}
                          </span>
                          <div className={`text-sm ${paymentMethod === 'card' ? 'text-brand-500' : 'text-gray-500 group-hover:text-brand-500'}`}>
                            {locale === 'mn' ? 'Visa, Mastercard' : 'Visa, Mastercard'}
                          </div>
                        </div>
                        <Lock className={`w-5 h-5 ml-auto ${paymentMethod === 'card' ? 'text-brand-500' : 'text-gray-400 group-hover:text-pink-500'}`} />
                      </button>
                      <button 
                        onClick={() => setPaymentMethod('online')}
                        className={`w-full p-4 border-2 rounded-2xl transition-all duration-200 flex items-center space-x-4 group ${
                          paymentMethod === 'online' 
                            ? 'border-brand-500 bg-brand-50' 
                            : 'border-gray-200 hover:border-brand-500 hover:bg-brand-50'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${paymentMethod === 'online' ? 'bg-brand-500' : 'bg-gray-200 group-hover:bg-pink-200'}`}>
                          <Globe className={`w-5 h-5 ${paymentMethod === 'online' ? 'text-white' : 'text-gray-600 group-hover:text-brand-500'}`} />
                        </div>
                        <div>
                          <span className={`font-semibold ${paymentMethod === 'online' ? 'text-pink-700' : 'text-gray-900 group-hover:text-pink-700'}`}>
                            {locale === 'mn' ? 'Онлайн төлбөр' : 'Online Payment'}
                          </span>
                          <div className={`text-sm ${paymentMethod === 'online' ? 'text-brand-500' : 'text-gray-500 group-hover:text-brand-500'}`}>
                            {locale === 'mn' ? 'PayPal, Stripe' : 'PayPal, Stripe'}
                          </div>
                        </div>
                        <Shield className={`w-5 h-5 ml-auto ${paymentMethod === 'online' ? 'text-brand-500' : 'text-gray-400 group-hover:text-pink-500'}`} />
                      </button>
                    </div>
                  </div>

                  {/* Enhanced Donate Button */}
                  <Button className="w-full bg-brand-500 hover:bg-brand-600 text-white text-xl py-6 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                    <Heart className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    {locale === 'mn' ? 'Хандивлах' : 'Donate Now'}
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>

              {/* Enhanced Impact Information */}
              <div className="space-y-8">
                {/* Impact Card */}
                <Card className="card-modern p-6 shadow-md border-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-95">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-800">
                      {locale === 'mn' ? 'Таны хандивны нөлөө' : 'Your Donation Impact'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {impactStats.map((stat, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-br from-white/70 to-green-50/30 rounded-2xl border border-white/50">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-lg">
                            {stat.amount.toLocaleString()}₮
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {stat.impact}
                          </p>
                        </div>
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Security & Trust Card */}
                <Card className="card-modern p-6 shadow-md border-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-95">
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {locale === 'mn' ? 'Аюулгүй байдал' : 'Security & Trust'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white/70 to-blue-50/30 rounded-2xl border border-white/50">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                        <Lock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {locale === 'mn' ? '100% аюулгүй' : '100% Secure'}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {locale === 'mn' ? 'SSL шифрлэлт' : 'SSL encryption'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white/70 to-blue-50/30 rounded-2xl border border-white/50">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {locale === 'mn' ? 'Татварын хөнгөлөлт' : 'Tax Deductible'}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {locale === 'mn' ? 'Татварын хөнгөлөлттэй' : 'Eligible for tax deduction'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white/70 to-blue-50/30 rounded-2xl border border-white/50">
                      <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {locale === 'mn' ? 'Ил тод байдал' : 'Transparency'}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {locale === 'mn' ? 'Хэрэглээний тайлан' : 'Usage reports available'}
                        </p>
                      </div>
                    </div>
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