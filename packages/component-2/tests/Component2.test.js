import { html, fixture, expect } from '@open-wc/testing';
import '../src/Component2.js';

describe('Component2', () => {
  it('renders correctly', async () => {
    const el = await fixture(html`<component-2></component-2>`);
    expect(el.shadowRoot.querySelector('p').textContent).to.equal('Component 2');
  });

  it('has a default property', async () => {
    const el = await fixture(html`<component-2></component-2>`);
    expect(el.someProperty).to.equal('default');
  });

  it('responds to property changes', async () => {
    const el = await fixture(html`<component-2 someProperty="new value"></component-2>`);
    expect(el.someProperty).to.equal('new value');
  });

  it('has a default inputValue property', async () => {
    const el = await fixture(html`<component-2></component-2>`);
    expect(el.inputValue).to.equal('');
  });

  it('responds to input changes', async () => {
    const el = await fixture(html`<component-2></component-2>`);
    const input = el.shadowRoot.querySelector('input');
    input.value = 'new value';
    input.dispatchEvent(new Event('input'));
    expect(el.inputValue).to.equal('new value');
  });

  it('handles invalid property', async () => {
    const el = await fixture(html`<component-2 someProperty="invalid"></component-2>`);
    expect(el.someProperty).to.not.equal('default');
  });

  it('handles invalid input changes', async () => {
    const el = await fixture(html`<component-2></component-2>`);
    const input = el.shadowRoot.querySelector('input');
    input.value = null;
    input.dispatchEvent(new Event('input'));
    expect(el.inputValue).to.equal('');
  });
});
