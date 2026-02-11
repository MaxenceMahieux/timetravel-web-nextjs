import { z } from "zod";

export const DestinationSchema = z.object({
  id: z.string(),
  name: z.string(),
  era: z.string(),
  year: z.string(),
  description: z.string(),
  longDescription: z.string(),
  highlights: z.array(z.string()),
  image: z.string(),
  video: z.string(),
  accent: z.string(),
});

export type Destination = z.infer<typeof DestinationSchema>;

const destinationsData = [
  {
    id: "paris-1889",
    name: "Paris",
    era: "Belle Époque",
    year: "1889",
    description: "L'inauguration de la Tour Eiffel et l'Exposition Universelle",
    longDescription:
      "Vivez l'effervescence de l'Exposition Universelle et assistez à l'inauguration de la Tour Eiffel. Découvrez le Paris des impressionnistes, flânez sur les grands boulevards et plongez dans l'âge d'or de la capitale française.",
    highlights: [
      "Inauguration Tour Eiffel",
      "Exposition Universelle",
      "Cafés de Montmartre",
      "Galerie des Machines",
    ],
    image: "/assets/images/Paris.png",
    video: "/assets/videos/Paris.mp4",
    accent: "#c9a962",
  },
  {
    id: "cretaceous",
    name: "Crétacé",
    era: "Ère Mésozoïque",
    year: "-66M",
    description: "L'ère des dinosaures dans son apogée",
    longDescription:
      "Explorez la Terre à l'époque des géants. Observez le T-Rex dans son habitat naturel, survolez les forêts préhistoriques aux côtés des Ptéranodons et découvrez un monde luxuriant où règnent les plus grandes créatures de l'histoire.",
    highlights: [
      "Tyrannosaurus Rex",
      "Forêts primaires",
      "Ptéranodons",
      "Volcans actifs",
    ],
    image: "/assets/images/Cretaceous.png",
    video: "/assets/videos/Cretaceous.mp4",
    accent: "#4a7c59",
  },
  {
    id: "florence-1504",
    name: "Florence",
    era: "Renaissance",
    year: "1504",
    description: "L'apogée de la Renaissance italienne",
    longDescription:
      "Assistez au dévoilement du David de Michel-Ange et plongez au cœur de la Renaissance florentine. Visitez les ateliers des plus grands maîtres, rencontrez Léonard de Vinci et découvrez une ville où l'art et le génie humain atteignent leur apogée.",
    highlights: [
      "Atelier Michel-Ange",
      "Dévoilement du David",
      "Palazzo Vecchio",
      "Bottega de Léonard",
    ],
    image: "/assets/images/Florence.png",
    video: "/assets/videos/Florence.mp4",
    accent: "#8b4d3b",
  },
];

export const destinations = z.array(DestinationSchema).parse(destinationsData);
