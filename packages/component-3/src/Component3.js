import { LitElement, html, css } from 'lit';

class Component3 extends LitElement {
  static properties = {
    inputValue: { type: String },
    someProperty: { type: String } // Add this line
  };

  constructor() {
    super();
    this.inputValue = '';
    this.someProperty = 'default'; // Add this line
  }

  static styles = css`
    /* ...styles... */
  `;

  render() {
    return html`
      <input type="text" .value=${this.inputValue} @input=${this._onInput} />
      <p>Component 3</p>
    `;
  }

  _onInput(event) {
    this.inputValue = event.target.value;
  }
}

customElements.define('component-3', Component3);
