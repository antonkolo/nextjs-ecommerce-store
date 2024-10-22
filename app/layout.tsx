import './globals.scss';
import { Inter, Rubik_Scribble } from 'next/font/google';
import { type ReactNode } from 'react';
import Header from './components/Header';

// Font files can be colocated inside of `app`
const rubikScribble = Rubik_Scribble({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik-scribble',
  weight: ['400'],
  fallback: ['serif'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['sans-serif'],
});

export const metadata = {
  title: 'CRATE',
  description: 'Fresh Vinyl',
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={`${inter.variable} ${rubikScribble.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
