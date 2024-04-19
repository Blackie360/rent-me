import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
// import CookieBannerPage from "../../src/components/CookieBanner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "e-ticko | Events & Tickets made easy",
  description: "The best event & ticket platform in town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
  {children}
 
</ThemeProvider>
</body>
    </html>
  );
}
