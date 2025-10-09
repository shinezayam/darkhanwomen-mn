'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Handshake, 
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  Target,
  ArrowLeft,
  Star,
  CheckCircle,
  Heart,
  Award,
  Users,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

function PartnerApplyContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';
  const type = searchParams.get('type') || 'program-partnership';

  const [formData, setFormData] = useState({
    organizationName: '',
    activityDirection: '',
    managementName: '',
    womenCouncilChairman: '',
    position: '',
    yearsWorked: '',
    womenCouncilGoal: '',
    womenCouncilMembers: '',
    womenCouncilLeaders: '',
    phone: '',
    address: '',
    totalEmployees: '',
    totalFemale: '',
    totalMale: '',
    managementFemale: '',
    managementMale: '',
    householdHeadsFemale: '',
    householdHeadsMale: '',
    disabledFemale: '',
    disabledMale: '',
    collaborationProposal: '',
    supportProposal: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert(locale === 'mn' ? 'Гишүүн байгууллага болох анкет амжилттай илгээгдлээ!' : 'Member organization application submitted successfully!');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const getTypeInfo = () => {
    return {
      title: locale === 'mn' ? 'Гишүүн байгууллага болох' : 'Become a Member Organization',
      icon: Building2,
      color: 'from-purple-500 to-indigo-500'
    };
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
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200/30 rounded-full blur-2xl animate-pulse delay-500"></div>
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
                <Building2 className="w-5 h-5" />
                <span className="tracking-wide">{locale === 'mn' ? 'Гишүүн байгууллага' : 'Member Organization'}</span>
                <Star className="w-4 h-4" />
              </div>
              
              {/* Official Document Title */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8 shadow-lg border border-gray-200">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
                  {locale === 'mn' ? 'Дархан-Уул аймгийн эмэгтэйчүүдийн холбоо НҮТББ-ын' : 'Darkhan-Uul Women\'s Federation NGO'}
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-600 mb-4 text-center">
                  {locale === 'mn' ? 'ГИШҮҮН БАЙГУУЛЛАГЫН МЭДЭЭЛЭЛИЙН ХУУДАС' : 'MEMBER ORGANIZATION INFORMATION SHEET'}
                </h2>
              </div>
              
              {/* Enhanced Subtitle */}
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                {locale === 'mn' ? 'Гишүүн байгууллага болох хүсэлт' : 'Application to become a member organization'}
              </p>

              {/* Impact Counter */}
              <div className="flex justify-center items-center space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-500">100+</div>
                  <div className="text-sm text-gray-600">{locale === 'mn' ? 'Хамтрагч байгууллага' : 'Partner Organizations'}</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">{locale === 'mn' ? 'Амжилттай төсөл' : 'Successful Projects'}</div>
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

        {/* Enhanced Form Section */}
        <section className="py-20 bg-white">
          <div className="container-max container-spacing">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 max-w-7xl mx-auto">
              {/* Enhanced Form */}
              <Card className="card-modern p-6 sm:p-8 shadow-2xl border-2 border-pink-300 bg-gradient-to-br from-white to-pink-50/30 backdrop-blur-sm ring-4 ring-pink-200">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-brand-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {locale === 'mn' ? 'ГИШҮҮН БАЙГУУЛЛАГЫН МЭДЭЭЛЭЛИЙН ХУУДАС' : 'MEMBER ORGANIZATION INFORMATION SHEET'}
                  </CardTitle>
                  <p className="text-gray-600 text-lg">
                    {locale === 'mn' ? 'Гишүүн байгууллага болох хүсэлт' : 'Application to become a member organization'}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6 sm:space-y-8">
                  <form onSubmit={handleFormSubmit} className="space-y-6 sm:space-y-8">
                    {/* General Information Section */}
                    <div>
                      <label className="block text-lg font-semibold text-gray-800 mb-4">
                        {locale === 'mn' ? '1. ЕРӨНХИЙ МЭДЭЭЛЭЛ' : '1. GENERAL INFORMATION'}
                      </label>
                      <div className="grid grid-cols-1 gap-4 sm:gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {locale === 'mn' ? '1. Байгууллагын нэр *' : '1. Organization Name *'}
                          </label>
                          <div className="relative">
                            <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="text"
                              name="organizationName"
                              value={formData.organizationName}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-base sm:text-lg font-medium transition-all duration-200"
                              placeholder={locale === 'mn' ? 'Байгууллагын нэрээ оруулна уу' : 'Enter organization name'}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {locale === 'mn' ? '2. Үйл ажиллагааны чиглэл *' : '2. Activity Direction *'}
                          </label>
                          <div className="relative">
                            <Target className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="text"
                              name="activityDirection"
                              value={formData.activityDirection}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-base sm:text-lg font-medium transition-all duration-200"
                              placeholder={locale === 'mn' ? 'Үйл ажиллагааны чиглэлээ оруулна уу' : 'Enter activity direction'}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {locale === 'mn' ? '3. Байгууллагын удирдлагын овог нэр *' : '3. Management Name *'}
                          </label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="text"
                              name="managementName"
                              value={formData.managementName}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-base sm:text-lg font-medium transition-all duration-200"
                              placeholder={locale === 'mn' ? 'Удирдлагын овог нэр' : 'Enter management name'}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {locale === 'mn' ? '4. Эмэгтэйчүүдийн зөвлөлийн даргын овог, нэр *' : '4. Women\'s Council Chairman Name *'}
                          </label>
                          <div className="relative">
                            <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="text"
                              name="womenCouncilChairman"
                              value={formData.womenCouncilChairman}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-base sm:text-lg font-medium transition-all duration-200"
                              placeholder={locale === 'mn' ? 'Зөвлөлийн даргын овог нэр' : 'Enter chairman name'}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {locale === 'mn' ? '5. Албан тушаал *' : '5. Position *'}
                          </label>
                          <div className="relative">
                            <Award className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="text"
                              name="position"
                              value={formData.position}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-base sm:text-lg font-medium transition-all duration-200"
                              placeholder={locale === 'mn' ? 'Албан тушаал' : 'Enter position'}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {locale === 'mn' ? '6. Ажилласан жил *' : '6. Years Worked *'}
                          </label>
                          <div className="relative">
                            <Star className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="number"
                              name="yearsWorked"
                              value={formData.yearsWorked}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-base sm:text-lg font-medium transition-all duration-200"
                              placeholder={locale === 'mn' ? 'Ажилласан жил' : 'Enter years worked'}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {locale === 'mn' ? '7. Байгууллагын эмэгтэйчүүдийн зөвлөлийн зорилго *' : '7. Women\'s Council Goal *'}
                          </label>
                          <textarea
                            name="womenCouncilGoal"
                            value={formData.womenCouncilGoal}
                            onChange={handleInputChange}
                            required
                            rows={3}
                            className="w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-base sm:text-lg font-medium transition-all duration-200"
                            placeholder={locale === 'mn' ? 'Зөвлөлийн зорилго' : 'Enter council goal'}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {locale === 'mn' ? '8. Эмэгтэйчүүдийн зөвлөлийн бүрэлдэхүүн, тэргүүлэгч гишүүн *' : '8. Women\'s Council Members and Leaders *'}
                          </label>
                          <textarea
                            name="womenCouncilMembers"
                            value={formData.womenCouncilMembers}
                            onChange={handleInputChange}
                            required
                            rows={3}
                            className="w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-base sm:text-lg font-medium transition-all duration-200"
                            placeholder={locale === 'mn' ? 'Зөвлөлийн гишүүд, тэргүүлэгчид' : 'Enter council members and leaders'}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {locale === 'mn' ? '13. Холбогдох утасны дугаар *' : '13. Contact Phone Number *'}
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-base sm:text-lg font-medium transition-all duration-200"
                              placeholder={locale === 'mn' ? 'Утасны дугаар' : 'Enter phone number'}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {locale === 'mn' ? '14. Байгууллагын хаяг *' : '14. Organization Address *'}
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="text"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-base sm:text-lg font-medium transition-all duration-200"
                              placeholder={locale === 'mn' ? 'Байгууллагын хаяг' : 'Enter organization address'}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Statistical Data Section */}
                    <div>
                      <label className="block text-lg font-semibold text-gray-800 mb-4">
                        {locale === 'mn' ? '15. ТООН МЭДЭЭЛЭЛ' : '15. STATISTICAL DATA'}
                      </label>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300 rounded-lg">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">№</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">{locale === 'mn' ? 'Асуумж' : 'Question'}</th>
                              <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700">{locale === 'mn' ? 'Эмэгтэй' : 'Female'}</th>
                              <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700">{locale === 'mn' ? 'Эрэгтэй' : 'Male'}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 text-center font-semibold">1</td>
                              <td className="border border-gray-300 px-4 py-3">{locale === 'mn' ? 'Нийт' : 'Total'}</td>
                              <td className="border border-gray-300 px-4 py-3">
                                <input
                                  type="number"
                                  name="totalFemale"
                                  value={formData.totalFemale}
                                  onChange={handleInputChange}
                                  className="w-full px-2 py-1 border border-gray-200 rounded text-center"
                                />
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <input
                                  type="number"
                                  name="totalMale"
                                  value={formData.totalMale}
                                  onChange={handleInputChange}
                                  className="w-full px-2 py-1 border border-gray-200 rounded text-center"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 text-center font-semibold">2</td>
                              <td className="border border-gray-300 px-4 py-3">{locale === 'mn' ? 'Удирдлага /алба, хэлтэс, газрын дарга буюу түүнээс дээш/' : 'Management /Department, Division, Director or above/'}</td>
                              <td className="border border-gray-300 px-4 py-3">
                                <input
                                  type="number"
                                  name="managementFemale"
                                  value={formData.managementFemale}
                                  onChange={handleInputChange}
                                  className="w-full px-2 py-1 border border-gray-200 rounded text-center"
                                />
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <input
                                  type="number"
                                  name="managementMale"
                                  value={formData.managementMale}
                                  onChange={handleInputChange}
                                  className="w-full px-2 py-1 border border-gray-200 rounded text-center"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 text-center font-semibold">3</td>
                              <td className="border border-gray-300 px-4 py-3">{locale === 'mn' ? 'Өрх толгойлсон' : 'Household Heads'}</td>
                              <td className="border border-gray-300 px-4 py-3">
                                <input
                                  type="number"
                                  name="householdHeadsFemale"
                                  value={formData.householdHeadsFemale}
                                  onChange={handleInputChange}
                                  className="w-full px-2 py-1 border border-gray-200 rounded text-center"
                                />
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <input
                                  type="number"
                                  name="householdHeadsMale"
                                  value={formData.householdHeadsMale}
                                  onChange={handleInputChange}
                                  className="w-full px-2 py-1 border border-gray-200 rounded text-center"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 text-center font-semibold">4</td>
                              <td className="border border-gray-300 px-4 py-3">{locale === 'mn' ? 'Хөгжлийн бэрхшээлтэй' : 'With Disabilities'}</td>
                              <td className="border border-gray-300 px-4 py-3">
                                <input
                                  type="number"
                                  name="disabledFemale"
                                  value={formData.disabledFemale}
                                  onChange={handleInputChange}
                                  className="w-full px-2 py-1 border border-gray-200 rounded text-center"
                                />
                              </td>
                              <td className="border border-gray-300 px-4 py-3">
                                <input
                                  type="number"
                                  name="disabledMale"
                                  value={formData.disabledMale}
                                  onChange={handleInputChange}
                                  className="w-full px-2 py-1 border border-gray-200 rounded text-center"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Collaboration Proposals */}
                    <div>
                      <label className="block text-lg font-semibold text-gray-800 mb-4">
                        {locale === 'mn' ? '3. АЭХ-той хамтран ажиллах санал' : '3. Collaboration Proposal with Women\'s Federation'}
                      </label>
                      <textarea
                        name="collaborationProposal"
                        value={formData.collaborationProposal}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-base sm:text-lg font-medium transition-all duration-200"
                        placeholder={locale === 'mn' ? 'Хамтран ажиллах саналаа оруулна уу' : 'Enter your collaboration proposal'}
                      />
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-gray-800 mb-4">
                        {locale === 'mn' ? '4. Байгууллагын зүгээс дэмжин ажиллах санал' : '4. Organization\'s Support Proposal'}
                      </label>
                      <textarea
                        name="supportProposal"
                        value={formData.supportProposal}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-brand-500 text-base sm:text-lg font-medium transition-all duration-200"
                        placeholder={locale === 'mn' ? 'Дэмжлэг үзүүлэх саналаа оруулна уу' : 'Enter your support proposal'}
                      />
                    </div>

                    {/* Enhanced Submit Button */}
                    <Button className="w-full bg-brand-500 hover:bg-brand-600 text-white text-xl py-6 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                      <Building2 className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" />
                      {locale === 'mn' ? 'Анкет илгээх' : 'Submit Application'}
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
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-800">
                      {locale === 'mn' ? 'Таны нөлөө' : 'Your Impact'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-white/70 to-green-50/30 rounded-2xl border border-white/50">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
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
                      <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg">
                          {locale === 'mn' ? 'Амжилттай төсөл' : 'Successful Projects'}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {locale === 'mn' ? 'Амжилттай төслүүд хэрэгжүүлэх' : 'Implement successful projects'}
                        </p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-white/70 to-green-50/30 rounded-2xl border border-white/50">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
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
                <Card className="card-modern p-6 shadow-md border-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-95">
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {locale === 'mn' ? 'Хамтралын ашиг' : 'Partnership Benefits'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white/70 to-purple-50/30 rounded-2xl border border-white/50">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {locale === 'mn' ? 'Бизнесийн хөгжил' : 'Business Growth'}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {locale === 'mn' ? 'Бизнесийн хөгжилд хувь нэмэр оруулах' : 'Contribute to business growth'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white/70 to-purple-50/30 rounded-2xl border border-white/50">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {locale === 'mn' ? 'Шинэ сүлжээ' : 'New Network'}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {locale === 'mn' ? 'Шинэ хамтрагч, сүлжээтэй танилцах' : 'Connect with new partners and networks'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white/70 to-purple-50/30 rounded-2xl border border-white/50">
                      <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {locale === 'mn' ? 'Сэтгэл ханамж' : 'Satisfaction'}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {locale === 'mn' ? 'Нийгмийн сайн сайхныг бүтээх' : 'Create social good and satisfaction'}
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

export default function PartnerApplyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PartnerApplyContent />
    </Suspense>
  );
}
