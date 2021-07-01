import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payBankWireButton: ElementFinder;

  constructor() {
    this.payBankWireButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async goToBank(): Promise<void> {
    await this.payBankWireButton.click();
  }
}
