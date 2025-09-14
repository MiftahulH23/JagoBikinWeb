"use client";
import React from "react";
import { motion } from "framer-motion";
import { templates } from "@/lib/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

// Impor Link dari next/link tidak wajib untuk link eksternal,
// tapi kita bisa pakai <a> biasa
// import Link from "next/link";

export function Templates() {
  return (
    <section id="templates" className="py-20 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 from-neutral-800 to-black dark:from-neutral-50 dark:to-neutral-400 bg-clip-text text-transparent bg-gradient-to-b">
          Galeri Template Siap Pakai
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Butuh website cepat tanpa mengorbankan kualitas? Pilih salah satu
          template profesional kami yang bisa disesuaikan dengan brand Anda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-card border h-full flex flex-col overflow-hidden">
                <CardHeader>
                  <CardTitle>{template.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="aspect-video w-full rounded-md overflow-hidden relative mb-4">
                    <Image
                      src={template.imageUrl}
                      alt={template.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground">
                    {template.description}
                  </p>
                </CardContent>
                <CardFooter>
                  {/* ===== PERUBAHAN DI SINI ===== */}
                  <Button className="w-full" asChild>
                    <a
                      href={template.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lihat Demo
                    </a>
                  </Button>
                  {/* ============================= */}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
