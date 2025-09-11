import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return [
    { locale: 'mn' },
    { locale: 'en' }
  ];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'mn' 
      ? 'Дархан-Уул аймгийн эмэгтэйчүүдийн холбоо'
      : 'Darkhan-Uul Province Women\'s Federation',
    description: locale === 'mn'
      ? 'Эмэгтэйчүүдийн эрх, хөгжил, хүчирхэгжилд зориулсан'
      : 'Empowering women\'s rights, development, and leadership',
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <div className={inter.className} data-locale={locale}>
      {children}
    </div>
  );
}
