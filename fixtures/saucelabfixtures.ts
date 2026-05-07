import { test as base } from '@mobilewright/test';
import { CalculatorScreen } from '../screens/calculatorscreen';
import { androidAppLaunch } from '../base/baseapplaunch';
import * as dotenv from 'dotenv';
import { ProductScreen } from '../screens/productscreen';
import { CartScreen } from '../screens/cartscreen';

dotenv.config({ path: '.env.local' });

type CustomFixtures = {
  productScreen: ProductScreen;
  cartScreen: CartScreen;
};

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const test = base.extend<CustomFixtures>({

  screen: async ({ screen , device}, use) => {
    androidAppLaunch(device);
    await sleep(3000);
    await use(screen);
  },

  productScreen: async ({ screen }, use) => {
    await sleep(3000);

    const productScreen = new ProductScreen(screen);
    await use(productScreen);
  },

    cartScreen: async ({ screen }, use) => {
    await sleep(3000);

    const cartScreen = new CartScreen(screen);
    await use(cartScreen);
  },

});

export { expect } from '@mobilewright/test';