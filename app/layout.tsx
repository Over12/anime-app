import type { Metadata } from "next";
import "@/styles/globals.css";
import { onest } from '@/styles/fonts'
import NavBar from '@/components/ui/NavBar'
import Footer from '@/components/ui/Footer'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: "Anime App",
  description: "A simple anime app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='text-text bg-background transition-colors' suppressHydrationWarning>
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
