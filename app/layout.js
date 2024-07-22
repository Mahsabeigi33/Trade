import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
    
      <body >
      <Header />
        <main className="bg-gray-100" >
      
        
        {children}
        </main>
    
        <Footer />
        
      </body>
    </html>
  );
}
