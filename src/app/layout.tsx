import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: 'Mutli step form',
  description: 'Project for practice',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} text-neutral-cool-gray`}>
        {children}
      </body>
    </html>
  );
}
