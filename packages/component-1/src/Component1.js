import { LitElement, html, css } from 'lit';

class Component1 extends LitElement {
  static styles = css`
    /* ...styles... */
  `;

  render() {
    return html`<p>Component 1</p>`;
  }
}

customElements.define('component-1', Component1);
