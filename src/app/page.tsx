"use client";

import ParticlesComponent from "@/components/ParticlesComponent";
import SobreMim from "@/components/SobreMim";
import Experiencia from "@/components/Experiencia";
import Tecnologias from "@/components/Tecnologias";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Projetos from "@/components/Projetos";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="min-h-screen min-w-full flex flex-col justify-center items-center">
        <Hero />
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, ease: "easeIn" }}
          viewport={{ once: true }}
          className="min-h-screen z-0 w-4/5 drop-shadow-2xl p-16 rounded-lg bg-[#fcfcfc] flex flex-col my-8"
        >
          <SobreMim />
          <Experiencia />
          <Tecnologias />
          <Projetos />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
