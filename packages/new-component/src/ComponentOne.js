import { LitElement, html, css } from 'lit';

class ComponentOne extends LitElement {
  static styles = css`
    /* ...styles... */
  `;

  render() {
    return html`<p>Component One</p>`;
  }
}

customElements.define('component-one', ComponentOne);
