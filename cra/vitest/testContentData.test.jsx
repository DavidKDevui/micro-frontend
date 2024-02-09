import { expect, test } from 'vitest';
import { render } from 'react-dom';
import { createElement } from 'react';
import contentData from '../host/src/components/contentData/contentData';
import { JSDOM } from 'jsdom';

test('renders contentData', () => {
  // Crée un environnement DOM simulé avec jsdom
  const { window } = new JSDOM('<!doctype html><html><body></body></html>');
  global.document = window.document;

  // Crée un élément div pour simuler le montage du composant
  const container = document.createElement('div');

  // Rend le composant dans le conteneur
  render(createElement(contentData, { title: 'Test Title' }), container);

  // Vérifie si le contenu est correctement rendu
  expect(container.innerHTML).toBe('<div class="custom-component"><h2>Test Title</h2><h3></h3><p></p></div>');
});