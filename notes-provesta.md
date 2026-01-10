# Notes – Stage Provesta Soft

## 1. Environnement de travail:
- Installation de Node.js (LTS)
- Utilisation de npm et npx
- IDE : Visual Studio Code

## 2. Création du projet React
- Commande utilisée :       
            npx create-react-app .
- Le projet a été créé from scratch dans le dossier du repository.

## 3. Structure du projet
- src/ : contient le code React
- public/ : fichiers publics
- package.json : dépendances et scripts

## 4. Git & GitHub
- Création d’un repository GitHub
- Initialisation du dépôt local
- Premier commit :
  "Initial commit - React task management app"
- Ajout de l’encadrant comme collaborateur

## 5. Objectif du projet
- Développement d’une application web de gestion de tâches
- Frontend avec React.JS
- Backend prévu avec Laravel/MySQL (optionnel)

## Difficultés rencontrées
- Problème avec la commande npx (Node.js non installé)
- Problème résolu après installation de Node.js
###################################################

## 1.Où React met-il tous les éléments que je crée en JSX lorsque j’appelle root.render() ?
- Tous les éléments que je rends sont placés à l’intérieur du <div> ayant l’id "root" 
(ou tout autre élément que je pourrais sélectionner lors de l’appel à createRoot).

## 2️.Que verrais-je dans la console si je lance ce code : console.log(<h1>Hello world!</h1>)
- Un objet ! Contrairement à la création d’un élément HTML avec le JS classique (DOM), 
ce qui est créé à partir du JSX dans React est un objet JavaScript que React utilisera pour afficher la vue.

## 3️.Qu’est-ce qui ne va pas avec ce code :
root.render(
      <h1>Hi there</h1>
      <p>This is my website!</p>
)

- On ne peut rendre qu’un seul élément parent à la fois. 
Cet élément parent peut avoir autant d’enfants que nécessaire.
- root.render(
    <section>
        <h1>Hi there</h1>
        <p>This is my website!</p>
    </section>
)

## 4️.Que signifie "déclaratif" plutôt qu'"impératif" ?
- Impératif : il faut donner des instructions étape par étape pour accomplir une tâche.
- Déclaratif : on écrit le code pour décrire ce qui doit apparaître sur la page,
 et React gère comment l’afficher.

## 5️.Que signifie "composable" ?
- On a de petits éléments que l’on peut assembler pour créer quelque chose
 de plus grand ou plus complexe que les éléments individuels seuls.

## 7.Qu’est-ce qu’un composant React ?
C’est une fonction qui retourne des éléments React (UI).

## 8.Qu’est-ce qui ne va pas avec ce phrase ? root.render(Header())
- root.render(
    <Header />
 )
## 9.Nom du composant : majuscule obligatoire
- React considère tout ce qui commence par une minuscule comme un élément HTML natif (div, span, p, etc.).

- Pour que React comprenne que c’est un composant personnalisé, il faut commencer par une majuscule (Header, MyComponent, TaskItem, etc.).