import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private proceedToCheckOutButton: ElementFinder;

  constructor() {
    this.proceedToCheckOutButton = $('[name="processAddress"]');
  }

  public async goToShipping(): Promise<void> {
    await this.proceedToCheckOutButton.click();
  }
}
