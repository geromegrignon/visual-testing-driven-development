import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return [
    '00-school/00-TITLE.md',
    '00-school/speaker-ggr.md',
    '00-school/css-awesome.md',
  ];
}

function jestPreview() {
  return ['02-jest-preview/00-TITLE.md'];
}

function playwright() {
  return ['03-playwright/00-TITLE.md'];
}

function cypress() {
  return ['04-cypress/00-TITLE.md'];
}

function storybook() {
  return ['05-storybook/00-TITLE.md'];
}

function previewjs() {
  return ['06-previewjs/00-TITLE.md'];
}
function formation() {
  return [
    //
    ...schoolSlides(), //
    ...jestPreview(), //
    ...playwright(), //
    ...cypress(), //
    ...storybook(), //
    ...previewjs(), //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
