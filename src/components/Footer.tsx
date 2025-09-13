import { Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

const whatsappLink =
  "https://wa.me/6282252209655?text=Halo%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20Anda.";

export function Footer() {
  return (
    <footer className="w-full bg-background border-t mt-20 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kolom 1: Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold text-foreground">JagoBikinWeb</h3>
          <p className="text-muted-foreground mt-2 text-sm max-w-xs">
            Membantu bisnis Anda go digital dengan website yang modern dan
            profesional.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a
              href="#"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Kolom 2: Navigasi Cepat */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-semibold text-foreground mb-4">Navigasi Cepat</h4>
          <nav className="flex flex-col gap-3">
            <a
              href="#services"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Layanan
            </a>
            <a
              href="#portfolio"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Portofolio
            </a>
          </nav>
        </div>

        {/* Kolom 3: Kontak */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-semibold text-foreground mb-4">Hubungi Kami</h4>
          <div className="flex flex-col gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="mailto:halo@jagobikinweb.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              halo@jagobikinweb.com
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t">
        <p className="text-center text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} JagoBikinWeb. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
