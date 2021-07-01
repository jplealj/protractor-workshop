import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private submit: ElementFinder;

  private email: ElementFinder;

  private password: ElementFinder;

  constructor() {
    this.email = $('#email');
    this.password = $('#passwd');
    this.submit = $('#SubmitLogin > span');
  }

  public async submitSignIn(email: string, password: string): Promise<void> {
    await this.email.sendKeys(email);
    await this.password.sendKeys(password);
    await this.submit.click();
  }
}
