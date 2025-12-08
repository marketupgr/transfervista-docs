---
title: Emplacements prédéfinis
description: Apprenez à configurer des trajets fixes, des zones et des tarifs afin que les clients puissent réserver uniquement des itinéraires spécifiques.
---

# Lieux de prise en charge & de dépose prédéfinis

Ce guide explique comment configurer votre compte TransferVista afin que les clients puissent **uniquement réserver des transferts entre des emplacements fixes**, tels que :

- Aéroport → Hôtel  
- Hôtel → Aéroport  
- Tout autre couple de points prédéfinis  

Cette configuration est idéale pour les entreprises qui **n’offrent pas** de transferts vers des adresses libres et souhaitent limiter les réservations à un ensemble restreint d’itinéraires.

---

## 1. Ajouter vos véhicules

Avant de définir des prix ou des itinéraires, vous devez ajouter vos véhicules.  
Toutes les règles de tarification doivent être liées à au moins un véhicule.

1. Accédez à **Settings → Vehicles**  
2. Cliquez sur **Add Vehicle**  
3. Remplissez les informations requises (capacité, bagages, type de véhicule, etc.)  
4. Enregistrez votre véhicule  
5. Répétez l’opération pour tous vos véhicules  

> **Important :** Vous ne pouvez pas créer de règles de tarification tant qu’aucun véhicule n’est ajouté.

---

## 2. Définir vos zones de disponibilité

Les Zones de Disponibilité définissent les zones géographiques dans lesquelles votre entreprise est autorisée à opérer.  
Les clients *ne peuvent pas* réserver de transferts en dehors de ces zones.

Pour configurer :

1. Accédez à **Settings → Availability Zones**  
2. Cliquez sur **Create Zone**  
3. Dessinez une zone autour de votre premier emplacement (ex : un aéroport)  
4. Créez une deuxième zone autour du second emplacement (ex : un hôtel)  
5. Enregistrez les deux zones  

**Exemple :**

- Zone 1 → Antalya Airport  
- Zone 2 → Rixos Premium Hotel  

Avec ces zones, le système autorise les réservations **uniquement entre ces deux points**.

---

## 3. Créer des Areas pour les emplacements fixes

Les Areas servent à définir les **points fixes de prise en charge et de dépose** qui apparaissent :

- Dans le sélecteur d’adresses du formulaire de réservation  
- Dans la liste de prix (tarification par trajet)  

Pour configurer :

1. Accédez à **Settings → Areas**  
2. Créez une Area pour votre premier emplacement (ex : Antalya Airport)  
3. Dessinez la zone ou le point sur la carte  
4. Activez **Show this area in the booking form address picker**  
5. Répétez l’opération pour votre second emplacement (ex : Rixos Premium Hotel)  
6. Enregistrez les deux Areas  

---

## 4. Créer vos règles de tarification (par trajet)

Maintenant que vos véhicules, zones et Areas sont configurés, vous pouvez définir vos tarifs fixes :

1. Allez dans **Settings → Price List**  
2. Cliquez sur **New Entries**  
3. Choisissez **Add Prices by Route**  
4. Sélectionnez le véhicule auquel attribuer un prix  
5. Choisissez :

   - **Pickup Area**  
   - **Drop-off Area**  

6. Saisissez votre prix fixe  
7. Activez **Reverse Route** pour créer automatiquement le prix retour  
8. Enregistrez  

Répétez l’opération pour tous les véhicules ou itinéraires supplémentaires.

---

## 5. Tester votre formulaire de réservation

Pour vérifier que tout fonctionne :

1. Ouvrez l’URL de votre formulaire public  
2. Choisissez un lieu de prise en charge  
3. Vérifiez que seuls les emplacements prédéfinis apparaissent  
4. Sélectionnez un lieu de dépose  
5. Confirmez que le prix correct s’affiche  
6. Assurez-vous que **aucune adresse libre n’est disponible**  

Si tout est configuré correctement, les clients pourront uniquement réserver les itinéraires que vous avez définis.

---

## Résumé

Pour proposer des transferts uniquement entre des emplacements prédéfinis, vous devez :

1. **Créer des véhicules** – indispensable pour appliquer des tarifs  
2. **Dessiner des Availability Zones** – délimiter vos zones opérationnelles  
3. **Créer des Areas** – définir les points fixes de prise en charge et de dépose  
4. **Ajouter des tarifs par trajet** – appliquer des prix fixes par route  
5. **Tester le formulaire** – vérifier que seuls vos itinéraires apparaissent  

Avec cette configuration, votre système de réservation supportera **uniquement les trajets que vous souhaitez proposer**, avec des prix fixes et sans saisie libre d’adresse.

---

Si vous le souhaitez, je peux aussi créer la **version grecque** ou la placer dans un **fichier .md séparé** dans votre structure de documentation.
