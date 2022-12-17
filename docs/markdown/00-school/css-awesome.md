<!-- .slide: class="full-center" -->

<div class="full-center">
    <div class="awesome-css">CSS IS AWESOME</div>  
</div>

<aside class="notes">
Ce comportemnt peut différer:
- en fonction du navigateur
- en fonction du dimensionnement de l'écran, depuis les wide screen jusqu'aux devices mobiles
- en fonction du comportement de tierces parties comme une API: que cela soit par le comportement pendant l'établissement d'une communication que via l'intégration des données dynmiques aux dimensions variables dans nos interfaces.

</aside>

##==##

<div class="full-center">
    <div class="awesome-css opacity">CSS IS AWESOME</div>  
</div>

<aside class="notes">
Les tests visuels doivent également prendre en compte les différences de perception du rendu des interfaces, en explorant tout type de problématique.
</aside>

##==##

<div class="full-center">
    <div class="awesome-css full-color">CSS IS AWESOME</div>  
</div>

<aside class="notes">
...
</aside>

##==##

<aside class="notes">
Cette perception n'est pas toujours visuelle et peut être auditive pour des problématiques d'accessibilité.
Le comportement de l'application et l'adéquation de son rendu ne suffisent donc pas à eux seuls pour s'assurer d'adresser l'application à tout utilisateur final.
</aside>

##==##
<div class="full-center">
click
</div>

<aside class="notes">
Ainsi rappelons en 2022 qu'une div n'est pas un bouton.
Et donc que si le clic sur cette div ou son rendu feront illusion, ils ne sauraient être retranscrits correcrtement.
</aside>


##==##

<div class="full-center sas-images-container">
<img class="sas-images" src='assets/images/percy.png'>
<img class="sas-images" src='assets/images/applitools.svg'>
</div>


<aside class="notes">
Il existe déjà aujourd'hui des solutions qui ont fait du visual testing leur spécialité, comme Percy et Applitools.
Avec le soutien de technologies de pixel perfect ou d'IA, ces solutions analysent le rendu des applications pour les évaluer.
</aside>

##==##

<div class="full-center sas-images-container">
<h2><strong>Changements</strong> <i>visuels</i></h2>
<h2><strong>Regressions</strong> <i>visuelles</i></h2>
</div>

<aside class="notes">
Portés par leur propre argumentaire, l'objectif de ces outils est cependant d'évaluer les changements et les regressions.
</aside>

##==##

# Golden master

<div class="full-center">
<img src="assets/images/old-new.png" style='zoom: 3'>
</div>

<aside class="notes">
Ils présupposent donc l'existence d'un modèle de référence, un golden master.
C'est cette référence qui sert de source de vérité en attente d'une revue des changements qui viendraient le remplacer par une nouvelle version.
</aside>


##==##

<div class="full-center">
<img src="assets/images/feedback-loop.png" style='zoom: 3'>
</div>

<aside class="notes">
De plus ayant pour objectif de valider et de sécuriser l'impact de nos développements,
elles interviennent tardivement dans le cycle de développement.
Elles ne permettent pas de valider les changements visuels en temps réel.
Or le feedback loop est un élément clé de la qualité de nos développements.
</aside>

##==##

<!-- .slide: class="transition bg-pink" -->

# Driven Development

<aside class="notes">
L'usage du navigateur pour les tests visuels en phase de développemnt tombe sous le sens.
Mais cette solution correspond plus exactement au lancement de l'applicaion dans sa globalité dans le navigateur.
On intègre donc comme biais que le parcours utilisateur permet d'accéder aux développements en cours
</aside>

##==##

<!-- .slide: class="two-column" -->

# Prerequis

- facilité d'accès
- capacité à reproduire
- tâches ordonnées
- environnement dev opérant

##--##

<!-- .slide: data-background="./web_modules/sfeir-school-theme/images/bg-blue-1.png" -->


<aside class="notes">
Présuppose:
- une connection
- un état particulier
- le début d'un parcours utilisateur

Cela présuppose la capacité à rejouer un même jeu de données:
- pouvoir regénérer un jeu de données supprimé
- intervention d'un tiers (email/gestionnaire)

  Cela présuppose que le développement d'un parcours utilisateur est réalisé dans l'ordre et non fractionné entre différentes équipes

</aside>


##==##

<!-- .slide: class="transition bg-pink" -->

# Constat

<aside class="notes">
L'objectif est d'isoler notre besoin de son contexte: soit un élement isolé de notre développement en cours.
Nous avons donc besoin de solutions qui permettent d'isoler nos éléments visuels pour avoir un feedback en temps réel sans la complexité du contexte de l'application et de toutes ses contraintes.
</aside>

##==##

<div class="full-center">
<img src="assets/images/component.png" style='zoom: 2'>
</div>

<aside class="notes">
Il existe déjà un contexte dans nos applications qui permet de faire fonctionner nos composants en isolation.
Un petit nid douillet, des fois maltraité, voir ignoré: nos tests.
Ainsi queqlue soit la solution utilisée, Jest, Jasmine..., ces librairies nous permettent de générer des composants en isolation pour en tester le comportement.


Techniquement cela signifie que nous avons à disposition un composant avec un state.
Et si nous pouvions avoir un rendu visuel de ce composant en temps réel et en mode watch.
</aside>


