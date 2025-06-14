import {css} from 'lit';

export default css`
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  label {
    display: block;
    font-weight: 600;
    color: #f36d00;
  }
  input,
  select {
    display: block;
    margin-top: 0.25rem;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
  }
  button[type='submit'] {
    padding: 0.75rem 1.5rem;
    font-weight: 700;
    background-color: #f36d00;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button[type='submit']:hover {
    background-color: #d85c00;
  }
  h2 {
    color: #f36d00;
  }
`;
