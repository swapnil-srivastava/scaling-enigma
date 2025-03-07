import { LitElement, html, css } from 'lit-element';

class Component2 extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
        background-color: #f9f9f9;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    `;
  }

  render() {
    return html`
      <div>
        <h2>Component 2</h2>
        <p>This is a reusable component built with LitElement.</p>
      </div>
    `;
  }
}

customElements.define('component-2', Component2);