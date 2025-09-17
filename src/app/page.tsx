import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the Mongolian version of the website by default
  redirect('/mn');
}
