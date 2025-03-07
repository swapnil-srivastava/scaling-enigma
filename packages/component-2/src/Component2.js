import { LitElement, html, css } from 'lit';

class Component2 extends LitElement {
  static styles = css`
    /* ...styles... */
  `;

  render() {
    return html`<p>Component 2</p>`;
  }
}

customElements.define('component-2', Component2);
