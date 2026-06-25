import { test, expect } from '@playwright/test';

test('signup page version A', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await expect(page.locator('#username')).toBeVisible();
    
});