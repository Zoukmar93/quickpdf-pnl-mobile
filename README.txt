QuickPDF PNL Mobile - Prototype PWA

Fonctions :
- charger des PDF depuis téléphone ou PC
- générer PNL
- détecter et surligner passagers invalides
- prénom facultatif : si prénom vide et nom présent, génération 1NOM
- correction simple prénom collé au nom
- export tout
- export sélection
- copier PNL
- partager vers Outlook mobile si disponible

Limites :
- pas d'envoi Outlook automatique depuis mobile
- PDF.js est chargé depuis Internet au premier lancement
- le parsing mobile doit être testé avec tes PDF réels

Test PC :
- ouvre index.html dans Chrome/Edge
- ou lance : python -m http.server 8000

Mobile :
- héberge le dossier sur GitHub Pages ou Firebase Hosting
- ouvre le lien
- ajoute à l'écran d'accueil
