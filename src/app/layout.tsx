import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import CursorFollower from "@/components/CursorFollower";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  // Judul yang akan tampil di tab browser & hasil pencarian Google
  title: "JagoBikinWeb | Jasa Pembuatan Website Profesional di Pekanbaru",
  
  // Deskripsi yang akan tampil di bawah judul di Google
  description: "Jasa pembuatan website profesional dan murah di Pekanbaru. Kami membantu UMKM dan bisnis Anda go digital dengan desain website modern, cepat, dan SEO-friendly.",
  
  // Tambahkan keywords untuk membantu Google memahami isi website lo
  keywords: "jasa pembuatan website, jasa website pekanbaru, website murah, jasa desain web, website umkm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      </body>
    </html>
  );
}
