import { Screen } from 'mobilewright';
import { BaseScreen } from './basescreen';
import { CartScreen } from './cartscreen';

export class ProductScreen extends BaseScreen {

private cartIcon = () => this.screen.getByTestId('cartIV');

  constructor(screen: Screen) {
    super(screen);
  }

async clickToCartToSeeShoppingButton(cartScreen : CartScreen):Promise<boolean>{
await this.cartIcon().tap();
return await cartScreen.isShoppingButtonVsisible();
}
}