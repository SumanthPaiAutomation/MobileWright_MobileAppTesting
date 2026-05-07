import { defineConfig } from 'mobilewright';
import * as dotenv from 'dotenv';

export default defineConfig({
  platform: 'android', //choose between ios or android.
  bundleId: process.env.APP_BUNDLE_ID,
  deviceName: process.env.DEVICE_ID,
  installApps: './builds/myapp.ipa',
  timeout: 60000,
});