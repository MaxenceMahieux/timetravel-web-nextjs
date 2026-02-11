"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToDestinations = () => {
    document
      .getElementById("destinations")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0a1628]">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          poster="/assets/images/Paris.png"
        >
          <source src="/assets/videos/Paris.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-[#0a1628]/40 to-[#0a1628]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/80 via-transparent to-[#0a1628]/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a962]/20 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a962]/20 to-transparent" />

        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-16 h-16 md:w-24 md:h-24 border-l border-t border-[#c9a962]/30" />
        <div className="absolute top-8 right-8 w-16 h-16 md:w-24 md:h-24 border-r border-t border-[#c9a962]/30" />
        <div className="absolute bottom-8 left-8 w-16 h-16 md:w-24 md:h-24 border-l border-b border-[#c9a962]/30" />
        <div className="absolute bottom-8 right-8 w-16 h-16 md:w-24 md:h-24 border-r border-b border-[#c9a962]/30" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 md:px-8 max-w-5xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
      >
        {/* Eyebrow */}
        <motion.div variants={fadeInUp} className="mb-6 md:mb-8">
          <span className="inline-flex items-center gap-3 text-[#c9a962] text-xs md:text-sm tracking-[0.3em] uppercase font-body">
            <span className="w-8 md:w-12 h-px bg-[#c9a962]" />
            Agence de voyage temporel
            <span className="w-8 md:w-12 h-px bg-[#c9a962]" />
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={fadeInUp}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white mb-6 md:mb-8 tracking-tight leading-[0.9]"
        >
          <span className="block">Time</span>
          <span className="block text-gradient">Travel</span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white/80 mt-2">
            Interactive
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div variants={fadeInUp} className="flex justify-center mb-6 md:mb-8">
          <div className="w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[#c9a962] to-transparent" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="font-body text-base sm:text-lg md:text-xl text-white/70 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Explorez les époques les plus fascinantes de l&apos;histoire humaine.
          <span className="hidden sm:inline"><br /></span>{" "}
          Paris 1889, le Crétacé, la Renaissance florentine — choisissez votre aventure.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              onClick={scrollToDestinations}
              className="w-full sm:w-auto bg-[#c9a962] hover:bg-[#a68b4b] text-[#0a1628] font-body font-medium px-8 md:px-10 py-6 md:py-7 text-sm md:text-base tracking-wide rounded-none transition-all duration-300"
            >
              Découvrir les destinations
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-[#c9a962]/60 text-xs tracking-[0.2em] uppercase font-body">
          Explorer
        </span>
        <motion.div
          className="w-px h-12 md:h-16 bg-gradient-to-b from-[#c9a962]/60 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
