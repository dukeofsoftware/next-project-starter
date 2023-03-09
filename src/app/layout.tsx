import '@/styles/reset.css';
import '@/styles/globals.css';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Title',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
