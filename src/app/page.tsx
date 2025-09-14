import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Workflow } from "@/components/Workflow";
import { Templates } from "@/components/Templates"; // <-- 1. Impor Templates

export default function Home() {
  return (
    <main className="relative flex flex-col items-center overflow-hidden mx-auto sm:px-10 px-5">
      <Navbar />
      <Hero />
      <Services />
      <Workflow />
      <Templates /> {/* <-- 2. Panggil komponennya di sini */}
      <Portfolio />
      <Footer />
    </main>
  );
}