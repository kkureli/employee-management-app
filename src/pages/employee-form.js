import {LitElement, css, html} from 'lit';
import {employeeStore} from '../store/employee-store.js';
import {t} from '../utils/i18n.js';

export class EmployeeForm extends LitElement {
  static styles = css`
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    label {
      display: block;
      font-weight: 600;
      color: #f36d00;
    }
    input,
    select {
      display: block;
      margin-top: 0.25rem;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 100%;
      box-sizing: border-box;
    }
    button[type='submit'] {
      padding: 0.75rem 1.5rem;
      font-weight: 700;
      background-color: #f36d00;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button[type='submit']:hover {
      background-color: #d85c00;
    }
    h2 {
      color: #f36d00;
    }
  `;

  static properties = {
    employeeId: {type: Number},
    mode: {type: String},
    formData: {type: Object},
    errors: {type: Object},
  };

  constructor() {
    super();
    this.employeeId = null;
    this.mode = 'add';
    this.formData = {
      firstName: '',
      lastName: '',
      dob: '',
      employmentDate: '',
      phone: '',
      email: '',
      department: '',
      position: '',
    };
    this.errors = {};
  }

  connectedCallback() {
    super.connectedCallback();
    const match = window.location.pathname.match(/^\/edit\/(\d+)/);
    if (match) {
      this.mode = 'edit';
      this.employeeId = Number(match[1]);
      const emp = employeeStore.getAll().find((e) => e.id === this.employeeId);
      if (emp) this.formData = {...emp};
    }
  }

  updated(changedProps) {
    if (changedProps.has('employeeId')) {
      const emp = employeeStore.getAll().find((e) => e.id === this.employeeId);
      if (emp) {
        this.formData = {...emp};
      }
    }
  }

  render() {
    return html`
      <h2>${this.mode === 'edit' ? t('editEmployee') : t('addEmployee')}</h2>
      <form @submit=${this._handleSubmit}>
        ${this._renderInput('firstName', t('firstName'))}
        ${this._renderInput('lastName', t('lastName'))}
        ${this._renderInput('dob', t('dob'), 'date')}
        ${this._renderInput('employmentDate', t('employmentDate'), 'date')}
        ${this._renderInput('phone', t('phone'))}
        ${this._renderInput('email', t('email'), 'email')}

        <label>
          ${t('department')}:
          <select
            name="department"
            .value=${this.formData.department}
            @change=${this._onInput}
          >
            <option value="">${t('select')}</option>
            <option value="Analytics">Analytics</option>
            <option value="Tech">Tech</option>
          </select>
          ${this.errors.department
            ? html`<span style="color:red">${this.errors.department}</span>`
            : ''}
        </label>

        <label>
          ${t('position')}:
          <select
            name="position"
            .value=${this.formData.position}
            @change=${this._onInput}
          >
            <option value="">${t('select')}</option>
            <option value="Junior">Junior</option>
            <option value="Medior">Medior</option>
            <option value="Senior">Senior</option>
          </select>
          ${this.errors.position
            ? html`<span style="color:red">${this.errors.position}</span>`
            : ''}
        </label>

        <button type="submit">${t('submit')}</button>
      </form>
    `;
  }

  _renderInput(name, label, type = 'text') {
    return html`
      <label>
        ${label}:
        <input
          type=${type}
          name=${name}
          .value=${this.formData[name]}
          @input=${this._onInput}
        />
        ${this.errors[name]
          ? html`<span style="color:red">${this.errors[name]}</span>`
          : ''}
      </label>
    `;
  }

  _onInput(e) {
    this.formData = {...this.formData, [e.target.name]: e.target.value};
  }

  _handleSubmit(e) {
    e.preventDefault();
    if (!this._validate()) return;

    if (this.mode === 'edit') {
      const confirmUpdate = confirm(t('confirmUpdate'));
      if (!confirmUpdate) return;
      employeeStore.update(this.employeeId, this.formData);
    } else {
      const newId = Date.now();
      employeeStore.add({id: newId, ...this.formData});
    }

    window.history.pushState({}, '', '/');
    window.dispatchEvent(new Event('popstate'));
  }

  _validate() {
    const errors = {};
    const requiredFields = [
      'firstName',
      'lastName',
      'dob',
      'employmentDate',
      'phone',
      'email',
      'department',
      'position',
    ];
    requiredFields.forEach((field) => {
      if (!this.formData[field]) errors[field] = t('required');
    });

    this.errors = errors;
    return Object.keys(errors).length === 0;
  }
}

customElements.define('employee-form', EmployeeForm);
