import {
  $, browser, ElementFinder, ExpectedConditions,
  ElementArrayFinder, $$,
} from 'protractor';

export class ProductListPage {
  private addToCart: ElementFinder;

  private products: ElementArrayFinder;

  constructor() {
    this.addToCart = $('#add_to_cart');
    this.products = $$('.product_list');
  }

  public async addToCartP(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCart), 3000);
    await this.addToCart.click();
  }

  private findByProduct(productName: string): ElementFinder {
    return this.products.filter((product:ElementFinder) => product.$('.product-name').getText().then((name: string) => name.includes(productName))).first();
  }

  public async selectProduct(productName: string): Promise<void> {
    const product = this.findByProduct(productName);
    await browser.wait(ExpectedConditions.elementToBeClickable(product.$('img')), 5000);
    await product.$('img').click();
  }
}
