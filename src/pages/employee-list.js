import {LitElement, html} from 'lit';
import {employeeStore} from '../store/employee-store.js';
import {t} from '../utils/i18n.js';
import {mockEmployees} from '../data/mock-employees.js';

import '../components/confirmation-modal.js';
import '../components/employee-list-table.js';
import '../components/employee-list-cards.js';
import '../components/employee-pagination.js';
import {
  filterEmployees,
  paginateEmployees,
  getTotalPages,
  getModalMessage,
} from '../utils/employee-utils.js';
import styles from './styles/employee-list.css.js';

export class EmployeeList extends LitElement {
  static styles = styles;

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
    return filterEmployees(this.employees, this.searchQuery);
  }

  get paginatedEmployees() {
    return paginateEmployees(
      this.filteredEmployees,
      this.currentPage,
      this.itemsPerPage
    );
  }

  get totalPages() {
    return getTotalPages(this.filteredEmployees, this.itemsPerPage);
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
        ${this.viewMode === 'table'
          ? html`<employee-list-table
              .employees=${this.paginatedEmployees}
              .selectedEmployeeIds=${this.selectedEmployeeIds}
              @edit=${(e) => this._edit(e.detail)}
              @delete=${(e) => this._openDeleteModalSingle(e.detail)}
              @toggle-select-one=${(e) =>
                this._toggleSelectOne(e.detail.event, e.detail.id)}
              @toggle-select-all=${(e) =>
                this._toggleSelectAll(e.detail.checked)}
            ></employee-list-table>`
          : html`<employee-list-cards
              .employees=${this.paginatedEmployees}
              .selectedEmployeeIds=${this.selectedEmployeeIds}
              @edit=${(e) => this._edit(e.detail)}
              @delete=${(e) => this._openDeleteModalSingle(e.detail)}
            ></employee-list-cards>`}
        ${this.employees.length === 0
          ? html`
              <button class="import-btn" @click=${this._importMockData}>
                ${t('importFromMock') || 'Import from mock data'}
              </button>
            `
          : ''}
      </div>

      <employee-pagination
        .totalPages=${this.totalPages}
        .currentPage=${this.currentPage}
        @page-changed=${(e) => (this.currentPage = e.detail)}
      ></employee-pagination>

      <confirmation-modal
        .open=${this.modalOpen}
        title=${t('confirmDeleteTitle') || 'Are you sure?'}
        message=${this._modalMessage()}
        @confirm=${this._onModalConfirm}
        @cancel=${this._onModalCancel}
      ></confirmation-modal>
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
    if (this.selectedEmployeeIds.length > 0) this.modalOpen = true;
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

  _toggleSelectAll(checked) {
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

  _importMockData() {
    mockEmployees.forEach((emp) => employeeStore.add(emp));
    this.employees = employeeStore.getAll();
  }

  _modalMessage() {
    return getModalMessage(this.selectedEmployeeIds, this.employees, t);
  }
}

customElements.define('employee-list', EmployeeList);
