import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private check: ElementFinder;

  private proceedToCheckoutButton: ElementFinder;

  constructor() {
    this.check = $('#cgv');
    this.proceedToCheckoutButton = $('[name="processCarrier"]');
  }

  public async agreeTerms(): Promise<void> {
    await this.check.click();
  }

  public async goToPayment(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
