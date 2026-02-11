"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

const stats = [
  { value: "3", label: "Époques", icon: "🕰️" },
  { value: "∞", label: "Possibilités", icon: "✨" },
  { value: "100%", label: "Immersif", icon: "🎭" },
];

const features = [
  {
    title: "Technologie quantique",
    description:
      "Notre portail temporel utilise les dernières avancées en physique quantique pour des voyages sûrs et précis.",
    icon: "⚛️",
  },
  {
    title: "Guides experts",
    description:
      "Accompagnés par des historiens et scientifiques, vivez chaque époque avec une authenticité incomparable.",
    icon: "🎓",
  },
  {
    title: "Expérience sur mesure",
    description:
      "Chaque voyage est personnalisé selon vos centres d'intérêt pour une immersion totale.",
    icon: "🎯",
  },
];

export function AgencySection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
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
              Notre agence
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Pionniers du voyage temporel
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Depuis 2089, TimeTravel Interactive repousse les limites de
            l&apos;exploration historique. Notre mission : rendre le passé
            accessible à tous.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="text-center p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700"
            >
              <span className="text-4xl mb-4 block">{stat.icon}</span>
              <motion.div
                className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{
                y: -3,
                borderColor: "rgba(147, 51, 234, 0.3)",
                transition: { duration: 0.2 },
              }}
              className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 transition-colors"
            >
              <motion.span
                className="text-3xl mb-4 block"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {feature.icon}
              </motion.span>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
