'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mic, 
  GraduationCap, 
  Heart, 
  Users, 
  ArrowRight,
  Sparkles,
  Target,
  ArrowLeft,
  Search,
  TrendingUp,
  Globe,
  BookOpen,
  Leaf,
  Brain,
  Star,
  CheckCircle,
  Scissors,
  Palette,
  Filter,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Link from 'next/link';

export default function ProgramsPage() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const programs = [
    {
      id: 'tedx-darkhan',
      icon: Mic,
      title: locale === 'mn' ? 'TEDxDarkhan' : 'TEDxDarkhan',
      description: locale === 'mn' 
        ? 'Олон улсын арга хэмжээг 2019 оноос хойш жил бүр зохион байгуулдаг.'
        : 'International event organized annually since 2019.',
      category: locale === 'mn' ? 'Олон улсын арга хэмжээ' : 'International Event',
      participants: '200+',
      duration: locale === 'mn' ? '1 өдөр' : '1 Day',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      features: [locale === 'mn' ? 'Олон улсын стандарт' : 'International standard', locale === 'mn' ? '2019 оноос' : 'Since 2019']
    },
    {
      id: 'equal-participation',
      icon: Users,
      title: locale === 'mn' ? 'Тэгш оролцоо – Тэгш хөгжил' : 'Equal Participation – Equal Development',
      description: locale === 'mn'
        ? 'Сургалт, уулзалт зохион байгуулж тэгш боломжийг хангах.'
        : 'Organizing training and meetings to ensure equal opportunities.',
      category: locale === 'mn' ? 'Сургалт, уулзалт' : 'Training & Meetings',
      participants: '100+',
      duration: locale === 'mn' ? 'Тасралтгүй' : 'Ongoing',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
      features: [locale === 'mn' ? 'Тэгш боломж' : 'Equal opportunity', locale === 'mn' ? 'Хөгжил' : 'Development']
    },
    {
      id: 'leadership-academy',
      icon: GraduationCap,
      title: locale === 'mn' ? 'Women Leadership Academy' : 'Women Leadership Academy',
      description: locale === 'mn'
        ? 'Эмэгтэйчүүдийн манлайллын академи сургалт-уулзалт.'
        : 'Women\'s leadership academy training and meetings.',
      category: locale === 'mn' ? 'Манлайллын академи' : 'Leadership Academy',
      participants: '50',
      duration: locale === 'mn' ? '6 сар' : '6 Months',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
      features: [locale === 'mn' ? 'Академи сургалт' : 'Academy training', locale === 'mn' ? 'Манлайлал' : 'Leadership']
    },
    {
      id: 'women-base',
      icon: Heart,
      title: locale === 'mn' ? 'Бүсгүйчүүдийн базаа' : 'Women\'s Base',
      description: locale === 'mn'
        ? 'Сошиал нэвтрүүлэг зохион байгуулах.'
        : 'Organizing social programs.',
      category: locale === 'mn' ? 'Сошиал нэвтрүүлэг' : 'Social Program',
      participants: '80+',
      duration: locale === 'mn' ? 'Тасралтгүй' : 'Ongoing',
      color: 'from-rose-400 to-rose-500',
      bgColor: 'bg-gradient-to-br from-rose-50 to-rose-100',
      features: [locale === 'mn' ? 'Сошиал' : 'Social', locale === 'mn' ? 'Нэвтрүүлэг' : 'Program']
    },
    {
      id: 'warm-journey',
      icon: Users,
      title: locale === 'mn' ? 'Дулаан аян' : 'Warm Journey',
      description: locale === 'mn'
        ? 'Хөдөөгийн эмэгтэйчүүдэд зориулсан төсөл.'
        : 'Project for rural women.',
      category: locale === 'mn' ? 'Төсөл' : 'Project',
      participants: '100',
      duration: locale === 'mn' ? '6 сар' : '6 Months',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
      features: [locale === 'mn' ? 'Хөдөөгийн' : 'Rural', locale === 'mn' ? 'Төсөл' : 'Project']
    },
    {
      id: 'girls-club',
      icon: Heart,
      title: locale === 'mn' ? 'Охидын клуб' : 'Girls Club',
      description: locale === 'mn'
        ? 'Охид эмэгтэйчүүдийн хөгжүүлэлтийн төсөл.'
        : 'Development project for girls and women.',
      category: locale === 'mn' ? 'Төсөл' : 'Project',
      participants: '30',
      duration: locale === 'mn' ? '3 сар' : '3 Months',
      color: 'from-red-400 to-red-500',
      bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
      features: [locale === 'mn' ? 'Охид' : 'Girls', locale === 'mn' ? 'Хөгжүүлэлт' : 'Development']
    },
    {
      id: 'love-energy',
      icon: Sparkles,
      title: locale === 'mn' ? 'Хайрын цэнэг' : 'Love Energy',
      description: locale === 'mn'
        ? 'Хайр, дэмжлэгийн төсөл.'
        : 'Love and support project.',
      category: locale === 'mn' ? 'Төсөл' : 'Project',
      participants: '40',
      duration: locale === 'mn' ? '4 сар' : '4 Months',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
      features: [locale === 'mn' ? 'Хайр' : 'Love', locale === 'mn' ? 'Дэмжлэг' : 'Support']
    },
    {
      id: 'dream-fields',
      icon: Sparkles,
      title: locale === 'mn' ? 'Мөрөөдлийн талбай' : 'Dream Fields',
      description: locale === 'mn'
        ? 'Эмэгтэйчүүдийн мөрөөдөл, зорилгыг хэрэгжүүлэх төсөл.'
        : 'Project to realize women\'s dreams and goals.',
      category: locale === 'mn' ? 'Төсөл' : 'Project',
      participants: '40',
      duration: locale === 'mn' ? '4 сар' : '4 Months',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
      features: [locale === 'mn' ? 'Мөрөөдөл' : 'Dreams', locale === 'mn' ? 'Зорилго' : 'Goals']
    },
    {
      id: 'smart-future',
      icon: Target,
      title: locale === 'mn' ? 'Ухаалаг ирээдүй' : 'Smart Future',
      description: locale === 'mn'
        ? 'Эмэгтэйчүүдийн ирээдүйн төлөвлөлтийн төсөл.'
        : 'Women\'s future planning project.',
      category: locale === 'mn' ? 'Төсөл' : 'Project',
      participants: '35',
      duration: locale === 'mn' ? '5 сар' : '5 Months',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
      features: [locale === 'mn' ? 'Төлөвлөлт' : 'Planning', locale === 'mn' ? 'Ирээдүй' : 'Future']
    },
    {
      id: 'gate',
      icon: Globe,
      title: locale === 'mn' ? 'Хаалга' : 'Gate',
      description: locale === 'mn'
        ? 'Шинэ боломжууд нээх төсөл.'
        : 'Project to open new opportunities.',
      category: locale === 'mn' ? 'Төсөл' : 'Project',
      participants: '25',
      duration: locale === 'mn' ? '3 сар' : '3 Months',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-teal-50 to-teal-100',
      features: [locale === 'mn' ? 'Боломж' : 'Opportunity', locale === 'mn' ? 'Хөгжил' : 'Development']
    },
    {
      id: 'nandin',
      icon: Star,
      title: locale === 'mn' ? 'Нандин' : 'Nandin',
      description: locale === 'mn'
        ? 'Эмэгтэйчүүдийн хөгжүүлэлтийн төсөл.'
        : 'Women\'s development project.',
      category: locale === 'mn' ? 'Төсөл' : 'Project',
      participants: '30',
      duration: locale === 'mn' ? '4 сар' : '4 Months',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      features: [locale === 'mn' ? 'Хөгжүүлэлт' : 'Development', locale === 'mn' ? 'Дэмжлэг' : 'Support']
    },
    {
      id: 'right-choice',
      icon: CheckCircle,
      title: locale === 'mn' ? 'Зөв сонголт' : 'Right Choice',
      description: locale === 'mn'
        ? 'Зөв шийдвэр гаргах ур чадварыг хөгжүүлэх төсөл.'
        : 'Project to develop decision-making skills.',
      category: locale === 'mn' ? 'Төсөл' : 'Project',
      participants: '45',
      duration: locale === 'mn' ? '3 сар' : '3 Months',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-cyan-100',
      features: [locale === 'mn' ? 'Шийдвэр' : 'Decision', locale === 'mn' ? 'Ур чадвар' : 'Skills']
    },
    {
      id: 'herder-women',
      icon: Users,
      title: locale === 'mn' ? 'Малчин эмэгтэйчүүдийн сургалт' : 'Herder Women Training',
      description: locale === 'mn'
        ? 'Малчин эмэгтэйчүүдэд зориулсан сургалт – зөвлөгөөн.'
        : 'Training and consultation for herder women.',
      category: locale === 'mn' ? 'Сургалт – зөвлөгөөн' : 'Training & Consultation',
      participants: '60',
      duration: locale === 'mn' ? '2 сар' : '2 Months',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-gradient-to-br from-amber-50 to-amber-100',
      features: [locale === 'mn' ? 'Малчин' : 'Herder', locale === 'mn' ? 'Сургалт' : 'Training']
    },
    {
      id: 'vegetable-women',
      icon: Leaf,
      title: locale === 'mn' ? 'Ногоочин эмэгтэйчүүдийн сургалт' : 'Vegetable Grower Women Training',
      description: locale === 'mn'
        ? 'Ногоочин эмэгтэйчүүдэд зориулсан сургалт – зөвлөгөөн.'
        : 'Training and consultation for vegetable grower women.',
      category: locale === 'mn' ? 'Сургалт – зөвлөгөөн' : 'Training & Consultation',
      participants: '40',
      duration: locale === 'mn' ? '2 сар' : '2 Months',
      color: 'from-lime-500 to-lime-600',
      bgColor: 'bg-gradient-to-br from-lime-50 to-lime-100',
      features: [locale === 'mn' ? 'Ногоочин' : 'Vegetable grower', locale === 'mn' ? 'Сургалт' : 'Training']
    },
    {
      id: 'smart-darkhan-club',
      icon: Brain,
      title: locale === 'mn' ? 'Эртэч Дархан клуб' : 'Smart Darkhan Club',
      description: locale === 'mn'
        ? 'Оюунлаг, хөгжүүлэлтийн клуб.'
        : 'Smart and development club.',
      category: locale === 'mn' ? 'Клуб' : 'Club',
      participants: '50',
      duration: locale === 'mn' ? 'Тасралтгүй' : 'Ongoing',
      color: 'from-violet-500 to-violet-600',
      bgColor: 'bg-gradient-to-br from-violet-50 to-violet-100',
      features: [locale === 'mn' ? 'Оюунлаг' : 'Smart', locale === 'mn' ? 'Хөгжүүлэлт' : 'Development']
    },
    {
      id: 'morning-show',
      icon: Mic,
      title: locale === 'mn' ? 'Morning Show подкаст' : 'Morning Show Podcast',
      description: locale === 'mn'
        ? 'Өглөөний нэвтрүүлгийн подкаст.'
        : 'Morning show podcast.',
      category: locale === 'mn' ? 'Подкаст' : 'Podcast',
      participants: 'Unlimited',
      duration: locale === 'mn' ? 'Тасралтгүй' : 'Ongoing',
      color: 'from-sky-500 to-sky-600',
      bgColor: 'bg-gradient-to-br from-sky-50 to-sky-100',
      features: [locale === 'mn' ? 'Подкаст' : 'Podcast', locale === 'mn' ? 'Нэвтрүүлэг' : 'Show']
    },
    {
      id: 'english-club',
      icon: Globe,
      title: locale === 'mn' ? 'English Club' : 'English Club',
      description: locale === 'mn'
        ? 'Англи хэлний клуб.'
        : 'English language club.',
      category: locale === 'mn' ? 'Клуб' : 'Club',
      participants: '35',
      duration: locale === 'mn' ? 'Тасралтгүй' : 'Ongoing',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      features: [locale === 'mn' ? 'Англи хэл' : 'English', locale === 'mn' ? 'Клуб' : 'Club']
    },
    {
      id: 'citizen-representatives',
      icon: Users,
      title: locale === 'mn' ? 'Иргэдийн төлөөлөгчдийн манлайлал' : 'Citizen Representatives Leadership',
      description: locale === 'mn'
        ? 'Иргэдийн төлөөлөгчдийн манлайллын сургалт, уулзалт.'
        : 'Leadership training and meetings for citizen representatives.',
      category: locale === 'mn' ? 'Сургалт, уулзалт' : 'Training & Meetings',
      participants: '25',
      duration: locale === 'mn' ? '4 сар' : '4 Months',
      color: 'from-slate-500 to-slate-600',
      bgColor: 'bg-gradient-to-br from-slate-50 to-slate-100',
      features: [locale === 'mn' ? 'Манлайлал' : 'Leadership', locale === 'mn' ? 'Сургалт' : 'Training']
    }
  ];

  const categories = [
    { id: 'all', name: locale === 'mn' ? 'Бүгд' : 'All', icon: Sparkles },
    { id: 'Олон улсын арга хэмжээ', name: locale === 'mn' ? 'Олон улсын арга хэмжээ' : 'International Event', icon: Mic },
    { id: 'Сургалт, уулзалт', name: locale === 'mn' ? 'Сургалт, уулзалт' : 'Training & Meetings', icon: GraduationCap },
    { id: 'Манлайллын академи', name: locale === 'mn' ? 'Манлайллын академи' : 'Leadership Academy', icon: Target },
    { id: 'Сошиал нэвтрүүлэг', name: locale === 'mn' ? 'Сошиал нэвтрүүлэг' : 'Social Program', icon: Heart },
    { id: 'Төсөл', name: locale === 'mn' ? 'Төсөл' : 'Project', icon: TrendingUp },
    { id: 'Сургалт – зөвлөгөөн', name: locale === 'mn' ? 'Сургалт – зөвлөгөөн' : 'Training & Consultation', icon: BookOpen },
    { id: 'Клуб', name: locale === 'mn' ? 'Клуб' : 'Club', icon: Users },
    { id: 'Подкаст', name: locale === 'mn' ? 'Подкаст' : 'Podcast', icon: Mic }
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
              className="inline-flex items-center space-x-2 text-brand-500 hover:text-brand-700 font-medium transition-all duration-200 hover:scale-105 group bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-brand-100"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="hidden sm:inline">{locale === 'mn' ? 'Нүүр хуудас' : 'Home'}</span>
            </Link>
          </div>

          <div className="container-max container-spacing relative z-10">
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-brand-700 px-6 py-3 mb-8 shadow-lg border border-brand-100 rounded-full">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {locale === 'mn' ? 'Бүх хөтөлбөрүүд' : 'All Programs'}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">
                  {locale === 'mn' ? 'ХӨТӨЛБӨРҮҮД' : 'PROGRAMS'}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                {locale === 'mn'
                  ? 'Эмэгтэйчүүдийн хөгжилд чиглэсэн олон төрлийн хөтөлбөрүүд'
                  : 'Various programs focused on women\'s development and empowerment'
                }
              </p>

              {/* Interactive Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{programs.length}+</div>
                  <div className="text-sm text-gray-600 font-medium">
                    {locale === 'mn' ? 'Идэвхтэй хөтөлбөр' : 'Active Programs'}
                  </div>
                </div>
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-brand-500 mb-2">1000+</div>
                  <div className="text-sm text-gray-600 font-medium">
                    {locale === 'mn' ? 'Оролцогчид' : 'Participants'}
                  </div>
                </div>
                <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-brand-500 mb-2">95%</div>
                  <div className="text-sm text-gray-600 font-medium">
                    {locale === 'mn' ? 'Амжилтын хувь' : 'Success Rate'}
                  </div>
                </div>
              </div>
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
                  placeholder={locale === 'mn' ? 'Хөтөлбөр хайх...' : 'Search programs...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-brand-500 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg"
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
                  className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-white border-2 border-gray-200 rounded-2xl font-medium text-gray-600 hover:border-brand-300 transition-all duration-300"
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
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      // Close filters on mobile after selection
                      if (window.innerWidth < 1024) {
                        setIsFiltersOpen(false);
                      }
                    }}
                    className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-brand-300 hover:scale-105'
                    }`}
                  >
                    <category.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="whitespace-nowrap">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Programs Grid - 2x2 Layout with Bigger Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPrograms.map((program, index) => (
                <Link key={index} href={`/${locale}/programs/${program.id}`} className="block">
                  <Card 
                    className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 cursor-pointer"
                  >
                  <div className={`relative ${program.bgColor} p-8 h-full min-h-[500px] flex flex-col`}>
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
                    
                    {/* Header with Better Icon */}
                    <div className="flex items-start justify-between mb-8 relative z-10">
                      <div className="relative">
                        <div className={`w-20 h-20 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                          <program.icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      <Badge 
                        variant="secondary" 
                        className="text-xs font-semibold px-3 py-1 rounded-full shadow-sm border-0"
                        style={{ 
                          background: `linear-gradient(135deg, ${program.color.includes('blue') ? '#DBEAFE, #BFDBFE' : 
                                       program.color.includes('pink') ? '#FCE7F3, #FBCFE8' :
                                       program.color.includes('purple') ? '#FCE7F3, #FBCFE8' : 
                                       program.color.includes('green') ? '#D1FAE5, #A7F3D0' :
                                       program.color.includes('yellow') ? '#FEF3C7, #FDE68A' :
                                       program.color.includes('indigo') ? '#E0E7FF, #C7D2FE' : '#D1FAE5, #A7F3D0'})`,
                          color: program.color.includes('blue') ? '#1E40AF' : 
                                 program.color.includes('pink') ? '#BE185D' :
                                 program.color.includes('purple') ? '#BE185D' : 
                                 program.color.includes('green') ? '#059669' :
                                 program.color.includes('yellow') ? '#D97706' :
                                 program.color.includes('indigo') ? '#4338CA' : '#059669'
                        }}
                      >
                        {program.category}
                      </Badge>
                    </div>
                    
                    {/* Enhanced Content */}
                    <div className="flex-1 flex flex-col">
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-4 leading-tight font-display">
                        {program.title}
                      </CardTitle>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed text-base flex-1">
                        {program.description}
                      </p>

                      {/* Enhanced Stats */}
                      <div className="flex items-center justify-between text-base text-gray-500 mb-6">
                        <div className="text-center">
                          <div className="font-bold text-gray-900 text-lg">{program.participants}</div>
                          <div className="text-sm">{locale === 'mn' ? 'Оролцогч' : 'Participants'}</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-gray-900 text-lg">{program.duration}</div>
                          <div className="text-sm">{locale === 'mn' ? 'Хугацаа' : 'Duration'}</div>
                        </div>
                      </div>
                      
                      {/* Enhanced CTA Button */}
                      <Button 
                        variant="outline" 
                        className="w-full bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-sm border-2 border-gray-200 hover:border-brand-400 hover:bg-gradient-to-r hover:from-brand-50 hover:to-brand-100 text-gray-700 hover:text-brand-700 font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group text-base"
                      >
                        <span className="flex items-center justify-center">
                          {locale === 'mn' ? 'Дэлгэрэнгүй' : 'Learn More'}
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                      </Button>
                    </div>
                  </div>

                  {/* Subtle Border Glow on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </Card>
                </Link>
              ))}
            </div>

            {/* No Results Message */}
            {filteredPrograms.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {locale === 'mn' ? 'Хөтөлбөр олдсонгүй' : 'No Programs Found'}
                </h3>
                <p className="text-gray-600 mb-8">
                  {locale === 'mn' 
                    ? 'Таны хайсан хөтөлбөр олдсонгүй. Өөр түлхүүр үгээр хайж үзнэ үү.'
                    : 'No programs match your search. Try different keywords.'
                  }
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-gradient-to-r from-brand-500 to-brand-600 text-white"
                >
                  {locale === 'mn' ? 'Бүх хөтөлбөрийг харах' : 'View All Programs'}
                </Button>
              </div>
            )}
          </div>
        </section>


        {/* Call to Action Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-max container-spacing">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-3xl p-12 text-center shadow-xl border border-gray-100">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  {locale === 'mn' ? 'Өнөөдөр эхлээрэй' : 'Start Today'}
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {locale === 'mn'
                    ? 'Эмэгтэйчүүдийн хөгжилд хувь нэмэр оруулах аялал эхлүүлэхэд бэлэн үү?'
                    : 'Ready to start your journey of contributing to women\'s development?'
                  }
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    {locale === 'mn' ? 'Оролцох' : 'Get Involved'}
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105"
                  >
                    {locale === 'mn' ? 'Холбоо барих' : 'Contact Us'}
                  </Button>
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