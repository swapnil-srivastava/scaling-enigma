import { html, fixture, expect } from '@open-wc/testing';
import { expect as chaiExpect } from '@esm-bundle/chai';
import { setViewport } from '@web/test-runner-commands';
import '../src/Component1.js';

describe('Component1', () => {
  it('renders correctly', async () => {
    const el = await fixture(html`<component-1></component-1>`);
    expect(el.shadowRoot.querySelector('p').textContent).to.equal('Component 1');
  });

  it('has a default property', async () => {
    const el = await fixture(html`<component-1></component-1>`);
    expect(el.someProperty).to.equal('default');
  });

  it('responds to property changes', async () => {
    const el = await fixture(html`<component-1 someProperty="new value"></component-1>`);
    expect(el.someProperty).to.equal('new value');
  });

  it('has a default inputValue property', async () => {
    const el = await fixture(html`<component-1></component-1>`);
    expect(el.inputValue).to.equal('');
  });

  it('responds to input changes', async () => {
    const el = await fixture(html`<component-1></component-1>`);
    const input = el.shadowRoot.querySelector('input');
    input.value = 'new value';
    input.dispatchEvent(new Event('input'));
    expect(el.inputValue).to.equal('new value');
  });

  it('handles invalid property', async () => {
    const el = await fixture(html`<component-1 someProperty="invalid"></component-1>`);
    expect(el.someProperty).to.not.equal('default');
  });

  it('handles invalid input changes', async () => {
    const el = await fixture(html`<component-1></component-1>`);
    const input = el.shadowRoot.querySelector('input');
    input.value = null;
    input.dispatchEvent(new Event('input'));
    expect(el.inputValue).to.equal('');
  });

  it('matches the snapshot', async () => {
    const el = await fixture(html`<component-1></component-1>`);
    await setViewport({ width: 800, height: 600 });
    await expect(el).shadowDom.to.equalSnapshot();
  });
});
