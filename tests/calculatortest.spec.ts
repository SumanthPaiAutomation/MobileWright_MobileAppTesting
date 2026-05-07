// import from fixture, NOT from @mobilewright/test
import { test, expect } from '.././fixtures/calculatorfixture';

test.describe('Calculator Tests', () => {

  test('addition: 5 + 3 = 8', async ({ calculatorScreen }) => {
    await calculatorScreen.calculate('5 + 3');
    expect(await calculatorScreen.getResult()).toBe('8');
  });

  test('subtraction: 9 - 4 = 5', async ({ calculatorScreen }) => {
    await calculatorScreen.calculate('9 - 4');
    expect(await calculatorScreen.getResult()).toBe('5');
  });

  test('multiplication: 3 * 4 = 12', async ({ calculatorScreen }) => {
    await calculatorScreen.calculate('3 * 4');
    expect(await calculatorScreen.getResult()).toBe('12');
  });

  test('division: 8 / 2 = 4', async ({ calculatorScreen }) => {
    await calculatorScreen.calculate('8 / 2');
    expect(await calculatorScreen.getResult()).toBe('4');
  });

  test('clear resets display', async ({ calculatorScreen }) => {
    await calculatorScreen.tapNumber(5);
    await calculatorScreen.tapClear();
    expect(await calculatorScreen.getResult()).toBe('0');
  });

  test('decimal: 1.5 + 2.5 = 4', async ({ calculatorScreen }) => {
    await calculatorScreen.calculate('1.5 + 2.5');
    expect(await calculatorScreen.getResult()).toBe('4');
  });

});