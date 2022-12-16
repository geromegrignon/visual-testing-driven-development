<!-- .slide: class="transition bg-pink" -->

# Cypress Component Testing

##==##

## Kezako

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
it('clicking + fires a change event with the incremented value', () => {
  const onChangeSpy = cy.spy().as('onChangeSpy');
  cy.mount(<Stepper initial={100} onChange={onChangeSpy}/>);

  cy.get('[data-cy=counter]').should('have.text', '100');
  cy.get('[data-cy=increment]').click();
  cy.get('@onChangeSpy').should('have.been.calledWith', 1);
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


