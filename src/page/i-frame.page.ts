import {
  browser, ElementFinder, promise,
  element, by,
} from 'protractor';

export class IFramePage {
  private iframe1: ElementFinder;

  constructor() {
    this.iframe1 = element(by.id('frame1'));
  }

  public async getFormFrameHeight(): Promise<number> {
    const height = await this.iframe1.getAttribute('height');
    return Number(height);
  }

  public setFormFrameHeight(height: number): promise.Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iframe1);
  }
}
