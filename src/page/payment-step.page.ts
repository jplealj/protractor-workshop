import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payBankWireButton: ElementFinder;

  constructor() {
    this.payBankWireButton = $('[title="Pay by bank wire"]');
  }

  public async goToBank(): Promise<void> {
    await this.payBankWireButton.click();
  }
}
