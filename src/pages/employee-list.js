import {LitElement, html, css} from 'lit';
import {employeeStore} from '../store/employee-store.js';
import {t} from '../utils/i18n.js';
import '../components/confirmation-modal.js';
import {mockEmployees} from '../data/mock-employees.js';

export class EmployeeList extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      color: #333;
    }
    h2 {
      color: #f36d00;
      margin-bottom: 1rem;
    }
    .table-container {
      background: #fafafa;
      padding: 1rem;
      border-radius: 10px;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0 8px;
    }
    th {
      text-align: left;
      padding: 12px 15px;
      font-weight: 600;
      color: #f36d00;
      font-size: 0.9rem;
      user-select: none;
    }
    td {
      padding: 12px 15px;
      background: white;
      vertical-align: middle;
    }
    tr:hover td {
      background: #f9f1e7;
    }
    tbody tr {
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }
    input[type='checkbox'] {
      transform: scale(1.3);
      cursor: pointer;
    }
    .actions button {
      background: none;
      border: none;
      cursor: pointer;
      color: #f36d00;
      font-size: 1.2rem;
      margin-left: 8px;
      transition: color 0.2s ease;
    }
    .actions button:hover {
      color: #b04c00;
    }
    .pagination {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      gap: 6px;
    }
    .pagination button {
      background: none;
      border: 1.5px solid #f36d00;
      color: #f36d00;
      font-weight: 600;
      padding: 6px 12px;
      border-radius: 7px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .pagination button:hover:not(:disabled) {
      background: #f36d00;
      color: white;
    }
    .pagination button:disabled {
      background: #f36d00;
      color: white;
      cursor: default;
    }
    .controls {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      gap: 0.5rem;
    }
    .view-toggle button {
      margin-left: 0.5rem;
      padding: 0.5rem 1rem;
      border: none;
      background-color: #f36d00;
      color: white;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
    }
    .view-toggle button:hover:not(:disabled) {
      background-color: #b04c00;
    }
    .view-toggle button:disabled {
      background-color: #8c4700;
      cursor: default;
    }
    input[type='text'] {
      flex-grow: 1;
      min-width: 200px;
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid #ccc;
      font-size: 1rem;
    }
    .bulk-actions {
      background: #fce5d6;
      color: #b04c00;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: space-between;
    }
    .bulk-actions button {
      background-color: #f36d00;
      border: none;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 7px;
      cursor: pointer;
      font-weight: 700;
      transition: background-color 0.2s ease;
    }
    .bulk-actions button:hover {
      background-color: #b04c00;
    }
    .card {
      background: white;
      box-shadow: 0 3px 8px rgb(0 0 0 / 0.1);
      border-radius: 10px;
      padding: 1rem 1.5rem;
      margin-bottom: 1rem;
      font-size: 1rem;
      color: #333;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    .card strong {
      font-weight: 700;
      font-size: 1.15rem;
      color: #f36d00;
    }
    .card .email {
      font-style: italic;
      color: #666;
    }
    .card .department-position {
      font-weight: 600;
      color: #555;
    }
    .card button {
      margin-top: 0.75rem;
      background-color: transparent;
      border: 1.5px solid #f36d00;
      color: #f36d00;
      font-weight: 600;
      border-radius: 6px;
      padding: 0.4rem 1rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .card button:hover {
      background-color: #f36d00;
      color: white;
    }
    .card button + button {
      margin-left: 0.5rem;
      border-color: #b04c00;
      color: #b04c00;
    }
    .card button + button:hover {
      background-color: #b04c00;
      color: white;
    }
    .import-btn {
      background-color: #f36d00;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 7px;
      cursor: pointer;
      font-weight: 700;
      margin-top: 1rem;
      transition: background-color 0.2s ease;
    }
    .import-btn:hover {
      background-color: #b04c00;
    }
    @media (max-width: 768px) {
      table,
      thead,
      tbody,
      th,
      td,
      tr {
        display: block;
      }
      thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
      }
      tbody tr {
        border: 1px solid #ccc;
        margin-bottom: 1rem;
        border-radius: 8px;
        padding: 0.5rem;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
      }
      tbody td {
        border: none;
        position: relative;
        padding-left: 50%;
        text-align: left;
      }
      tbody td::before {
        position: absolute;
        top: 0.5rem;
        left: 1rem;
        width: 45%;
        white-space: nowrap;
        font-weight: 600;
        color: #f36d00;
        content: attr(data-label);
      }
    }
    @media (max-width: 600px) {
      .controls {
        flex-direction: column;
        align-items: flex-start;
      }
      .view-toggle {
        margin-top: 0.5rem;
      }
    }
  `;
  static properties = {
    viewMode: {type: String},
    searchQuery: {type: String},
    currentPage: {type: Number},
    employees: {type: Array},
    selectedEmployeeIds: {type: Array},
    modalOpen: {type: Boolean},
  };

  constructor() {
    super();
    this.viewMode = 'table';
    this.searchQuery = '';
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.employees = [];
    this.selectedEmployeeIds = [];
    this.modalOpen = false;

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
      <h2>${t('employeeList')}</h2>

      ${this.selectedEmployeeIds.length > 0
        ? html`
            <div class="bulk-actions">
              ${this.selectedEmployeeIds.length} ${t('selected') || 'selected'}.
              <button @click=${this._openDeleteModal}>
                ${t('deleteSelected') || 'Delete Selected'}
              </button>
            </div>
          `
        : ''}

      <div class="controls">
        <input
          type="text"
          placeholder=${t('search') || 'Search...'}
          @input=${this._onSearch}
        />
        <div class="view-toggle">
          <button
            ?disabled=${this.viewMode === 'table'}
            @click=${() => (this.viewMode = 'table')}
          >
            ${t('table') || 'Table'}
          </button>
          <button
            ?disabled=${this.viewMode === 'list'}
            @click=${() => (this.viewMode = 'list')}
          >
            ${t('list') || 'List'}
          </button>
        </div>
      </div>

      <div class="table-container">
        ${this.viewMode === 'table' ? this._renderTable() : this._renderList()}
        ${this.employees.length === 0
          ? html`
              <button class="import-btn" @click=${this._importMockData}>
                ${t('importFromMock') || 'Import from mock data'}
              </button>
            `
          : ''}
      </div>

      ${this._renderPagination()}

      <confirmation-modal
        .open=${this.modalOpen}
        title=${t('confirmDeleteTitle') || 'Are you sure?'}
        message=${this._modalMessage()}
        @confirm=${this._onModalConfirm}
        @cancel=${this._onModalCancel}
      ></confirmation-modal>
    `;
  }

  _importMockData() {
    mockEmployees.forEach((emp) => employeeStore.add(emp));
    this.employees = employeeStore.getAll();
  }

  _modalMessage() {
    if (this.selectedEmployeeIds.length === 1) {
      const emp = this.employees.find(
        (e) => e.id === this.selectedEmployeeIds[0]
      );
      if (emp) {
        const template = t('confirmDeleteMessage');
        return template
          .replace('{firstName}', emp.firstName)
          .replace('{lastName}', emp.lastName);
      }
    } else if (this.selectedEmployeeIds.length > 1) {
      return t('confirmDeleteMultipleMessage');
    }
    return '';
  }

  _renderTable() {
    return html`
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                .checked=${this.selectedEmployeeIds.length ===
                  this.filteredEmployees.length &&
                this.filteredEmployees.length > 0}
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
          ${this.paginatedEmployees.map(
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
                  <button @click=${() => this._edit(emp.id)} title="Edit">
                    ✏️
                  </button>
                  <button
                    @click=${() => this._openDeleteModalSingle(emp.id)}
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

  _renderList() {
    return html`
      ${this.paginatedEmployees.map(
        (emp) => html`
          <div class="card" role="listitem" tabindex="0">
            <strong>${emp.firstName} ${emp.lastName}</strong>
            <div class="email">${emp.email}</div>
            <div class="department-position">
              ${emp.department} - ${emp.position}
            </div>
            <div>
              <button
                @click=${() => this._edit(emp.id)}
                aria-label="Edit ${emp.firstName} ${emp.lastName}"
              >
                ${t('edit') || 'Edit'}
              </button>
              <button
                @click=${() => this._openDeleteModalSingle(emp.id)}
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

  _openDeleteModalSingle(id) {
    this.selectedEmployeeIds = [id];
    this.modalOpen = true;
  }

  _openDeleteModal() {
    if (this.selectedEmployeeIds.length > 0) {
      this.modalOpen = true;
    }
  }

  _onModalConfirm() {
    this.selectedEmployeeIds.forEach((id) => employeeStore.delete(id));
    this.selectedEmployeeIds = [];
    this.modalOpen = false;
  }

  _onModalCancel() {
    this.modalOpen = false;
    this.selectedEmployeeIds = [];
  }

  _toggleSelectAll(e) {
    const checked = e.target.checked;
    if (checked) {
      this.selectedEmployeeIds = this.filteredEmployees.map((emp) => emp.id);
    } else {
      this.selectedEmployeeIds = [];
    }
  }

  _toggleSelectOne(e, id) {
    const checked = e.target.checked;
    if (checked) {
      if (!this.selectedEmployeeIds.includes(id)) {
        this.selectedEmployeeIds = [...this.selectedEmployeeIds, id];
      }
    } else {
      this.selectedEmployeeIds = this.selectedEmployeeIds.filter(
        (i) => i !== id
      );
    }
  }
}

customElements.define('employee-list', EmployeeList);
