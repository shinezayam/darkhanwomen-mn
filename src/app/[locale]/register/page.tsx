'use client';

import { useState, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, User, Mail, Phone, Calendar, MapPin, GraduationCap, Heart, CheckCircle, BookOpen, MessageSquare, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function RegisterPageContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    program: '',
    experience: '',
    motivation: '',
    emergencyContact: '',
    emergencyPhone: '',
    agreeToTerms: false,
    agreeToPrivacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-select program from URL parameter
  useEffect(() => {
    const programParam = searchParams.get('program');
    if (programParam) {
      setFormData(prev => ({
        ...prev,
        program: programParam
      }));
    }
  }, [searchParams]);

  const programs = [
    { id: 'tedx-darkhan', name: locale === 'mn' ? 'TEDxDarkhan' : 'TEDxDarkhan' },
    { id: 'girls-club', name: locale === 'mn' ? 'Охидын клуб' : 'Girls Club' },
    { id: 'leadership-academy', name: locale === 'mn' ? 'Удирдлагын академи' : 'Leadership Academy' },
    { id: 'warm-journey', name: locale === 'mn' ? 'Дулаан аялал' : 'Warm Journey' },
    { id: 'hair-stylist', name: locale === 'mn' ? 'Үсчин' : 'Hair Stylist' },
    { id: 'embroidery-maker', name: locale === 'mn' ? 'Оѐмол бүтээгдэхүүн оѐдолчин' : 'Embroidery Product Maker' },
    { id: 'gift-souvenir-craftsman', name: locale === 'mn' ? 'Бэлэг дурсгалын зүйл урлаач' : 'Gift Souvenir Craftsman' },
    { id: 'art-painting', name: locale === 'mn' ? 'Уран зураг' : 'Art Painting' },
    { id: 'english-language', name: locale === 'mn' ? 'Англи хэлний сургалт' : 'English Language Training' },
    { id: 'japanese-language', name: locale === 'mn' ? 'Япон хэлний сургалт' : 'Japanese Language Training' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit registration');
      }

      setIsSubmitted(true);
    } catch (error: any) {
      console.error('Error submitting registration:', error);
      alert(error.message || locale === 'mn' ? 'Алдаа гарлаа! Дахин оролдоно уу.' : 'An error occurred! Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* Success Page */}
          <section className="py-20 bg-gradient-to-br from-pink-50 to-white">
            <div className="container-max container-spacing">
              <div className="max-w-2xl mx-auto text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  {locale === 'mn' ? 'Бүртгэл амжилттай!' : 'Registration Successful!'}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {locale === 'mn' 
                    ? 'Таны бүртгэл амжилттай хүлээн авлаа. Бид тантай удахгүй холбоо барина.'
                    : 'Your registration has been successfully submitted. We will contact you soon.'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={`/${locale}/programs`}>
                    <Button className="px-6 py-3 text-sm font-medium rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 transition-all duration-200">
                      {locale === 'mn' ? 'Бусад хөтөлбөрүүд' : 'Other Programs'}
                    </Button>
                  </Link>
                  <Link href={`/${locale}`}>
                    <Button className="px-6 py-3 text-sm font-medium rounded-lg bg-white border-2 border-pink-500 text-pink-600 hover:bg-pink-50 hover:border-pink-600 transition-all duration-200">
                      {locale === 'mn' ? 'Нүүр хуудас' : 'Home Page'}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-pink-50 to-white">
          <div className="container-max container-spacing">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link
                href={`/${locale}/programs`}
                className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 mb-8 transition-all duration-200 hover:scale-105 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">
                  {locale === 'mn' ? 'Хөтөлбөрүүд руу буцах' : 'Back to Programs'}
                </span>
              </Link>

              <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  {locale === 'mn' ? 'Хөтөлбөрт бүртгүүлэх' : 'Program Registration'}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {locale === 'mn'
                    ? 'Эмэгтэйчүүдийн хөгжлийн хөтөлбөрт оролцохыг хүсвэл доорх маягтыг бөглөнө үү'
                    : 'Fill out the form below to participate in our women\'s development programs'
                  }
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-pink-50">
          <div className="container-max container-spacing">
            <div className="max-w-5xl mx-auto">
              <Card className="card-modern shadow-2xl border-0 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-pink-600 to-pink-700 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 to-pink-700/90"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="relative z-10">
                    <CardTitle className="text-3xl font-bold text-center mb-2">
                      {locale === 'mn' ? 'Бүртгэлийн маягт' : 'Registration Form'}
                    </CardTitle>
                    <p className="text-pink-100 text-center text-lg">
                      {locale === 'mn' ? 'Хөтөлбөрт амжилттай бүртгүүлэхийн тулд доорх мэдээллийг бөглөнө үү' : 'Please fill out the information below to successfully register for the program'}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="p-8 bg-white">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-6 bg-gradient-to-r from-pink-50 to-white p-6 rounded-2xl border border-pink-100">
                      <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-3">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        {locale === 'mn' ? 'Хувийн мэдээлэл' : 'Personal Information'}
                        <div className="flex-1 h-px bg-gradient-to-r from-pink-200 to-transparent ml-4"></div>
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                            <User className="w-4 h-4 text-pink-500 mr-2" />
                            {locale === 'mn' ? 'Нэр' : 'First Name'} *
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-pink-300 group-hover:shadow-lg"
                              placeholder={locale === 'mn' ? 'Нэрээ оруулна уу' : 'Enter your first name'}
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                          </div>
                        </div>
                        
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                            <User className="w-4 h-4 text-pink-500 mr-2" />
                            {locale === 'mn' ? 'Овог' : 'Last Name'} *
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-pink-300 group-hover:shadow-lg"
                              placeholder={locale === 'mn' ? 'Овогоо оруулна уу' : 'Enter your last name'}
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                            <Mail className="w-4 h-4 text-pink-500 mr-2" />
                            {locale === 'mn' ? 'И-мэйл' : 'Email'} *
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-pink-300 group-hover:shadow-lg"
                              placeholder={locale === 'mn' ? 'example@email.com' : 'example@email.com'}
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                          </div>
                        </div>
                        
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                            <Phone className="w-4 h-4 text-pink-500 mr-2" />
                            {locale === 'mn' ? 'Утасны дугаар' : 'Phone Number'} *
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-pink-300 group-hover:shadow-lg"
                              placeholder={locale === 'mn' ? '9999-9999' : '9999-9999'}
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                            <Calendar className="w-4 h-4 text-pink-500 mr-2" />
                            {locale === 'mn' ? 'Төрсөн огноо' : 'Date of Birth'} *
                          </label>
                          <div className="relative">
                            <input
                              type="date"
                              name="dateOfBirth"
                              value={formData.dateOfBirth}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-pink-300 group-hover:shadow-lg"
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                          </div>
                        </div>
                        
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                            <MapPin className="w-4 h-4 text-pink-500 mr-2" />
                            {locale === 'mn' ? 'Хот/Аймаг' : 'City/Province'} *
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-pink-300 group-hover:shadow-lg"
                              placeholder={locale === 'mn' ? 'Дархан' : 'Darkhan'}
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                          </div>
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                          <MapPin className="w-4 h-4 text-pink-500 mr-2" />
                          {locale === 'mn' ? 'Гэрийн хаяг' : 'Address'} *
                        </label>
                        <div className="relative">
                          <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            rows={3}
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-pink-300 group-hover:shadow-lg resize-none"
                            placeholder={locale === 'mn' ? 'Дэлгэрэнгүй хаягаа оруулна уу' : 'Enter your detailed address'}
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                    </div>

                    {/* Program Information */}
                    <div className="space-y-6 bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                      <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        {locale === 'mn' ? 'Хөтөлбөрийн мэдээлэл' : 'Program Information'}
                        <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent ml-4"></div>
                      </h3>
                      
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                          <GraduationCap className="w-4 h-4 text-blue-500 mr-2" />
                          {locale === 'mn' ? 'Оролцох хөтөлбөр' : 'Program to Join'} *
                        </label>
                        <div className="relative">
                          <select
                            name="program"
                            value={formData.program}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-blue-300 group-hover:shadow-lg appearance-none cursor-pointer"
                          >
                            <option value="">
                              {locale === 'mn' ? 'Хөтөлбөр сонгоно уу' : 'Select a program'}
                            </option>
                            {programs.map((program) => (
                              <option key={program.id} value={program.id}>
                                {program.name}
                              </option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                          <BookOpen className="w-4 h-4 text-blue-500 mr-2" />
                          {locale === 'mn' ? 'Туршлага, мэдлэг' : 'Experience & Knowledge'}
                        </label>
                        <div className="relative">
                          <textarea
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-blue-300 group-hover:shadow-lg resize-none"
                            placeholder={locale === 'mn' 
                              ? 'Таны туршлага, мэдлэг, ур чадварын талаар бичнэ үү' 
                              : 'Tell us about your experience, knowledge, and skills'
                            }
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                          <MessageSquare className="w-4 h-4 text-blue-500 mr-2" />
                          {locale === 'mn' ? 'Оролцох шалтгаан' : 'Motivation'} *
                        </label>
                        <div className="relative">
                          <textarea
                            name="motivation"
                            value={formData.motivation}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-blue-300 group-hover:shadow-lg resize-none"
                            placeholder={locale === 'mn' 
                              ? 'Энэ хөтөлбөрт оролцохыг хүсэх шалтгаанаа бичнэ үү' 
                              : 'Why do you want to participate in this program?'
                            }
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                    </div>

                    {/* Emergency Contact */}
                    <div className="space-y-6 bg-gradient-to-r from-red-50 to-white p-6 rounded-2xl border border-red-100">
                      <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mr-3">
                          <Heart className="w-5 h-5 text-white" />
                        </div>
                        {locale === 'mn' ? 'Яаралтай тохиолдолд холбоо барих хүн' : 'Emergency Contact'}
                        <div className="flex-1 h-px bg-gradient-to-r from-red-200 to-transparent ml-4"></div>
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                            <Users className="w-4 h-4 text-red-500 mr-2" />
                            {locale === 'mn' ? 'Нэр' : 'Name'} *
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="emergencyContact"
                              value={formData.emergencyContact}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-red-300 group-hover:shadow-lg"
                              placeholder={locale === 'mn' ? 'Яаралтай тохиолдолд холбоо барих хүний нэр' : 'Emergency contact name'}
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                          </div>
                        </div>
                        
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                            <Phone className="w-4 h-4 text-red-500 mr-2" />
                            {locale === 'mn' ? 'Утасны дугаар' : 'Phone Number'} *
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              name="emergencyPhone"
                              value={formData.emergencyPhone}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-red-300 group-hover:shadow-lg"
                              placeholder={locale === 'mn' ? '9999-9999' : '9999-9999'}
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleInputChange}
                          required
                          className="mt-1 w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                        />
                        <label className="text-sm text-gray-700">
                          {locale === 'mn' 
                            ? 'Би хөтөлбөрийн дүрмийг хүлээн зөвшөөрч, дагаж мөрдөхөд бэлэн байна. *'
                            : 'I agree to follow the program rules and regulations. *'
                          }
                        </label>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          name="agreeToPrivacy"
                          checked={formData.agreeToPrivacy}
                          onChange={handleInputChange}
                          required
                          className="mt-1 w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                        />
                        <label className="text-sm text-gray-700">
                          {locale === 'mn' 
                            ? 'Би хувийн мэдээллийг боловсруулах тухай бодлого зөвшөөрч байна. *'
                            : 'I agree to the privacy policy for processing personal information. *'
                          }
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-6">
                      <Button 
                        type="submit" 
                        className="btn-primary px-12 py-4 text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            {locale === 'mn' ? 'Илгээж байна...' : 'Submitting...'}
                          </div>
                        ) : (
                          locale === 'mn' ? 'Бүртгүүлэх' : 'Register'
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterPageContent />
    </Suspense>
  );
}
