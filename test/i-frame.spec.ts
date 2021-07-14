import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Iframe', async () => {
  beforeEach(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('https://demoqa.com/frames');
  });
  describe('Set new height', async () => {
    const iFramePage: IFramePage = new IFramePage();
    const newHeight = 400;
    beforeEach(async () => {
      await iFramePage.setFormFrameHeight(newHeight);
    });
    it('Height is different now', async () => {
      expect(await iFramePage.getFormFrameHeight()).toBe(newHeight);
    });
  });
});
