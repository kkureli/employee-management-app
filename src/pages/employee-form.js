import {LitElement, html} from 'lit';

class EmployeeForm extends LitElement {
  render() {
    return html`<h2>Employee Form Page</h2>`;
  }
}
customElements.define('employee-form', EmployeeForm);
