import { z } from "zod";

export const DestinationSchema = z.object({
  id: z.string(),
  name: z.string(),
  era: z.string(),
  year: z.string(),
  description: z.string(),
  highlights: z.array(z.string()),
  image: z.string(),
  video: z.string(),
  color: z.string(),
});

export type Destination = z.infer<typeof DestinationSchema>;

const destinationsData = [
  {
    id: "paris-1889",
    name: "Paris 1889",
    era: "Belle Époque",
    year: "1889",
    description:
      "Vivez l'inauguration de la Tour Eiffel et l'effervescence de l'Exposition Universelle. Découvrez le Paris des impressionnistes et des grands boulevards.",
    highlights: [
      "Inauguration de la Tour Eiffel",
      "Exposition Universelle",
      "Cafés de Montmartre",
      "Galerie des Machines",
    ],
    image: "/assets/paris-1889.jpg",
    video: "/assets/videos/Paris.mp4",
    color: "from-amber-500/80 to-yellow-600/80",
  },
  {
    id: "cretaceous",
    name: "Crétacé",
    era: "Ère Mésozoïque",
    year: "-66 000 000",
    description:
      "Explorez la Terre à l'époque des dinosaures. Observez le T-Rex dans son habitat naturel et découvrez un monde luxuriant dominé par les géants.",
    highlights: [
      "Tyrannosaurus Rex",
      "Forêts préhistoriques",
      "Ptéranodons en vol",
      "Volcans actifs",
    ],
    image: "/assets/cretaceous.jpg",
    video: "/assets/videos/Cretaceous.mp4",
    color: "from-emerald-600/80 to-green-700/80",
  },
  {
    id: "florence-1504",
    name: "Florence 1504",
    era: "Renaissance",
    year: "1504",
    description:
      "Assistez à l'apogée de la Renaissance italienne. Rencontrez Michel-Ange, admirez le David fraîchement achevé et flânez dans les ateliers des maîtres.",
    highlights: [
      "Atelier de Michel-Ange",
      "Dévoilement du David",
      "Palazzo Vecchio",
      "Bottega de Léonard",
    ],
    image: "/assets/florence-1504.jpg",
    video: "/assets/videos/Florence.mp4",
    color: "from-red-700/80 to-orange-600/80",
  },
];

export const destinations = z.array(DestinationSchema).parse(destinationsData);
