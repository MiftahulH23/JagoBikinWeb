"use client";

import { useState } from "react";
import { Button } from "./ui/button";
// 1. Impor SheetHeader dan SheetTitle
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu, Github, Linkedin, Instagram } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";


const whatsappLink =
  "https://wa.me/6282252209655?text=Halo%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20Anda.";


export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // ... (kode handleLinkClick tetap sama) ...
  const handleLinkClick = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden rounded-full">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs bg-background border-border">
        {/* 2. Tambahkan Judul yang Disembunyikan di sini */}
        <SheetHeader>
          <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col justify-between h-full py-10">
          <div className="flex flex-col items-start gap-8 px-4">
            <div className="text-2xl font-bold text-foreground mb-4">
              JagoBikinWeb
            </div>
            <nav className="flex flex-col items-start gap-6">
              <a href="#services" onClick={handleLinkClick} className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                Layanan
              </a>
              <a href="#portfolio" onClick={handleLinkClick} className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                Portofolio
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                onClick={handleLinkClick} 
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                Hubungi Kami
              </a>
            </nav>
          </div>
          
          <div className="flex flex-col items-center gap-6 px-4">
            <ThemeToggle />
            <div className="flex items-center justify-center gap-6">
              <a href="#" target="_blank" className="text-neutral-400 hover:text-white"><Github size={24} /></a>
              <a href="#" target="_blank" className="text-neutral-400 hover:text-white"><Linkedin size={24} /></a>
              <a href="#" target="_blank" className="text-neutral-400 hover:text-white"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}