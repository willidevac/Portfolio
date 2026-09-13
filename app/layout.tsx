import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Jayanath Willi Kasberg | IT-Portfolio',
 description: 'Webanwendungen, JavaScript und browserbasierte Spiele. Das IT-Portfolio von Jayanath Willi Kasberg aus Berlin – Studienziel: duale Informatik 2027.',
 robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
 return <html lang="de"><body>{children}</body></html>;
}
