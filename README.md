# Argent Bank

## Vue d'ensemble

Argent Bank est une application web de gestion de comptes bancaires. Ce projet se divise en deux phases :

1. **Phase 1 : Authentification des utilisateurs** - Création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.
2. **Phase 2 : Transactions** - Spécification des endpoints d'API nécessaires pour la gestion des transactions.

## Fonctionnalités

### Phase 1 : Authentification des utilisateurs

- Création de l’application web complète et responsive avec React.
- Utilisation de Redux pour gérer le state de l'application.
- Fonctionnalités :
  - Page d'accueil.
  - Connexion et déconnexion.
  - Visualisation et modification du profil (après connexion).

### Phase 2 : Transactions

- Visualisation de toutes les transactions pour le mois en cours, groupées par compte.
- Visualisation des détails d'une transaction spécifique.
- Ajout, modification ou suppression des informations sur une transaction.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- [Node.js](https://nodejs.org/) (version 14.x ou supérieure)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

## Démarrage

### Cloner le dépôt

Clonez le dépôt sur votre machine locale :

```bash
git clone https://github.com/Sylviacarrera/Projet13.git
cd Projet13

Installez les dépendances nécessaires pour le projet :
npm install

Configuration du serveur API
Le serveur API est un projet externe situé dans un autre répertoire. Vous devez naviguer vers ce répertoire et démarrer le serveur :

Clonez le dépôt du serveur API : git clone https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API.git

Naviguez vers le répertoire du serveur API :cd Project-10-Bank-API
Installez les dépendances nécessaires :npm install
Démarrez le serveur API :npm run dev:server

Exécution de l'application frontend
Après avoir configuré le serveur API, retournez dans le répertoire Projet13 et démarrez l'application frontend :
 cd ../Projet13
npm run dev

Contact
Si vous avez des questions ou avez besoin d'assistance, veuillez contacter :

Guilhem Sylvia
eyepickyou@gmail.com

