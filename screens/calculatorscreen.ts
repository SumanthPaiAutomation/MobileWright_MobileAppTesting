import { Screen } from 'mobilewright';
import { BaseScreen } from './basescreen';

export class CalculatorScreen extends BaseScreen {

  // Number buttons
  private btn0 = () => this.screen.getByTestId('digit_0');
  private btn1 = () => this.screen.getByTestId('digit_1');
  private btn2 = () => this.screen.getByTestId('digit_2');
  private btn3 = () => this.screen.getByTestId('digit_3');
  private btn4 = () => this.screen.getByTestId('digit_4');
  private btn5 = () => this.screen.getByTestId('digit_5');
  private btn6 = () => this.screen.getByTestId('digit_6');
  private btn7 = () => this.screen.getByTestId('digit_7');
  private btn8 = () => this.screen.getByTestId('digit_8');
  private btn9 = () => this.screen.getByTestId('digit_9');

  // Operator buttons
  private btnAdd      = () => this.screen.getByTestId('op_add');
  private btnSubtract = () => this.screen.getByTestId('op_sub');
  private btnMultiply = () => this.screen.getByTestId('op_mul');
  private btnDivide   = () => this.screen.getByTestId('op_div');
  private btnEquals   = () => this.screen.getByTestId('eq');
  private btnClear    = () => this.screen.getByTestId('clr');
  private btnDot      = () => this.screen.getByTestId('dec_point');


  private resultDisplay = () => this.screen.getByTestId('result');

  constructor(screen: Screen) {
    super(screen);
  }

  // --- isLoaded check ---
  async isLoaded() {
    await this.waitForElement('testId', 'clr');
  }

  // --- Single taps ---
  async tapNumber(num: 0|1|2|3|4|5|6|7|8|9) {
    const buttons = {
      0: this.btn0, 1: this.btn1, 2: this.btn2,
      3: this.btn3, 4: this.btn4, 5: this.btn5,
      6: this.btn6, 7: this.btn7, 8: this.btn8,
      9: this.btn9
    };
    await buttons[num]().tap();
  }

  async tapAdd()      { await this.btnAdd().tap(); }
  async tapSubtract() { await this.btnSubtract().tap(); }
  async tapMultiply() { await this.btnMultiply().tap(); }
  async tapDivide()   { await this.btnDivide().tap(); }
  async tapEquals()   { await this.btnEquals().tap(); }
  async tapClear()    { await this.btnClear().tap(); }
  async tapDot()      { await this.btnDot().tap(); }

  // --- Composite actions ---
  async enterNumber(num: string) {
    for (const digit of num) {
      if (digit === '.') {
        await this.tapDot();
      } else {
        await this.tapNumber(parseInt(digit) as 0|1|2|3|4|5|6|7|8|9);
      }
    }
  }

  async tapOperator(operator: string) {
    const map: Record<string, () => Promise<void>> = {
      '+': () => this.tapAdd(),
      '-': () => this.tapSubtract(),
      '*': () => this.tapMultiply(),
      '/': () => this.tapDivide(),
    };
    const action = map[operator];
    if (!action) throw new Error(`Unknown operator: ${operator}`);
    await action();
  }

  async calculate(expression: string) {
    const parts    = expression.trim().split(' ');
    const num1     = parts[0];
    const operator = parts[1];
    const num2     = parts[2];

    await this.enterNumber(num1);
    await this.tapOperator(operator);
    await this.enterNumber(num2);
    await this.tapEquals();
  }

  // --- Getters ---
  async getResult(): Promise<string> {
    return await this.resultDisplay().getText() ?? '';
  }

  async isResultVisible(): Promise<boolean> {
    return await this.resultDisplay().isVisible();
  }
}