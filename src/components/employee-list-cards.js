import {LitElement, html} from 'lit';
import {t} from '../utils/i18n.js';
import {employeeListCardsStyles} from './styles/employee-list-cards.css.js';

export class EmployeeListCards extends LitElement {
  static styles = employeeListCardsStyles;

  static properties = {
    employees: {type: Array},
  };

  constructor() {
    super();
    this.employees = [];
  }

  render() {
    return html`
      ${this.employees.map(
        (emp) => html`
          <div class="card" role="listitem" tabindex="0">
            <strong>${emp.firstName} ${emp.lastName}</strong>
            <div class="email">${emp.email}</div>
            <div class="department-position">
              ${emp.department} - ${emp.position}
            </div>
            <div>
              <button
                @click=${() => this._emitEdit(emp.id)}
                aria-label="Edit ${emp.firstName} ${emp.lastName}"
              >
                ${t('edit') || 'Edit'}
              </button>
              <button
                @click=${() => this._emitDelete(emp.id)}
                aria-label="Delete ${emp.firstName} ${emp.lastName}"
              >
                ${t('delete') || 'Delete'}
              </button>
            </div>
          </div>
        `
      )}
    `;
  }

  _emitEdit(id) {
    this.dispatchEvent(
      new CustomEvent('edit', {detail: id, bubbles: true, composed: true})
    );
  }

  _emitDelete(id) {
    this.dispatchEvent(
      new CustomEvent('delete', {detail: id, bubbles: true, composed: true})
    );
  }
}

customElements.define('employee-list-cards', EmployeeListCards);
