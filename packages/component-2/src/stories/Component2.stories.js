import { html } from 'lit';
import '../Component2.js';

export default {
  title: 'Example/Component2',
  component: 'component-2',
};

const Template = ({ inputValue, someProperty }) => html`
  <component-2 .inputValue=${inputValue} .someProperty=${someProperty}></component-2>
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
