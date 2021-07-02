import {
  $, browser, ElementFinder, ExpectedConditions,
} from 'protractor';

export class ProductAddedModalPage {
  private proceedToCheckoutButton: ElementFinder;

  constructor() {
    this.proceedToCheckoutButton = $('[title="Proceed to checkout"]');
  }

  public async goToOrderSummaryMenu(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.proceedToCheckoutButton), 3000);
    await this.proceedToCheckoutButton.click();
  }
}
