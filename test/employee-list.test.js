import {fixture, expect, oneEvent} from '@open-wc/testing';
import '../src/components/employee-list.js';

describe('employee-list', () => {
  it('renders the employee list title', async () => {
    const el = await fixture('<employee-list></employee-list>');
    expect(el.shadowRoot.querySelector('h2').textContent).to.include(
      'Employee List'
    );
  });

  it('shows import button when employees is empty', async () => {
    const el = await fixture('<employee-list></employee-list>');
    el.employees = [];
    await el.updateComplete;
    const importBtn = el.shadowRoot.querySelector('.import-btn');
    expect(importBtn).to.exist;
    expect(importBtn.textContent).to.include('Import');
  });

  it('opens confirmation modal when delete selected clicked', async () => {
    const el = await fixture('<employee-list></employee-list>');
    el.selectedEmployeeIds = [1, 2];
    await el.updateComplete;
    const deleteBtn = el.shadowRoot.querySelector('.bulk-actions button');
    setTimeout(() => deleteBtn.click());
    const event = await oneEvent(el, 'confirm');
    expect(el.modalOpen).to.be.true;
  });
});
