import {fixture, html, expect} from '@open-wc/testing';
import '../src/pages/employee-list.js';
import {employeeStore} from '../src/store/employee-store.js';

describe('employee-list', () => {
  let element;

  beforeEach(async () => {
    employeeStore.clear();
    element = await fixture(html`<employee-list></employee-list>`);
    await element.updateComplete;
  });

  it('should render title', () => {
    const h2 = element.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
    expect(h2.textContent.toLowerCase()).to.include('employee');
  });

  it('should show import button if no employees exist', async () => {
    element.employees = [];
    await element.updateComplete;
    const btn = element.shadowRoot.querySelector('.import-btn');
    expect(btn).to.exist;
  });

  it('should hide import button if employees exist', async () => {
    employeeStore.add({
      id: 1,
      firstName: 'Test',
      lastName: 'User',
      dob: '1990-01-01',
      employmentDate: '2020-01-01',
      phone: '123456789',
      email: 'test@example.com',
      department: 'Tech',
      position: 'Junior',
    });
    element.employees = employeeStore.getAll();
    await element.updateComplete;

    const btn = element.shadowRoot.querySelector('.import-btn');
    expect(btn).to.not.exist;
  });

  it('should import mock data and update employee list', async () => {
    element.employees = [];
    await element.updateComplete;
    const importBtn = element.shadowRoot.querySelector('.import-btn');
    importBtn.click();
    await element.updateComplete;

    expect(element.employees.length).to.be.greaterThan(0);
  });

  it('should filter employees by search query', async () => {
    employeeStore.add({
      id: 2,
      firstName: 'John',
      lastName: 'Doe',
      dob: '1980-02-02',
      employmentDate: '2015-05-05',
      phone: '111222333',
      email: 'john@example.com',
      department: 'Analytics',
      position: 'Senior',
    });
    element.employees = employeeStore.getAll();
    await element.updateComplete;

    const searchInput = element.shadowRoot.querySelector('input[type="text"]');
    searchInput.value = 'john';
    searchInput.dispatchEvent(new Event('input'));
    await element.updateComplete;

    expect(element.filteredEmployees.length).to.equal(1);
    expect(element.filteredEmployees[0].firstName).to.equal('John');
  });

  it('should change view mode when buttons clicked', async () => {
    const [tableBtn, listBtn] = element.shadowRoot.querySelectorAll(
      '.view-toggle button'
    );

    // Initially table mode
    expect(element.viewMode).to.equal('table');
    expect(tableBtn.disabled).to.be.true;
    expect(listBtn.disabled).to.be.false;

    // Click list button
    listBtn.click();
    await element.updateComplete;
    expect(element.viewMode).to.equal('list');
    expect(tableBtn.disabled).to.be.false;
    expect(listBtn.disabled).to.be.true;

    // Click table button
    tableBtn.click();
    await element.updateComplete;
    expect(element.viewMode).to.equal('table');
  });

  it('should select all employees when select-all checkbox is checked', async () => {
    employeeStore.add({
      id: 3,
      firstName: 'First',
      lastName: 'Employee',
      dob: '1990-01-01',
      employmentDate: '2019-01-01',
      phone: '123',
      email: 'first@example.com',
      department: 'Tech',
      position: 'Junior',
    });
    employeeStore.add({
      id: 4,
      firstName: 'Second',
      lastName: 'Employee',
      dob: '1991-02-02',
      employmentDate: '2020-02-02',
      phone: '456',
      email: 'second@example.com',
      department: 'Analytics',
      position: 'Senior',
    });
    element.employees = employeeStore.getAll();
    await element.updateComplete;

    const selectAllCheckbox = element.shadowRoot.querySelector(
      'thead input[type="checkbox"]'
    );
    selectAllCheckbox.checked = true;
    selectAllCheckbox.dispatchEvent(new Event('change'));
    await element.updateComplete;

    expect(element.selectedEmployeeIds.length).to.equal(2);
    expect(element.selectedEmployeeIds).to.include(3);
    expect(element.selectedEmployeeIds).to.include(4);
  });

  it('should deselect all employees when select-all checkbox is unchecked', async () => {
    employeeStore.add({
      id: 5,
      firstName: 'Third',
      lastName: 'Employee',
      dob: '1992-03-03',
      employmentDate: '2021-03-03',
      phone: '789',
      email: 'third@example.com',
      department: 'Tech',
      position: 'Junior',
    });
    employeeStore.add({
      id: 6,
      firstName: 'Fourth',
      lastName: 'Employee',
      dob: '1993-04-04',
      employmentDate: '2022-04-04',
      phone: '012',
      email: 'fourth@example.com',
      department: 'Analytics',
      position: 'Senior',
    });
    element.employees = employeeStore.getAll();
    element.selectedEmployeeIds = [5, 6];
    await element.updateComplete;

    const selectAllCheckbox = element.shadowRoot.querySelector(
      'thead input[type="checkbox"]'
    );
    selectAllCheckbox.checked = false;
    selectAllCheckbox.dispatchEvent(new Event('change'));
    await element.updateComplete;

    expect(element.selectedEmployeeIds.length).to.equal(0);
  });

  it('should toggle selection of a single employee', async () => {
    employeeStore.add({
      id: 7,
      firstName: 'Toggle',
      lastName: 'Employee',
      dob: '1994-05-05',
      employmentDate: '2023-05-05',
      phone: '345',
      email: 'toggle@example.com',
      department: 'Tech',
      position: 'Junior',
    });
    element.employees = employeeStore.getAll();
    await element.updateComplete;

    expect(element.selectedEmployeeIds.includes(7)).to.be.false;

    const checkbox = element.shadowRoot.querySelector(
      'tbody input[type="checkbox"]'
    );
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change'));
    await element.updateComplete;

    expect(element.selectedEmployeeIds.includes(7)).to.be.true;

    checkbox.checked = false;
    checkbox.dispatchEvent(new Event('change'));
    await element.updateComplete;

    expect(element.selectedEmployeeIds.includes(7)).to.be.false;
  });

  it('should delete selected employees when modal confirmed', async () => {
    employeeStore.add({
      id: 8,
      firstName: 'Delete',
      lastName: 'Employee',
      dob: '1980-01-01',
      employmentDate: '2000-01-01',
      phone: '999',
      email: 'delete@example.com',
      department: 'Tech',
      position: 'Senior',
    });
    employeeStore.add({
      id: 9,
      firstName: 'Keep',
      lastName: 'Employee',
      dob: '1985-01-01',
      employmentDate: '2005-01-01',
      phone: '888',
      email: 'keep@example.com',
      department: 'Analytics',
      position: 'Junior',
    });

    element.employees = employeeStore.getAll();
    element.selectedEmployeeIds = [8];
    await element.updateComplete;

    element._onModalConfirm();
    await element.updateComplete;

    expect(employeeStore.getAll().find((e) => e.id === 8)).to.be.undefined;
    expect(employeeStore.getAll().length).to.equal(1);
  });

  it('should cancel modal and clear selection', async () => {
    element.selectedEmployeeIds = [8, 9];
    element.modalOpen = true;
    await element.updateComplete;

    element._onModalCancel();
    await element.updateComplete;

    expect(element.modalOpen).to.be.false;
    expect(element.selectedEmployeeIds.length).to.equal(0);
  });

  it('should paginate employees correctly', async () => {
    for (let i = 0; i < 15; i++) {
      employeeStore.add({
        id: 100 + i,
        firstName: `Employee${i}`,
        lastName: `Test${i}`,
        dob: '1990-01-01',
        employmentDate: '2020-01-01',
        phone: `000${i}`,
        email: `employee${i}@example.com`,
        department: 'Tech',
        position: 'Junior',
      });
    }
    element.employees = employeeStore.getAll();
    await element.updateComplete;

    expect(element.paginatedEmployees.length).to.equal(10);

    element.currentPage = 2;
    await element.updateComplete;

    expect(element.paginatedEmployees.length).to.equal(5);
  });

  it('should navigate to edit page on edit button click', async () => {
    employeeStore.add({
      id: 200,
      firstName: 'Edit',
      lastName: 'Me',
      dob: '1990-01-01',
      employmentDate: '2020-01-01',
      phone: '123',
      email: 'editme@example.com',
      department: 'Tech',
      position: 'Junior',
    });
    element.employees = employeeStore.getAll();
    await element.updateComplete;

    let pushStateCalled = false;
    const originalPushState = window.history.pushState;
    window.history.pushState = () => {
      pushStateCalled = true;
    };

    const editBtn = element.shadowRoot.querySelector(
      'tbody button[title="Edit"]'
    );
    editBtn.click();
    await element.updateComplete;

    expect(pushStateCalled).to.be.true;

    window.history.pushState = originalPushState;
  });
});
