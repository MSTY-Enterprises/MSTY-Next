import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import Nav from "./_section/Nav";
import Footer from "./_section/Footer";
import { BlogProvider } from "@/hooks/BlogContext";
import WhatsAppbutton from "./_section/WhatsAppbutton";
import { NeedsProvider } from "@/hooks/NeedsContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17000850069"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17000850069');
          `}
        </script>
        
      </head>
      <body className={`${inter.className} antialiased relative`}>
        <WhatsAppbutton />
        <BlogProvider>
        <NeedsProvider>
          <Nav />
          {children}
          <Footer />
        </NeedsProvider>
        </BlogProvider>
      </body>
    </html>
  );
}
