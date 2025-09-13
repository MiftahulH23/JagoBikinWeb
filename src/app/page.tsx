import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Workflow } from "@/components/Workflow"; // <-- 1. Impor Workflow

export default function Home() {
  return (
    <main className="relative flex flex-col items-center overflow-hidden mx-auto sm:px-10 px-5">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Workflow /> 
      <Footer />
    </main>
  );
}