import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the English version of the website by default
  redirect('/en');
}
