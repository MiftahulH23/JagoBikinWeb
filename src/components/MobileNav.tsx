"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

// Definisikan item navigasi kita
const navItems = [
  { name: "Layanan", href: "#services" },
  { name: "Portofolio", href: "#portfolio" },
  // Tambahkan section lain jika ada
];

const whatsappLink =
  "https://wa.me/6282252209655?text=Halo%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20Anda.";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Varian animasi (diambil dari referensi)
  const menuVariants: Variants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants: Variants = {
    open: { y: 0, opacity: 1, transition: { type: "spring" } },
    closed: { y: 20, opacity: 0 },
  };

  if (!isMounted) {
    return null; // Jangan render apapun di server untuk hindari hydration error
  }

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={toggleMenu}
        className="flex items-center gap-2 rounded-full p-2 border bg-background/80 backdrop-blur-sm"
      >
        <Menu className="h-5 w-5 text-foreground" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-full right-0 mt-2 w-56 origin-top-right rounded-xl border bg-popover p-2 shadow-lg"
          >
            {navItems.map((item) => (
              <motion.li key={item.name} variants={itemVariants}>
                <Link
                  href={item.href}
                  onClick={toggleMenu}
                  className="block w-full p-2 text-md font-semibold text-popover-foreground hover:bg-secondary rounded-md"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}

            {/* Link WA terpisah */}
            <motion.li variants={itemVariants}>
              <Link
                href={whatsappLink}
                target="_blank"
                onClick={toggleMenu}
                className="block w-full p-2 text-md font-semibold text-popover-foreground hover:bg-secondary rounded-md"
              >
                Hubungi Kami
              </Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
