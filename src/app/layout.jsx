import { Sacramento, Manrope } from 'next/font/google';
import "./globals.css";

const manrope = Manrope({
  weight: ['400', '600'], // Regular and semi-bold weights for Manrope
  subsets: ['latin'],
  variable: '--font-manrope',
});

const sacramento = Sacramento({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-Sacramento',
});

export const metadata = {
  title: "zestful amigos",
  description: "Generated by sahwaz yaser",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sacramento.variable} ${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
