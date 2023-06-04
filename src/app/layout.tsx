import './globals.css';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] });

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
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
