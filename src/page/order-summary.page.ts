import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private proceedToCheckoutButton: ElementFinder;

  constructor() {
    this.proceedToCheckoutButton = $('.cart_navigation [title="Proceed to checkout"]');
  }

  public async goToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
