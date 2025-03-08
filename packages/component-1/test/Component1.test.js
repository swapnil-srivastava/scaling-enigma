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

  it('should render users list correctly', async () => {
    const testUsers = [
      { firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
      { firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com' }
    ];
    
    const el = await fixture(
      html`<component-1 .users=${testUsers}></component-1>`
    );
    
    const userItems = el.shadowRoot.querySelectorAll('.user-item');
    expect(userItems.length).to.equal(2);
    
    const firstUser = userItems[0].textContent;
    expect(firstUser).to.include('John');
    expect(firstUser).to.include('Doe');
    expect(firstUser).to.include('john@example.com');
  });

  it('should handle empty users array', async () => {
    const el = await fixture(html`<component-1></component-1>`);
    const userItems = el.shadowRoot.querySelectorAll('.user-item');
    expect(userItems.length).to.equal(0);
  });
});
