<!-- .slide: class="full-center" -->

<div class="full-center">
    <div class="awesome-css">CSS IS AWESOME</div>  
</div>

<aside class="notes">
Pourquoi tester visuellement nos applications,
tout d'abord car le comportement visuel de nos applications est régie par des règles qui n'en simplifie pas les tests.

D'un côté car le comportement visuel dépend non seuement de l'organisation des éléments sur une page mais égalment du
dimensionement de notre écran et des données dynamiques que l'on souhaite y injecter.
</aside>

##==##

<div class="full-center">
    <div class="awesome-css opacity">CSS IS AWESOME</div>  
</div>

<aside class="notes">
Ensuite parce que nos yeux sont faillibles, ou plutôt notre perception.
</aside>

##==##

<div class="full-center">
    <div class="awesome-css full-color">CSS IS AWESOME</div>  
</div>

<aside class="notes">
QUe cela soit de par 
</aside>

##==##
<div class="full-center">
<!-- .slide: class="with-code" -->

```html

<div id='button'></div>
```

<!-- .element: class="big-code" -->
</div>

<aside class="notes">
Ou parce que notre perception n'est plus visuelle mais auditive.
Via des screens readers ou des outils de synthèse vocale.
</aside>

<aside class="notes">
Et que donc le comportmeent de nos applications et leur apparence visuelle ne sauirent ganrtir l'accessibilité de leurs contenus.
Ainsi rappelons en 2022 qu'une div n'est pas un bouton.
</aside>

##==##

```
if (list.length) {
  // display list
}

```

##==##

```
if (!list.length) {
  // display list
}

```

En partant de ce cas, il suffirait d'inverser la condition pour modifier le comportement visuel de l'application.


<aside class="notes">
Et si je viens imbriquer ceci dans un ensemble de conditions fonctionelles propres à mon projet, la capacité à identifier cette anomalie et à la reproduire prend de la complexité, pouvant aller jusqu'à le rendre invisible jusqu'au client final
</aside>

##==##

<div class="full-center sas-images-container">
<img class="sas-images" src='assets/images/percy.png'>
<img class="sas-images" src='assets/images/applitools.svg'>
</div>


<aside class="notes">
Existing solution => Visual regression
Quand on évoque le visual testing, des solutions comme percy ou applitools.
Ces solutions de Saas se sont spécialisées dans le visual testing.
</aside>

##==##

- Visual changes
- Visual regressions

<aside class="notes">
Bien que fortement intéressant pour assurer la maintenabilité de nos projets, ces solutions arrivent tardivement pendant les phases de développement.
</aside>

##==##

# Golden master

<aside class="notes">
Tout d'abord de par leur nature, elles présupposent l'existence d'un golden master, d'une référence sur laquelle s'appuyer.
</aside>


##==##

# Feedback loop

<aside class="notes">
De plus ayant pour objectif de valider et de sécuriser l'impact de nos développements,
elles interviennent tardivement dans le cycle de développement.
Elles ne permettent pas de valider les changements visuels en temps réel.
Or le feedback loop est un élément clé de la qualité de nos développements.
</aside>

##==##

# Situations

<aside class="notes">
L'usage du navigateur pour les tests visuels en phase de développemnt tombe sous le sens.
Mais cette solution correspond plus exactement au lancement de l'applicaion dans sa globalité dans le navigateur.
On intègre donc comme biais que le parcours utilisateur permet d'accéder aux développements en cours
</aside>

##==##

# Facilité d'accès

<aside class="notes">
Présuppose:
- une connection
- un état particulier
- le début d'un parcours utilisateur
</aside>


##==##

# Reproducitiblité

<aside class="notes">
Cela présuppose la capacité à rejouer un même jeu de données:
- pouvoir regénérer un jeu de données supprimé
- intervention d'un tiers (email/gestionnaire)
</aside>

##==##

# développement séquentiel

<aside class="notes">
Cela présuppose que le développement d'un parcours utilisateur est réalisé dans l'ordre et non fractionné entre différentes équipes
</aside>

##==##

# Contexte technique

<aside class="notes">
L'état de notre application dépend d'éléments extérieurs sur lequel notre contrôle est limité, en particulier l'état du network
Comment reproduire des erreurs réseau?
Comment reproduire les conditions de chargement de données et les différents états?
</aside>

##==##

# Constat

<aside class="notes">
L'objectif est d'isoler notre besoin de son contexte
Quand les développement sont isolés, le parcours utilisateur n'est pas toujours accessible.
Nous avons donc besoin de solutions qui permettent d'isoler nos éléments visuels pour avoir un feedback en temps réel sans la complexité du contexte de l'application et de toutes ses contraintes.
</aside>

##==##

<div class="full-center">
<img src="assets/images/hype-cycle.png" />
</div>

<aside class="notes">
Hype Cycle
</aside>

##==##

<aside class="notes">
Il existe déjà un contexte dans nos applications qui permet de faire fonctionner nos composants en isolation.
Un petit nid douillet, des fois maltraité, voir ignoré: nos tests.
Ainsi queqlue soit la solution utilisée, Jest, Jasmine..., ces librairies nous permettent de générer des composants en isolation pour en tester le comportement.
</aside>

##==##

<aside class="notes">
Techniquement cela signifie que nous avons à disposition un composant avec un state.
Et si nous pouvions avoir un rendu visuel de ce composant en temps réel et en mode watch.
</aside>

# Component testing

La solution est de prendre la situation dans l'autre sens:

- Isoler le composant en générant son rendu dans un état particulier
- utiliser une API plus spécialisée dans les intéractions avec le DOM

# Intérêt

- cross platform => caniuse
- tests dédiés

