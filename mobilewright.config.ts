import { defineConfig } from 'mobilewright';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  platform: 'android', //choose between ios or android.
  //bundleId: process.env.APP_BUNDLE_ID,
  deviceName: process.env.DEVICE_ID,
  installApps: './builds/myapp.ipa',
  timeout: 60000,
});