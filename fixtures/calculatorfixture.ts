import { test as base } from '@mobilewright/test';
import { CalculatorScreen } from '../screens/calculatorscreen';
import { androidAppLaunch } from '../base/baseapplaunch';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

type CalculatorFixtures = {
  calculatorScreen: CalculatorScreen;
};

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const test = base.extend<CalculatorFixtures>({

  calculatorScreen: async ({ screen }, use) => {
    androidAppLaunch();
    await sleep(2000);

    const calculator = new CalculatorScreen(screen);
    await calculator.isLoaded();
    await calculator.tapClear();

    await use(calculator);

    await calculator.tapClear();
  },

});

export { expect } from '@mobilewright/test';