import {LitElement, html, css} from 'lit';
import {t, setLang} from '../utils/i18n.js';

export class NavigationMenu extends LitElement {
  static styles = css`
    nav {
      background: #333;
      padding: 1rem;
      color: white;
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    a {
      color: white;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    select {
      margin-left: auto;
      background: #555;
      color: white;
      border: none;
      padding: 0.25rem 0.5rem;
      font-size: 1rem;
      cursor: pointer;
    }
  `;

  constructor() {
    super();
    const storedLang = localStorage.getItem('lang');
    this.lang = storedLang || document.documentElement.lang || 'en';
  }

  render() {
    return html`
      <nav>
        <a href="/">${t('employeeList') || 'Employee List'}</a>
        <a href="/add">${t('addEmployee') || 'Add Employee'}</a>

        <select @change=${this._onLangChange} .value=${this.lang}>
          <option value="en">EN</option>
          <option value="tr">TR</option>
        </select>
      </nav>
    `;
  }

  _onLangChange(e) {
    const newLang = e.target.value;
    setLang(newLang);

    // Sayfayı yeniden yükle ki yeni dil geçerli olsun
    window.location.reload();
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('navigation-menu', NavigationMenu);
