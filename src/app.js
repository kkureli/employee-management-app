import {LitElement, html, css} from 'lit';

export class AppRoot extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: sans-serif;
      padding: 1rem;
    }
  `;

  render() {
    return html`<h1>Employee Management App</h1>`;
  }
}

customElements.define('app-root', AppRoot);
