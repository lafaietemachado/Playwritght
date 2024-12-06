import { test, expect } from '@playwright/test';

test('teste de login mepohi2962 @mepohi2962', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('myAPI')).toBeVisible();
});