"use client";
import React from "react";
import { portfolio } from "@/lib/data";
import { PinContainer } from "./ui/3d-pin";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 from-neutral-800 to-black dark:from-neutral-50 dark:to-neutral-400 bg-clip-text text-transparent bg-gradient-to-b">
          Karya Terbaik Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {portfolio.map((item) => (
            <div key={item.id} className="w-full">
              <PinContainer title={item.link} href={item.link}>
                {/* Ganti warna teks di sini */}
                <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-card-foreground">
                    {item.title}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-muted-foreground">
                      {item.description}
                    </span>
                  </div>
                  <div
                    className="flex flex-1 w-full rounded-lg mt-4 bg-muted"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
