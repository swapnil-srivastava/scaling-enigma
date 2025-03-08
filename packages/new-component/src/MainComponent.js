import { LitElement, html, css } from 'lit';

class MainComponent extends LitElement {
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
      <p>Main Component</p>
    `;
  }

  _onInput(event) {
    this.inputValue = event.target.value;
  }
}

customElements.define('main-component', MainComponent);
