import { test, expect } from '@mobilewright/test';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const USERNAME = process.env.LOGIN_USERNAME!;
const PASSWORD = process.env.LOGIN_PASSWORD!;

test('user can log in', async ({ screen, device, bundleId }) => {
  await device.terminateApp(bundleId).catch(() => {});
  await device.launchApp(bundleId);

  await screen.getByLabel('Username').fill(USERNAME);
  await screen.getByLabel('Password').fill(PASSWORD);
  await screen.getByRole('button', { name: 'Login' }).tap();

  await expect(screen.getByText('Products')).toBeVisible();
});