/* eslint-disable no-template-curly-in-string */
import {
  $, ElementFinder, element, by, browser,
  ExpectedConditions,
} from 'protractor';

export class PersonalInformationPage {
  private button: ElementFinder;

  private firstName: ElementFinder;

  private lastName: ElementFinder;

  constructor() {
    this.button = $('[name="submit"]');
    this.firstName = $('[name="firstname"]');
    this.lastName = $('[name="lastname"]');
  }

  public async fillForm(data: { firstName: string, lastName: string, sex: string,
    experience: number, profession: string[], tools: string[], continent: string,
    commands: string[] }): Promise<void> {
    await this.firstName.sendKeys(data.firstName);
    await this.lastName.sendKeys(data.lastName);
    await $(`[name="sex"][value="${data.sex}"]`).click();
    await $(`[name="exp"][value="${data.experience}"]`).click();
    data.profession.forEach(async (selectedProfession) => {
      await $(`[name="profession"][value="${selectedProfession}"]`).click();
    });
    data.tools.forEach(async (selectedTools) => {
      await $(`[name="tool"][value="${selectedTools}"]`);
    });
    await element(by.name('continents')).element(by.cssContainingText('option', data.continent)).click();
    data.commands.forEach(async (selectedCommands) => {
      await element(by.name('selenium_commands')).element(by.cssContainingText('option', selectedCommands)).click();
    });
  }

  public async checkInformation(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.button), 3000);
    await this.button.click();
    await browser.wait(ExpectedConditions.alertIsPresent());
    await browser.switchTo().alert().accept();
  }

  public async getTitle(): Promise<string> {
    return browser.findElement(by.tagName('h1')).getText();
  }
}
