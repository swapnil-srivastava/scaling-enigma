import { html, fixture, expect } from '@open-wc/testing';
import '../src/Component1.js';

describe('Component1', () => {
  it('renders correctly', async () => {
    const el = await fixture(html`<component-1></component-1>`);
    expect(el.shadowRoot.querySelector('p').textContent).to.equal('Component 1');
  });
});
