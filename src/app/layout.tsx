import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import CursorFollower from "@/components/CursorFollower";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google"; // <-- 1. Impor komponennya

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JagoBikinWeb | Jasa Pembuatan Website Profesional di Pekanbaru",
  description:
    "Jasa pembuatan website profesional dan murah di Pekanbaru. Kami membantu UMKM dan bisnis Anda go digital dengan desain website modern, cepat, dan SEO-friendly.",
  keywords:
    "jasa pembuatan website, jasa website pekanbaru, website murah, jasa desain web, website umkm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="abcdefg1234567_UVWXYZ" />
      </head>
      <body className={cn("antialiased", poppins.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CursorFollower />
          {children}
        </ThemeProvider>

        {/* 2. Tambahkan komponennya di sini, di atas </body> */}
        <GoogleAnalytics gaId="G-5TYL7G6C6M" />
      </body>
    </html>
  );
}
