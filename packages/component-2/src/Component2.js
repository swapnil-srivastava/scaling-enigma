import { LitElement, html, css } from 'lit';

class Component2 extends LitElement {
  static properties = {
    inputValue: { type: String },
  };

  constructor() {
    super();
    this.inputValue = '';
  }

  static styles = css`
    /* ...styles... */
  `;

  render() {
    return html`
      <input type="text" .value=${this.inputValue} @input=${this._onInput} />
      <p>Component 2</p>
    `;
  }

  _onInput(event) {
    this.inputValue = event.target.value;
  }
}

customElements.define('component-2', Component2);
