"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link"; // <-- 1. Impor Link dari Next.js

// 2. Simpan link WhatsApp di variabel biar rapi
const whatsappLink =
  "https://wa.me/6282252209655?text=Halo%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20Anda.";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-4 z-50 flex w-full items-center justify-between max-w-4xl mx-auto px-4 py-2 bg-background/80 backdrop-blur-sm border rounded-full"
    >
      <div className="text-xl font-bold text-foreground">JagoBikinWeb</div>

      <div className="hidden md:flex items-center gap-4">
        <ThemeToggle />
        <a
          href="#services"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          Layanan
        </a>
        <a
          href="#portfolio"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          Portofolio
        </a>
        {/* 3. Bungkus Button dengan Link */}
        <Button size="sm" className="rounded-full cursor-pointer" asChild>
          <Link href={whatsappLink} target="_blank">
            Hubungi Kami
          </Link>
        </Button>
      </div>

      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <MobileNav />
      </div>
    </motion.nav>
  );
}
