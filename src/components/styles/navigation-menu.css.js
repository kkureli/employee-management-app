import {css} from 'lit';

export const navigationMenuStyles = css`
  :host {
    display: block;
    font-family: Arial, sans-serif;
  }
  nav {
    background: #fafafa;
    border-bottom: 1px solid #eee;
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    box-shadow: 0 3px 8px rgb(0 0 0 / 0.05);
    border-radius: 10px 10px 0 0;
  }
  .logo {
    font-weight: 700;
    color: #f36d00;
    font-size: 1.3rem;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .logo img {
    width: 32px;
    height: 32px;
  }
  .logo span {
    font-weight: bold;
  }
  .nav-links {
    display: flex;
    gap: 1.5rem;
    font-weight: 600;
    color: #f36d00;
    align-items: center;
  }
  .nav-links a {
    color: #f36d00;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  .nav-links a:hover {
    text-decoration: underline;
    color: #b04c00;
  }
  .nav-links .add-new {
    display: flex;
    align-items: center;
  }
  .nav-links .add-new svg {
    width: 18px;
    height: 18px;
    fill: #f36d00;
    margin-left: 4px;
  }
  .lang-flag {
    width: 24px;
    height: 16px;
    border-radius: 3px;
    cursor: pointer;
  }
`;
