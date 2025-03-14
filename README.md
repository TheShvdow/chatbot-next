# Chatbot Next.js

Ce projet est une application web de chatbot construite avec [Next.js](https://nextjs.org). Elle a été initialisée avec [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) et utilise des technologies modernes comme React, TypeScript et le système de composants de [shadcn](https://ui.shadcn.com) pour offrir une interface utilisateur élégante et performante.

## Aperçu du Projet

L'application propose une interface de chat en temps réel où l'utilisateur peut envoyer des messages et recevoir des réponses générées automatiquement par une API. La communication se fait via un composant central appelé `ChatMessage` qui gère l'affichage des messages, l'envoi des requêtes vers le backend et l'optimisation des images grâce à `next/image`.

## Fonctionnalités

- **Interface Chat Moderne** : Une chatbox stylisée utilisant les composants de shadcn (Card, Button, Input, etc.) pour une expérience utilisateur optimisée.
- **Gestion des Messages** : Stockage et affichage dynamique des messages de l'utilisateur et des réponses générées par l'IA.
- **Optimisation d'Images** : Utilisation du composant `Image` de Next.js pour optimiser le chargement des images, ce qui améliore le LCP (Largest Contentful Paint) et réduit l'utilisation de la bande passante.
- **Réactivité et Interactivité** : L'interface se met à jour en temps réel lors de l'envoi de messages grâce à l'état géré via React.
- **API IA** : Intégration avec un service backend pour obtenir des réponses d'IA à partir des messages de l'utilisateur.

## Technologies Utilisées

- **Next.js** : Framework React pour un rendu côté serveur et des performances optimisées.
- **React + TypeScript** : Pour une meilleure maintenabilité et une expérience de développement améliorée.
- **shadcn** : Ensemble de composants UI pour construire des interfaces modernes et réactives.
- **next/image** : Pour l’optimisation automatique des images.
- **API Personnalisée** : Appel vers une fonction `getAIResponse` pour récupérer les réponses générées dynamiquement.

## Installation et Lancement

Pour commencer à utiliser ce projet en local, suivez ces étapes :

1. **Installation des dépendances**

   ```bash
   npm install
   # ou
   yarn install
   ```

2. **Lancement du serveur de développement**

   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   # ou
   bun dev
   ```

3. **Ouverture dans le navigateur**

   Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.

Vous pouvez commencer à éditer la page en modifiant `app/page.tsx`. La page se met à jour automatiquement à mesure que vous éditez le fichier.

Ce projet utilise [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) pour optimiser et charger automatiquement [Geist](https://vercel.com/font), une nouvelle famille de polices pour Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


