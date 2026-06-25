import { test, expect } from '@playwright/test';

test('signup page version B', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await expect(page.locator('#username')).toBeVisible();
    
});