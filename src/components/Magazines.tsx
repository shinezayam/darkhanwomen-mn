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
                <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-brand-50 to-white">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-40 bg-white rounded-lg shadow-lg mx-auto mb-4 flex items-center justify-center border-2 border-brand-200">
                        {magazine.coverImage ? (
                          <img 
                            src={magazine.coverImage} 
                            alt={magazine.title}
                            className="w-full h-full object-cover rounded-lg"
                            onError={(e) => {
                              // Fallback to PDF icon if image fails to load
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className={`${magazine.coverImage ? 'hidden' : 'flex'} flex-col items-center justify-center text-brand-400`}>
                          <FileText className="w-12 h-12 mb-2" />
                          <span className="text-xs font-medium">PDF</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-brand-100 text-brand-700">
                        <FileText className="w-3 h-3 mr-1" />
                        {locale === 'mn' ? 'Сэтгүүл' : 'Magazine'}
                      </Badge>
                    </div>
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
                        className="px-6 py-3 rounded-xl border-2 border-brand-200 hover:bg-brand-50 transition-all duration-300"
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
