import '../globals.css';

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
 
      <body className="bg-gray-100">
        <main>
          {children}
        </main>
        
      </body>
    </html>
  );
}
