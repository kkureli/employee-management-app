import {fixture, html, expect, oneEvent} from '@open-wc/testing';
import '../src/components/confirmation-modal.js';

describe('confirmation-modal', () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<confirmation-modal></confirmation-modal>`);
    await element.updateComplete;
  });

  it('should be closed by default', () => {
    expect(element.open).to.be.false;
  });

  it('should render modal content when open is true', async () => {
    element.open = true;
    element.title = 'Test Title';
    element.message = 'Test message';
    await element.updateComplete;

    const modal = element.shadowRoot.querySelector('.modal');
    expect(modal).to.exist;
    expect(modal.textContent).to.include('Test Title');
    expect(modal.textContent).to.include('Test message');
  });

  it('should not render modal content when open is false', async () => {
    element.open = false;
    await element.updateComplete;
    const modal = element.shadowRoot.querySelector('.modal');
    expect(modal).to.not.exist;
  });

  it('should dispatch confirm event when proceed button clicked', async () => {
    element.open = true;
    await element.updateComplete;

    const listener = oneEvent(element, 'confirm');
    element.shadowRoot.querySelector('button.proceed').click();
    await listener;
  });

  it('should dispatch cancel event when cancel button clicked', async () => {
    element.open = true;
    await element.updateComplete;

    const listener = oneEvent(element, 'cancel');
    element.shadowRoot.querySelector('button.cancel').click();
    await listener;
  });

  it('should dispatch cancel event when close button clicked', async () => {
    element.open = true;
    await element.updateComplete;

    const listener = oneEvent(element, 'cancel');
    element.shadowRoot.querySelector('button.close').click();
    await listener;
  });
});
