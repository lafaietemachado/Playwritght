// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')
})

  test('Login com sucesso', async ({ page }) => {

    // Utilizando scroll com botões
    // const button = await page.getByRole('button', { name: 'Send Mail' })
    // await button.scrollIntoViewIfNeeded()
    // await button.click()

    // Utilizando scroll com texto
    const texto = await page.waitForSelector('text=NEWSLETTER')
    await texto.scrollIntoViewIfNeeded()

    await page.getByRole('link', { name: ' Login' }).click()
    await page.locator('#user').click()
    await page.locator('#user').fill('teste@gmail.com')
    await page.screenshot({ path: 'screenshot/screenshot1.png' });
    await page.locator('#password').click()
    await page.locator('#password').fill('123456')
    await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png' });
    await page.screenshot({ path: 'screenshot/screenshot2.png' });
    await page.getByRole('button', { name: 'login' }).click()
    await page.getByRole('button', { name: 'OK' }).click()
  })

  test('Login com sucesso 1 @login', async ({ page }) => {

    // Utilizando scroll com texto
    const texto = await page.waitForSelector('text=NEWSLETTER')
    await texto.scrollIntoViewIfNeeded()


    await page.getByRole('link', { name: ' Login' }).click()
    await page.locator('#user').click()
    await page.locator('#user').fill('teste@gmail.com')
    await page.screenshot({ path: 'screenshot/screenshot1.png' });
    await page.locator('#password').click()
    await page.locator('#password').fill('123456')
    await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png' });
    await page.screenshot({ path: 'screenshot/screenshot2.png' });
    await page.getByRole('button', { name: 'login' }).click()
    await page.getByRole('button', { name: 'OK' }).click()
  })

  test('Login com sucesso 2', async ({ page }) => {

    // Utilizando scroll com texto
    const texto = await page.waitForSelector('text=NEWSLETTER')
    await texto.scrollIntoViewIfNeeded()

    await page.getByRole('link', { name: ' Login' }).click()
    await page.locator('#user').click()
    await page.locator('#user').fill('teste@gmail.com')
    await page.screenshot({ path: 'screenshot/screenshot1.png' });
    await page.locator('#password').click()
    await page.locator('#password').fill('123456')
    await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png' });
    await page.screenshot({ path: 'screenshot/screenshot2.png' });
    await page.getByRole('button', { name: 'login' }).click()
    await page.getByRole('button', { name: 'OK' }).click()
  })

