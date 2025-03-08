import { LitElement, html, css } from 'lit';

class MainComponent extends LitElement {
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
      <p>Main Component</p>
    `;
  }

  _onInput(event) {
    this.inputValue = event.target.value;
  }
}

customElements.define('main-component', MainComponent);
