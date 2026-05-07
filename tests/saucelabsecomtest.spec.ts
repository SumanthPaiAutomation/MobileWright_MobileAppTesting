import { test, expect } from '.././fixtures/saucelabfixtures';

test.describe('Sauce Lab Ecommerce Tests', () => {

  test('check if product is added to cart', async ({ productScreen ,cartScreen }) => {
     expect(
      await productScreen
        .clickToCartToSeeShoppingButton(
          cartScreen
        )
    ).toBeTruthy();
  });
});