---
path: "/component/buttons"
subnav: "2/Standard/Standard/3"
lang: "fr"
title: "Boutons"
---

<helmet>
<title> Boutons - Système de conception Aurora </title>
</helmet>

# Boutons

## Pratiques exemplaires
Les boutons ont tendance à avoir une importance visuelle sur n’importe quelle page ou fenêtre. Les boutons primaires, les boutons qui indiquent un appel à l’action, sont les plus importants. Les boutons secondaires, qui sont moins couramment utilisés, devraient être moins apparents que les boutons primaires. Les boutons indiquent toujours une action et ne doivent pas être utilisés pour la navigation. Les boutons sont placés où un utilisateur s’attend à les voir, c’est-à-dire à proximité des autres éléments liés à l’action concernée.

## Taille et remplissage
Les boutons utilisés dans ce système de conception ont une taille minimum de 30px par 30px. C’est la taille moyenne du coussinet tactile utilisé pour une application sur un appareil mobile. Pour le Web, cette taille minimale est également uniforme.

Plus il y a de l’espace vide et de remplissage autour d’un bouton et plus ce dernier apparaît comme important sur la page. La plupart des boutons dans ce système utilisent un remplissage de 15px, à moins d’indication contraire.

## Étiquettes
Les étiquettes de boutons devraient être claires et précises. Évitez les termes génériques comme Enregistrer, Soumettre ou Annuler. Les boutons devraient indiquer l’action exacte qui est prise et devraient fournir une idée claire de ce qui se passera ensuite.

Exemples de bonnes étiquettes : Ajouter une publication au blogue, Envoyer un message, Enregistrer le brouillon.

Toutes les étiquettes devraient mettre seulement la première lettre en majuscule.

Le texte de l’étiquette doit avoir un fort contraste avec la couleur du bouton. Voir les couleurs pour plus de renseignements au sujet d’un contraste acceptable.

## États variables

Les boutons ne sont pas des objets ayant un seul état. La plupart des utilisateurs reconnaissent un bouton en raison de son état stationnaire et son état actif. Les divers états offrent également de la rétroaction à l’utilisateur à chaque étape de l’exécution de l’action.

Les boutons devraient comprendre les états normal, sensitif, accentué, actif et désactivé :

**Normal** : même dans son état normal, un bouton doit ressembler à un bouton! Avant d’être stationnaire, un utilisateur devrait être capable de dire si un élément est cliquable.

**Sensitif** : habituellement indiqué par un changement de couleur ou une animation, l’état sensitif indique à l’utilisateur que l’élément est cliquable.

**Accentué**: semblable à l’état sensitif, l’état accentué indique que l’utilisateur a placé son curseur sur le bouton précis.

**Actif ou appuyé**: habituellement indiqué par un changement de couleur ou une animation, cela indique que l’utilisateur a cliqué ou appuyé sur un bouton.

**Désactivé** : habituellement une version fantôme de l’état normal, cela indique à l’utilisateur que l’action n’est pas disponible.

## Boutons primaires
Les boutons primaires identifient un appel à l’action. Utilisez ces boutons pour des actions qu’un utilisateur est encouragé à prendre comme : ajouter une publication à un blogue, envoyer un message ou ouvrir une séance. Essayez de limiter les étiquettes de boutons à un ou deux mots.

Les boutons primaires sont conçus pour avoir un haut contraste avec le fond d’écran et pour avoir le plus de poids visuel. Ils utilisent généralement des couleurs plus vives que les autres éléments sur le formulaire ou la mise en page et sont situés dans un espace visible et accessible de la page.

Les boutons primaires utilisent les couleurs primaires avec du texte blanc. Les dimensions du bouton dépendent de la longueur des mots d’action.

Voici les caractéristiques de chacun des états pour les boutons primaires :


**État normal** : Couleur primaire à 100 % d’opacité, texte blanc avec une bordure d’un rayon de 4px et d’un remplissage de 15px.

<button aria-label="Exemple d'un bouton primaire en état normal" style="margin-top: 5px;" color="primary">Normal</button>

<codeblock html='<button type="button" class="btn btn-primary">Normal</button>' react='<Button color="primary">Normal</Button>'></codeblock>

**État stationnaire** : Couleur primaire à 80 % d’opacité, texte blanc avec une bordure d’un rayon de 4px et d’un remplissage de 15px.

<button aria-label="Exemple d'un bouton primaire en état sensitif" color="primary" style="color: #fff; background-color: #245e83; border-color: #215679">Stationnaire</button>

**État accentué** : Couleur primaire à 80 % d’opacité, texte blanc avec une bordure d’un rayon de 4px et d’un remplissage de 15px. Comprends un trait de 3px dans une couleur primaire.

<button aria-label="Exemple d'un bouton primaire en état accentué" color="primary" style="background-color: #002D42; box-shadow: 0 0 0 0.2rem rgba(0, 45, 66, 0.25);">Accentué</button>

**État désactivé** : Couleur primaire à 60 % d’opacité, texte blanc avec une bordure d’un rayon de 4px et d’un remplissage de 15px.

