import type { Metadata } from 'next';
import { themeInitializationScript } from '@/lib/theme';
import './globals.css';
export const metadata: Metadata = {
  title: 'Jayanath Willi Kasberg | IT-Portfolio',
  description:
    'Webanwendungen, JavaScript und browserbasierte Spiele. Das IT-Portfolio von Jayanath Willi Kasberg aus Berlin – Studienziel: duale Informatik 2027.',
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitializationScript }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
