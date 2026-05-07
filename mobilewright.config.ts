import { defineConfig } from 'mobilewright';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  platform: 'android',
  timeout: 10_000,
  autoAppLaunch: false,
});