import { html, fixture, expect } from '@open-wc/testing';
import '../src/MainComponent.js';

describe('MainComponent', () => {
  it('renders correctly', async () => {
    const el = await fixture(html`<main-component></main-component>`);
    expect(el.shadowRoot.querySelector('p').textContent).to.equal('Main Component');
  });
});
