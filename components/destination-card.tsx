"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Destination } from "@/lib/data/destinations";

interface DestinationCardProps {
  destination: Destination;
  index: number;
}

export function DestinationCard({ destination, index }: DestinationCardProps) {
  return (
    <div
      className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Background image placeholder with gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${destination.color} transition-transform duration-500 group-hover:scale-110`}
      >
        {/* Pattern overlay for visual interest */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {/* Year badge */}
        <Badge
          variant="secondary"
          className="w-fit mb-3 bg-white/20 backdrop-blur-sm text-white border-white/30"
        >
          {destination.year}
        </Badge>

        {/* Title */}
        <h3 className="text-3xl font-bold text-white mb-2">
          {destination.name}
        </h3>

        {/* Era */}
        <p className="text-white/80 text-sm font-medium mb-3">
          {destination.era}
        </p>

        {/* Description - visible on hover */}
        <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100">
          <p className="text-white/90 text-sm mb-4 leading-relaxed">
            {destination.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-4">
            {destination.highlights.slice(0, 3).map((highlight) => (
              <span
                key={highlight}
                className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Button
          variant="secondary"
          className="w-full mt-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
        >
          Découvrir cette époque
        </Button>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-lg transition-all duration-300 group-hover:w-16 group-hover:h-16" />
    </div>
  );
}
