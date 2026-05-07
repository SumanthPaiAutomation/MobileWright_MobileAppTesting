import { execFileSync } from 'child_process';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export const androidAppLaunch = (packageAndActivityName: string): void => {
  const deviceId = process.env.DEVICE_ID;

  if (!deviceId) {
    throw new Error('DEVICE_ID is not set in .env.local');
  }

  if (!packageAndActivityName.includes('/')) {
    throw new Error(`Invalid format: expected "package/activity", got "${packageAndActivityName}"`);
  }

  execFileSync(
    'adb',
    ['-s', deviceId, 'shell', 'am', 'start', '-n', packageAndActivityName],
    { stdio: 'ignore' }
  );
};