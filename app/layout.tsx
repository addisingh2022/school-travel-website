import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Beyond4Walls | Learning Beyond the Classroom',
  description: 'Curriculum-connected educational journeys and experiential learning programs for schools.',
  metadataBase: new URL('https://beyond4walls.example'),
  openGraph: {
    title: 'Beyond4Walls | Learning Beyond the Classroom',
    description: 'Curriculum-connected educational journeys and experiential learning programs for schools.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-navy">
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
