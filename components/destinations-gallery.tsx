"use client";

import { motion } from "framer-motion";
import { destinations } from "@/lib/data/destinations";
import { DestinationCard } from "./destination-card";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useChatContext } from "@/lib/chat-context";

export function DestinationsGallery() {
  const { openChat } = useChatContext();
  return (
    <section id="destinations" className="py-20 md:py-32 bg-[#0a1628] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#c9a962]/40 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-[#c9a962]/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
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
            Destinations
            <span className="w-8 h-px bg-[#c9a962]" />
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-6 tracking-tight"
          >
            Choisissez votre
            <br />
            <span className="text-gradient">époque</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="font-body text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed"
          >
            Trois voyages extraordinaires, trois expériences uniques.
            Chaque destination a été minutieusement préparée pour vous.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-body text-sm text-white/40 mb-4">
            Vous ne savez pas quelle destination choisir ?
          </p>
          <button
            onClick={openChat}
            className="font-body text-[#c9a962] text-sm tracking-wide cursor-pointer hover:text-[#e4d4a5] transition-colors"
          >
            Discutez avec notre assistant →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
