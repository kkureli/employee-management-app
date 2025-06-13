import {LitElement, html, css} from 'lit';
import {t} from '../utils/i18n.js';

export class ConfirmationModal extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9999;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.25s ease;
    }
    :host([open]) {
      visibility: visible;
      opacity: 1;
    }
    .modal {
      background: white;
      border-radius: 8px;
      width: 360px;
      max-width: 90vw;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      padding: 1.5rem 2rem 2rem 2rem;
      position: relative;
      font-family: Arial, sans-serif;
      box-sizing: border-box;
    }
    .header {
      font-weight: 700;
      font-size: 1.3rem;
      color: #f36d00;
      margin-bottom: 0.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header button.close {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #f36d00;
      line-height: 1;
      padding: 0;
      font-weight: 700;
    }
    .message {
      font-size: 1rem;
      color: #333;
      margin-bottom: 1.8rem;
    }
    .buttons {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
    }
    button.proceed {
      background-color: #f36d00;
      color: white;
      border: none;
      border-radius: 7px;
      padding: 0.7rem 0;
      font-weight: 700;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.25s ease;
    }
    button.proceed:hover {
      background-color: #b04c00;
    }
    button.cancel {
      background: none;
      border: 1.5px solid #3b2f7a;
      color: #3b2f7a;
      border-radius: 7px;
      padding: 0.6rem 0;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.25s ease, color 0.25s ease;
    }
    button.cancel:hover {
      background-color: #3b2f7a;
      color: white;
    }
  `;

  static properties = {
    open: {type: Boolean, reflect: true},
    title: {type: String},
    message: {type: String},
  };

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
