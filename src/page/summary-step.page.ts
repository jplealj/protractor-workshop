import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private message: ElementFinder;

  constructor() {
    this.message = $('#center_column > div > p > strong');
  }

  public async checkCompleteMessage(): Promise<string> {
    return this.message.getText();
  }
}
