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
  },
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
export const templates = [
  {
    id: 1,
    title: "Template Company Profile 'Eleganza'",
    description:
      "Desain modern dan profesional untuk menampilkan citra perusahaan Anda. Lengkap dengan section hero, tentang kami, layanan, dan kontak.",
    // Gambar dari Unsplash, lo bisa ganti nanti
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
    link: "https://eleganza-template.vercel.app", // Nanti kita ganti dengan link ke halaman demonya
  },
  {
    id: 2,
    title: "Template Coffee Shop 'Kopi Senja'",
    description: "Template yang dirancang khusus untuk bisnis F&B. Tampilkan menu, galeri, dengan desain yang modern.",
    imageUrl: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwc2hvcHxlbnwwfDB8MHx8fDA%3D",
    link: "https://coffee-shop-template-jbw.vercel.app/",
  },
];
