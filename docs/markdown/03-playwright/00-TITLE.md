<!-- .slide: class="transition bg-pink" -->

# Playwright

##==##

# Kezako

##==##

Outil d'automatisation des navigateurs web

<aside class="notes">
L'enjeu est de profiter du contexte de test de navigateur pour à la fois utiliser une API dédiée et utiliser les capacités des devtools côté network.
</aside>

# Code

<!-- .slide: class="with-code" -->

```js
test('event should work', async ({ mount }) => {
  let clicked = false;
  // Mount a component. Returns locator pointing to the component.
  const component = await mount(<Button title="Submit"
                                        onClick={() => clicked = true}>
  </Button>);

  await expect(component).toContainText('Submit');
  await component.click();
  expect(clicked).toBeTruthy();
});

```

<!-- .element: class="big-code" -->

##==##



<!-- .slide: class="two-column" -->

# Pros

- automated testing
- **might** not require additional work
- capacité à tester en parallèle et sur plusieurs navigateurs et permet de s'assurer de la robustesse en fonction des implémentations d'ECMAScript

##--##

<!-- .slide: data-background="./web_modules/sfeir-school-theme/images/bg-blue-1.png" -->

<aside class="notes">
- capacité d'extension du composant en agissant sur le contexte des devtools (ex: fake appel)
</aside>

##==##

<!-- .slide: class="two-column" data-background="./web_modules/sfeir-school-theme/images/bg-blue-3.png" -->

##--##

# Cons

- pas de mode **watch**

