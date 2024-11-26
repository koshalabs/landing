import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: "Kosha - Redefining Creative Collaboration for Brands and Creators",
  description: "Discover Kosha: the future of creative collaboration. Empower your brand with smart contract royalties, effortless licensing, and access to top creative talent. Simplify projects, grow faster, and transform fans into collaborators. Post project briefs or submit ideas and work directly with independent creators on Kosha.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <Toaster 
            containerClassName="toaster"
            position="top-center"
            containerStyle={{
              top: 100,
            }}
            toastOptions={{
              icon: null,
              style: {
                borderRadius: '360px',
                padding: '7px 6px',
              },
              success: {
                style: {
                  background: '#00B62E',
                  maxWidth: "none",
                },
              },
              error: {
                style: {
                  background: '#E03D19',
                  maxWidth: "none",
                },
              },
            }}
          />
        {children}
      </body>
    </html>
  );
}