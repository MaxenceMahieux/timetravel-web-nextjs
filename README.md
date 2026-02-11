# TimeTravel Agency - Webapp Interactive

Webapp pour une agence de voyage temporel fictive, créée avec IA générative.

## 🛠️ Stack Technique
- NextJS + Tailwind CSS
- Shadcn/ui
- Zod
- Hébergement : Vercel
- Modèle IA : Mistral

## ✨ Features
- Landing page interactive
- Galerie de 3 destinations temporelles
- Chatbot IA conversationnel

## 🤖 IA Utilisées
- Code : Bolt.new (Claude 3.5 Sonnet)
- Chatbot : Mistral Small via API

## 📄 Licence
Projet pédagogique - MAHIEUX Maxence, SORGIATI Sacha, RETAILLEAU Marine, BAMAS LUNAY Rémy

## </> Prompts
- Je souhaites que tu développes une web app avec le nom de TimeTravel Interactive. Cette application aura pour objectif d'afficher plusieurs époques (Paris 1889, Crétacé, Florence 1504). La première étape va être de créer une page d'accueil avec : Hero section avec vidéo / animation de fond, Présentation de l’agence, CTA vers les destinations. En plus de cela, développer une galerie des destinations avec : Cards interactives pour les 3 époques, Visuels générés pendant votre premier projet TimeTravel Agency ( @public/assets/images/Cretaceous.png & @public/assets/images/Florence.png & @public/assets/images/Paris.png ), Informations détaillées par destination. Pour cela, je veux que tu utilises shadcn/ui ainsi que Zod.

- Je veux que dans la section "Choisissez votre époque", chaque card est en background la vidéo correspondante en pause. La vidéo serait en play uniquement en hover.

- Maintenant, je veux que tu intègres un système de chat conversationnel basé sur Mistral. Utilise la librairie typescript proposé par Mistral. Je veux que le chat soit dans une popover en bas à droite de l'écran, déclenchable depuis un bouton en fixed en bas à droite de l'écran. Par rapport au bouton, la popover doit être légèrement en haut à gauche. Voici la documentation de l'API : https://docs.mistral.ai/api . Créer un fichier .env et entres-y le nom de la clé pour l'API Mistral.

- Nickel ! Je veux que tu configures le chat conversationnel pour qu'il ne parle QUE de ces périodes : Crétacé, Paris 1889 et Florence 1504. Il peut aborder des sujets par rapport à l'évolution de ces villes/période par rapport à aujourd'hui mais ne doit pas parler d'autre chose que le Crétacé, Paris et Florence.

- Ajoute des animations d'apparition des textes et différents éléments du site lors du scroll et l'arrivée du site. Utilise Framer Motion. Hésite pas à créer des micro-interactions sur les boutons et petits composants dans le même style. En revanche, n'abuse pas des animations.

- Maintenant, revois totalement la DA pour avoir quelque chose de beaucoup plus travaillé (comme si c'était réalisé par un graphiste) et éviter d'avoir un style trop générique avec un style IA. Utilise une font heading et une font de content. Revoit les couleurs, hero section et autres sections. Je dois toujours avoir les vidéos mp4. Ne lésine pas le responsible mobile.