import type { Metadata } from "next";
import "@/styles/globals.css";
import { onest } from '@/styles/fonts'
import NavBar from '@/components/ui/NavBar'
import Footer from '@/components/ui/Footer'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: "Kami Hub",
  description: "Discover and Explore Your Favorite Anime",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='text-text bg-background transition-colors' suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={onest.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
