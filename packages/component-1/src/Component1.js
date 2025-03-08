import { LitElement, html, css } from 'lit';

class Component1 extends LitElement {
  static properties = {
    inputValue: { type: String },
    someProperty: { type: String },
    onClick: { type: Function }
  };

  constructor() {
    super();
    this.inputValue = '';
    this.someProperty = 'default';
    this.onClick = () => {};
  }

  static styles = css`
    /* ...styles... */
  `;

  render() {
    return html`
      <div @click=${this.onClick}>
        <input type="text" .value=${this.inputValue} @input=${this._onInput} />
        <p>Component 1</p>
      </div>
    `;
  }

  _onInput(event) {
    this.inputValue = event.target.value;
  }
}

customElements.define('component-1', Component1);
