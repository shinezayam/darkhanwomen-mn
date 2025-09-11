'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  ArrowLeft,
  Download,
  FileText,
  Video,
  Link as LinkIcon
} from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
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
                <BookOpen className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {locale === 'mn' ? 'Нөөц материал' : 'Resource Materials'}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                  {locale === 'mn' ? 'НӨӨЦ' : 'RESOURCES'}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                {locale === 'mn'
                  ? 'Эмэгтэйчүүдийн хөгжилд тустай ном, материал, холбоос'
                  : 'Books, materials, and links helpful for women\'s development'
                }
              </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: locale === 'mn' ? 'Удирдлагын гарын авлага' : 'Leadership Guide',
                  type: 'PDF',
                  icon: FileText,
                  desc: locale === 'mn' ? 'Удирдлагын ур чадвар хөгжүүлэх гарын авлага' : 'Guide to developing leadership skills'
                },
                {
                  title: locale === 'mn' ? 'Бизнес төлөвлөлт' : 'Business Planning',
                  type: 'Video',
                  icon: Video,
                  desc: locale === 'mn' ? 'Жижиг бизнес эхлүүлэх арга замууд' : 'Ways to start a small business'
                },
                {
                  title: locale === 'mn' ? 'Хууль эрх зүй' : 'Legal Rights',
                  type: 'Link',
                  icon: LinkIcon,
                  desc: locale === 'mn' ? 'Эмэгтэйчүүдийн хууль эрх зүйн мэдээлэл' : 'Information about women\'s legal rights'
                }
              ].map((resource, index) => (
                <Card key={index} className="card-modern p-6">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <resource.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-gray-900">
                          {resource.title}
                        </CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {resource.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm">{resource.desc}</p>
                    <Button className="w-full btn-primary">
                      <Download className="w-4 h-4 mr-2" />
                      {locale === 'mn' ? 'Татах' : 'Download'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
