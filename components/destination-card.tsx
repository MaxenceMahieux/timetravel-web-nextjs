"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { Destination } from "@/lib/data/destinations";
import { fadeInUp } from "@/lib/motion";

interface DestinationCardProps {
  destination: Destination;
  index: number;
}

export function DestinationCard({ destination, index }: DestinationCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.article
      className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden cursor-pointer"
      variants={fadeInUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        src={destination.video}
        poster={destination.image}
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/20 to-transparent opacity-80" />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
        style={{ backgroundColor: destination.accent }}
      />

      {/* Corner frame */}
      <div className="absolute inset-4 md:inset-6 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-8 md:w-12 h-8 md:h-12 border-l border-t transition-all duration-500 group-hover:w-12 group-hover:md:w-16 group-hover:h-12 group-hover:md:h-16"
          style={{ borderColor: destination.accent }}
        />
        <div
          className="absolute bottom-0 right-0 w-8 md:w-12 h-8 md:h-12 border-r border-b transition-all duration-500 group-hover:w-12 group-hover:md:w-16 group-hover:h-12 group-hover:md:h-16"
          style={{ borderColor: destination.accent }}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        {/* Year badge */}
        <motion.div
          className="absolute top-6 md:top-8 right-6 md:right-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <span
            className="font-serif text-4xl md:text-5xl font-medium opacity-30 group-hover:opacity-50 transition-opacity duration-500"
            style={{ color: destination.accent }}
          >
            {destination.year}
          </span>
        </motion.div>

        {/* Main content */}
        <div className="relative">
          {/* Era tag */}
          <span
            className="inline-block font-body text-xs tracking-[0.2em] uppercase mb-3 md:mb-4"
            style={{ color: destination.accent }}
          >
            {destination.era}
          </span>

          {/* Title */}
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-3 md:mb-4 tracking-tight">
            {destination.name}
          </h3>

          {/* Divider */}
          <div
            className="w-12 h-px mb-4 md:mb-6 transition-all duration-500 group-hover:w-20"
            style={{ backgroundColor: destination.accent }}
          />

          {/* Description - visible on hover */}
          <div className="overflow-hidden">
            <p className="font-body text-sm md:text-base text-white/70 leading-relaxed mb-6 max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 transition-all duration-500">
              {destination.longDescription}
            </p>
          </div>

          {/* Highlights - visible on hover */}
          <div className="flex flex-wrap gap-2 mb-6 max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
            {destination.highlights.slice(0, 3).map((highlight) => (
              <span
                key={highlight}
                className="font-body text-xs px-3 py-1 border border-white/20 text-white/60"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
