import {css} from 'lit';

export const employeeListCardsStyles = css`
  .card {
    background: white;
    box-shadow: 0 3px 8px rgb(0 0 0 / 0.1);
    border-radius: 10px;
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #333;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .card strong {
    font-weight: 700;
    font-size: 1.15rem;
    color: #f36d00;
  }
  .card .email {
    font-style: italic;
    color: #666;
  }
  .card .department-position {
    font-weight: 600;
    color: #555;
  }
  .card button {
    margin-top: 0.75rem;
    background-color: transparent;
    border: 1.5px solid #f36d00;
    color: #f36d00;
    font-weight: 600;
    border-radius: 6px;
    padding: 0.4rem 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .card button:hover {
    background-color: #f36d00;
    color: white;
  }
  .card button + button {
    margin-left: 0.5rem;
    border-color: #b04c00;
    color: #b04c00;
  }
  .card button + button:hover {
    background-color: #b04c00;
    color: white;
  }
`;
