"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorFollower = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Konfigurasi efek 'pegas' untuk gerakan yang smooth
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Fungsi untuk update posisi kursor
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    // Menambahkan listener untuk efek hover pada elemen yang bisa di-klik
    // Kita cari semua elemen yang punya class 'cursor-pointer'
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll(".cursor-pointer");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup listener saat komponen di-unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  // Variasi animasi untuk state default dan saat hover
  const variants = {
    default: {
      height: 20,
      width: 20,
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      mixBlendMode: "difference" as const, // Efek warna terbalik
    },
    hover: {
      height: 60,
      width: 60,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      mixBlendMode: "difference" as const,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      style={{
        // Kita pakai spring values di sini biar gerakannya smooth
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        // Trik untuk menengahkan div kursornya
        x: "-50%",
        y: "-50%",
      }}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block" // Sembunyikan di mobile
    />
  );
};

export default CursorFollower;
