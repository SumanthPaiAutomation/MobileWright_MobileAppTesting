import { defineConfig } from 'mobilewright';

export default defineConfig({
  platform: 'ios',
  bundleId: 'com.example.myapp',
  deviceName: /iPhone 16/,
  installApps: './builds/myapp.ipa',
  timeout: 10_000,
});