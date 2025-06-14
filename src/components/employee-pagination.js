import {LitElement, html} from 'lit';
import {employeePaginationStyles} from './styles/employee-pagination.css';

export class EmployeePagination extends LitElement {
  static styles = employeePaginationStyles;

  static properties = {
    totalPages: {type: Number},
    currentPage: {type: Number},
  };

  constructor() {
    super();
    this.totalPages = 1;
    this.currentPage = 1;
  }

  render() {
    return html`
      <div class="pagination">
        ${Array.from({length: this.totalPages}).map(
          (_, i) => html`
            <button
              ?disabled=${this.currentPage === i + 1}
              @click=${() => this._onPageClick(i + 1)}
            >
              ${i + 1}
            </button>
          `
        )}
      </div>
    `;
  }

  _onPageClick(page) {
    this.currentPage = page;
    this.dispatchEvent(
      new CustomEvent('page-changed', {
        detail: page,
        bubbles: true,
        composed: true,
      })
    );
  }
}

customElements.define('employee-pagination', EmployeePagination);
