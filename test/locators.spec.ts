import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Personal information', async () => {
  beforeEach(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
  });
  describe('Filling blanks', async () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    beforeEach(async () => {
      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        profession: ['Automation Tester'],
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands'],
      });
    });
    it('Title is correct', async () => {
      await personalInformationPage.checkInformation();
      expect(personalInformationPage.getTitle()).toEqual('Selenium - Automation Practice Form');
    });
  });
});
