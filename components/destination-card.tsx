"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
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
    <motion.div
      className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
      variants={fadeInUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Video background */}
      <motion.video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={destination.video}
        muted
        loop
        playsInline
        preload="metadata"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Gradient overlay for better text readability */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${destination.color}`}
        initial={{ opacity: 0.4 }}
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {/* Year badge */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          <Badge
            variant="secondary"
            className="w-fit mb-3 bg-white/20 backdrop-blur-sm text-white border-white/30"
          >
            {destination.year}
          </Badge>
        </motion.div>

        {/* Title */}
        <motion.h3
          className="text-3xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {destination.name}
        </motion.h3>

        {/* Era */}
        <motion.p
          className="text-white/80 text-sm font-medium mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          {destination.era}
        </motion.p>

        {/* Description - visible on hover */}
        <motion.div
          className="overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          whileHover={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white/90 text-sm mb-4 leading-relaxed">
            {destination.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-4">
            {destination.highlights.slice(0, 3).map((highlight, i) => (
              <motion.span
                key={highlight}
                className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                {highlight}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="secondary"
              className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
            >
              Découvrir cette époque
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative corner */}
      <motion.div
        className="absolute top-4 right-4 border-t-2 border-r-2 border-white/30 rounded-tr-lg"
        initial={{ width: 48, height: 48 }}
        whileHover={{ width: 64, height: 64 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
