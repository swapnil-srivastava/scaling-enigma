import { html, fixture, expect } from '@open-wc/testing';
import '../src/Component2.js';

describe('Component2', () => {
  it('renders correctly', async () => {
    const el = await fixture(html`<component-2></component-2>`);
    expect(el.shadowRoot.querySelector('p').textContent).to.equal('Component 2');
  });
});
