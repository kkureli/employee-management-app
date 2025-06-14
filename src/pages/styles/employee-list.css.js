import {css} from 'lit';

export default css`
  :host {
    display: block;
    font-family: Arial, sans-serif;
    color: #333;
  }
  h2 {
    color: #f36d00;
    margin-bottom: 1rem;
  }
  .controls {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    gap: 0.5rem;
  }
  .view-toggle button {
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: #f36d00;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
  }
  .view-toggle button:hover:not(:disabled) {
    background-color: #b04c00;
  }
  .view-toggle button:disabled {
    background-color: #8c4700;
    cursor: default;
  }
  input[type='text'] {
    flex-grow: 1;
    min-width: 200px;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }
  .bulk-actions {
    background: #fce5d6;
    color: #b04c00;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
  }
  .bulk-actions button {
    background-color: #f36d00;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 7px;
    cursor: pointer;
    font-weight: 700;
    transition: background-color 0.2s ease;
  }
  .bulk-actions button:hover {
    background-color: #b04c00;
  }
  .import-btn {
    background-color: #f36d00;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 7px;
    cursor: pointer;
    font-weight: 700;
    margin-top: 1rem;
    transition: background-color 0.2s ease;
  }
  .import-btn:hover {
    background-color: #b04c00;
  }
  @media (max-width: 600px) {
    .controls {
      flex-direction: column;
      align-items: flex-start;
    }
    .view-toggle {
      margin-top: 0.5rem;
    }
  }
`;
