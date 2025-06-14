import {LitElement, html} from 'lit';
import {t} from '../utils/i18n.js';
import {confirmationModalStyles} from './styles/confirmation-modal.css.js';

export class ConfirmationModal extends LitElement {
  static styles = confirmationModalStyles;

  static properties = {
    open: {type: Boolean, reflect: true},
    title: {type: String},
    message: {type: String},
  };

  constructor() {
    super();
    this.open = false;
    this.title = '';
    this.message = '';
  }

  render() {
    if (!this.open) return html``;
    return html`
      <div
        class="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
        aria-describedby="modalDesc"
      >
        <div class="header">
          <div id="modalTitle">${this.title}</div>
          <button
            class="close"
            @click=${this._onCancel}
            aria-label=${t('close') || 'Close'}
          >
            &times;
          </button>
        </div>
        <div class="message" id="modalDesc">${this.message}</div>
        <div class="buttons">
          <button class="proceed" @click=${this._onConfirm}>
            ${t('proceed')}
          </button>
          <button class="cancel" @click=${this._onCancel}>
            ${t('cancel')}
          </button>
        </div>
      </div>
    `;
  }

  _onConfirm() {
    this.dispatchEvent(
      new CustomEvent('confirm', {bubbles: true, composed: true})
    );
  }

  _onCancel() {
    this.dispatchEvent(
      new CustomEvent('cancel', {bubbles: true, composed: true})
    );
  }
}

customElements.define('confirmation-modal', ConfirmationModal);
