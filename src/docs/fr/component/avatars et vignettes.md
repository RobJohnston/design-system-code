---
path: "/component/avatars-and-thumbnails"
subnav: "2/Standard/Standard/1"
lang: "fr"
title: "Images, avatars et vignettes"
---

<helmet>
<title> Images, avatars et vignettes - Système de conception Aurora </title>
</helmet>

# Images, avatars et vignettes
<div class="mt-3">
    <div class="card">
    <div class="card-body">
        <ul class="list-unstyled">
        <li class="media media-comment">
            <a href="#!">
                <img alt="..." class="avatar" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow">
            </a>
            <div class="media-body">
                <div class="media-heading">
                <a href="#!">John Doe</a>
                <small class="text-muted">Il y a 1 heure</small>
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin sem augue, porttitor eleifend eros tincidunt in. Duis mattis erat orci. Fusce aliquet sapien sit amet ex suscipit, eu pellentesque est posuere. Pellentesque varius massa nec turpis interdum tincidunt. Fusce volutpat rutrum nunc, non accumsan lacus consequat vel.
                </div>
                <div class="media-footer">
                <a href="#!"><small>Répondre</small></a>
                <a href="#!"><small>Aimer</small></a>
                </div>
            </div>
        </li>
        </ul>
    </div>
    </div>
</div>

## Images en série
Les images en série sont séparées des autres éléments sur la page (c’est-à-dire le texte) et sont habituellement centrées avec un remplissage prédéterminé. Dans une mise en page comprenant du texte, le texte continuera sur la ligne suivante après l’image.

## Image en ligne
Les images en ligne sont alignées verticalement avec les autres éléments de la page (c’est-à-dire le texte) et peuvent être alignées à gauche ou à droite. Les images en ligne ont seulement du remplissage précis pour les bordures gauches et droites. Elles accompagnent le contenu du texte et le texte est placé dans l’espace restant autour de l’image.

## Image pleine largeur
Les images pleine largeur s’étirent d’un bout à l’autre de la zone de contenu. Parfois, on l’appelle une image héros.

## Avatars
Les avatars sont de petites images carrées utilisées pour identifier les utilisateurs sur le site ou l’application. Les avatars sont souvent combinés avec le profil de l’utilisateur et d’autres éléments comme des cartes, des commentaires et des boutons.
Par défaut, les avatars utilisent [l’icône SVG de l’utilisateur](https://fontawesome.com/icons/user?style=solid) de Font Awesome.

Lorsque les utilisateurs téléchargent leur avatar, ils sont amenés à rogner l’image pour l’ajuster à la taille du carré de l’avatar.

Les avatars sont utilisés en trois tailles et sont stylisés comme suit :

**Petit** : image carrée avec les coins arrondis par 4px. Taille à 26 x 26 pixels.
Utilisés sur les petits éléments où l’utilisateur a besoin d’être identifié comme sur des mots-clés ou le clavardage.

<img alt="small avatar" class="avatar avatar-sm" src="https://api.adorable.io/avatars/170/abott@adorable.png">

<codeblock html='<img alt="small avatar" class="avatar avatar-sm" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow">
' react='' />

**Moyen** : image carrée avec les coins arrondis par 4px. Taille à 50 x 50 pixels.
Utilisée en combinaison avec d’autres éléments tels que des commentaires, le clavardage, des cartes et tout autre endroit où vous auriez besoin d’identifier l’utilisateur.

<img alt="medium avatar" class="avatar" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow">

<codeblock html='<img alt="medium avatar" class="avatar" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow">
' react='' />

**Grand** : image carrée avec les coins arrondis par 4px. Taille à 115 x 115 pixels.
Utilisé directement sur le profil de l’utilisateur.

<img alt="large avatar" class="avatar avatar-lg" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow">

<codeblock html='<img alt="large avatar" class="avatar avatar-lg" src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Yellow">
' react='' />

## Vignettes
Les vignettes sont de petites versions d’une image qui sont utilisées comme aperçu du contenu. Elles sont souvent combinées à d’autres éléments comme des cartes, des commentaires, des aperçus d’images, etc.

*Élément des vignettes*

Les vignettes sont toujours carrées avec une bordure d’un rayon de 1px. Elles ont un trait noir d’une largeur de 0,25 px. Elles ont une taille de 115 x 115 pixels.

Les vignettes ne rognent pas l’image, mais la redimensionnent. Les vignettes sont généralement alignées à gauche lorsqu’elles sont combinées à d’autres éléments.
