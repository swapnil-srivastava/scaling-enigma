import { html } from 'lit';
import '../Component3.js';

export default {
  title: 'Example/Component3',
  component: 'component-3',
};

const Template = ({ inputValue, someProperty }) => html`
  <component-3 .inputValue=${inputValue} .someProperty=${someProperty}></component-3>
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
