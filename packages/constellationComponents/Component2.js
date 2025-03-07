import { LitElement, html, css } from 'lit';

class Component2 extends LitElement {
  static styles = css`
    /* Add component styles here */
  `;

  render() {
    return html`
      <!-- Add component template here -->
    `;
  }
}

customElements.define('component-2', Component2);

export default Component2;
