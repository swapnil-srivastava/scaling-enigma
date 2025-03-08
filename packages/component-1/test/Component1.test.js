import { fixture, html, expect } from '@open-wc/testing';
import '../src/Component1.js';

describe('Component1', () => {
  it('should render with default values', async () => {
    const el = await fixture(html`<component-1></component-1>`);
    expect(el.inputValue).to.equal('');
    expect(el.someProperty).to.equal('default');
  });

  it('should handle input changes', async () => {
    const el = await fixture(html`<component-1></component-1>`);
    const input = el.shadowRoot.querySelector('input');
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    expect(el.inputValue).to.equal('test');
  });

  it('should handle click events', async () => {
    let clicked = false;
    const el = await fixture(
      html`<component-1 .onClick=${() => (clicked = true)}></component-1>`
    );
    const div = el.shadowRoot.querySelector('div');
    div.click();
    expect(clicked).to.be.true;
  });
});
