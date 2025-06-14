export function filterEmployees(employees, query) {
  const q = query.toLowerCase();
  return employees.filter((emp) => {
    const fullName = `${emp.firstName} ${emp.lastName}`.toLowerCase();
    return fullName.includes(q);
  });
}

export function paginateEmployees(employees, currentPage, itemsPerPage) {
  const start = (currentPage - 1) * itemsPerPage;
  return employees.slice(start, start + itemsPerPage);
}

export function getTotalPages(employees, itemsPerPage) {
  return Math.ceil(employees.length / itemsPerPage);
}

export function getModalMessage(selectedEmployeeIds, employees, t) {
  if (selectedEmployeeIds.length === 1) {
    const emp = employees.find((e) => e.id === selectedEmployeeIds[0]);
    if (emp) {
      const template = t('confirmDeleteMessage');
      return template
        .replace('{firstName}', emp.firstName)
        .replace('{lastName}', emp.lastName);
    }
  } else if (selectedEmployeeIds.length > 1) {
    return t('confirmDeleteMultipleMessage');
  }
  return '';
}
