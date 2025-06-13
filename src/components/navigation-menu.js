import {LitElement, html, css} from 'lit';

export class NavigationMenu extends LitElement {
  static styles = css`
    nav {
      display: flex;
      justify-content: space-between;
      background: #f0f0f0;
      padding: 1rem;
    }
    a {
      margin: 0 0.5rem;
      text-decoration: none;
      color: #0077cc;
      font-weight: bold;
    }
  `;

  render() {
    const lang = document.documentElement.lang;
    const labels = {
      en: {list: 'Employees', add: 'Add New'},
      tr: {list: 'Çalışanlar', add: 'Yeni Ekle'},
    };
    const t = labels[lang] || labels.en;

    return html`
      <nav>
        <div>
          <a href="/" @click=${this._navigate}>${t.list}</a>
          <a href="/add" @click=${this._navigate}>${t.add}</a>
        </div>
      </nav>
    `;
  }

  _navigate(e) {
    e.preventDefault();
    window.history.pushState({}, '', e.target.href);
    window.dispatchEvent(new Event('popstate'));
  }
}
customElements.define('navigation-menu', NavigationMenu);
