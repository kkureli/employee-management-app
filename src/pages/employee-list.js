import {LitElement, html} from 'lit';

class EmployeeList extends LitElement {
  render() {
    return html`<h2>Employee List Page</h2>`;
  }
}
customElements.define('employee-list', EmployeeList);
