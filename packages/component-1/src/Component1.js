import { LitElement, html, css } from 'lit';

class Component1 extends LitElement {
  static properties = {
    inputValue: { type: String },
    someProperty: { type: String },
    onClick: { type: Function },
    users: { type: Array }
  };

  constructor() {
    super();
    this.inputValue = '';
    this.someProperty = 'default';
    this.onClick = () => {};
    this.users = [];
  }

  static styles = css`
    /* ...styles... */
    .user-list {
      margin-top: 20px;
    }
  `;

  render() {
    return html`
      <div @click=${this.onClick}>
        <input type="text" .value=${this.inputValue} @input=${this._onInput} />
        <p>Component 1</p>
        <div class="user-list">
          ${this.users.map(
            user => html`
              <div class="user-item">
                <p>Name: ${user.firstName} ${user.lastName}</p>
                <p>Email: ${user.email}</p>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }

  _onInput(event) {
    this.inputValue = event.target.value;
  }
}

customElements.define('component-1', Component1);
