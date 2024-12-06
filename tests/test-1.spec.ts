import { test, expect } from '@playwright/test';

test('test recording', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Pesquisar', { exact: true }).click();
  await page.getByLabel('Pesquisar', { exact: true }).fill('teste com playw');
  await page.getByText('playwright', { exact: true }).click();
});