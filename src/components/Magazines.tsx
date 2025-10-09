'use client';

import { useState } from 'react';
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
  ArrowRight
} from 'lucide-react';
import PDFReader from '@/components/PDFReader';
import Link from 'next/link';

interface MagazinesProps {
  locale: 'mn' | 'en';
}

export default function Magazines({ locale }: MagazinesProps) {
  const [selectedMagazine, setSelectedMagazine] = useState<string | null>(null);

  // Magazine data - you can add your PDF files here
  const magazines = [
    {
      id: 'magazine-1',
      title: locale === 'mn' ? 'Эмэгтэйчүүдийн холбооны сэтгүүл - 2024 оны 1-р дугаар' : 'Women\'s Federation Magazine - Issue 1, 2024',
      description: locale === 'mn' ? 'Эмэгтэйчүүдийн эрхийн талаарх мэдээлэл, төслүүдийн тайлан, удирдлагын зөвлөмж' : 'Information about women\'s rights, project reports, and leadership advice',
      author: locale === 'mn' ? 'Дархан-Уул аймгийн эмэгтэйчүүдийн холбоо' : 'Darkhan-Uul Women\'s Federation',
      date: '2024-01',
      pdfUrl: '/magazines/magazine-1.pdf', // Placeholder - replace with actual PDF
      coverImage: '/images/magazine-cover-1.jpg' // Optional cover image
    },
    {
      id: 'magazine-2',
      title: locale === 'mn' ? 'Эмэгтэйчүүдийн холбооны сэтгүүл - 2024 оны 2-р дугаар' : 'Women\'s Federation Magazine - Issue 2, 2024',
      description: locale === 'mn' ? 'Хөтөлбөрүүдийн амжилт, гишүүдийн түүх, ирээдүйн төлөвлөгөө' : 'Program successes, member stories, and future plans',
      author: locale === 'mn' ? 'Дархан-Уул аймгийн эмэгтэйчүүдийн холбоо' : 'Darkhan-Uul Women\'s Federation',
      date: '2024-02',
      pdfUrl: '/magazines/magazine-2.pdf', // Placeholder - replace with actual PDF
      coverImage: '/images/magazine-cover-2.jpg' // Optional cover image
    }
  ];

  return (
    <>
      {/* Magazines Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-pink-300/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
        </div>

        <div className="container-max container-spacing relative z-10">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-purple-700 px-6 py-3 mb-8 shadow-lg border border-purple-100 rounded-full">
              <Newspaper className="w-5 h-5" />
              <span className="text-sm font-medium">
                {locale === 'mn' ? 'Сэтгүүлүүд' : 'Magazines'}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {locale === 'mn' ? 'СЭТГҮҮЛҮҮД' : 'MAGAZINES'}
              </span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              {locale === 'mn'
                ? 'Манай байгууллагын сэтгүүлүүдийг уншиж, мэдээлэл аваарай'
                : 'Read our organization\'s magazines and stay informed'
              }
            </p>

            {/* View All Button */}
            <Link href={`/${locale}/resources`}>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {locale === 'mn' ? 'Бүх сэтгүүл үзэх' : 'View All Magazines'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Magazine Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {magazines.map((magazine) => (
              <Card key={magazine.id} className="card-modern overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {magazine.title}
                      </CardTitle>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {magazine.description}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span className="truncate">{magazine.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{magazine.date}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      <FileText className="w-3 h-3 mr-1" />
                      PDF
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="flex space-x-3">
                    <Button
                      onClick={() => setSelectedMagazine(magazine.id)}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105"
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
                      className="px-6 py-3 rounded-xl border-2 border-purple-200 hover:bg-purple-50 transition-all duration-300"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
    </>
  );
}
