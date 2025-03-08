import { LitElement, html, css } from 'lit';

class Component1 extends LitElement {
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
      <p>Component 1</p>
    `;
  }

  _onInput(event) {
    this.inputValue = event.target.value;
  }
}

customElements.define('component-1', Component1);
