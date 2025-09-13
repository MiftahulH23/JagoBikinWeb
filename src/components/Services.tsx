"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { services } from "@/lib/data";

const cardVariants: Variants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 from-neutral-800 to-black dark:from-neutral-50 dark:to-neutral-400 bg-clip-text text-transparent bg-gradient-to-b">
          Layanan Unggulan Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              transition={{ delay: index * 0.2 }}
            >
              {/* Ganti warna kartu di sini */}
              <Card className="bg-card border h-full">
                <CardHeader className="flex flex-col items-center text-center">
                  {/* Ganti warna background ikon & warna ikon */}
                  <div className="p-4 bg-muted rounded-full mb-4">
                    <service.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
