"use client";
// 1. Impor useState dan useEffect
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/button";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { useTheme } from "next-themes";
import Link from "next/link";

const mainHeadline = "Jasa Pembuatan Website Profesional";
const subHeadline =
  "Kami bantu wujudkan website keren untuk bisnis Anda di Pekanbaru. Modern, cepat, dan pastinya, bikin bisnis jadi beken!";
const whatsappLink =
  "https://wa.me/6282252209655?text=Halo%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20Anda.";

export function Hero() {
  const { theme } = useTheme();
  // 2. State untuk melacak apakah komponen sudah 'mounted' di client
  const [isMounted, setIsMounted] = useState(false);

  // 3. useEffect ini hanya akan berjalan sekali di sisi client, setelah render pertama
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-background antialiased bg-grid-black/[0.04] dark:bg-black/[0.96] dark:bg-grid-white/[0.02] relative overflow-hidden">
      {/* 4. Tambahkan kondisi: hanya render Spotlight jika sudah di client */}
      {isMounted && (
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill={theme === "dark" ? "white" : "black"}
        />
      )}

      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <TextGenerateEffect
          words={mainHeadline}
          className="text-center whitespace-pre-line"
          textClassName="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-black dark:from-neutral-50 dark:to-neutral-400"
        />
        <TextGenerateEffect
          words={subHeadline}
          className="mt-4 max-w-lg text-center mx-auto"
          textClassName="font-normal text-base text-muted-foreground"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex justify-center mt-8"
        >
          <Button className="rounded-full text-lg px-8 py-6 cursor-pointer">
            <Link href={whatsappLink} target="_blank">
              Mulai Proyek Anda
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
