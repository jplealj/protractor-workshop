import {
  $, browser, ElementFinder, ExpectedConditions,
} from 'protractor';

export class ProductAddedModalPage {
  private proceedToCheckoutButton: ElementFinder;

  constructor() {
    this.proceedToCheckoutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async goToOrderSummaryMenu(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.proceedToCheckoutButton), 3000);
    await this.proceedToCheckoutButton.click();
  }
}
