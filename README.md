# Employee Management Application

<img width="500"  alt="Screenshot 2025-06-15 at 00 59 12" src="https://github.com/user-attachments/assets/b8545de5-787b-4cf0-840e-b06fbfd225d7" />
<img width="500"  alt="Screenshot 2025-06-15 at 00 59 19" src="https://github.com/user-attachments/assets/2e7427da-7432-490e-bfd9-fcc43023c9f3" />


## About the Project

This is a web application built using LitElement (JavaScript version) designed to help HR staff manage company employee records. It allows listing, adding, editing, and deleting employee information easily.

---

## Features

- **List All Employees**  
  View employee records in either a table or list format.  
  Search and pagination supported for easy navigation.

- **Add New Employee**  
  Add new employees with the following details:  
  * First Name  
  * Last Name  
  * Date of Employment  
  * Date of Birth  
  * Phone Number  
  * Email Address  
  * Department (Analytics, Tech)  
  * Position (Junior, Medior, Senior)  
  All fields have validation, including required checks, proper email format, and email uniqueness.

- **Edit Employee**  
  Update existing employee records.  
  Edit mode accessible from the employee list via the Edit button.  
  Confirmation prompt before saving changes.

- **Delete Employee**  
  Delete single or multiple employees.  
  Confirmation prompt before deletion to prevent accidental removals.

- **Localization Support**  
  The app supports English and Turkish languages.  
  Language preference is saved locally and reflected throughout the UI.

- **Responsive Design**  
  Fully responsive for desktop and mobile devices without using CSS frameworks like Bootstrap.

- **SPA Routing**  
  Uses Vaadin Router for client-side navigation between pages.

- **State Management**  
  Employee data is persisted using browser’s localStorage for state management.

- **Comprehensive Unit Tests**  
  Detailed tests covering all components and functionalities with over 85% code coverage.

---

## Technologies Used

- **LitElement** — For building lightweight, reusable web components  
- **Vaadin Router** — Client-side routing  
- **localStorage** — Data persistence  
- **@open-wc/testing** — Web component testing utilities  
- **JavaScript (ES Modules)** — Application language

---

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

```bash
git clone <repository-url>
cd employee-management-app
npm install
```
### Running the App Locally
```
npm start
```
Then open your browser at http://localhost:8000.

### Running Tests
```
npm test
```

To generate a test coverage report:
```
npm run test -- --coverage
```
## Project Structure
- `src/components/`: Contains reusable LitElement web components.
- `src/pages/`: Components mapped to routes for different views.
- `src/store/`: Contains the employee data management logic with persistence.
- `src/utils/`: Utility scripts like localization helpers.
- `src/data/`: Holds static mock data for initial app population or testing.
- `assets/ `: Contains images, flags, logos, icons used throughout the app UI.
- `docs-src/` and **docs/**: Documentation source files and generated output.
- `src/`: All source code of the app lives here. Divided into logical folders for components, pages, state, utils, and static data.
- `test/`: Automated test files covering unit tests and component integration.
- `rollup.config.js`: Bundling configuration, to package the app for deployment or development.
- `web-dev-server.config.js`: Local dev server setup with live reload and module resolution.
- `web-test-runner.config.js`: Test runner setup for running tests in browsers with code coverage.
- `README.md`: This documentation file.

- ## Commit Message Types

```
[TYPE]: [COMMIT MESSAGE]
```

For example:

```
style: style file updated.
```

| type     | release |
| -------- | ------- |
| breaking | major   |
| feat     | minor   |
| fix      | patch   |
| build    | patch   |
| style    | patch   |
| refactor | patch   |
| perf     | patch   |
| chore    | none    |
| ci       | none    |
| docs     | none    |
| test     | none    |



