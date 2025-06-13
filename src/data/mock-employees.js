export const mockEmployees = Array.from({length: 25}).map((_, i) => ({
  id: i + 1,
  firstName: `John${i}`,
  lastName: `Doe${i}`,
  dob: '1990-01-01',
  employmentDate: '2020-01-01',
  phone: '555-1234567',
  email: `john${i}@example.com`,
  department: i % 2 === 0 ? 'Tech' : 'Analytics',
  position: ['Junior', 'Medior', 'Senior'][i % 3],
}));
