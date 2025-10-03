'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  CreditCard,
  ArrowLeft,
  CheckCircle,
  Lock,
  Shield,
  ArrowRight,
  Clock,
  Home,
  Globe
} from 'lucide-react';
import Link from 'next/link';

function PaymentContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';
  
  // Get donation data from URL params
  const amount = searchParams.get('amount') || '0';
  const type = searchParams.get('type') || 'one-time';
  const dedicationType = searchParams.get('dedicationType');
  const dedicationName = searchParams.get('dedicationName');
  const paymentMethod = searchParams.get('paymentMethod') || 'card';
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [touchedFields, setTouchedFields] = useState<{[key: string]: boolean}>({});

  // Form validation
  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    // Only validate fields that have been touched or have content
    if (touchedFields.cardNumber || formData.cardNumber) {
      const cleanCardNumber = formData.cardNumber.replace(/\s/g, '');
      if (!cleanCardNumber || cleanCardNumber.length < 13 || cleanCardNumber.length > 19) {
        errors.cardNumber = locale === 'mn' ? 'Картны дугаар буруу байна' : 'Invalid card number';
      }
    }
    
    if (touchedFields.expiryDate || formData.expiryDate) {
      if (!formData.expiryDate) {
        errors.expiryDate = locale === 'mn' ? 'Дуусах огноо оруулна уу' : 'Please enter expiry date';
      } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
        errors.expiryDate = locale === 'mn' ? 'Дуусах огноо MM/YY хэлбэрээр оруулна уу' : 'Please enter expiry date in MM/YY format';
      } else {
        const [month, year] = formData.expiryDate.split('/');
        const monthNum = parseInt(month, 10);
        const yearNum = parseInt(year, 10);
        const currentYear = new Date().getFullYear() % 100;
        const currentMonth = new Date().getMonth() + 1;
        
        if (monthNum < 1 || monthNum > 12) {
          errors.expiryDate = locale === 'mn' ? 'Сар 01-12 хооронд байх ёстой' : 'Month must be between 01-12';
        } else if (yearNum < currentYear || (yearNum === currentYear && monthNum < currentMonth)) {
          errors.expiryDate = locale === 'mn' ? 'Картны хугацаа дууссан байна' : 'Card has expired';
        }
      }
    }
    
    if (touchedFields.cvv || formData.cvv) {
      if (!formData.cvv || formData.cvv.length < 3 || formData.cvv.length > 4) {
        errors.cvv = locale === 'mn' ? 'CVV 3-4 оронтой байх ёстой' : 'CVV must be 3-4 digits';
      }
    }
    
    if (touchedFields.cardName || formData.cardName) {
      if (!formData.cardName || formData.cardName.trim().length < 2) {
        errors.cardName = locale === 'mn' ? 'Картны эзэний нэр оруулна уу' : 'Please enter cardholder name';
      }
    }
    
    setFormErrors(errors);
    const isValid = Object.keys(errors).length === 0;
    setIsFormValid(isValid);
    return isValid;
  };

  // Handle form input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Mark field as touched when user starts typing
    setTouchedFields(prev => ({ ...prev, [field]: true }));
    
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const formatted = cleaned.replace(/(.{4})/g, '$1 ').trim();
    return formatted.slice(0, 19); // Max 16 digits + 3 spaces
  };

  // Format expiry date
  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  // Validate form when form data changes
  useEffect(() => {
    if (paymentMethod === 'card' && Object.keys(touchedFields).length > 0) {
      validateForm();
    }
  }, [formData, paymentMethod, touchedFields]);

  const handlePaymentProcess = () => {
    if (paymentMethod === 'card') {
      // Mark all fields as touched for validation
      setTouchedFields({
        cardNumber: true,
        expiryDate: true,
        cvv: true,
        cardName: true
      });
      
      // Validate all fields
      if (!validateForm()) {
        return;
      }
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* Enhanced Hero Section */}
          <section className="relative pt-24 pb-20 bg-gradient-to-br from-slate-50 via-white to-pink-50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-green-200/30 to-emerald-300/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
            </div>

            <div className="container-max container-spacing relative z-10">
              <div className="text-center mb-16">
                {/* Success Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-green-700 px-6 py-3 mb-8 shadow-lg border border-green-100 rounded-full">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {locale === 'mn' ? 'Амжилттай' : 'Success'}
                  </span>
                </div>
                
                {/* Main Title */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                    {locale === 'mn' ? 'ХАНДИВ АМЖИЛТТАЙ!' : 'DONATION SUCCESSFUL!'}
                  </span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                  {locale === 'mn' 
                    ? 'Таны хандив эмэгтэйчүүдийн хөгжилд чухал хувь нэмэр оруулахад баярлалаа.'
                    : 'Thank you for your generous donation that will make a significant impact on women\'s development.'
                  }
                </p>
              </div>
            </div>
          </section>

          {/* Donation Details Section */}
          <section className="py-20 bg-white">
            <div className="container-max container-spacing">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Donation Details Card */}
                  <div className="card-modern p-8 shadow-xl border-2 border-green-200 bg-gradient-to-br from-white to-green-50/30 backdrop-blur-sm ring-4 ring-green-100">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {locale === 'mn' ? 'Хандивын дэлгэрэнгүй' : 'Donation Details'}
                      </h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex justify-between items-center py-4 border-b border-green-100">
                        <span className="text-gray-600 font-medium">{locale === 'mn' ? 'Хэмжээ:' : 'Amount:'}</span>
                        <span className="text-2xl font-bold text-green-600">{parseInt(amount).toLocaleString()}₮</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-4 border-b border-green-100">
                        <span className="text-gray-600 font-medium">{locale === 'mn' ? 'Төрөл:' : 'Type:'}</span>
                        <span className="font-semibold text-gray-900">
                          {type === 'one-time' 
                            ? (locale === 'mn' ? 'Нэг удаа' : 'One-time')
                            : (locale === 'mn' ? 'Сар бүр' : 'Monthly')
                          }
                        </span>
                      </div>
                      
                      {dedicationType && dedicationName && (
                        <div className="flex justify-between items-center py-4">
                          <span className="text-gray-600 font-medium">
                            {dedicationType === 'honor' 
                              ? (locale === 'mn' ? 'Хэнтэй холбоотой:' : 'In Honor Of:')
                              : (locale === 'mn' ? 'Дурсгалд:' : 'In Memory Of:')
                            }
                          </span>
                          <span className="font-semibold text-gray-900">{dedicationName}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Impact Message Card */}
                  <div className="card-modern p-8 shadow-xl border-2 border-pink-200 bg-gradient-to-br from-white to-pink-50/30 backdrop-blur-sm ring-4 ring-pink-100">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {locale === 'mn' ? 'Таны хандивын нөлөө' : 'Your Donation Impact'}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {locale === 'mn' 
                          ? 'Таны хандив эмэгтэйчүүдийн сургалт, хөгжлийн боломж, мэргэжлийн хөгжилд шууд нөлөөлнө.'
                          : 'Your donation directly impacts women\'s training, development opportunities, and professional growth.'
                        }
                      </p>
                      
                      {/* Impact Stats */}
                      <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="text-center p-4 bg-white/50 rounded-xl border border-pink-100">
                          <div className="text-2xl font-bold text-pink-600">500+</div>
                          <div className="text-sm text-gray-600">{locale === 'mn' ? 'Эмэгтэйчүүд' : 'Women Helped'}</div>
                        </div>
                        <div className="text-center p-4 bg-white/50 rounded-xl border border-pink-100">
                          <div className="text-2xl font-bold text-pink-600">50+</div>
                          <div className="text-sm text-gray-600">{locale === 'mn' ? 'Хөтөлбөр' : 'Programs'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                  <Link href={`/${locale}`}>
                    <Button className="btn-primary px-8 py-4 text-lg group">
                      <Home className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                      {locale === 'mn' ? 'Нүүр хуудас руу буцах' : 'Back to Home'}
                    </Button>
                  </Link>
                  <Link href={`/${locale}/donate`}>
                    <Button variant="outline" className="btn-secondary px-8 py-4 text-lg group">
                      <Heart className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                      {locale === 'mn' ? 'Дахиж хандивлах' : 'Donate Again'}
                    </Button>
                  </Link>
                </div>

                {/* Thank You Message */}
                <div className="mt-12 text-center">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-50 to-rose-50 px-8 py-4 rounded-full border border-pink-200">
                    <Heart className="w-5 h-5 text-pink-500" />
                    <p className="text-gray-600 font-medium">
                      {locale === 'mn' 
                        ? 'Баярлалаа! Таны хандив эмэгтэйчүүдийн амьдралыг өөрчилж байна.'
                        : 'Thank you! Your donation is transforming women\'s lives.'
                      }
                    </p>
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden bg-gray-50">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container-max container-spacing relative z-10">
            <div className="absolute top-6 left-6 z-50">
              <Link
                href={`/${locale}/donate`}
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-brand-500 hover:text-pink-700 font-medium transition-all duration-200 hover:scale-105 group px-4 py-2 rounded-full shadow-lg border border-pink-100/50"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="hidden sm:inline">{locale === 'mn' ? 'Буцах' : 'Back'}</span>
              </Link>
            </div>

            <div className="text-center mb-16 pt-16">
              <div className="inline-flex items-center space-x-2 bg-brand-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-xl">
                <Lock className="w-5 h-5" />
                <span className="tracking-wide">{locale === 'mn' ? 'Аюулгүй төлбөр' : 'Secure Payment'}</span>
                <Shield className="w-4 h-4" />
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                {locale === 'mn' ? 'Төлбөр хийх' : 'Complete Payment'}
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                {locale === 'mn'
                  ? 'Таны хандивыг аюулгүйгээр боловсруулахын тулд доорх мэдээллийг бөглөнө үү.'
                  : 'Please fill in the information below to securely process your donation.'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Payment Section */}
        <section className="py-20 bg-white">
          <div className="container-max container-spacing">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Payment Summary */}
                <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {locale === 'mn' ? 'Хандивын хураангуй' : 'Donation Summary'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white/70 rounded-xl">
                      <span className="text-gray-600">{locale === 'mn' ? 'Хэмжээ:' : 'Amount:'}</span>
                      <span className="text-2xl font-bold text-brand-500">{parseInt(amount).toLocaleString()}₮</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/70 rounded-xl">
                      <span className="text-gray-600">{locale === 'mn' ? 'Төрөл:' : 'Type:'}</span>
                      <span className="font-semibold">
                        {type === 'one-time' 
                          ? (locale === 'mn' ? 'Нэг удаа' : 'One-time')
                          : (locale === 'mn' ? 'Сар бүр' : 'Monthly')
                        }
                      </span>
                    </div>
                    {dedicationType && dedicationName && (
                      <div className="p-4 bg-white/70 rounded-xl">
                        <div className="text-sm text-gray-600 mb-1">
                          {dedicationType === 'honor' 
                            ? (locale === 'mn' ? 'Хэнтэй холбоотой:' : 'In Honor Of:')
                            : (locale === 'mn' ? 'Дурсгалд:' : 'In Memory Of:')
                          }
                        </div>
                        <div className="font-semibold text-gray-900">{dedicationName}</div>
                      </div>
                    )}
                    <div className="flex items-center space-x-2 p-4 bg-green-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-green-700">
                        {locale === 'mn' ? 'Аюулгүй, SSL шифрлэгдсэн' : 'Secure, SSL encrypted'}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Form */}
                <Card className="p-6 shadow-lg border-0">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-brand-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <CreditCard className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {locale === 'mn' ? 'Төлбөрийн мэдээлэл' : 'Payment Information'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isProcessing ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-brand-500 rounded-full mx-auto mb-4 flex items-center justify-center animate-spin">
                          <Clock className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {locale === 'mn' ? 'Төлбөр боловсруулж байна...' : 'Processing Payment...'}
                        </h3>
                        <p className="text-gray-600">
                          {locale === 'mn' ? 'Түр хүлээнэ үү' : 'Please wait'}
                        </p>
                      </div>
                    ) : paymentMethod === 'online' ? (
                      // Online Payment Interface
                      <div className="space-y-6">
                        <div className="text-center py-8">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                            <Globe className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            {locale === 'mn' ? 'Онлайн төлбөрийн систем' : 'Online Payment Gateway'}
                          </h3>
                          <p className="text-lg text-gray-600 mb-6">
                            {locale === 'mn' 
                              ? 'Таны хандивыг аюулгүй онлайн төлбөрийн системээр боловсруулах болно.'
                              : 'Your donation will be processed securely through our online payment gateway.'
                            }
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                          <div className="flex items-center mb-4">
                            <Shield className="w-6 h-6 text-blue-600 mr-3" />
                            <h4 className="text-lg font-semibold text-gray-900">
                              {locale === 'mn' ? 'Аюулгүй байдал' : 'Security Features'}
                            </h4>
                          </div>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {locale === 'mn' ? 'SSL шифрлэгдсэн холболт' : 'SSL encrypted connection'}
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {locale === 'mn' ? 'PCI DSS стандарт' : 'PCI DSS compliant'}
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {locale === 'mn' ? 'Хувийн мэдээлэл хамгаалагдсан' : 'Personal data protected'}
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                          <div className="flex items-center mb-4">
                            <Heart className="w-6 h-6 text-green-600 mr-3" />
                            <h4 className="text-lg font-semibold text-gray-900">
                              {locale === 'mn' ? 'Хүлээн зөвшөөрөгдсөн төлбөрийн арга' : 'Accepted Payment Methods'}
                            </h4>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                            <div className="flex items-center">
                              <span className="mr-2">💳</span>
                              {locale === 'mn' ? 'Банкны карт' : 'Bank Cards'}
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2">🏦</span>
                              {locale === 'mn' ? 'Банк шилжүүлэг' : 'Bank Transfer'}
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2">📱</span>
                              {locale === 'mn' ? 'Цахим төлбөр' : 'Digital Wallet'}
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2">🏧</span>
                              {locale === 'mn' ? 'ATM төлбөр' : 'ATM Payment'}
                            </div>
                          </div>
                        </div>

                        <Button 
                          onClick={handlePaymentProcess}
                          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-lg py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                        >
                          <Globe className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                          {locale === 'mn' ? 'Онлайн төлбөр хийх' : 'Proceed to Online Payment'}
                          <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                        </Button>

                        <p className="text-center text-sm text-gray-500">
                          {locale === 'mn' 
                            ? 'Төлбөрийн системд шилжих үед таны мэдээлэл бүрэн аюулгүй байх болно.'
                            : 'Your information will be completely secure when redirected to the payment system.'
                          }
                        </p>
                      </div>
                    ) : (
                      // Enhanced Card Payment Interface
                      <div className="space-y-6">

                        
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {locale === 'mn' ? 'Картны дугаар' : 'Card Number'}
                          </label>
                          <input
                            type="text"
                            value={formData.cardNumber}
                            onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
                            placeholder="1234 5678 9012 3456"
                            className={`w-full px-4 py-3 border-2 rounded-2xl text-lg font-medium transition-all duration-200 ${
                              formErrors.cardNumber 
                                ? 'border-red-300 bg-red-50 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                                : formData.cardNumber && !formErrors.cardNumber
                                ? 'border-green-300 bg-green-50 focus:ring-2 focus:ring-green-500 focus:border-green-500'
                                : 'border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-brand-500'
                            }`}
                          />
                          {formErrors.cardNumber && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.cardNumber}</p>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              {locale === 'mn' ? 'Дуусах огноо' : 'Expiry Date'}
                            </label>
                            <input
                              type="text"
                              value={formData.expiryDate}
                              onChange={(e) => handleInputChange('expiryDate', formatExpiryDate(e.target.value))}
                              placeholder="MM/YY"
                              maxLength={5}
                              className={`w-full px-4 py-3 border-2 rounded-2xl text-lg font-medium transition-all duration-200 ${
                                formErrors.expiryDate 
                                  ? 'border-red-300 bg-red-50 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                                  : formData.expiryDate && !formErrors.expiryDate
                                  ? 'border-green-300 bg-green-50 focus:ring-2 focus:ring-green-500 focus:border-green-500'
                                  : 'border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-brand-500'
                              }`}
                            />
                            {formErrors.expiryDate && (
                              <p className="text-red-500 text-sm mt-1">{formErrors.expiryDate}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              CVV
                            </label>
                            <input
                              type="text"
                              value={formData.cvv}
                              onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, '').slice(0, 3))}
                              placeholder="123"
                              maxLength={3}
                              className={`w-full px-4 py-3 border-2 rounded-2xl text-lg font-medium transition-all duration-200 ${
                                formErrors.cvv 
                                  ? 'border-red-300 bg-red-50 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                                  : formData.cvv && !formErrors.cvv
                                  ? 'border-green-300 bg-green-50 focus:ring-2 focus:ring-green-500 focus:border-green-500'
                                  : 'border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-brand-500'
                              }`}
                            />
                            {formErrors.cvv && (
                              <p className="text-red-500 text-sm mt-1">{formErrors.cvv}</p>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {locale === 'mn' ? 'Картны эзэний нэр' : 'Cardholder Name'}
                          </label>
                          <input
                            type="text"
                            value={formData.cardName}
                            onChange={(e) => handleInputChange('cardName', e.target.value)}
                            placeholder={locale === 'mn' ? 'Картны эзэний нэр' : 'Cardholder Name'}
                            className={`w-full px-4 py-3 border-2 rounded-2xl text-lg font-medium transition-all duration-200 ${
                              formErrors.cardName 
                                ? 'border-red-300 bg-red-50 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                                : formData.cardName && !formErrors.cardName
                                ? 'border-green-300 bg-green-50 focus:ring-2 focus:ring-green-500 focus:border-green-500'
                                : 'border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-brand-500'
                            }`}
                          />
                          {formErrors.cardName && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.cardName}</p>
                          )}
                        </div>

                        <Button 
                          onClick={handlePaymentProcess}
                          disabled={paymentMethod === 'card' && !isFormValid}
                          className={`w-full text-lg py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group ${
                            paymentMethod === 'card' && !isFormValid
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-brand-500 hover:bg-brand-600 text-white'
                          }`}
                        >
                          <Lock className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                          {locale === 'mn' ? 'Төлбөр хийх' : 'Complete Payment'}
                          <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                        </Button>
                      </div>
                    )}
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

export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
}
