<!-- .slide: class="transition bg-pink" -->

# Cypress Component Testing

##==##

<div class="full-center sas-images-container">
  <img src="assets/images/cypress.png" style='zoom: 4'>
</div>

<aside class="notes">
Cypress est un framework de test end-to-end (E2E) qui permet de tester l'application dans son ensemble.
</aside>

##==##

<div class='full-center'>
  <img src="assets/images/cypress-ui.png">
</div>

<aside class="notes">
Ce qui est déterminent dans le choix de CYpress est vraiment son approche de l'expérience développeur et particulièrement dans l'enjeu actuel de Visual Testing.
L'interface de Cypress permet d'avoir le contrôle sur les tests que l'on souhaite lancer, sur le navigateur cible et facilite le dbugging via un système de snapshot automatisé.

Grâce à des évolutions côté DX, Cypress se distingue des concurrents en analyzant le projet cible pour s'assurer de la complétion
des prérequis
</aside>
##==##

# Test suite

<!-- .slide: class="with-code" -->

```js
it('should work as expected', () => {
  cy.mount(<App/>);
  cy.get('[data-testid="increase"]').click();
  cy.get('[data-testid="increase"]').click();
});

```

<!-- .element: class="big-code" -->

##==##

<div class='full-center'>
<img src="assets/images/cypress-runner.png" style='zoom: 2'>
</div>

##==##

<!-- .slide: class="two-column" -->

# Avantages

- solution de tests automatisés
- exploration aisée des composants


##--##

<!-- .slide: data-background="./web_modules/sfeir-school-theme/images/bg-blue-1.png" -->

##==##

<!-- .slide: class="two-column" data-background="./web_modules/sfeir-school-theme/images/bg-blue-3.png" -->

##--##

# Inconvénients

- outil pour les développeurs


