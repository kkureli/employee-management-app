import {fixture, html, expect} from '@open-wc/testing';
import '../src/pages/employee-form.js';
import {employeeStore} from '../src/store/employee-store.js';

describe('employee-form', () => {
  let element;

  beforeEach(async () => {
    // Persist'i bypass et localStorage'a yazmasın
    employeeStore._persist = () => {};
    // employeeStore metodlarını hafifçe mockla test için
    employeeStore._data = [];
    employeeStore.delete = function (id) {
      this._data = this._data.filter((e) => e.id !== id);
    };
    employeeStore.getAll = () => employeeStore._data || [];
    employeeStore.add = (emp) => {
      employeeStore._data = employeeStore._data || [];
      employeeStore._data.push(emp);
    };
    employeeStore.update = (id, updatedData) => {
      employeeStore._data = employeeStore._data || [];
      employeeStore._data = employeeStore._data.map((e) =>
        e.id === id ? {...e, ...updatedData} : e
      );
    };

    element = await fixture(html`<employee-form></employee-form>`);
    await element.updateComplete;
  });

  it('should render add employee title by default', () => {
    const h2 = element.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
    expect(h2.textContent.toLowerCase()).to.include('add');
  });

  it('should show errors on empty submit', async () => {
    const form = element.shadowRoot.querySelector('form');
    form.dispatchEvent(new Event('submit', {bubbles: true, cancelable: true}));
    await element.updateComplete;

    expect(Object.keys(element.errors).length).to.be.greaterThan(0);
    expect(element.errors.firstName).to.exist;
  });

  it('should validate email format', async () => {
    element.formData.email = 'invalid-email';
    element._handleSubmit(
      new Event('submit', {bubbles: true, cancelable: true})
    );
    await element.updateComplete;

    expect(element.errors.email).to.exist;
    expect(element.errors.email.toLowerCase()).to.include('invalid');
  });

  it('should check for email uniqueness when adding new employee', async () => {
    employeeStore.add({
      id: 1,
      firstName: 'Jane',
      lastName: 'Doe',
      dob: '1980-01-01',
      employmentDate: '2000-01-01',
      phone: '1234567890',
      email: 'jane@example.com',
      department: 'Tech',
      position: 'Senior',
    });

    element.formData = {
      firstName: 'New',
      lastName: 'User',
      dob: '1990-01-01',
      employmentDate: '2020-01-01',
      phone: '0987654321',
      email: 'jane@example.com', // Aynı email
      department: 'Analytics',
      position: 'Junior',
    };

    element._handleSubmit(
      new Event('submit', {bubbles: true, cancelable: true})
    );
    await element.updateComplete;

    expect(element.errors.email).to.exist;
    expect(element.errors.email.toLowerCase()).to.include('exists');
  });

  it('should add a new employee on valid submit', async () => {
    element.formData = {
      firstName: 'Valid',
      lastName: 'User',
      dob: '1990-01-01',
      employmentDate: '2020-01-01',
      phone: '1231231234',
      email: 'valid@example.com',
      department: 'Tech',
      position: 'Junior',
    };

    let pushStateCalled = false;
    const originalPushState = window.history.pushState;
    window.history.pushState = () => {
      pushStateCalled = true;
    };

    element._handleSubmit(
      new Event('submit', {bubbles: true, cancelable: true})
    );
    await element.updateComplete;

    expect(employeeStore.getAll().some((e) => e.email === 'valid@example.com'))
      .to.be.true;
    expect(pushStateCalled).to.be.true;

    window.history.pushState = originalPushState;
  });

  it('should load employee data for edit mode based on URL', async () => {
    employeeStore.add({
      id: 10,
      firstName: 'Edit',
      lastName: 'Me',
      dob: '1985-05-05',
      employmentDate: '2010-05-05',
      phone: '5555555',
      email: 'editme@example.com',
      department: 'Analytics',
      position: 'Senior',
    });

    // Simulate /edit/10 URL
    window.history.pushState({}, '', '/edit/10');

    element = await fixture(html`<employee-form></employee-form>`);
    await element.updateComplete;

    expect(element.mode).to.equal('edit');
    expect(element.formData.firstName).to.equal('Edit');

    // URL'yi eski haline getir
    window.history.pushState({}, '', '/');
  });

  it('should confirm before updating employee', async () => {
    employeeStore.add({
      id: 20,
      firstName: 'Confirm',
      lastName: 'Update',
      dob: '1985-05-05',
      employmentDate: '2010-05-05',
      phone: '5555555',
      email: 'confirm@example.com',
      department: 'Tech',
      position: 'Senior',
    });

    element.mode = 'edit';
    element.employeeId = 20;
    element.formData = {...employeeStore.getAll().find((e) => e.id === 20)};

    let confirmCalled = false;
    const originalConfirm = window.confirm;
    window.confirm = () => {
      confirmCalled = true;
      return true;
    };

    element._handleSubmit(
      new Event('submit', {bubbles: true, cancelable: true})
    );
    await element.updateComplete;

    expect(confirmCalled).to.be.true;

    window.confirm = originalConfirm;
  });

  it('should not update employee if confirm is cancelled', async () => {
    employeeStore.add({
      id: 30,
      firstName: 'Cancel',
      lastName: 'Update',
      dob: '1985-05-05',
      employmentDate: '2010-05-05',
      phone: '5555555',
      email: 'cancel@example.com',
      department: 'Tech',
      position: 'Senior',
    });

    element.mode = 'edit';
    element.employeeId = 30;
    element.formData = {...employeeStore.getAll().find((e) => e.id === 30)};

    const originalConfirm = window.confirm;
    window.confirm = () => false;

    element._handleSubmit(
      new Event('submit', {bubbles: true, cancelable: true})
    );
    await element.updateComplete;

    // EmployeeStore'daki veri değişmemeli
    expect(employeeStore.getAll().find((e) => e.id === 30).firstName).to.equal(
      'Cancel'
    );

    window.confirm = originalConfirm;
  });
});
