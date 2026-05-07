import { Device } from 'mobilewright';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export const androidAppLaunch = async (
  device: Device
): Promise<void> => {

  const bundleId = process.env.APP_BUNDLE_ID!;

  if (!bundleId) {
    throw new Error(
      'BUNDLE_ID is not set in .env.local'
    );
  }

    await device
    .terminateApp(bundleId)
    .catch(() => {});

  await device.launchApp(
    bundleId,
    {
      noWaitAfter: true
    }
  );
};