import { test } from '@playwright/test';

test('debug chrome', async ({ page }) => {
  await page.pause();
});