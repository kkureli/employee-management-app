import {LitElement, html, css} from 'lit';
import {employeeStore} from '../store/employee-store.js';
import {t} from '../utils/i18n.js';

export class EmployeeList extends LitElement {
  static styles = css`
    .controls {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    .view-toggle button {
      margin-left: 0.5rem;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th,
    td {
      border: 1px solid #ccc;
      padding: 0.5rem;
    }
    .card {
      border: 1px solid #ccc;
      padding: 1rem;
      margin-bottom: 1rem;
    }
    .pagination {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
    }
    .pagination button {
      margin: 0 0.25rem;
    }
  `;

  static properties = {
    viewMode: {type: String},
    searchQuery: {type: String},
    currentPage: {type: Number},
    employees: {type: Array},
  };

  constructor() {
    super();
    this.viewMode = 'table';
    this.searchQuery = '';
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.employees = [];

    employeeStore.initIfEmpty();
    this.employees = employeeStore.getAll();

    this._onEmployeesUpdate = this._onEmployeesUpdate.bind(this);
    window.addEventListener('employees-updated', this._onEmployeesUpdate);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('employees-updated', this._onEmployeesUpdate);
  }

  _onEmployeesUpdate(e) {
    this.employees = e.detail;
  }

  get filteredEmployees() {
    return this.employees.filter((emp) => {
      const fullName = `${emp.firstName} ${emp.lastName}`.toLowerCase();
      return fullName.includes(this.searchQuery.toLowerCase());
    });
  }

  get paginatedEmployees() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredEmployees.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
  }

  render() {
    return html`
      <div class="controls">
        <input
          type="text"
          placeholder=${t('search') || 'Search...'}
          @input=${this._onSearch}
        />
        <div class="view-toggle">
          <button @click=${() => (this.viewMode = 'table')}>
            ${t('table') || 'Table'}
          </button>
          <button @click=${() => (this.viewMode = 'list')}>
            ${t('list') || 'List'}
          </button>
        </div>
      </div>

      ${this.viewMode === 'table' ? this._renderTable() : this._renderList()}
      ${this._renderPagination()}
    `;
  }

  _renderTable() {
    return html`
      <table>
        <thead>
          <tr>
            <th>${t('fullName') || 'Full Name'}</th>
            <th>${t('email') || 'Email'}</th>
            <th>${t('department') || 'Department'}</th>
            <th>${t('position') || 'Position'}</th>
            <th>${t('actions') || 'Actions'}</th>
          </tr>
        </thead>
        <tbody>
          ${this.paginatedEmployees.map(
            (emp) => html`
              <tr>
                <td>${emp.firstName} ${emp.lastName}</td>
                <td>${emp.email}</td>
                <td>${emp.department}</td>
                <td>${emp.position}</td>
                <td>
                  <button @click=${() => this._edit(emp.id)}>
                    ${t('edit') || 'Edit'}
                  </button>
                  <button @click=${() => this._delete(emp.id)}>
                    ${t('delete') || 'Delete'}
                  </button>
                </td>
              </tr>
            `
          )}
        </tbody>
      </table>
    `;
  }

  _renderList() {
    return html`
      ${this.paginatedEmployees.map(
        (emp) => html`
          <div class="card">
            <strong>${emp.firstName} ${emp.lastName}</strong><br />
            ${emp.email}<br />
            ${emp.department} - ${emp.position}<br />
            <button @click=${() => this._edit(emp.id)}>
              ${t('edit') || 'Edit'}
            </button>
            <button @click=${() => this._delete(emp.id)}>
              ${t('delete') || 'Delete'}
            </button>
          </div>
        `
      )}
    `;
  }

  _renderPagination() {
    return html`
      <div class="pagination">
        ${Array.from({length: this.totalPages}).map(
          (_, i) => html`
            <button
              ?disabled=${this.currentPage === i + 1}
              @click=${() => (this.currentPage = i + 1)}
            >
              ${i + 1}
            </button>
          `
        )}
      </div>
    `;
  }

  _onSearch(e) {
    this.searchQuery = e.target.value;
    this.currentPage = 1;
  }

  _edit(id) {
    window.history.pushState({}, '', `/edit/${id}`);
    window.dispatchEvent(new Event('popstate'));
  }

  _delete(id) {
    const confirmed = confirm(t('confirmDelete'));
    if (!confirmed) return;
    employeeStore.delete(id);
  }
}

customElements.define('employee-list', EmployeeList);
