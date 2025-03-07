import { html, fixture, expect } from '@open-wc/testing';
import '../src/Component3.js';

describe('Component3', () => {
  it('renders correctly', async () => {
    const el = await fixture(html`<component-3></component-3>`);
    expect(el.shadowRoot.querySelector('p').textContent).to.equal('Component 3');
  });
});
