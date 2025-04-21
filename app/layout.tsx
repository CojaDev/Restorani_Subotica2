import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LightSwitch from '@/components/LightSwitch';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Restorani Subotica',
  description:
    'Otkrijte najbolje ukuse grada uz našu ekskluzivnu selekciju restorana i jelovnika. Vaše gastronomsko putovanje počinje ovde.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head><meta name="google-site-verification" content="PcVXkY3TbcO5DZLopYqYf5uz2Jgk8bEt2-W6E1Fzupw" /></head>
      <body className={inter.className}>
        <div className="main after:dark:invert-0 before:main_bg_white after:dark:opacity-20  bg-white dark:bg-gray-900 sm:dark:bg-gray-950 dark:before:main_bg_black">
          <div className="gradient " />
        </div>
        <main className="app">
          <LightSwitch absolute showOnSmall={false} />
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
