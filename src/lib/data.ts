// lib/data.ts

import { FaCode, FaPaintBrush, FaRocket } from "react-icons/fa";
import { MessageSquare, LayoutTemplate, Code, Rocket } from "lucide-react";
export const services = [
  {
    icon: FaCode,
    title: "Pengembangan Website",
    description:
      "Membuat website dari nol dengan teknologi modern, cepat, dan aman untuk bisnis Anda.",
  },
  {
    icon: FaPaintBrush,
    title: "Desain UI/UX Modern",
    description:
      "Merancang antarmuka yang tidak hanya indah, tetapi juga intuitif dan mudah digunakan oleh pengunjung.",
  },
  {
    icon: FaRocket,
    title: "Optimasi SEO & Performa",
    description:
      "Memastikan website Anda tidak hanya cepat, tapi juga mudah ditemukan di halaman pencarian Google.",
  },
];

export const portfolio = [
  {
    id: 1,
    title: "Studi Kasus: Sistem Informasi Prestasi Mahasiswa/Siswa",
    description:
      "Sistem informasi terintegrasi untuk mengelola dan mendokumentasikan prestasi mahasiswa, mulai dari pengajuan proposal lomba hingga pencatatan pencapaian.",
    tech: ["Laravel", "ReactJS", "PHP", "MySQL", "Tailwind CSS"],
    imageUrl: "/projects/sipresma.png", // Ganti dengan path gambar Anda nanti
    link: "#",
  },
  {
    id: 2,
    title: "Studi Kasus: Sistem Lembaga Pengelola Sampah (LPS)",
    description:
      "Aplikasi berbasis web untuk membantu LPS dalam manajemen data warga, iuran bulanan, dan pencatatan pengambilan sampah",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    imageUrl: "/projects/lps.jpg", // Ganti dengan path gambar Anda nanti
    link: "#",
  },
  {
    id: 3,
    title: "Studi Kasus: Company Profile Website",
    description:
      "Website profil perusahaan yang menampilkan informasi tentang layanan, portofolio, dan kontak perusahaan secara profesional.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/projects/company.png", // Ganti dengan path gambar Anda nanti
    link: "#",
  }
];

export const workflowSteps = [
  {
    icon: MessageSquare,
    title: "01. Diskusi & Konsultasi",
    description:
      "Kita mulai dengan ngobrol santai untuk memahami visi, tujuan, dan kebutuhan spesifik dari website yang Anda impikan.",
  },
  {
    icon: LayoutTemplate,
    title: "02. Desain & Prototyping",
    description:
      "Saya akan merancang wireframe dan desain visual (UI/UX) yang modern dan intuitif, lalu kita review bersama sampai cocok.",
  },
  {
    icon: Code,
    title: "03. Pengembangan",
    description:
      "Setelah desain disetujui, proses coding dimulai. Saya akan mengubah desain statis menjadi website yang fungsional dan responsif.",
  },
  {
    icon: Rocket,
    title: "04. Peluncuran & Support",
    description:
      "Website siap diluncurkan! Saya akan bantu proses deployment dan memberikan support awal untuk memastikan semuanya berjalan lancar.",
  },
];
