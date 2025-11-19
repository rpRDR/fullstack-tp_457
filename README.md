My Shop — Exercice Angular (NgRx + MSW + Material)

Projet réalisé dans le cadre de l’exercice My Shop.
Il fournit un front-end fonctionnel basé sur Angular 20, NgRx, Angular Material et MSW.

✔ Fonctionnalités implémentées

Login fonctionnel (POST /api/auth/token/)

Stockage du token dans NgRx

Gestion du loading + erreurs

Liste des produits (GET /api/products/)

Filtres : page, pageSize, minRating, ordering

NgRx effects + selectors

Angular Material pour les inputs / cards

Affichage du nombre total (+ pagination côté API)

Page Product Rating (GET /api/products/:id/rating/)

Routing complet

/login

/shop/products

/shop/rating

MSW activé pour mocker les API (déjà fourni)

✔ Architecture State (NgRx)

auth/ : login, refresh, state tokens

products/ : liste, meta, loading, errors

Effects pour login et fetch produits

Selectors pour lire les données

❗ Storybook

À cause d’incompatibilités connues entre Angular 20 et Storybook 8,
l’installation dans ce workspace est instable (conflit avec Angular build).

Afin de préserver la stabilité du projet principal, Storybook n’a pas été intégré ici.

🚀 Lancer l’application
npm install
npm start
