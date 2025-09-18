'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Users, Target, Heart, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Enhanced Hero Section */}
        <section className="relative pt-24 pb-20 bg-gradient-to-br from-slate-50 via-white to-pink-50 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-pink-200/30 to-pink-300/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
          </div>

          {/* Fixed Back Button */}
          <div className="fixed top-24 left-6 z-50">
            <Link 
              href={`/${locale}`}
              className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-medium transition-all duration-200 hover:scale-105 group bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-pink-100"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="hidden sm:inline">{locale === 'mn' ? 'Нүүр хуудас' : 'Home'}</span>
            </Link>
          </div>

          <div className="container-max container-spacing relative z-10">
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-pink-700 px-6 py-3 mb-8 shadow-lg border border-pink-100 rounded-full">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {locale === 'mn' ? 'Бидний тухай' : 'About Us'}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                  {locale === 'mn' ? 'БИДНИЙ ТУХАЙ' : 'ABOUT US'}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                {locale === 'mn'
                  ? '1962 онд үүсгэн байгуулагдсанаас хойш тогтвортой үйл ажиллагаа явуулж байгаа орон нутгийн ууган ТББ'
                  : 'The oldest local NGO with stable operation since its establishment in 1962'
                }
              </p>

            </div>
          </div>
        </section>

        {/* Brief Introduction Section */}
        <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-pink-50">
          <div className="container-max container-spacing">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="brief-intro-title">
                  {locale === 'mn' ? 'Товч танилцуулга' : 'Brief Introduction'}
                </h2>
                <div className="brief-intro-divider"></div>
              </div>
              
              <div className="brief-intro-card">
                <div className="brief-intro-content">
                  <p className="brief-intro-text">
                    {locale === 'mn'
                      ? '"Дархан-Уул аймгийн эмэгтэйчүүдийн холбоо" НҮТББ нь 1962 онд үүсгэн байгуулагдсанаас хойш охид, эмэгтэйчүүдийн эрх ашгийг хамгаалах, хөгжүүлэх, нийгэмд чиглэсэн соён гэгээрлийн үйл ажиллагаа зохион байгуулах үндсэн чиглэлийг баримтлан 63 жил тогтвортой үйл ажиллагаа явуулж байгаа орон нутгийн ууган ТББ юм.'
                      : 'The "Darkhan-Uul Women\'s Federation" NGO has been operating steadily for 63 years since its establishment in 1962, following the main direction of protecting and developing the rights and interests of girls and women, and organizing socially-oriented educational activities, making it the oldest local NGO in the region.'
                    }
                  </p>
                  <p className="brief-intro-text">
                    {locale === 'mn'
                      ? 'Дархан-Уул аймаг нь 4 сум, 26 багтай бөгөөд өрхийн тоо 29503, хүн амын тоо 104551, үүний 50.99 хувийг эмэгтэйчүүд эзэлдэг ба аймгийн төвийн 84.7 мянган хүний 43.6 мянга /51.47 хувь/, хөдөөд 9.6 мянган хүний 4.6 мянга буюу 48.27 хувь нь эмэгтэйчүүд байна. 2022 оны байдлаар хөдөлмөрийн насны хүн ам 32,852 байгаагаас эрэгтэй 18,528, эмэгтэй 14,323 байна.'
                      : 'Darkhan-Uul Province has 4 districts and 26 bags with 29,503 households and a population of 104,551, of which 50.99% are women. In the provincial center, 43.6 thousand out of 84.7 thousand people (51.47%) are women, and in rural areas, 4.6 thousand out of 9.6 thousand people (48.27%) are women. As of 2022, the working-age population is 32,852, with 18,528 men and 14,323 women.'
                    }
                  </p>
                  <p className="brief-intro-text">
                    {locale === 'mn'
                      ? 'АЭХ нь Удирдах зөвлөл 15, хяналтын зөвлөл 3, ажлын алба 3, сургагч багш 12, Хонгор, Шарын гол, Орхон сум болон Дархан сумын 1-18 багуудад өөрийн нэгж эмэгтэйчүүдийн зөвлөлтэй, зөвлөл бүр нь дарга, 9-11 тэргүүлэгчтэй, томоохон аж ахуй нэгж 20 байгууллагуудад эмэгтэйчүүдийн зөвлөл, 741 гишүүнчлэлтэйгээр үйл ажиллагаагаа явуулж байна.'
                      : 'The Women\'s Federation operates with 15 Management Councils, 3 Supervisory Councils, 3 working offices, 12 instructors, and has its own women\'s councils in Khongor, Sharyn Gol, Orkhon districts and bags 1-18 of Darkhan district, with each council having a chairman and 9-11 leaders, and women\'s councils in 20 major business organizations, with 741 members.'
                    }
                  </p>
                </div>
                <div className="mt-8">
                  <img 
                    src="/images/about_us-building.jpg" 
                    alt={locale === 'mn' ? 'Дархан-Уул аймгийн эмэгтэйчүүдийн холбооны байр' : 'Darkhan-Uul Women\'s Federation Building'} 
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Values Cards */}
        <section className="py-20 bg-white">
          <div className="container-max container-spacing">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Vision Card */}
                <div className="h-full">
                  <div className="hidden"></div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {locale === 'mn' ? 'Алсын хараа' : 'Vision'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed flex-grow">
                      {locale === 'mn'
                        ? 'Үндэсний манлайлагч эмэгтэйчүүдийн байгууллага байх'
                        : 'To be a nationally leading women\'s organization'
                      }
                    </p>
                  </div>
                </div>

                {/* Mission Card */}
                <div className="h-full">
                  <div className="hidden"></div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {locale === 'mn' ? 'Эрхэм зорилго' : 'Mission'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed flex-grow">
                      {locale === 'mn'
                        ? 'Эмэгтэйчүүдийн үзэл бодол, нийгмийн байдал, сүсэг бишрэл, яс үндэс, хөрөнгө чинээ, албан тушаал үл харгалзан тэдний нийтлэг, эрх ашиг, сонирхлыг илэрхийлэн хамгаалах, хөгжүүлэх'
                        : 'To express, protect, and develop the common rights, interests, and concerns of women regardless of their ideology, social status, beliefs, ethnicity, wealth, or position'
                      }
                    </p>
                  </div>
                </div>

                {/* Values Card */}
                <div className="h-full">
                  <div className="hidden"></div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {locale === 'mn' ? 'Үнэт зүйл' : 'Values'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed flex-grow">
                      {locale === 'mn'
                        ? 'Тэгш боломж- Тэгш хөгжил, Оюунлаг эмэгтэйчүүд - Оюунлаг нийгэм'
                        : 'Equal Opportunity - Equal Development, Smart Women - Smart Society'
                      }
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-pink-50">
          <div className="container-max container-spacing">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {locale === 'mn' ? 'Зарчим' : 'Principles'}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Human Rights */}
                <div className="h-full">
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {locale === 'mn' ? 'Хүний эрх' : 'Human Rights'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed flex-grow">
                      {locale === 'mn'
                        ? 'Хүний эрхэд суурилсан хандлага, арга зүйгээр бүхий л үйл ажиллагаагаа явуулдаг'
                        : 'We conduct all our activities based on human rights approaches and methodologies'
                      }
                    </p>
                  </div>
                </div>

                {/* Multi-stakeholder Participation */}
                <div className="h-full">
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {locale === 'mn' ? 'Олон талт оролцоо, төлөөлөл' : 'Multi-stakeholder Participation & Representation'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed flex-grow">
                      {locale === 'mn'
                        ? 'Олон янзын хүмүүс, бүлгүүдийн оролцоог хангадаг, дуу хоолойгоо хүргэж чадахгүй байгаа бүтцийн ялгаварлан гадуурхалт болон давхар ялгаварлан гадуурхалтанд өртсөн бүлгүүдийг тусгайлан анхаардаг'
                        : 'We ensure participation of diverse people and groups, paying special attention to groups affected by structural discrimination and double discrimination who cannot make their voices heard'
                      }
                    </p>
                  </div>
                </div>

                {/* Transparency & Accountability */}
                <div className="h-full">
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {locale === 'mn' ? 'Ил тод, хариуцлагатай' : 'Transparency & Accountability'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed flex-grow">
                      {locale === 'mn'
                        ? 'Тэтгэлэг авагч-түншлэгч байгууллага бүлгүүд, эмэгтэйчүүдийн хөдөлгөөн, хандивлагчдынхаа өмнө хариуцлага ухамсарладаг, бидний үйл ажиллагаа ил тод байдаг'
                        : 'We are accountable to beneficiary-partner organizations, women\'s movements, and our donors, and our activities are transparent'
                      }
                    </p>
                  </div>
                </div>

                {/* Partnership & Collaboration */}
                <div className="h-full">
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {locale === 'mn' ? 'Түншлэл, хамтын ажиллагаа' : 'Partnership & Collaboration'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed flex-grow">
                      {locale === 'mn'
                        ? 'Нийгмийн өөрчлөлтийг зөвхөн тууштай, зарчимч, ёс зүйтэй хамтын ажиллагаа, түншлэлийн замаар авчрах боломжтой гэж итгэдэг'
                        : 'We believe that social change can only be achieved through consistent, principled, and ethical collaboration and partnership'
                      }
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Historical Timeline Section */}
        <section className="py-20 bg-white">
          <div className="container-max container-spacing">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {locale === 'mn' ? 'Түүхэн товчоо' : 'Historical Overview'}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-200 via-pink-400 to-pink-600 rounded-full"></div>
                
                <div className="space-y-12">
                  
                  {/* 1962 */}
                  <div className="relative flex items-start space-x-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">1962</span>
                    </div>
                    <div className="flex-1 bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {locale === 'mn' ? 'Үүсгэн байгуулагдсан' : 'Founded'}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {locale === 'mn'
                          ? '1962 оны 10 дугаар сарын 21-ны өдөр Дархан хотын эмэгтэйчүүдийн анхдугаар хурлаар МАХН-ын хорооны харъяа орон тооны бус Зөвлөл байгуулагдсан.'
                          : 'On October 21, 1962, the first women\'s conference of Darkhan city established a non-staff Council under the Party Committee.'
                        }
                      </p>
                    </div>
                  </div>

                  {/* 1964 */}
                  <div className="relative flex items-start space-x-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">1964</span>
                    </div>
                    <div className="flex-1 bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {locale === 'mn' ? 'Албан ёсны эхлэл' : 'Official Beginning'}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {locale === 'mn'
                          ? '1964 оноос Дархан хотын эмэгтэйчүүдийн орон тооны зөвлөл ажиллаж эхэлсэн.'
                          : 'From 1964, the staff council of Darkhan city women began working.'
                        }
                      </p>
                    </div>
                  </div>

                  {/* 1990 */}
                  <div className="relative flex items-start space-x-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">1990</span>
                    </div>
                    <div className="flex-1 bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {locale === 'mn' ? 'Бие даасан байгууллага' : 'Independent Organization'}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {locale === 'mn'
                          ? '1990 оноос Дархан хотын эмэгтэйчүүдийн зөвлөл бие даасан олон нийтийн байгууллага болсон.'
                          : 'From 1990, the Darkhan city women\'s council became an independent public organization.'
                        }
                      </p>
                    </div>
                  </div>

                  {/* 1994 */}
                  <div className="relative flex items-start space-x-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">1994</span>
                    </div>
                    <div className="flex-1 bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {locale === 'mn' ? 'Аймгийн түвшинд' : 'Provincial Level'}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {locale === 'mn'
                          ? '1994 оноос Дархан-Уул аймгийн эмэгтэйчүүдийн зөвлөл.'
                          : 'From 1994, the Darkhan-Uul province women\'s council.'
                        }
                      </p>
                    </div>
                  </div>

                  {/* 1997 */}
                  <div className="relative flex items-start space-x-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">1997</span>
                    </div>
                    <div className="flex-1 bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {locale === 'mn' ? 'НҮТББ болж шинэчлэгдсэн' : 'Renewed as NGO'}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {locale === 'mn'
                          ? '1997 оноос Дархан-Уул аймгийн эмэгтэйчүүдийн холбоо ТББ болж шинэчлэгдсэн.'
                          : 'From 1997, the Darkhan-Uul province women\'s federation was renewed as an NGO.'
                        }
                      </p>
                    </div>
                  </div>

                  {/* 1987 - Women's Palace */}
                  <div className="relative flex items-start space-x-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">1987</span>
                    </div>
                    <div className="flex-1 bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {locale === 'mn' ? 'Эмэгтэйчүүдийн ордон' : 'Women\'s Palace'}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {locale === 'mn'
                          ? '1987 онд Дархан – Уул аймгийн бүсгүйчүүдийн санаачлага, олон нийтийн хандиваар Монгол улсдаа цорын ганц Эмэгтэйчүүдийн ордонг барьж байгуулан үүдийг нээж одоог хүртэл үйл ажиллагаа нь тогтмол явагдаж байгаа.'
                          : 'In 1987, through the initiative of Darkhan-Uul province women and public donations, the only Women\'s Palace in Mongolia was built and opened, and its activities continue regularly to this day.'
                        }
                      </p>
                      <div className="mt-6">
                        <img 
                          src="/images/about_us-1987.jpg" 
                          alt={locale === 'mn' ? '1987 оны Эмэгтэйчүүдийн ордон' : '1987 Women\'s Palace'} 
                          className="w-full h-64 object-cover rounded-xl shadow-lg"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Organization Activities & Goals Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-pink-100/30 to-pink-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-100/20 to-purple-200/20 rounded-full blur-2xl"></div>
          </div>
          
          <div className="container-max container-spacing relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 mb-8 shadow-xl rounded-full">
                  <Target className="w-6 h-6" />
                  <span className="text-lg font-semibold">
                    {locale === 'mn' ? 'Бидний зорилго' : 'Our Goals'}
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                  {locale === 'mn' ? 'Эмэгтэйчүүдийн холбооны үйл ажиллагааны чиглэл зорилтууд' : 'Women\'s Federation Activities & Goals'}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {locale === 'mn'
                    ? 'Бид эдгээр зорилтуудыг хэрэгжүүлэх замаар эмэгтэйчүүдийн эрх ашгийг хамгаалах, нийгмийн тэгш байдлыг хангах ажлыг хийж байна'
                    : 'We work to protect women\'s rights and interests and ensure social equality by implementing these goals'
                  }
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
              </div>
              
              {/* Interactive Goals Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Goal 1 - Rights & Advocacy */}
                <div className="group h-full">
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-3xl border-2 border-pink-200 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-pink-600 group-hover:text-pink-700 transition-colors duration-300">01</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors duration-300">
                      {locale === 'mn' ? 'Эрх ашгийн хамгаалалт' : 'Rights Protection'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed flex-grow text-sm">
                      {locale === 'mn'
                        ? 'Эхчүүд эмэгтэйчүүд охидын нийгэм, гэр бүлд гүйцэтгэх үүрэг, эзлэх байр суурь, бие сэтгэл зүйн онцлогтой холбогдсон асуудлыг шийдвэрлэхэд идэвхитэй оролцох, тэдний эрх ашгийг хамгаалсан хууль тогтоомжийн хэрэгжилтэнд санал дэвшүүлнэ.'
                        : 'Actively participate in solving issues related to the roles, positions, and psychological characteristics of mothers, women, and girls in society and family, and propose the implementation of laws that protect their rights and interests.'
                      }
                    </p>
                  </div>
                </div>

                {/* Goal 2 - Policy Development */}
                <div className="group h-full">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-3xl border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">02</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {locale === 'mn' ? 'Бодлого боловсруулалт' : 'Policy Development'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed flex-grow text-sm">
                      {locale === 'mn'
                        ? 'Жендэрийн мэдрэмжтэй бодлого боловсруулалт, төсөв, төлөвлөлтийн арга зүйг нэвтрүүлэхэд дэмжлэг үзүүлнэ.'
                        : 'Support the introduction of gender-sensitive policy development, budgeting, and planning methodologies.'
                      }
                    </p>
                  </div>
                </div>

                {/* Goal 3 - Leadership Support */}
                <div className="group h-full">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-3xl border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300">03</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                      {locale === 'mn' ? 'Манлайлал дэмжлэг' : 'Leadership Support'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed flex-grow text-sm">
                      {locale === 'mn'
                        ? 'Манлайлагч эмэгтэйчүүдийн бүх шатны сонгуульд дэмжиж эмэгтэйчүүдийн төлөөллийг нэмэгдүүлэхэд идэвхитэй ажиллана.'
                        : 'Actively work to support women leaders in all levels of elections and increase women\'s representation.'
                      }
                    </p>
                  </div>
                </div>

                {/* Goal 4 - International Cooperation */}
                <div className="group h-full">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-3xl border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300">04</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      {locale === 'mn' ? 'Олон улсын хамтын ажиллагаа' : 'International Cooperation'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed flex-grow text-sm">
                      {locale === 'mn'
                        ? 'Олон улсын байгууллага, хөгжлийн агентлагуудтай хамтран үндсэн чиглэлийн хүрээнд төсөл хөтөлбөр хэрэгжүүлнэ.'
                        : 'Implement projects and programs within the framework of main directions in cooperation with international organizations and development agencies.'
                      }
                    </p>
                  </div>
                </div>

                {/* Goal 5 - Network Expansion */}
                <div className="group h-full">
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-3xl border-2 border-indigo-200 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300">05</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                      {locale === 'mn' ? 'Сүлжээг өргөжүүлэх' : 'Network Expansion'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed flex-grow text-sm">
                      {locale === 'mn'
                        ? 'Дэлхийн болон бүс нутаг, үндэсний эмэгтэйчүүдийн бусад хөдөлгөөн, байгууллагуудтай холбоо харилцаагаа өргөжүүлж үр дүнтэй хамтын ажиллагааг өрнүүлнэ.'
                        : 'Expand connections and communications with other women\'s movements and organizations at global, regional, and national levels and develop effective cooperation.'
                      }
                    </p>
                  </div>
                </div>

                {/* Goal 6 - Economic Support */}
                <div className="group h-full">
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-3xl border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-orange-600 group-hover:text-orange-700 transition-colors duration-300">06</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                      {locale === 'mn' ? 'Эдийн засгийн дэмжлэг' : 'Economic Support'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed flex-grow text-sm">
                      {locale === 'mn'
                        ? 'Эмэгтэйчүүдийн эдийн засгийн байдлыг дэмжих төсөл хөтөлбөр хэрэгжүүлнэ.'
                        : 'Implement projects and programs to support women\'s economic situation.'
                      }
                    </p>
                  </div>
                </div>

                {/* Goal 7 - Capacity Building */}
                <div className="group h-full">
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-3xl border-2 border-teal-200 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-teal-600 group-hover:text-teal-700 transition-colors duration-300">07</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                      {locale === 'mn' ? 'Чадавхжуулалт' : 'Capacity Building'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed flex-grow text-sm">
                      {locale === 'mn'
                        ? 'Охид, эмэгтэйчүүдийг чадавхжуулах, хөгжүүлэх, мэргэжлийн сургалтаар ур чадвар олгож ажил хөдөлмөр эрхлэхэд дэмжлэг үзүүлнэ.'
                        : 'Support girls and women in capacity building, development, providing skills through professional training, and employment.'
                      }
                    </p>
                  </div>
                </div>

                {/* Goal 8 - Equality & Anti-discrimination */}
                <div className="group h-full">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-3xl border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-red-600 group-hover:text-red-700 transition-colors duration-300">08</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                      {locale === 'mn' ? 'Тэгш байдал' : 'Equality'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed flex-grow text-sm">
                      {locale === 'mn'
                        ? 'Эмэгтэйчүүдийн эрх тэгш байдлыг хангах, жендерт суурилсан ялгаварлалыг багасгах, хүчирхийллийг зогсоох'
                        : 'Ensure women\'s equality, reduce gender-based discrimination, and stop violence.'
                      }
                    </p>
                  </div>
                </div>

                {/* Goal 9 - Education & Awareness */}
                <div className="group h-full">
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-3xl border-2 border-yellow-200 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300">09</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                      {locale === 'mn' ? 'Боловсрол, мэдээлэл' : 'Education & Awareness'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed flex-grow text-sm">
                      {locale === 'mn'
                        ? 'Нийгэмтэй хөл зэрэгцэн алхах соёлтой, оюунлаг иргэнтэй болох, зөв иргэнийг бэлтгэхэд оролцоог ханган соён гэгээрүүлэх нөлөөллийн ажлыг өрнүүлнэ.'
                        : 'Develop educational and awareness activities by providing participation in cultivating a culture of walking side by side with society, becoming intelligent citizens, and preparing good citizens.'
                      }
                    </p>
                  </div>
                </div>

                {/* Goal 10 - Research & Monitoring */}
                <div className="group h-full">
                  <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-3xl border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-cyan-600 group-hover:text-cyan-700 transition-colors duration-300">10</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                      {locale === 'mn' ? 'Судалгаа, хяналт' : 'Research & Monitoring'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed flex-grow text-sm">
                      {locale === 'mn'
                        ? 'Судалгаа, тандалт асуулга хийх замаар иргэд эмэгтэйчүүд, олон нийтийн хяналт үнэлгээг хүргэнэ.'
                        : 'Provide public monitoring and evaluation to citizens and women through research and surveys.'
                      }
                    </p>
                  </div>
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