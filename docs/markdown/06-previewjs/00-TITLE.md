<!-- .slide: class="transition bg-pink" -->

# PreviewJS

##==##

<div class="full-center">
<img src="assets/images/previewjs.svg" />
</div>

<aside class="notes">
PreviewJS est notre dernière solution du jour.
Après une première itération sous la forme de React Preview, son créateur a profité de la puissance mise à disposition par Vite et ESbuild pour créer une solution plus globale.
Cela lui permet de ne pas cibler que React, mais Vue, Svelte et SolidJS également.
</aside>

##==##

<div class="full-center">

<!-- .slide: class="with-code" -->
```js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        // ...
      </header>
    </div>
  );
}
```
<!-- .element: class="big-code" -->

</div>

##==##

<div class='full-center'>
<img src="assets/images/previewjs-0.png" style='zoom: 3'/>
</div>

##==##

<div class='full-center'>
<img src="assets/images/previewjs-1.png" style='zoom: 3'/>
</div>

##==##

<div class="full-center">

<!-- .slide: class="with-code" -->
```js
function App({title}: {title: string}) {
  return (
    <div className="App">
      <header className="App-header">
        // ...
      </header>
    </div>
  );
}
```
<!-- .element: class="big-code" -->

</div>

##==##

<div class='full-center'>
<img src="assets/images/previewjs-2.png" style='zoom: 3'/>
</div>

<aside class='notes'>
PreviewJS, c'est d'abord un plguin pour VSCode et les IDE Jetbrains
</aside>

##==##

<div class='full-center'>
<img src="assets/images/previewjs-cli.png" style='zoom: 2.3'>
</div>

<aside class='notes'>
PreviewJS c'est maintenant aussi une CLI.
Elle permet d'aller plus loin dans la démarche du créateur, celle de proposer une version light de Storybook.
</aside>

##==##


<!-- .slide: class="two-column" -->

# Avantages

- facilité d'utilisation
- facilité d'intégration (extension)
- CLI
- changement en live des props


##--##

<!-- .slide: data-background="./web_modules/sfeir-school-theme/images/bg-blue-1.png" -->

<aside class="notes">
Et si on on pouvait rendre ces contextes visuels accessibles à l'extérieur.
</aside>

##==##

<!-- .slide: class="two-column" data-background="./web_modules/sfeir-school-theme/images/bg-blue-3.png" -->

##--##

# Inconvéniens

- tests manuels

##==##

<div class="full-center">
<img src="assets/images/hype-cycle.png" />
</div>

##==##

<!-- .slide: class="two-column" data-background="./web_modules/sfeir-school-theme/images/bg-blue-3.png" -->

##--##

# Ressources

<br>

- [Jest Preview](https://www.jest-preview.com/)
- [Vitest Preview](https://www.vitest-preview.com/)
- [PlayWright Component Testing](https://playwright.dev/docs/test-components)
- [Cypress Component Testing](https://docs.cypress.io/guides/component-testing/overview)
- [Storybook](https://storybook.js.org/)
- [PreviewJS](https://previewjs.com/)

##==##

<!-- .slide: class="transition bg-pink" -->

# Merci de votre attention
