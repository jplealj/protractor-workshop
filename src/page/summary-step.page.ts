import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private message: ElementFinder;

  constructor() {
    this.message = $('p.cheque-indent');
  }

  public async checkCompleteMessage(): Promise<string> {
    return this.message.getText();
  }
}