<button aria-label="Exemple d'un bouton primaire en état désactivé" color="primary" disabled="true">Désactivé</button>

<codeblock html='<button type="button" class="btn btn-primary" disabled>Primaire</button>' react='<Button color="primary" disabled>Désactivé</Button>'></codeblock>

## Emplacement
Les boutons primaires devraient être situés à l’endroit le plus important et le plus visible. Ces boutons devraient également être situés à proximité du formulaire ou des éléments qui sont touchés par l’action. En général, dans un ensemble de deux, les boutons primaires sont situés à gauche et le bouton secondaire est placé à droite.

## Boutons secondaires
Les boutons secondaires sont utilisés pour des actions qui sont nécessaires, mais dont les utilisateurs peuvent utiliser moins souvent. Voici quelques exemples d’actions : Annuler la soumission, Supprimer ou Enregistrer un brouillon. Ces boutons ont un poids visuel qui est équivalent ou moindre à celui de la majorité des éléments sur la page. Le bouton secondaire est habituellement placé à proximité du bouton primaire. Essayez de limiter les étiquettes de boutons à un ou deux mots.

Les boutons secondaires, surtout ceux utilisés pour des actions de destruction, devraient être conçus d’une manière qui dissuade les utilisateurs de cliquer sur celui-ci. Cela aide à réduire le nombre d’erreurs.

Pour des actions secondaires de destruction permanente, comme Supprimer, cliquer sur le bouton ouvrira une boîte de dialogue afin de confirmer l’action. Toujours prévenir l’utilisateur que les actions confirmées ne peuvent pas être inversées.

Les boutons secondaires dans ce système sont transparents avec une couleur de trait. Le texte change de couleur selon l’état du bouton. Les dimensions du bouton dépendent de la longueur des mots d’action.

Voici les caractéristiques de chacun des états pour les boutons :

**État normal** : Transparent avec un trait de 1px utilisant la couleur <badge style="background-color: #002D42;color:white;">#002D42</badge>, le texte est écrit dans la même couleur. La bordure est d’un rayon de 4px et le remplissage de 15px.

<button aria-label="Exemple d'un bouton secondaires en état normal" color="secondary">Secondaire</button>

<codeblock html='<button type="button" class="btn btn-secondary">Secondaire</button>' react='<Button color="secondary">Secondaire</Button>'></codeblock>

**État sensitif** : Un rectangle coloré avec no002D42 à 80 % d’opacité, le texte est écrit en blanc. La bordure est d’un rayon de 4px et le remplissage de 15px.

<button aria-label="Exemple d'un bouton secondaires en état sensitif" color="secondary" style="color: #fff; background-color: #002D42;">Sensitif</button>

**État accentué** : Transparent avec un trait de 3px utilisant no002D42, le texte est écrit en <badge style="background-color: #002D42;color:white;">#002D42</badge>. La bordure est d’un rayon de 4px et le remplissage de 15px.

<button aria-label="Exemple d'un bouton secondaires en état accentué" color="secondary" style="color: #002D42; background-color: transparent; box-shadow: 0 0 0 0.2rem rgba(0, 45, 66, 0.25);">Accentué</button>

**État désactivé** : Remplissage de couleur <badge style="background-color: #CECECE;color:black;">#CECECE</badge> avec du texte blanc. La bordure est d’un rayon de 4px et le remplissage de 15px.

<button aria-label="Exemple d'un bouton secondaires en état désactivé" color="secondary" disabled="true">Secondaire</button>

<codeblock html='<button type="button" class="btn btn-secondary" disabled>Secondaire</button>' react='<Button color="secondary" disabled>Secondaire</Button>'></codeblock>

## Emplacement
Les boutons secondaires sont habituellement placés à proximité du bouton primaire, mais pas à un endroit où l’utilisateur peut confondre les deux. Les boutons secondaires sont habituellement placés à droite du bouton primaire. Ils devraient avoir un emplacement uniforme par rapport au bouton primaire afin d’éviter la confusion.

## Boutons de menu déroulant
Cliquer sur les boutons de menu déroulant affiche une liste d’éléments. Ces boutons sont utilisés pour des processus en deux étapes qui pourraient nécessiter plus d’options particulières pour une seule action.

**État normal** : Semblables aux boutons primaires, les boutons de menu déroulant utilisent une couleur primaire à 100 % d’opacité, du texte blanc avec une bordure d’un rayon de 4px et un remplissage de 15px. La flèche du menu déroulant représente un espace de 30px par 40 px, qui est séparé du bouton primaire en utilisant une ligne blanche. La flèche utilise un espace de 15px de largeur et de 8px de hauteur.

<mdbuttondropdown color="primary" title="Normal">
</mdbuttondropdown>

<codeblock html='
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Normal
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
        </div>
    </div>
' react='
<ButtonDropdown direction="down" isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{marginBottom: "15px"}} color={this.props.color}>
    <DropdownToggle caret {...this.props}>
        Normal
    </DropdownToggle>
    <DropdownMenu>
        <DropdownItem>Action 1</DropdownItem>
        <DropdownItem>Action 2</DropdownItem>
        <DropdownItem>Action 3</DropdownItem>
    </DropdownMenu>
