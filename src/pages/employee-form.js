import {LitElement, html} from 'lit';
import {mockEmployees} from '../data/mock-employees.js';

export class EmployeeForm extends LitElement {
  static properties = {
    employeeId: {type: Number},
    mode: {type: String}, // 'add' veya 'edit'
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
      const emp = mockEmployees.find((e) => e.id === this.employeeId);
      if (emp) this.formData = {...emp};
    }
  }

  render() {
    return html`
      <h2>${this.mode === 'edit' ? 'Edit Employee' : 'Add New Employee'}</h2>
      <form @submit=${this._handleSubmit}>
        ${this._renderInput('firstName', 'First Name')}
        ${this._renderInput('lastName', 'Last Name')}
        ${this._renderInput('dob', 'Date of Birth', 'date')}
        ${this._renderInput('employmentDate', 'Date of Employment', 'date')}
        ${this._renderInput('phone', 'Phone Number')}
        ${this._renderInput('email', 'Email', 'email')}

        <label>
          Department:
          <select
            name="department"
            .value=${this.formData.department}
            @change=${this._onInput}
          >
            <option value="">Select</option>
            <option value="Analytics">Analytics</option>
            <option value="Tech">Tech</option>
          </select>
          ${this.errors.department
            ? html`<span style="color:red">${this.errors.department}</span>`
            : ''}
        </label>

        <label>
          Position:
          <select
            name="position"
            .value=${this.formData.position}
            @change=${this._onInput}
          >
            <option value="">Select</option>
            <option value="Junior">Junior</option>
            <option value="Medior">Medior</option>
            <option value="Senior">Senior</option>
          </select>
          ${this.errors.position
            ? html`<span style="color:red">${this.errors.position}</span>`
            : ''}
        </label>

        <button type="submit">Submit</button>
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
      const confirmUpdate = confirm(
        'Are you sure you want to update this employee?'
      );
      if (!confirmUpdate) return;
      console.log('Güncellenecek veri:', this.formData);
    } else {
      const newId = Math.floor(Math.random() * 10000);
      console.log('Eklenecek yeni veri:', {id: newId, ...this.formData});
    }

    window.history.pushState({}, '', '/');
    window.dispatchEvent(new Event('popstate'));
  }

  _validate() {
    const errors = {};
    if (!this.formData.firstName) errors.firstName = 'Required';
    if (!this.formData.lastName) errors.lastName = 'Required';
    if (!this.formData.email) errors.email = 'Required';
    if (!this.formData.phone) errors.phone = 'Required';
    if (!this.formData.department) errors.department = 'Required';
    if (!this.formData.position) errors.position = 'Required';
    if (!this.formData.department || this.formData.department === '') {
      errors.department = 'Department is required';
    }

    if (!this.formData.position || this.formData.position === '') {
      errors.position = 'Position is required';
    }
    if (!this.formData.dob) {
      errors.dob = 'This field is required';
    }

    if (!this.formData.employmentDate) {
      errors.employmentDate = 'This field is required';
    }

    this.errors = errors;
    return Object.keys(errors).length === 0;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('employee-form', EmployeeForm);
