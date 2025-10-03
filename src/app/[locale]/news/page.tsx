'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search, Calendar, Award, TrendingUp, Heart, Newspaper, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { getNewsData } from '@/data/news';

export default function NewsPage() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const news = getNewsData(locale);

  const categories = [
    { id: 'all', name: locale === 'mn' ? 'Бүгд' : 'All', icon: Newspaper },
    { id: 'events', name: locale === 'mn' ? 'Арга хэмжээ' : 'Events', icon: Calendar },
    { id: 'training', name: locale === 'mn' ? 'Сургалт' : 'Training', icon: Award },
    { id: 'business', name: locale === 'mn' ? 'Бизнес' : 'Business', icon: TrendingUp },
    { id: 'projects', name: locale === 'mn' ? 'Төсөл' : 'Projects', icon: Heart },
    { id: 'reports', name: locale === 'mn' ? 'Тайлан' : 'Reports', icon: Newspaper },
    { id: 'academy', name: locale === 'mn' ? 'Академи' : 'Academy', icon: Award },
    { id: 'research', name: locale === 'mn' ? 'Судалгаа' : 'Research', icon: TrendingUp },
    { id: 'publication', name: locale === 'mn' ? 'Хэвлэл' : 'Publication', icon: Newspaper },
    { id: 'development', name: locale === 'mn' ? 'Хөгжүүлэлт' : 'Development', icon: Heart },
    { id: 'service', name: locale === 'mn' ? 'Үйлчилгээ' : 'Service', icon: Heart },
  ];

  // Filter and sort news based on search term and category
  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || item.catId === selectedCategory;
    
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    // Sort by date from recent to old
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

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
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                  {locale === 'mn' ? 'МЭДЭЭ' : 'NEWS'}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                {locale === 'mn'
                  ? 'Эмэгтэйчүүдийн хөгжил, эрх, хүчирхэгжилтэй холбоотой сүүлийн үеийнмэдээ, арга хэмжээ'
                  : 'Latest news and events related to women\'s development, rights, and empowerment'
                }
              </p>

            </div>
          </div>
        </section>

        {/* Interactive Search and Filter Section */}
        <section className="py-16 bg-white">
          <div className="container-max container-spacing">
            <div className="max-w-4xl mx-auto mb-12">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-600 w-5 h-5 bg-white rounded-full p-1 shadow-sm" />
                <input
                  type="text"
                  placeholder={locale === 'mn' ? 'Мэдээ хайх...' : 'Search news...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-pink-500 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Mobile Filter Toggle Button */}
              <div className="lg:hidden mb-6">
                <button
                  onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                  className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-white border-2 border-gray-200 rounded-2xl font-medium text-gray-600 hover:border-pink-300 transition-all duration-300"
                >
                  <Filter className="w-4 h-4" />
                  <span>{locale === 'mn' ? 'Шүүлтүүр' : 'Filters'}</span>
                  {isFiltersOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Category Filters */}
              <div className={`flex flex-wrap gap-4 justify-center transition-all duration-300 ${
                isFiltersOpen ? 'block' : 'hidden lg:flex'
              }`}>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      // Close filters on mobile after selection
                      if (window.innerWidth < 1024) {
                        setIsFiltersOpen(false);
                      }
                    }}
                    className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                      selectedCategory === cat.id ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg scale-105' : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-pink-300 hover:scale-105'
                    }`}
                  >
                    <cat.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="whitespace-nowrap">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {filteredNews.length > 0 ? (
                filteredNews.map((item, index) => (
                <Link key={index} href={`/${locale}/news/${item.id}`} className="block">
                  <Card className="overflow-hidden rounded-2xl shadow-lg border-0 hover:-translate-y-1 transition-transform h-full flex flex-col cursor-pointer">
                    {/* News Image */}
                    <div className="aspect-[16/9] relative overflow-hidden">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-brand-50 to-white" />
                      )}
                    </div>
                    <div className="p-6 bg-white flex flex-col flex-grow">
                      <CardTitle className="text-xl font-semibold text-gray-900 mb-3">
                        {item.title}
                      </CardTitle>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                        {item.excerpt}
                      </p>
                      <div className="mt-auto">
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <span>{item.category}</span>
                          <span>{item.date}</span>
                        </div>
                        <Button variant="outline" className="text-sm px-5 py-2 border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white rounded-xl w-full transition-all duration-300">
                          {locale === 'mn' ? 'Дэлгэрэнгүй' : 'Read More'}
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="text-gray-500 text-lg">
                    {locale === 'mn' ? 'Мэдээ олдсонгүй' : 'No news found'}
                  </div>
                  <p className="text-gray-400 mt-2">
                    {locale === 'mn' ? 'Хайлтын нөхцөлөө өөрчилж үзнэ үү' : 'Try adjusting your search or filter criteria'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
