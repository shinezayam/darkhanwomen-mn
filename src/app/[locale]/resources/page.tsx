'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Newspaper,
  Eye,
  Download,
  FileText,
  Calendar,
  User,
  ArrowLeft
} from 'lucide-react';
import PDFReader from '@/components/PDFReader';
import Link from 'next/link';
import { useState } from 'react';

export default function ResourcesPage() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';
  const [selectedMagazine, setSelectedMagazine] = useState<string | null>(null);

  // Magazine data - using actual uploaded magazine images
  const magazines = [
    {
      id: 'focus-magazine-02-22',
      title: locale === 'mn' ? 'Focus сэтгүүл - 2022 оны 2-р дугаар' : 'Focus Magazine - Issue 2, 2022',
      description: locale === 'mn' ? 'Эмэгтэйчүүдийн хөгжил, бизнес салбарын мэдээлэл, удирдлагын зөвлөмж' : 'Women\'s development, business sector information, and leadership advice',
      author: locale === 'mn' ? 'Дархан-Уул аймгийн эмэгтэйчүүдийн холбоо' : 'Darkhan-Uul Women\'s Federation',
      date: '2022-02',
      pdfUrl: '/magazines/Focus_02.22.pdf',
      coverImage: '/magazines/Focus_magazine_02-22.png'
    },
    {
      id: 'powerful-women-2024',
      title: locale === 'mn' ? 'Хүчирхэг эмэгтэйчүүд - 2024 оны сэтгүүл' : 'Powerful Women - 2024 Magazine',
      description: locale === 'mn' ? 'Хүчирхэг эмэгтэйчүүдийн түүх, амжилт, удирдлагын туршлага' : 'Stories of powerful women, their successes, and leadership experiences',
      author: locale === 'mn' ? 'Дархан-Уул аймгийн эмэгтэйчүүдийн холбоо' : 'Darkhan-Uul Women\'s Federation',
      date: '2024',
      pdfUrl: '/magazines/huchirheg emegteichuud 2024 setguul.pdf',
      coverImage: '/magazines/Хүчирхэг_эмэгтэйчүүд_2024_сэтгүүл_preview.png'
    }
  ];

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
                <Newspaper className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {locale === 'mn' ? 'Сэтгүүлүүд' : 'Magazines'}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                  {locale === 'mn' ? 'СЭТГҮҮЛҮҮД' : 'MAGAZINES'}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                {locale === 'mn'
                  ? 'Манай байгууллагын сэтгүүлүүдийг уншиж, мэдээлэл аваарай'
                  : 'Read our organization\'s magazines and stay informed'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Magazines Section */}
        <section className="section-spacing bg-white">
          <div className="container-max container-spacing">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                {locale === 'mn' ? 'Сэтгүүлүүд' : 'Magazines'}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {locale === 'mn'
                  ? 'Манай байгууллагын сэтгүүлүүдийг уншиж, мэдээлэл аваарай'
                  : 'Read our organization\'s magazines and stay informed'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12 items-stretch">
              {magazines.map((magazine) => (
                <Card key={magazine.id} className="overflow-hidden rounded-2xl shadow-lg border-0 hover:-translate-y-1 transition-transform h-full flex flex-col cursor-pointer">
                  {/* Magazine Cover Preview */}
                  <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-brand-50 to-white">
                    {magazine.coverImage ? (
                      <img 
                        src={magazine.coverImage} 
                        alt={magazine.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to PDF icon if image fails to load
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className={`${magazine.coverImage ? 'hidden' : 'flex'} absolute inset-0 flex-col items-center justify-center text-brand-400`}>
                      <FileText className="w-16 h-16 mb-4" />
                      <span className="text-lg font-medium">PDF</span>
                    </div>
                    
                    {/* Badge overlay */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="text-xs bg-white/90 text-brand-700 shadow-lg">
                        <FileText className="w-3 h-3 mr-1" />
                        {locale === 'mn' ? 'Сэтгүүл' : 'Magazine'}
                      </Badge>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        onClick={() => setSelectedMagazine(magazine.id)}
                        className="bg-white/90 hover:bg-white text-brand-600 font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        {locale === 'mn' ? 'Унших' : 'Read'}
                      </Button>
                    </div>
                  </div>

                  <div className="p-6 bg-white flex flex-col flex-grow">
                    <CardTitle className="text-xl font-semibold text-gray-900 mb-3">{magazine.title}</CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{magazine.description}</p>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span className="truncate">{magazine.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{magazine.date}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <Button
                          onClick={() => setSelectedMagazine(magazine.id)}
                          className="flex-1 btn-primary"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          {locale === 'mn' ? 'Унших' : 'Read'}
                        </Button>
                        
                        <Button
                          variant="outline"
                          onClick={() => {
                            const link = document.createElement('a');
                            link.href = magazine.pdfUrl;
                            link.download = magazine.title;
                            link.click();
                          }}
                          className="px-6 py-3 rounded-xl border-2 border-brand-200 hover:bg-brand-50 transition-all duration-300 h-14"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* PDF Reader Modal */}
      {selectedMagazine && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-end p-4 border-b">
              <Button
                variant="outline"
                onClick={() => setSelectedMagazine(null)}
                className="hover:bg-gray-50"
              >
                ✕
              </Button>
            </div>
            
            <div className="p-4">
              {(() => {
                const magazine = magazines.find(m => m.id === selectedMagazine);
                return magazine ? (
                  <PDFReader
                    pdfUrl={magazine.pdfUrl}
                    title={magazine.title}
                    description={magazine.description}
                    author={magazine.author}
                    date={magazine.date}
                    locale={locale}
                  />
                ) : null;
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}