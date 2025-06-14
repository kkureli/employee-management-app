export function isEmailUnique(email, employees, currentId = null) {
  return !employees.some(
    (emp) =>
      emp.email.toLowerCase() === email.toLowerCase() && emp.id !== currentId
  );
}

export function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validateEmployee(formData, employees, currentId = null, t) {
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
    if (!formData[field]) errors[field] = t('required');
  });

  if (formData.email) {
    if (!isValidEmail(formData.email)) {
      errors.email = t('invalidEmail');
    } else if (!isEmailUnique(formData.email, employees, currentId)) {
      errors.email = t('emailAlreadyExists');
    }
  }

  return errors;
}
