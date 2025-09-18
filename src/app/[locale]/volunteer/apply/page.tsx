'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  UserPlus, 
  User,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowLeft,
  Star,
  CheckCircle,
  Heart,
  Target,
  Award,
  Globe,
  Users,
  Calendar,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

function VolunteerApplyContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';
  const type = searchParams.get('type') || 'training-support';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    experience: '',
    availability: '',
    motivation: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert(locale === 'mn' ? 'Хүсэлт амжилттай илгээгдлээ!' : 'Application submitted successfully!');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getTypeInfo = () => {
    switch (type) {
      case 'training-support':
        return {
          title: locale === 'mn' ? 'Сургалтын дэмжлэг - Бүртгүүлэх' : 'Training Support - Apply',
          icon: UserPlus,
          color: 'from-blue-500 to-indigo-500'
        };
      case 'event-management':
        return {
          title: locale === 'mn' ? 'Арга хэмжээний удирдлага - Бүртгүүлэх' : 'Event Management - Apply',
          icon: UserPlus,
          color: 'from-purple-500 to-purple-600'
        };
      case 'communication-outreach':
        return {
          title: locale === 'mn' ? 'Харилцаа холбоо - Бүртгүүлэх' : 'Communication & Outreach - Apply',
          icon: UserPlus,
          color: 'from-green-500 to-green-600'
        };
      default:
        return {
          title: locale === 'mn' ? 'Сайн дураар оролцох - Бүртгүүлэх' : 'Volunteer - Apply',
          icon: UserPlus,
          color: 'from-blue-500 to-indigo-500'
        };
    }
  };

  const typeInfo = getTypeInfo();
  const IconComponent = typeInfo.icon;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden bg-gray-50">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200/30 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          <div className="container-max container-spacing relative z-10">
            {/* Enhanced Back Button */}
            <div className="absolute top-6 left-6 z-50">
              <Link
                href={`/${locale}/get-involved`}
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-brand-500 hover:text-pink-700 font-medium transition-all duration-200 hover:scale-105 group px-4 py-2 rounded-full shadow-lg border border-pink-100/50"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="hidden sm:inline">{locale === 'mn' ? 'Оролцох' : 'Get Involved'}</span>
              </Link>
            </div>

            <div className="text-center mb-16 pt-16">
              {/* Enhanced Badge */}
              <div className="inline-flex items-center space-x-2 bg-brand-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-xl border border-brand-500/20">
                <UserPlus className="w-5 h-5" />
                <span className="tracking-wide">{locale === 'mn' ? 'Сайн дураар оролцох' : 'Volunteer'}</span>
                <Star className="w-4 h-4" />
              </div>
              
              {/* Enhanced Title */}
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                {typeInfo.title}
              </h1>
              
              {/* Enhanced Subtitle */}
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                {locale === 'mn' ? 'Манай байгууллагад сайн дураар оролцоход бүртгүүлээрэй' : 'Register to volunteer with our organization'}
              </p>

              {/* Impact Counter */}
              <div className="flex justify-center items-center space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-500">200+</div>
                  <div className="text-sm text-gray-600">{locale === 'mn' ? 'Сайн дураар ажиллагчид' : 'Volunteers'}</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">{locale === 'mn' ? 'Арга хэмжээ' : 'Events'}</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-500">100%</div>
                  <div className="text-sm text-gray-600">{locale === 'mn' ? 'Сэтгэл ханамж' : 'Satisfaction'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Form Section */}
        <section className="py-20 bg-white">
          <div className="container-max container-spacing">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Enhanced Form */}
              <Card className="card-modern p-8 shadow-2xl border-2 border-blue-300 bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm ring-4 ring-blue-200 scale-105">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-brand-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-4xl font-bold text-gray-900 mb-4">
                    {typeInfo.title}
                  </CardTitle>
                  <p className="text-gray-600 text-lg">
                    {locale === 'mn' ? 'Манай байгууллагад сайн дураар оролцоход бүртгүүлээрэй' : 'Register to volunteer with our organization'}
                  </p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <form onSubmit={handleFormSubmit} className="space-y-8">
                    {/* Enhanced Volunteer Type Selection */}
                    <div>
                      <label className="block text-lg font-semibold text-gray-800 mb-4">
                        {locale === 'mn' ? 'Сайн дураар ажиллах төрөл' : 'Volunteer Type'}
                      </label>
                      <div className="grid grid-cols-1 gap-4">
                        <button 
                          type="button"
                          className={`p-6 border-2 rounded-2xl transition-all duration-300 text-center group ${
                            type === 'training-support' 
                              ? 'border-brand-500 bg-brand-50 shadow-lg scale-105' 
                              : 'border-gray-200 hover:border-brand-500 hover:bg-brand-50 hover:scale-105'
                          }`}
                        >
                          <div className={`font-bold text-lg ${type === 'training-support' ? 'text-pink-700' : 'text-gray-900 group-hover:text-pink-700'}`}>
                            {locale === 'mn' ? 'Сургалтын дэмжлэг' : 'Training Support'}
                          </div>
                          <div className={`text-sm mt-1 ${type === 'training-support' ? 'text-brand-500' : 'text-gray-500 group-hover:text-brand-500'}`}>
                            {locale === 'mn' ? 'Сургалт зохион байгуулах, дэмжлэг үзүүлэх' : 'Organize and support training programs'}
                          </div>
                        </button>
                        <button 
                          type="button"
                          className={`p-6 border-2 rounded-2xl transition-all duration-300 text-center group ${
                            type === 'event-management' 
                              ? 'border-brand-500 bg-brand-50 shadow-lg scale-105' 
                              : 'border-gray-200 hover:border-brand-500 hover:bg-brand-50 hover:scale-105'
                          }`}
                        >
                          <div className={`font-bold text-lg ${type === 'event-management' ? 'text-pink-700' : 'text-gray-900 group-hover:text-pink-700'}`}>
                            {locale === 'mn' ? 'Арга хэмжээний удирдлага' : 'Event Management'}
                          </div>
                          <div className={`text-sm mt-1 ${type === 'event-management' ? 'text-brand-500' : 'text-gray-500 group-hover:text-brand-500'}`}>
                            {locale === 'mn' ? 'Арга хэмжээ зохион байгуулах, удирдах' : 'Organize and manage events'}
                          </div>
                        </button>
                        <button 
                          type="button"
                          className={`p-6 border-2 rounded-2xl transition-all duration-300 text-center group ${
                            type === 'communication-outreach' 
                              ? 'border-brand-500 bg-brand-50 shadow-lg scale-105' 
                              : 'border-gray-200 hover:border-brand-500 hover:bg-brand-50 hover:scale-105'
                          }`}
                        >
                          <div className={`font-bold text-lg ${type === 'communication-outreach' ? 'text-pink-700' : 'text-gray-900 group-hover:text-pink-700'}`}>
                            {locale === 'mn' ? 'Харилцаа холбоо' : 'Communication & Outreach'}
                          </div>
                          <div className={`text-sm mt-1 ${type === 'communication-outreach' ? 'text-brand-500' : 'text-gray-500 group-hover:text-brand-500'}`}>
                            {locale === 'mn' ? 'Харилцаа холбоо, сурталчилгаа' : 'Communication and outreach activities'}
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Enhanced Personal Information */}
                    <div>
                      <label className="block text-lg font-semibold text-gray-800 mb-4">
                        {locale === 'mn' ? 'Хувийн мэдээлэл' : 'Personal Information'}
                      </label>
                      <div className="grid grid-cols-1 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {locale === 'mn' ? 'Нэр *' : 'Name *'}
                          </label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-lg font-medium transition-all duration-200"
                              placeholder={locale === 'mn' ? 'Нэрээ оруулна уу' : 'Enter your name'}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {locale === 'mn' ? 'И-мэйл *' : 'Email *'}
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-lg font-medium transition-all duration-200"
                              placeholder={locale === 'mn' ? 'И-мэйл хаягаа оруулна уу' : 'Enter your email'}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6 mt-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {locale === 'mn' ? 'Утасны дугаар *' : 'Phone Number *'}
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-lg font-medium transition-all duration-200"
                              placeholder={locale === 'mn' ? 'Утасны дугаараа оруулна уу' : 'Enter your phone number'}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {locale === 'mn' ? 'Хаяг' : 'Address'}
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="text"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-lg font-medium transition-all duration-200"
                              placeholder={locale === 'mn' ? 'Хаягаа оруулна уу' : 'Enter your address'}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Availability Selection */}
                    <div>
                      <label className="block text-lg font-semibold text-gray-800 mb-4">
                        {locale === 'mn' ? 'Ажиллах цаг' : 'Availability'}
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        <button 
                          type="button"
                          onClick={() => setFormData({...formData, availability: 'weekdays'})}
                          className={`p-4 border-2 rounded-2xl transition-all duration-300 text-center group ${
                            formData.availability === 'weekdays' 
                              ? 'border-brand-500 bg-brand-50 shadow-lg scale-105' 
                              : 'border-gray-200 hover:border-brand-500 hover:bg-brand-50 hover:scale-105'
                          }`}
                        >
                          <div className={`font-bold ${formData.availability === 'weekdays' ? 'text-pink-700' : 'text-gray-900 group-hover:text-pink-700'}`}>
                            {locale === 'mn' ? 'Ажлын өдрүүд' : 'Weekdays'}
                          </div>
                        </button>
                        <button 
                          type="button"
                          onClick={() => setFormData({...formData, availability: 'weekends'})}
                          className={`p-4 border-2 rounded-2xl transition-all duration-300 text-center group ${
                            formData.availability === 'weekends' 
                              ? 'border-brand-500 bg-brand-50 shadow-lg scale-105' 
                              : 'border-gray-200 hover:border-brand-500 hover:bg-brand-50 hover:scale-105'
                          }`}
                        >
                          <div className={`font-bold ${formData.availability === 'weekends' ? 'text-pink-700' : 'text-gray-900 group-hover:text-pink-700'}`}>
                            {locale === 'mn' ? 'Амралтын өдрүүд' : 'Weekends'}
                          </div>
                        </button>
                        <button 
                          type="button"
                          onClick={() => setFormData({...formData, availability: 'flexible'})}
                          className={`p-4 border-2 rounded-2xl transition-all duration-300 text-center group ${
                            formData.availability === 'flexible' 
                              ? 'border-brand-500 bg-brand-50 shadow-lg scale-105' 
                              : 'border-gray-200 hover:border-brand-500 hover:bg-brand-50 hover:scale-105'
                          }`}
                        >
                          <div className={`font-bold ${formData.availability === 'flexible' ? 'text-pink-700' : 'text-gray-900 group-hover:text-pink-700'}`}>
                            {locale === 'mn' ? 'Уян хатан' : 'Flexible'}
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Enhanced Experience and Motivation */}
                    <div>
                      <label className="block text-lg font-semibold text-gray-800 mb-4">
                        {locale === 'mn' ? 'Туршлага болон хүсэлт' : 'Experience & Motivation'}
                      </label>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {locale === 'mn' ? 'Туршлага, ур чадвар' : 'Experience & Skills'}
                          </label>
                          <textarea
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-lg font-medium transition-all duration-200"
                            placeholder={locale === 'mn' ? 'Таны туршлага, ур чадварын тухай бичнэ үү' : 'Tell us about your experience and skills'}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {locale === 'mn' ? 'Яагаад сайн дураар ажиллахыг хүсэж байна вэ?' : 'Why do you want to volunteer?'}
                          </label>
                          <textarea
                            name="motivation"
                            value={formData.motivation}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-lg font-medium transition-all duration-200"
                            placeholder={locale === 'mn' ? 'Таны сайн дураар ажиллах хүсэл, зорилгын тухай бичнэ үү' : 'Tell us about your motivation to volunteer'}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Submit Button */}
                    <Button className="w-full bg-brand-500 hover:bg-brand-600 text-white text-xl py-6 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                      <UserPlus className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" />
                      {locale === 'mn' ? 'Бүртгүүлэх' : 'Submit Application'}
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Enhanced Impact Information */}
              <div className="space-y-8">
                {/* Impact Card */}
                <Card className="card-modern p-6 shadow-md border-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-95">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-800">
                      {locale === 'mn' ? 'Таны нөлөө' : 'Your Impact'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-white/70 to-green-50/30 rounded-2xl border border-white/50">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg">
                          {locale === 'mn' ? 'Эмэгтэйчүүдэд дэмжлэг' : 'Support Women'}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {locale === 'mn' ? 'Эмэгтэйчүүдийн хөгжилд хувь нэмэр оруулах' : 'Contribute to women\'s development'}
                        </p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-white/70 to-green-50/30 rounded-2xl border border-white/50">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg">
                          {locale === 'mn' ? 'Арга хэмжээ зохион байгуулах' : 'Organize Events'}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {locale === 'mn' ? 'Амжилттай арга хэмжээ зохион байгуулах' : 'Successfully organize events'}
                        </p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-white/70 to-green-50/30 rounded-2xl border border-white/50">
                      <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg">
                          {locale === 'mn' ? 'Нийгмийн өөрчлөлт' : 'Social Change'}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {locale === 'mn' ? 'Нийгмийн эерэг өөрчлөлт хийх' : 'Create positive social change'}
                        </p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                    </div>
                  </CardContent>
                </Card>

                {/* Benefits Card */}
                <Card className="card-modern p-6 shadow-md border-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-95">
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {locale === 'mn' ? 'Сайн дураар ажиллах ашиг' : 'Volunteer Benefits'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white/70 to-blue-50/30 rounded-2xl border border-white/50">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {locale === 'mn' ? 'Туршлага олгох' : 'Gain Experience'}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {locale === 'mn' ? 'Шинэ ур чадвар сурах' : 'Learn new skills'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white/70 to-blue-50/30 rounded-2xl border border-white/50">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {locale === 'mn' ? 'Шинэ хүмүүстэй танилцах' : 'Meet New People'}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {locale === 'mn' ? 'Сайн хүмүүстэй танилцах' : 'Connect with like-minded people'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white/70 to-blue-50/30 rounded-2xl border border-white/50">
                      <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {locale === 'mn' ? 'Сэтгэл ханамж' : 'Satisfaction'}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {locale === 'mn' ? 'Бусдад туслах сэтгэл ханамж' : 'Satisfaction of helping others'}
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

export default function VolunteerApplyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VolunteerApplyContent />
    </Suspense>
  );
}
