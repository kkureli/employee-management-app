import {LitElement, html} from 'lit';
import {t} from '../utils/i18n.js';
import {employeeListTableStyles} from './styles/employee-list-table.css.js';

export class EmployeeListTable extends LitElement {
  static styles = employeeListTableStyles;

  static properties = {
    employees: {type: Array},
    selectedEmployeeIds: {type: Array},
  };

  constructor() {
    super();
    this.employees = [];
    this.selectedEmployeeIds = [];
  }

  render() {
    return html`
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                .checked=${this.selectedEmployeeIds.length ===
                  this.employees.length && this.employees.length > 0}
                @change=${this._toggleSelectAll}
              />
            </th>
            <th>${t('firstName') || 'First Name'}</th>
            <th>${t('lastName') || 'Last Name'}</th>
            <th>${t('employmentDate') || 'Date of Employment'}</th>
            <th>${t('dob') || 'Date of Birth'}</th>
            <th>${t('phone') || 'Phone'}</th>
            <th>${t('email') || 'Email'}</th>
            <th>${t('department') || 'Department'}</th>
            <th>${t('position') || 'Position'}</th>
            <th>${t('actions') || 'Actions'}</th>
          </tr>
        </thead>
        <tbody>
          ${this.employees.map(
            (emp) => html`
              <tr>
                <td data-label="">
                  <input
                    type="checkbox"
                    .checked=${this.selectedEmployeeIds.includes(emp.id)}
                    @change=${(e) => this._toggleSelectOne(e, emp.id)}
                  />
                </td>
                <td data-label="${t('firstName') || 'First Name'}">
                  ${emp.firstName}
                </td>
                <td data-label="${t('lastName') || 'Last Name'}">
                  ${emp.lastName}
                </td>
                <td data-label="${t('employmentDate') || 'Date of Employment'}">
                  ${emp.employmentDate}
                </td>
                <td data-label="${t('dob') || 'Date of Birth'}">${emp.dob}</td>
                <td data-label="${t('phone') || 'Phone'}">${emp.phone}</td>
                <td data-label="${t('email') || 'Email'}">${emp.email}</td>
                <td data-label="${t('department') || 'Department'}">
                  ${emp.department}
                </td>
                <td data-label="${t('position') || 'Position'}">
                  ${emp.position}
                </td>
                <td data-label="${t('actions') || 'Actions'}" class="actions">
                  <button @click=${() => this._emitEdit(emp.id)} title="Edit">
                    ✏️
                  </button>
                  <button
                    @click=${() => this._emitDelete(emp.id)}
                    title="Delete"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            `
          )}
        </tbody>
      </table>
    `;
  }

  _toggleSelectAll(e) {
    this.dispatchEvent(
      new CustomEvent('toggle-select-all', {
        detail: {checked: e.target.checked},
        bubbles: true,
        composed: true,
      })
    );
  }

  _toggleSelectOne(e, id) {
    this.dispatchEvent(
      new CustomEvent('toggle-select-one', {
        detail: {event: e, id},
        bubbles: true,
        composed: true,
      })
    );
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

customElements.define('employee-list-table', EmployeeListTable);
