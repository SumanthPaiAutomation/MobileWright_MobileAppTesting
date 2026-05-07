import { test, expect }
from '@mobilewright/test';

test(
  'debug launch',
  async ({ device, screen }) => {

    await device.launchApp(
      'com.saucelabs.mydemoapp.android',
      {
        noWaitAfter: true
      }
    );

    await new Promise(resolve =>
      setTimeout(resolve, 5000)
    );

    await expect(
      screen.getByText('Products')
    ).toBeVisible();

  }
);