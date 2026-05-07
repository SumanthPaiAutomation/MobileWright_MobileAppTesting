import { Screen } from 'mobilewright';

export class BaseScreen {
  constructor(protected screen: Screen) {}

  async waitForElement(
    strategy: 'label' | 'text' | 'testId' | 'role' | 'type' | 'placeholder',
    value: string,
    options?: { 
      name?: string; 
      timeout?: number; 
      state?: 'visible' | 'hidden' | 'enabled' | 'disabled' 
    }
  ) {
    const timeout = options?.timeout ?? 10_000;
    const state   = options?.state   ?? 'visible';

    let locator;
    switch (strategy) {
      case 'label':       locator = this.screen.getByLabel(value); break;
      case 'text':        locator = this.screen.getByText(value); break;
      case 'testId':      locator = this.screen.getByTestId(value); break;
      case 'role':        locator = this.screen.getByRole(value, { name: options?.name }); break;
      case 'type':        locator = this.screen.getByType(value); break;
      case 'placeholder': locator = this.screen.getByPlaceholder(value); break;
      default: throw new Error(`Unknown strategy: ${strategy}`);
    }

    await locator.waitFor({ state, timeout });
  }

  async takeScreenshot() {
    return await this.screen.screenshot();
  }
}