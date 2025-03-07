import { LitElement, html, css } from 'lit';

class Component3 extends LitElement {
  static styles = css`
    /* ...styles... */
  `;

  render() {
    return html`<p>Component 3</p>`;
  }
}

customElements.define('component-3', Component3);
