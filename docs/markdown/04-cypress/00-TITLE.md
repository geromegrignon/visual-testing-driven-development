<!-- .slide: class="transition bg-pink" -->

# Cypress Component Testing

##==##

<div class="full-center sas-images-container">
  <img src="assets/images/cypress.png">
</div>

<aside class="notes">
Cypress est un framework de test end-to-end (E2E) qui permet de tester l'application dans son ensemble.
</aside>

##==##

# Configuration

<div class="full-center">
<img style="zoom: 2.3" src="assets/images/cypress-configuration.png">
</div>


<aside class="notes">
Grâce à des évolutions côté DX, Cypress se distingue des concurrents en analyzant le projet cible pour s'assurer de la complétion
des prérequis
</aside>
##==##

# Code

<!-- .slide: class="with-code" -->

```js
it('should work as expected', () => {
  cy.mount(<Stepper/>);
  cy.get('#increase').click();
  cy.get('#increase').click();
});

```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="two-column" -->

# Pros

- automated testing
- **might** not require additional work

##--##

<!-- .slide: data-background="./web_modules/sfeir-school-theme/images/bg-blue-1.png" -->

##==##

<!-- .slide: class="two-column" data-background="./web_modules/sfeir-school-theme/images/bg-blue-3.png" -->

##--##

# Cons

- heavy configuration
- not stable version yet (v0.3.0)


