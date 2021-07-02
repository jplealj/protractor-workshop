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
    await productListPage.addToCartP();
    await productAddedModalPage.goToOrderSummaryMenu();
    await orderSummaryPage.goToCheckout();

    await signInStepPage.submitSignIn('aperdomobo@gmail.com', 'WorkshopProtractor');

    await addresStepPage.goToShipping();

    await shippingStepPage.agreeTerms();

    await shippingStepPage.goToPayment();
    await paymentStepPage.goToBank();
    await bankPaymentPage.confirm();

    await expect(summaryStepPage.checkCompleteMessage()).toBe('Your order on My Store is complete.');
  });
});
