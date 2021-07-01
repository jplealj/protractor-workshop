import { browser } from 'protractor';
import {
  MenuContentPage, ProductListPage, ProductAddedModalPage, OrderSummaryPage, SignInStepPage,
  AddressStepPage, ShippingStepPage, PaymentStepPage, BankPaymentPage, SummaryStepPage,
} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addresStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();

  it('then should be bought a t-shirt', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await (browser.sleep(3000));
    await productListPage.addToCartP();
    await (browser.sleep(3000));
    await productAddedModalPage.goToOrderSummaryMenu();
    await (browser.sleep(3000));
    await orderSummaryPage.goToCheckout();
    await (browser.sleep(3000));

    await signInStepPage.submitSignIn('aperdomobo@gmail.com', 'WorkshopProtractor');
    await (browser.sleep(3000));

    await addresStepPage.goToShipping();
    await (browser.sleep(3000));

    await shippingStepPage.agreeTerms();
    await (browser.sleep(3000));

    await shippingStepPage.goToPayment();
    await (browser.sleep(3000));
    await paymentStepPage.goToBank();
    await (browser.sleep(3000));
    await bankPaymentPage.confirm();
    await (browser.sleep(15000));

    await expect(summaryStepPage.checkCompleteMessage()).toBe('Your order on My Store is complete.');
  });
});
