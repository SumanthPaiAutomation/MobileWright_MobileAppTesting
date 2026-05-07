import { Screen } from 'mobilewright';
import { BaseScreen } from './basescreen';

export class CartScreen extends BaseScreen {

private goShoppingbutton= () => this.screen.getByTestId('shoppingBt');

  constructor(screen: Screen) {
    super(screen);
  }

async isShoppingButtonVsisible(): Promise<boolean>{
return await this.goShoppingbutton().isVisible();
}
}