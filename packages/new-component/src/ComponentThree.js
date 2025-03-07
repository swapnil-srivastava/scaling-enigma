import { LitElement, html, css } from 'lit';

class ComponentThree extends LitElement {
  static styles = css`
    /* ...styles... */
  `;

  render() {
    return html`<p>Component Three</p>`;
  }
}

customElements.define('component-three', ComponentThree);