</ButtonDropdown>
'></codeblock>

**État sensitif** : Semblables aux boutons primaires, les boutons de menu déroulant utilisent une couleur primaire à 100 % d’opacité, du texte blanc avec une bordure d’un rayon de 4px et un remplissage de 15px. La flèche du menu déroulant représente un espace de 30px par 40px, qui est séparé du bouton primaire en utilisant une ligne blanche. La flèche utilise un espace de 15px de largeur et de 8px de hauteur. Selon la partie du bouton sur laquelle vous placez votre curseur (primaire ou déroulante), celle-ci est affichée à 80 % d’opacité.

**État accentué** : Semblables aux boutons primaires, les boutons de menu déroulant utilisent une couleur primaire à 100 % d’opacité, du texte blanc avec une bordure d’un rayon de 4px et un remplissage de 15px. La flèche du menu déroulant représente un espace de 30px par 40 px, qui est séparé du bouton primaire en utilisant une ligne blanche. La flèche utilise un espace de 15px de largeur et de 8px de hauteur. Selon la partie du bouton sur laquelle l’accentuation est placée (primaire ou déroulante), celle-ci est affichée à 80 % d’opacité et comprend un trait de 3px dans une couleur primaire.

<mdbuttondropdown color="primary" style="color: #fff; background-color: #245e83; border-color: #215679" title="Sensitif">
</mdbuttondropdown>

**État activé** : Lorsqu’on presse sur la flèche du menu déroulant, cette section du bouton est affichée à 80 % d’opacité et un menu déroulant est affiché en dessous. La boîte d’action utilise une bordure de 1px de couleur <badge style="background-color: #CECECE;color:black;">#CECECE</badge>. La boîte a une bordure d’un rayon de 4px. La largeur de la boîte est de 166px et la hauteur dépend du nombre d’actions, utilisant 40px par action. Lorsque le curseur est placé dessus, le 40px autour de l’action est affiché en utilisant <badge style="background-color: #CECECE;color:black;">#CECECE</badge>.

<mdbuttondropdown color="primary" style=" box-shadow: 0 0 0 0.2rem rgba(0, 45, 66, 0.25);" title="Accentué">
</mdbuttondropdown>

**État activé** : Lorsqu’on presse sur la flèche du menu déroulant, cette section du bouton est affichée à 80 % d’opacité et un menu déroulant est affiché en dessous. La boîte d’action utilise une bordure de 1px de couleur <badge style="background-color: #CECECE;color:black;">#CECECE</badge>. La boîte a une bordure d’un rayon de 4px. La largeur de la boîte est de 166px et la hauteur dépend du nombre d’actions, utilisant 40px par action. Lorsque le curseur est placé dessus, le 40px autour de l’action est affiché en utilisant <badge style="background-color: #CECECE;color:black;">#CECECE</badge>.

<buttondropdownopen color="primary" style="color: #fff; background-color: #215679; border-color: #1e4f6f;box-shadow: 0 0 0 0.2rem rgba(44, 115, 161, 0.25), inset 0 3px 5px rgba(0, 0, 0, 0.125);" title="Activé" direction="down">
</buttondropdownopen>

</br>
</br>
</br>
</br>
</br>
</br>

<codeblock html='
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action 1</a>
            <a class="dropdown-item" href="#">Action 2</a>
            <a class="dropdown-item" href="#">Action 3</a>
        </div>
    </div>
' react='
<ButtonDropdown direction="down" isOpen="true" toggle={this.toggle} style={{marginBottom: "15px"}} color={this.props.color}>
    <DropdownToggle caret {...this.props}>
        Reply
    </DropdownToggle>
    <DropdownMenu>
        <DropdownItem>Action 1</DropdownItem>
        <DropdownItem>Action 2</DropdownItem>
        <DropdownItem>Action 3</DropdownItem>
    </DropdownMenu>
</ButtonDropdown>
'></codeblock>

## Groupes de boutons
Les groupes de boutons sont une façon stylisée de mettre plusieurs boutons ensemble.

Les actions primaires sont alignées à gauche, les actions secondaires sont au milieu et les actions d’avertissement ou de destruction sont alignées à droite.

<div class="mt-2">
    <div class="btn-group" role="group" aria-label="Basic example of button group">
        <button type="button" class="btn btn-primary">Gauche</button>
        <button type="button" class="btn btn-primary">Centre</button>
        <button type="button" class="btn btn-primary">Droite</button>
    </div>
</div>

<codeblock html='
    <div class="btn-group" role="group" aria-label="Basic example of button group">
        <button type="button" class="btn btn-primary">Gauche</button>
        <button type="button" class="btn btn-primary">Centre</button>
        <button type="button" class="btn btn-primary">Droite</button>
    </div>
' react='
<ButtonGroup style="margin-bottom: 15px">
    <Button color="primary">Gauche</Button>
    <Button color="primary">Centre</Button>
    <Button color="primary">Droite</Button>
</ButtonGroup>
'></codeblock>
