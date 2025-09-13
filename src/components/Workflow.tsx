"use client";
import React from "react";
import { motion } from "framer-motion";
import { workflowSteps } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

// Variants untuk animasi list container
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Efek domino, setiap item muncul dengan jeda 0.2s
    },
  },
};

// Variants untuk animasi setiap item
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function Workflow() {
  return (
    <section id="workflow" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 from-neutral-800 to-black dark:from-neutral-50 dark:to-neutral-400 bg-clip-text text-transparent bg-gradient-to-b">
          Bagaimana Prosesnya?
        </h2>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {workflowSteps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-card border h-full text-center md:text-left">
                <CardHeader>
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-muted rounded-full">
                        <step.icon className="w-6 h-6 text-foreground" />
                      </div>
                      <span className="text-4xl font-bold text-muted-foreground">
                        {step.title.split(".")[0]}
                      </span>
                    </div>
                    <CardTitle className="mt-4">
                      {step.title.split(".")[1].trim()}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
