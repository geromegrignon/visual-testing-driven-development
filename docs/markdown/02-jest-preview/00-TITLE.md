<!-- .slide: class="transition bg-pink" -->

# Jest Preview

##==##

# Jest Preview

<!-- .slide: class="with-code" -->
```js
describe('App', () => {
  it('should work as expected', () => {
    const { container } = render(<App />);

    preview.debug();
  });
});

```
<!-- .element: class="big-code" -->

##==##


<iframe src="https://stackblitz.com/edit/jest-preview-qrql1i?embed=1&file=README.md&hideExplorer=1&hideNavigation=1&view=preview" width="100%" height="100%"></iframe>

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

- heavy configuration
- not stable version yet (v0.3.0)

##==##

# Limites


<aside class="notes">

- chaque test visuel est manuel
- cela demande de tester unitairement les composants


Si on pourrait imaginer l'enregistrement d'un snapshot pour chaque état de nos composants, l'absence d'une telle logique rend nos tests visuels dépendant de l'objectif de chacun de nos tests.
Cela nous amenrait à générer des états pour l'usage seul des tests visuels mais avec un niveau de maintenabilité assez faible 
</aside>
