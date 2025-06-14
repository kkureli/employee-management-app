import {LitElement, html} from 'lit';
import {t} from '../utils/i18n.js';
import {navigationMenuStyles} from './styles/navigation-menu.css.js';

export class NavigationMenu extends LitElement {
  static styles = navigationMenuStyles;

  constructor() {
    super();
    this.language =
      localStorage.getItem('lang') || document.documentElement.lang || 'en';
  }

  render() {
    return html`
      <nav>
        <div class="logo">
          <img width="32" height="32" src="/assets/ing.png" alt="ING Logo" />
          <span>ING</span>
        </div>
        <div class="nav-links">
          <a href="/" @click=${this._navigateToList} title=${t('employeeList')}>
            ${t('employeeList')}
          </a>
          <a
            href="/add"
            class="add-new"
            @click=${this._navigateToAdd}
            title=${t('addEmployee')}
          >
            ${t('addEmployee')} +
          </a>
          <img
            width="24"
            height="16"
            src=${this.language === 'tr' ? '/assets/tr.png' : '/assets/uk.png'}
            alt=${this.language === 'tr' ? 'Turkish Flag' : 'English Flag'}
            class="lang-flag"
            @click=${this._toggleLanguage}
            title="Change Language"
          />
        </div>
      </nav>
    `;
  }

  _navigateToList(e) {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  _navigateToAdd(e) {
    e.preventDefault();
    window.history.pushState({}, '', '/add');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  _toggleLanguage() {
    this.language = this.language === 'en' ? 'tr' : 'en';
    localStorage.setItem('lang', this.language);
    document.documentElement.lang = this.language;
    window.location.reload();
  }
}

customElements.define('navigation-menu', NavigationMenu);
