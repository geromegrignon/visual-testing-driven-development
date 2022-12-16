<!-- .slide: class="transition bg-pink" -->

# Jest Preview

##==##

<div class="full-center sas-images-container">
<img src="assets/images/jest-preview.svg">
<img src="assets/images/vitest-preview.svg">
</div>

<aside class="notes">
Jest Preview et son sibling Vitest Preview sont des outils du même auteur qui viennent se brancher directement sur le contexte d'un test de composant.

</aside>

##==##

<div class='full-center'>
<img src="assets/images/jest-preview-0.png">
</div>

##==##

# Jest Preview

<!-- .slide: class="with-code" -->

```js
it('should work as expected', () => {
  const { container } = render(<App/>);

  userEvent.click(screen.getByTestId('increase'));
  userEvent.click(screen.getByTestId('increase'));

  preview.debug();
});

```

<!-- .element: class="big-code" -->

##==##

<div class='full-center'>
<img src="assets/images/jest-preview-2.png">
</div>

##==##

<!-- .slide: class="with-code" -->

```js
it('should work as expected', () => {
  const { container } = render(<App/>);

  preview.debug();

  userEvent.click(screen.getByTestId('increase'));
  userEvent.click(screen.getByTestId('increase'));
});

```

<!-- .element: class="big-code" -->

<aside class='notes'>
Cependant Si cette preview est regénéré grâce au hot reloading des test runners utilisés, cette preview est statique et représenté l'état ud composant au moment du call
</aside>

##==##

<div class='full-center'>
<img src="assets/images/jest-preview-0.png">
</div>

##==##

<!-- .slide: class="two-column" -->

# Avantages

- automated testing
- **might** not require additional work

##--##

<!-- .slide: data-background="./web_modules/sfeir-school-theme/images/bg-blue-1.png" -->

##==##

<!-- .slide: class="two-column" data-background="./web_modules/sfeir-school-theme/images/bg-blue-3.png" -->

##--##

# Limites

- not stable version yet (v0.3.0)
- chaque test visuel est manuel
- cela demande de tester unitairement les composants
- image statique du dom

<aside class="notes">
Si on pourrait imaginer l'enregistrement d'un snapshot pour chaque état de nos composants, l'absence d'une telle logique
rend nos tests visuels dépendant de l'objectif de chacun de nos tests.
Cela nous amenrait à générer des états pour l'usage seul des tests visuels mais avec un niveau de maintenabilité assez
faible
</aside>
