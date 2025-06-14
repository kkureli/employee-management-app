import {css} from 'lit';

export const employeeListTableStyles = css`
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 8px;
  }
  th {
    text-align: left;
    padding: 12px 15px;
    font-weight: 600;
    color: #f36d00;
    font-size: 0.9rem;
    user-select: none;
  }
  td {
    padding: 12px 15px;
    background: white;
    vertical-align: middle;
  }
  tr:hover td {
    background: #f9f1e7;
  }
  tbody tr {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  input[type='checkbox'] {
    transform: scale(1.3);
    cursor: pointer;
  }
  .actions button {
    background: none;
    border: none;
    cursor: pointer;
    color: #f36d00;
    font-size: 1.2rem;
    margin-left: 8px;
    transition: color 0.2s ease;
  }
  .actions button:hover {
    color: #b04c00;
  }
  @media (max-width: 768px) {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    tbody tr {
      border: 1px solid #ccc;
      margin-bottom: 1rem;
      border-radius: 8px;
      padding: 0.5rem;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    }
    tbody td {
      border: none;
      position: relative;
      padding-left: 50%;
      text-align: left;
    }
    tbody td::before {
      position: absolute;
      top: 0.5rem;
      left: 1rem;
      width: 45%;
      white-space: nowrap;
      font-weight: 600;
      color: #f36d00;
      content: attr(data-label);
    }
  }
`;
