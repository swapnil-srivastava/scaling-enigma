import { html } from 'lit';
import '../MainComponent.js';

export default {
  title: 'Example/MainComponent',
  component: 'main-component',
};

const Template = ({ inputValue, someProperty }) => html`
  <main-component .inputValue=${inputValue} .someProperty=${someProperty}></main-component>
`;

export const Default = Template.bind({});
Default.args = {
  inputValue: '',
  someProperty: 'default',
};

export const WithInputValue = Template.bind({});
WithInputValue.args = {
  inputValue: 'Hello World',
  someProperty: 'default',
};

export const WithSomeProperty = Template.bind({});
WithSomeProperty.args = {
  inputValue: '',
  someProperty: 'new value',
};
