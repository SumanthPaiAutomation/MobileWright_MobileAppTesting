import { defineConfig } from 'mobilewright';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  platform: 'android',
  bundleId: process.env.APP_BUNDLE_ID,
  deviceId: process.env.DEVICE_ID,    // ← was deviceName, now deviceId
  timeout: 10_000,
});