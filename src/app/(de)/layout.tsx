import type { ReactNode } from 'react';
import { themeInitializationScript } from '@/lib/theme';
import { getPageMetadata } from '@/lib/localization';
import '../globals.css';
export const metadata = getPageMetadata('de');
export default function RootLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
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
