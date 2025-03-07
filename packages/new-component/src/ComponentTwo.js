import { LitElement, html, css } from 'lit';

class ComponentTwo extends LitElement {
  static styles = css`
    /* ...styles... */
  `;

  render() {
    return html`<p>Component Two</p>`;
  }
}

customElements.define('component-two', ComponentTwo);
