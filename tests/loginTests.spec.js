import {test, expect} from '@playwright/test'

test.describe('Login page tests',() => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicetestautomation.com/practice-test-login/')
    } );

    //test1
    test('login page should load with correct title', async ({ page }) => {
        await expect(page).toHaveTitle(/Practice Test Login Page/);
        await expect(page.locator('#Username')).toBeVisible();
        await expect(page.locator('#Password')).toBeVisible();
        await expect(page.locator('#submit')).toBeVisible();

    });
    
    //test2
    test('login successfully with valid credential reach home page', async ({ page }) => {
        await page.locator('#username').fill('student');
        await page.locator('#password').fill('Password123');
        await page.locator('#submit').click();

        await expect(page).toHaveURL(/logged-in-successfully/);
        await expect(page.locator('h1')).toContainText('Logged In Successfully');
    });
} );