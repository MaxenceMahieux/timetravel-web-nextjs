"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const stats = [
  { value: "3", label: "Époques uniques", suffix: "" },
  { value: "2089", label: "Année de fondation", suffix: "" },
  { value: "100", label: "Immersion garantie", suffix: "%" },
];

const features = [
  {
    title: "Portail Quantique",
    description:
      "Notre technologie exclusive permet des voyages temporels sûrs et précis, validée par l'Académie des Sciences Temporelles.",
    number: "01",
  },
  {
    title: "Guides Historiens",
    description:
      "Chaque voyage est accompagné par des experts passionnés, historiens et scientifiques reconnus dans leur domaine.",
    number: "02",
  },
  {
    title: "Sur Mesure",
    description:
      "Votre expérience est personnalisée selon vos centres d'intérêt pour une immersion totale et mémorable.",
    number: "03",
  },
];

export function AgencySection() {
  return (
    <section className="py-20 md:py-32 bg-[#f8f6f1] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#c9a962]/40 to-transparent" />
        <div className="absolute top-20 left-8 md:left-16 w-32 h-32 border border-[#c9a962]/10 rounded-full" />
        <div className="absolute bottom-20 right-8 md:right-16 w-48 h-48 border border-[#c9a962]/10 rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-8 max-w-6xl relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-3 text-[#c9a962] text-xs tracking-[0.3em] uppercase font-body mb-6"
          >
            <span className="w-8 h-px bg-[#c9a962]" />
            À propos
            <span className="w-8 h-px bg-[#c9a962]" />
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#0a1628] mb-6 tracking-tight"
          >
            Pionniers du
            <br />
            <span className="text-gradient">voyage temporel</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="font-body text-base md:text-lg text-[#5a6370] max-w-xl mx-auto leading-relaxed"
          >
            Depuis notre fondation, nous repoussons les limites de l&apos;exploration
            historique pour rendre le passé accessible à tous.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center relative"
            >
              {index > 0 && (
                <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-[#d4d0c4]" />
              )}
              <div className="font-serif text-5xl md:text-6xl font-medium text-[#0a1628] mb-2">
                {stat.value}
                <span className="text-[#c9a962]">{stat.suffix}</span>
              </div>
              <div className="font-body text-sm text-[#5a6370] tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="group relative p-6 md:p-8"
            >
              {/* Number */}
              <span className="font-serif text-6xl md:text-7xl font-medium text-[#c9a962]/10 absolute top-0 right-4 md:right-8 leading-none group-hover:text-[#c9a962]/20 transition-colors duration-500">
                {feature.number}
              </span>

              {/* Content */}
              <div className="relative">
                <div className="w-8 h-px bg-[#c9a962] mb-6" />
                <h3 className="font-serif text-xl md:text-2xl font-medium text-[#0a1628] mb-4">
                  {feature.title}
                </h3>
                <p className="font-body text-sm md:text-base text-[#5a6370] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#c9a962]/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
