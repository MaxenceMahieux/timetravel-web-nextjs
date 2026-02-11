"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { destinations } from "@/lib/data/destinations";
import { DestinationCard } from "./destination-card";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function DestinationsGallery() {
  return (
    <section id="destinations" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-1 text-sm bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
            >
              Destinations
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Choisissez votre époque
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Trois voyages extraordinaires vous attendent. Chaque destination a
            été soigneusement préparée pour vous offrir une expérience
            inoubliable.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
      </div>
    </section>
  );
}
