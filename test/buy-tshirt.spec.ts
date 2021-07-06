import { browser } from 'protractor';
import {
  MenuContentPage, ProductListPage, ProductAddedModalPage, OrderSummaryPage, SignInStepPage,
  AddressStepPage, ShippingStepPage, PaymentStepPage, BankPaymentPage, SummaryStepPage,
} from '../src/page';

describe('Buying t-shirt', () => {
  beforeAll(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/');
  });
  describe('T-shirt buying process', () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
      await menuContentPage.goToTShirtMenu();
      await productListPage.addToCartP();
      await productAddedModalPage.goToOrderSummaryMenu();
      await orderSummaryPage.goToCheckout();
    });
    describe('Log in', async () => {
      beforeAll(async () => {
        const signInStepPage: SignInStepPage = new SignInStepPage();
        await signInStepPage.submitSignIn('aperdomobo@gmail.com', 'WorkshopProtractor');
      });
      describe('Select address', async () => {
        beforeAll(async () => {
          const addresStepPage: AddressStepPage = new AddressStepPage();
          await addresStepPage.goToShipping();
        });
        describe('Bank payment', async () => {
          beforeAll(async () => {
            const shippingStepPage: ShippingStepPage = new ShippingStepPage();
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
            await shippingStepPage.agreeTerms();
            await shippingStepPage.goToPayment();
            await paymentStepPage.goToBank();
            await bankPaymentPage.confirm();
          });
          it('Confirmation', async () => {
            const summaryStepPage: SummaryStepPage = new SummaryStepPage();
            await expect(summaryStepPage.checkCompleteMessage()).toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
