import { execFileSync } from 'child_process';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export const androidAppLaunch = (): void => {
  const deviceId = process.env.DEVICE_ID;
  const appActivity = process.env.APP_ACTIVITY;

  if (!deviceId) throw new Error('DEVICE_ID is not set in .env.local');
  if (!appActivity) throw new Error('APP_ACTIVITY is not set in .env.local');

  if (!appActivity.includes('/')) {
    throw new Error(`Invalid format: expected "package/activity", got "${appActivity}"`);
  }

  execFileSync(
    'adb',
    ['-s', deviceId, 'shell', 'am', 'start', '-n', appActivity],
    { stdio: 'ignore' }
  );
};