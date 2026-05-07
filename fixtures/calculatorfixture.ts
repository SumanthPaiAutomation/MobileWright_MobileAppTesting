import { test as base } from '@mobilewright/test';
import { CalculatorScreen } from '../screens/calculatorscreen';
import { androidAppLaunch } from '../base/baseapplaunch';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

// define fixture types
type CalculatorFixtures = {
  calculatorScreen: CalculatorScreen;
};

export const test = base.extend<CalculatorFixtures>({

  calculatorScreen: async ({ screen }, use) => {
    // setup — runs before each test
    androidAppLaunch(process.env.APP_BUNDLE_ID!);

    const calculator = new CalculatorScreen(screen);
    await calculator.isLoaded();
    await calculator.tapClear();

    // provide fixture to test
    await use(calculator);

    // teardown — runs after each test
    await calculator.tapClear();
  },

});

export { expect } from '@mobilewright/test';