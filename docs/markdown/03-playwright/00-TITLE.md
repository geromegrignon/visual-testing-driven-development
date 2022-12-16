<!-- .slide: class="transition bg-pink" -->

# Playwright

##==##

<div class="full-center sas-images-container">
  <img src="assets/images/playwright.png" width='50%' height='50%'>
</div>

<aside class="notes">
Playwright est un outil d'automatisation des navigateurs qui prend sa puissance de l'usage des devtools des navigateurs pour les exploiter.
L'enjeu est de profiter du contexte de test de navigateur pour à la fois utiliser une API dédiée et utiliser les capacités des devtools côté network.
Pour ceux qui connaissent PlayWright son positionnement dans des tests visuels peut sembler incongru ici.
Cependant grâce à 
</aside>

##==##

# Code

<!-- .slide: class="with-code" -->
```js
test('should work as expected', async ({ mount }) => {
  const component = await mount(<App />);

  await component.click('#increase');
  await component.click('#increase');
});

```
<!-- .element: class="big-code" -->

##==##

<div class='full-center'>
<img src="assets/images/jest-preview-2.png">
</div>

##==##

<div class='full-center'>
  <img src="assets/images/playwright-angular.png">
</div>

##==##

<div class='full-center'>
  <img src="assets/images/playwright-younes.png">
</div>

##==##

<!-- .slide: class="two-column" -->

# Avantages

- solution de tests automatisés
- capacité à tester en parallèle sur plusieurs navigateurs

##--##

<!-- .slide: data-background="./web_modules/sfeir-school-theme/images/bg-blue-1.png" -->

<aside class="notes">
- capacité d'extension du composant en agissant sur le contexte des devtools (ex: fake appel)
</aside>

##==##

<!-- .slide: class="two-column" data-background="./web_modules/sfeir-school-theme/images/bg-blue-3.png" -->

##--##

# Limites

- pas de mode **watch**

