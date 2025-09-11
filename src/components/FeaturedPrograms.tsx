'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
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
  Scissors,
  Palette,
  Globe,
  BookOpen,
  Leaf,
  Brain,
  Star,
  CheckCircle
} from 'lucide-react';

export default function FeaturedPrograms() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'mn';

  // Featured Activities
  const featuredActivities = [
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
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
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
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
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
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
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
      color: 'from-brand-500 to-brand-600',
      bgColor: 'bg-brand-50',
      borderColor: 'border-brand-200',
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
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
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
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
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
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
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
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
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
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
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
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
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
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
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
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
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
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
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
      bgColor: 'bg-lime-50',
      borderColor: 'border-lime-200',
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
      bgColor: 'bg-violet-50',
      borderColor: 'border-violet-200',
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
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-200',
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
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
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
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200',
      features: [locale === 'mn' ? 'Манлайлал' : 'Leadership', locale === 'mn' ? 'Төлөөлөгч' : 'Representative']
    }
  ];

  // Professional Training Programs
  const professionalTraining = [
    {
      id: 'hair-stylist',
      icon: Scissors,
      title: locale === 'mn' ? 'Үсчин' : 'Hair Stylist',
      description: locale === 'mn'
        ? 'Мэргэжлийн үсчин болох сургалт. Сертификат олгох.'
        : 'Professional hair stylist training with certification.',
      category: locale === 'mn' ? 'Мэргэжлийн сургалт' : 'Professional Training',
      participants: '20',
      duration: locale === 'mn' ? '3 сар' : '3 Months',
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      features: [locale === 'mn' ? 'Мэргэжлийн үнэмлэх' : 'Professional certificate', locale === 'mn' ? 'Практик' : 'Practical']
    },
    {
      id: 'embroidery',
      icon: Palette,
      title: locale === 'mn' ? 'Оёмол бүтээгдэхүүн оёдолчин' : 'Embroidery Product Maker',
      description: locale === 'mn'
        ? 'Оёмол бүтээгдэхүүн үйлдвэрлэх сургалт. Уран хатгамал, оёдол.'
        : 'Embroidery product manufacturing training. Traditional embroidery and sewing.',
      category: locale === 'mn' ? 'Мэргэжлийн сургалт' : 'Professional Training',
      participants: '25',
      duration: locale === 'mn' ? '4 сар' : '4 Months',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      features: [locale === 'mn' ? 'Уран хатгамал' : 'Traditional embroidery', locale === 'mn' ? 'Бүтээгдэхүүн' : 'Products']
    },
    {
      id: 'gift-souvenir',
      icon: Sparkles,
      title: locale === 'mn' ? 'Бэлэг дурсгалын зүйл урлаач' : 'Gift Souvenir Craftsman',
      description: locale === 'mn'
        ? 'Бэлэг дурсгалын зүйл урлах мэргэжлийн үнэмлэх олгох сургалт.'
        : 'Professional training for gift souvenir crafting with certification.',
      category: locale === 'mn' ? 'Мэргэжлийн сургалт' : 'Professional Training',
      participants: '15',
      duration: locale === 'mn' ? '3 сар' : '3 Months',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      features: [locale === 'mn' ? 'Мэргэжлийн үнэмлэх' : 'Professional certificate', locale === 'mn' ? 'Урлаач' : 'Craftsman']
    }
  ];

  // Development Training Programs
  const developmentTraining = [
    {
      id: 'art-painting',
      icon: Palette,
      title: locale === 'mn' ? 'Уран зураг' : 'Art Painting',
      description: locale === 'mn'
        ? 'Уран зурагийн сургалт. Хүүхэд, залуучууд, насанд хүрэгчдэд зориулсан.'
        : 'Art painting training for children, youth, and adults.',
      category: locale === 'mn' ? 'Хөгжүүлэх сургалт' : 'Development Training',
      participants: '30',
      duration: locale === 'mn' ? '2 сар' : '2 Months',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      features: [locale === 'mn' ? 'Бүх насны' : 'All ages', locale === 'mn' ? 'Уран чадвар' : 'Artistic skills']
    },
    {
      id: 'english-training',
      icon: Globe,
      title: locale === 'mn' ? 'Англи хэлний сургалт' : 'English Language Training',
      description: locale === 'mn'
        ? 'Англи хэлний сургалт. Хувь хөгжил, ажлын боломж.'
        : 'English language training for personal development and job opportunities.',
      category: locale === 'mn' ? 'Хөгжүүлэх сургалт' : 'Development Training',
      participants: '40',
      duration: locale === 'mn' ? '6 сар' : '6 Months',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      features: [locale === 'mn' ? 'Хувь хөгжил' : 'Personal development', locale === 'mn' ? 'Ажлын боломж' : 'Job opportunities']
    },
    {
      id: 'japanese-training',
      icon: BookOpen,
      title: locale === 'mn' ? 'Япон хэлний сургалт' : 'Japanese Language Training',
      description: locale === 'mn'
        ? 'Япон хэлний сургалт. Олон улсын боломжууд.'
        : 'Japanese language training for international opportunities.',
      category: locale === 'mn' ? 'Хөгжүүлэх сургалт' : 'Development Training',
      participants: '20',
      duration: locale === 'mn' ? '8 сар' : '8 Months',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      features: [locale === 'mn' ? 'Олон улсын' : 'International', locale === 'mn' ? 'Боломж' : 'Opportunities']
    },
    {
      id: 'positive-thinking',
      icon: Heart,
      title: locale === 'mn' ? 'Эерэг сэтгэлгээний модуль сургалт' : 'Positive Thinking Module Training',
      description: locale === 'mn'
        ? 'Эерэг сэтгэлгээний модуль сургалтууд. Хувь хөгжил, сэтгэл зүйн тогтвортой байдал.'
        : 'Positive thinking module training for personal development and psychological stability.',
      category: locale === 'mn' ? 'Хөгжүүлэх сургалт' : 'Development Training',
      participants: '35',
      duration: locale === 'mn' ? '1 сар' : '1 Month',
      color: 'from-brand-500 to-brand-600',
      bgColor: 'bg-brand-50',
      borderColor: 'border-brand-200',
      features: [locale === 'mn' ? 'Сэтгэл зүй' : 'Psychology', locale === 'mn' ? 'Хувь хөгжил' : 'Personal development']
    },
    {
      id: 'project-development',
      icon: Target,
      title: locale === 'mn' ? 'Төсөл боловсруулах сургалт' : 'Project Development Training',
      description: locale === 'mn'
        ? 'Төсөл боловсруулах сургалт. Төслийн менежмент, төлөвлөлт.'
        : 'Project development training including project management and planning.',
      category: locale === 'mn' ? 'Хөгжүүлэх сургалт' : 'Development Training',
      participants: '25',
      duration: locale === 'mn' ? '2 сар' : '2 Months',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      features: [locale === 'mn' ? 'Төслийн менежмент' : 'Project management', locale === 'mn' ? 'Төлөвлөлт' : 'Planning']
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-slate-50 via-white to-pink-50/30 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-brand-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max container-spacing relative z-10">
        {/* Modern Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-brand-700 px-4 py-2 rounded-[6px] text-sm font-medium mb-6 shadow-sm border border-brand-100/50">
            <Sparkles className="w-5 h-5" />
            <span className="tracking-wide">{locale === 'mn' ? 'Гол хөтөлбөрүүд' : 'Featured Programs'}</span>
          </div>
          
          <h2 className="heading-2 text-gray-900 mb-4">
            {locale === 'mn' ? 'Онцлох үйл ажиллагаа' : 'Featured Activities'}
          </h2>
          
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            {locale === 'mn'
              ? 'Эмэгтэйчүүдийн хөгжилд чиглэсэн онцлох үйл ажиллагаанууд'
              : 'Featured activities focused on women\'s development and empowerment'
            }
          </p>
        </div>

        {/* Featured Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredActivities.map((activity, index) => (
            <Link key={index} href={`/${locale}/programs/${activity.id}`} className="block">
              <Card className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 cursor-pointer">
              {/* Enhanced Background with Gradient */}
              <div className={`relative ${activity.bgColor} p-6 h-full min-h-[350px] flex flex-col`}>
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
                
                {/* Enhanced Header with Better Icon */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <activity.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <Badge 
                    variant="secondary" 
                    className="text-xs font-semibold px-3 py-1 rounded-full shadow-sm border-0"
                    style={{ 
                      background: `linear-gradient(135deg, ${activity.color.includes('blue') ? '#DBEAFE, #BFDBFE' : 
                                   activity.color.includes('pink') ? '#FCE7F3, #FBCFE8' :
                                   activity.color.includes('purple') ? '#F3E8FF, #E9D5FF' : 
                                   activity.color.includes('green') ? '#D1FAE5, #A7F3D0' :
                                   activity.color.includes('orange') ? '#FED7AA, #FDBA74' :
                                   activity.color.includes('rose') ? '#FCE7F3, #FBCFE8' :
                                   activity.color.includes('red') ? '#FEE2E2, #FECACA' :
                                   activity.color.includes('yellow') ? '#FEF3C7, #FDE68A' :
                                   activity.color.includes('indigo') ? '#E0E7FF, #C7D2FE' :
                                   activity.color.includes('teal') ? '#CCFBF1, #99F6E4' :
                                   activity.color.includes('emerald') ? '#D1FAE5, #A7F3D0' :
                                   activity.color.includes('cyan') ? '#CFFAFE, #A5F3FC' :
                                   activity.color.includes('amber') ? '#FEF3C7, #FDE68A' :
                                   activity.color.includes('lime') ? '#ECFCCB, #D9F99D' :
                                   activity.color.includes('violet') ? '#F3E8FF, #E9D5FF' :
                                   activity.color.includes('sky') ? '#E0F2FE, #BAE6FD' :
                                   activity.color.includes('slate') ? '#F1F5F9, #E2E8F0' : '#D1FAE5, #A7F3D0'})`,
                      color: activity.color.includes('blue') ? '#1E40AF' : 
                             activity.color.includes('pink') ? '#BE185D' :
                             activity.color.includes('purple') ? '#7C3AED' : 
                             activity.color.includes('green') ? '#059669' :
                             activity.color.includes('orange') ? '#EA580C' :
                             activity.color.includes('rose') ? '#BE185D' :
                             activity.color.includes('red') ? '#DC2626' :
                             activity.color.includes('yellow') ? '#D97706' :
                             activity.color.includes('indigo') ? '#4338CA' :
                             activity.color.includes('teal') ? '#0D9488' :
                             activity.color.includes('emerald') ? '#059669' :
                             activity.color.includes('cyan') ? '#0891B2' :
                             activity.color.includes('amber') ? '#D97706' :
                             activity.color.includes('lime') ? '#65A30D' :
                             activity.color.includes('violet') ? '#7C3AED' :
                             activity.color.includes('sky') ? '#0284C7' :
                             activity.color.includes('slate') ? '#475569' : '#059669'
                    }}
                  >
                    {activity.category}
                  </Badge>
                </div>
                
                {/* Enhanced Content */}
                <div className="flex-1 flex flex-col">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3 leading-tight font-display">
                    {activity.title}
                </CardTitle>
                
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">
                    {activity.description}
                  </p>
                
                  {/* Enhanced Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{activity.participants}</div>
                      <div className="text-xs">{locale === 'mn' ? 'Оролцогч' : 'Participants'}</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{activity.duration}</div>
                      <div className="text-xs">{locale === 'mn' ? 'Хугацаа' : 'Duration'}</div>
                  </div>
                </div>
                
                  {/* Enhanced CTA Button */}
                <Button 
                  variant="outline" 
                      className="w-full bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-sm border-2 border-gray-200 hover:border-brand-400 hover:bg-gradient-to-r hover:from-brand-50 hover:to-brand-100 text-gray-700 hover:text-brand-700 font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <span className="flex items-center justify-center">
                    {locale === 'mn' ? 'Дэлгэрэнгүй' : 'Learn More'}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
                </div>
              </div>

              {/* Subtle Border Glow on Hover - Fixed to not interfere with content */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
            </Link>
          ))}
        </div>

        {/* Major Section Separator */}
        <div className="my-24">
          <div className="flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <div className="mx-12 px-8 py-4 bg-gradient-to-r from-brand-50 via-purple-50 to-blue-50 rounded-2xl border border-brand-200 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>
        </div>

        {/* Training Programs Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-display">
              {locale === 'mn' ? 'ДАРХАНЫ БҮСГҮЙЧҮҮД СУРГАЛТЫН ТӨВ' : 'DARKHAN WOMEN\'S TRAINING CENTER'}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'mn' 
                ? 'Эмэгтэйчүүдийн мэргэжлийн болон хувь хөгжлийн сургалтуудыг зохион байгуулдаг төв'
                : 'Center organizing professional and personal development training programs for women'
              }
            </p>
          </div>
        </div>

        {/* Professional Training Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 rounded-full mb-6 border border-blue-200">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-blue-700 font-semibold text-sm">
                {locale === 'mn' ? 'МЭРГЭЖИЛ ОЛГОХ' : 'PROFESSIONAL CERTIFICATION'}
              </span>
            </div>
            <h4 className="text-3xl font-bold text-gray-900 mb-4 font-display">
              {locale === 'mn' ? 'Мэргэжил олгох сургалт' : 'Professional Training'}
            </h4>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {locale === 'mn' 
                ? 'Мэргэжлийн үнэмлэх олгох сургалтууд. Ажлын байр эзэмшихэд шаардлагатай мэргэжлийн ур чадвар, сертификат олгох.'
                : 'Professional certification training programs that provide essential skills and certificates for career advancement and employment opportunities.'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {professionalTraining.map((program, index) => (
              <Card key={index} className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0">
                <div className={`relative ${program.bgColor} p-6 h-full min-h-[350px] flex flex-col`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <program.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <Badge 
                      variant="secondary" 
                      className="text-xs font-semibold px-3 py-1 rounded-full shadow-sm border-0"
                      style={{ 
                        background: `linear-gradient(135deg, ${program.color.includes('rose') ? '#FCE7F3, #FBCFE8' : 
                                     program.color.includes('purple') ? '#F3E8FF, #E9D5FF' : '#FEF3C7, #FDE68A'})`,
                        color: program.color.includes('rose') ? '#BE185D' : 
                               program.color.includes('purple') ? '#7C3AED' : '#D97706'
                      }}
                    >
                      {program.category}
                    </Badge>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-3 leading-tight font-display">
                      {program.title}
                    </CardTitle>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">
                      {program.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="text-center">
                        <div className="font-bold text-gray-900">{program.participants}</div>
                        <div className="text-xs">{locale === 'mn' ? 'Оролцогч' : 'Participants'}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900">{program.duration}</div>
                        <div className="text-xs">{locale === 'mn' ? 'Хугацаа' : 'Duration'}</div>
                      </div>
                    </div>
                    
                    <Link href={`/${locale}/programs/${program.id}`}>
                      <Button 
                        variant="outline" 
                        className="w-full bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-sm border-2 border-gray-200 hover:border-brand-400 hover:bg-gradient-to-r hover:from-brand-50 hover:to-brand-100 text-gray-700 hover:text-brand-700 font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                      >
                        <span className="flex items-center justify-center">
                          {locale === 'mn' ? 'Дэлгэрэнгүй' : 'Learn More'}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Visual Separator */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="mx-8 px-6 py-3 bg-gradient-to-r from-brand-50 to-purple-50 rounded-full border border-brand-200">
            <span className="text-sm font-semibold text-gray-600">
              {locale === 'mn' ? 'Мөн' : 'AND'}
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Development Training Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-3 rounded-full mb-6 border border-green-200">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-700 font-semibold text-sm">
                {locale === 'mn' ? 'ХӨГЖҮҮЛЭХ' : 'PERSONAL DEVELOPMENT'}
              </span>
            </div>
            <h4 className="text-3xl font-bold text-gray-900 mb-4 font-display">
              {locale === 'mn' ? 'Хөгжүүлэх сургалт' : 'Development Training'}
            </h4>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {locale === 'mn' 
                ? 'Хувь хөгжил, ур чадвар, мэдлэг олгох сургалтууд. Хувь хүний хөгжил, ур чадвар дээшлүүлэх, шинэ мэдлэг олгох.'
                : 'Personal development, skills enhancement, and knowledge training programs that focus on individual growth, skill building, and acquiring new knowledge.'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {developmentTraining.map((program, index) => (
              <Card key={index} className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0">
                <div className={`relative ${program.bgColor} p-6 h-full min-h-[350px] flex flex-col`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <program.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <Badge 
                      variant="secondary" 
                      className="text-xs font-semibold px-3 py-1 rounded-full shadow-sm border-0"
                      style={{ 
                        background: `linear-gradient(135deg, ${program.color.includes('indigo') ? '#E0E7FF, #C7D2FE' : 
                                     program.color.includes('blue') ? '#DBEAFE, #BFDBFE' :
                                     program.color.includes('emerald') ? '#D1FAE5, #A7F3D0' :
                                     program.color.includes('pink') ? '#FCE7F3, #FBCFE8' : '#CCFBF1, #99F6E4'})`,
                        color: program.color.includes('indigo') ? '#4338CA' : 
                               program.color.includes('blue') ? '#1E40AF' :
                               program.color.includes('emerald') ? '#059669' :
                               program.color.includes('pink') ? '#BE185D' : '#0D9488'
                      }}
                    >
                      {program.category}
                    </Badge>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-3 leading-tight font-display">
                      {program.title}
                    </CardTitle>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">
                      {program.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="text-center">
                        <div className="font-bold text-gray-900">{program.participants}</div>
                        <div className="text-xs">{locale === 'mn' ? 'Оролцогч' : 'Participants'}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900">{program.duration}</div>
                        <div className="text-xs">{locale === 'mn' ? 'Хугацаа' : 'Duration'}</div>
                      </div>
                    </div>
                    
                    <Link href={`/${locale}/programs/${program.id}`}>
                      <Button 
                        variant="outline" 
                        className="w-full bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-sm border-2 border-gray-200 hover:border-brand-400 hover:bg-gradient-to-r hover:from-brand-50 hover:to-brand-100 text-gray-700 hover:text-brand-700 font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                      >
                        <span className="flex items-center justify-center">
                          {locale === 'mn' ? 'Дэлгэрэнгүй' : 'Learn More'}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <Link href={`/${locale}/programs`}>
          <Button 
            size="lg" 
              className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold px-12 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group border-0"
          >
            <span className="flex items-center">
              {locale === 'mn' ? 'Бүх хөтөлбөрүүдийг харах' : 'View All Programs'}
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}