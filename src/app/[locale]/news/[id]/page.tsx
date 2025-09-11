import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { getNewsData } from '@/data/news';

export default async function NewsDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string; locale: string }> 
}) {
  const { id, locale } = await params;

  // Get news data from shared source
  const news = getNewsData(locale);

  // Find current news item
  const currentNews = news.find(item => item.id === id);
  
  if (!currentNews) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container-max container-spacing text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {locale === 'mn' ? 'Мэдээ олдсонгүй' : 'News Not Found'}
            </h1>
            <p className="text-gray-600 mb-8">
              {locale === 'mn' ? 'Хайж буй мэдээ олдсонгүй.' : 'The news you are looking for was not found.'}
            </p>
            <Link href={`/${locale}/news`}>
              <Button>
                {locale === 'mn' ? 'Мэдээний жагсаалт руу буцах' : 'Back to News List'}
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related news (exclude current news) - ensure we have at least 3 items
  const allOtherNews = news.filter(item => item.id !== id);
  const relatedNews = allOtherNews.length >= 3 ? allOtherNews.slice(0, 3) : allOtherNews;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Back Button */}
        <div className="pt-24 pb-8">
          <div className="container-max container-spacing">
            <Link 
              href={`/${locale}/news`}
              className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-medium transition-all duration-200 hover:scale-105 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>{locale === 'mn' ? 'Мэдээний жагсаалт руу буцах' : 'Back to News List'}</span>
            </Link>
          </div>
        </div>

        {/* News Detail */}
        <section className="pb-20">
          <div className="container-max container-spacing">
            <div className="max-w-4xl mx-auto">
              {/* News Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{currentNews.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{currentNews.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Tag className="w-4 h-4" />
                    <span>{currentNews.category}</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {currentNews.title}
                </h1>
              </div>

              {/* News Image */}
              <div className="aspect-[16/9] relative overflow-hidden rounded-2xl mb-8">
                {currentNews.image ? (
                  <img 
                    src={currentNews.image} 
                    alt={currentNews.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-brand-50 to-white" />
                )}
              </div>

              {/* News Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {currentNews.excerpt}
                </p>
                <div className="text-lg text-gray-800 leading-relaxed">
                  {currentNews.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related News */}
        <section className="py-20 bg-gray-50">
          <div className="container-max container-spacing">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {locale === 'mn' ? 'Холбоотой мэдээ' : 'Related News'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedNews.map((item) => (
                  <Link key={item.id} href={`/${locale}/news/${item.id}`} className="block">
                    <Card className="overflow-hidden rounded-2xl shadow-lg border-0 hover:-translate-y-1 transition-transform h-full flex flex-col cursor-pointer">
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
                ))}
              </div>

              <div className="text-center mt-16">
                <Link href={`/${locale}/news`}>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-bold px-12 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group border-0"
                  >
                    <span className="flex items-center">
                      {locale === 'mn' ? 'Бүх мэдээг харах' : 'View All News'}
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
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
