// @ts-check
import { test, expect } from '@playwright/test';
import fs from "fs";

const TOKEN_FILEPATH = "playwright/.auth/user.json";

test('test', async ({ page }) => {
  await page.goto('https://my.api.org/');
  await page.getByLabel('Email').fill('mepohi2962@rustetic.com');
  await page.getByLabel('Password').fill('Teste@123');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(5000);
  await page.context().storageState({ path: TOKEN_FILEPATH });
});