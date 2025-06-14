const STORAGE_KEY = 'employees';

let employees = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const notifyChange = () => {
  window.dispatchEvent(
    new CustomEvent('employees-updated', {
      detail: employees,
    })
  );
};

export const employeeStore = {
  getAll() {
    return [...employees];
  },

  add(employee) {
    employees.unshift(employee);
    this._persist();
  },

  update(id, updatedData) {
    employees = employees.map((emp) =>
      emp.id === id ? {...emp, ...updatedData} : emp
    );
    this._persist();
  },

  delete(id) {
    employees = employees.filter((emp) => emp.id !== id);
    this._persist();
  },

  _persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
    notifyChange();
  },

  initIfEmpty(initialData = []) {
    if (employees.length === 0 && initialData.length > 0) {
      employees = [...initialData];
      this._persist();
    }
  },
  clear() {
    employees = [];
    this._persist();
  },
};
