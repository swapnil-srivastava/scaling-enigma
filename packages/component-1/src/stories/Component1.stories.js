import { html } from 'lit';
import '../Component1.js';

export default {
  title: 'Example/Component1',
  component: 'component-1',
};

const Template = ({ inputValue, someProperty }) => html`
  <component-1 .inputValue=${inputValue} .someProperty=${someProperty}></component-1>
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
