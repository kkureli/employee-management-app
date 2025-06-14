import {css} from 'lit';

export const employeePaginationStyles = css`
  .pagination {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 6px;
  }
  button {
    background: none;
    border: 1.5px solid #f36d00;
    color: #f36d00;
    font-weight: 600;
    padding: 6px 12px;
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  button:hover:not(:disabled) {
    background: #f36d00;
    color: white;
  }
  button:disabled {
    background: #f36d00;
    color: white;
    cursor: default;
  }
`;
