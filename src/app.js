import {LitElement, html, css} from 'lit';
import './components/navigation-menu.js';
import './pages/employee-list.js';
import './pages/employee-form.js';
import {initRouter} from './router/router.js';

export class AppRoot extends LitElement {
  static styles = css`
    #outlet {
      padding: 1rem;
    }
  `;
  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    const outlet = this.querySelector('#outlet');
    initRouter(outlet);
  }

  render() {
    return html`
      <navigation-menu></navigation-menu>
      <div id="outlet"></div>
    `;
  }
}

customElements.define('app-root', AppRoot);
