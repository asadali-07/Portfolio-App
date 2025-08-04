import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisWrapper from "@/components/LenisWrapper";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Asad Ali - Full Stack Developer",
  description: "Portfolio of Asad Ali, a passionate full-stack developer specializing in MERN stack development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisWrapper>
            <ScrollProgress />
            <Navbar />
            {children}
            <Footer />
          </LenisWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}