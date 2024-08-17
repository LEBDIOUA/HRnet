# HRnet
**HRnet** est une application de gestion des employés développée avec **React**, **Redux** et **Sass**. Elle permet de créer et de consulter des informations sur les employés. Elle inclut un formulaire de création d'employé, une grille de consultation des employés avec des fonctionnalités avancées, et des **plugins personnalisés** pour une interface utilisateur optimisée.

## Fonctionnalités
* **Création d'employés** : Permet d'ajouter un nouvel employé avec ses informations personnelles et professionnelles.
- **Consultation des employés** : Affiche la liste des employés avec une grille personnalisée incluant des fonctionnalités de pagination, de tri et de recherche.
+ **Suppression d'employés** : Sélectionnez un ou plusieurs employés dans la grille pour les supprimer.
* **Plugins personnalisés** :
    1. **Modal** : Fenêtre modale personnalisée pour informer ou confirmer les actions.
    2. **Select** : Composant de sélection personnalisé pour les états et départements.
    3. **DatePicker** : Sélecteur de date React intégré pour les dates de naissance et de début.

## Prérequis
* Node.js v14+ recommandé
- npm ou yarn

## Installation
1. Clonez le dépôt :
`git clone https://github.com/votre-utilisateur/hrnet.git`

2. Accédez au dossier du projet :
`cd hrnet`
3. Installez les dépendances :
`npm install`
ou
`yarn install`

## Utilisation
### Démarrage de l'application
Pour démarrer l'application en mode développement :
`npm run dev`
ou
`yarn start`

Cela ouvrira l'application dans votre navigateur à l'adresse http://localhost:5173.

### Page d'accueil : Création d'employé (**CreateEmployee.jsx**)
La page d'accueil est dédiée à la création d'un employé. Les champs incluent :
* **Prénom** (First Name)
* **Nom** (Last Name)
* **Date de naissance** (Date of Birth)
* **Date de début de travail** (Start Date)
* **Adresse complète** (Rue, Ville, État, Code postal)
* **Département**

Les champs obligatoires doivent être remplis avant d'enregistrer un employé. Un message de confirmation s'affiche après l'ajout réussi via une fenêtre modale personnalisée, sinon dans le cas d'erreur (sois champs vide sois un employé qui n'a pas ses 18 ans avant de commencer le travail) le bordure du champ concerné devient rouge.

### Page de liste des employés (**EmployeesList.jsx**)
La deuxième page permet de consulter la liste des employés sous forme de tableau avec les fonctionnalités suivantes :
* **Tri** : Cliquez sur les en-têtes pour trier les colonnes.
* **Pagination** : Sélectionnez la taille de la page et naviguez entre les pages.
* **Recherche** : Utilisez la barre de recherche pour filtrer les employés par mots-clés.
* **Suppression** : Sélectionnez un ou plusieurs employés et supprimez-les après confirmation.

### Structure du Projet
#### Classe Employee.js et la fonction formatDate
Pour mieux structurer les données des employés, nous utilisons une classe **Employee** et une fonction de formatage de date ( **formatDate** ) :

#### Redux Store avec Persistence
L'état des employés est géré via Redux et persiste entre les sessions grâce à `redux-persist`.
### Plugins utilisés
#### Modal Plugin
* **Description** : Ce plugin permet d'afficher une fenêtre modale personnalisée pour informer ou confirmer les actions de l'utilisateur (par exemple, confirmer la suppression).
- **Installation** :
`npm install @lebdioua/react-modal-plugin`

#### Select Plugin
* **Description** : Ce plugin permet d'afficher un menu déroulant personnalisé pour sélectionner des éléments comme les états ou les départements .
- **Installation** :
`npm install @lebdioua/react-select-plugin`

#### Grid Plugin
* **Description** : Ce plugin affiche une grille de données personnalisable avec des fonctionnalités avancées de tri, pagination, sélection et recherche.
- **Installation** :
`npm install @lebdioua/react-grid-plugin`

## Contribution
Les contributions sont les bienvenues ! Si vous trouvez des bugs ou avez des idées d'amélioration, n'hésitez pas à ouvrir une **issue** ou à soumettre une **pull request**.
