import { test, expect } from '@playwright/test';

test.describe('Visual Branding Tests', () => {
  // Using the port identified in the logs
  const BASE_URL = 'http://localhost:5174';

  test('should show logo and no text in Navbar', async ({ page }) => {
    await page.goto(BASE_URL);

    const logo = page.locator('header img');
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('src', '/s3mlogo.png');

    const logoLink = page.locator('header a[href="#home"]');
    const spansInLogo = logoLink.locator('span');
    await expect(spansInLogo).toHaveCount(0);
  });

  test('should show logo and no text in Footer', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Use a more specific selector to avoid the background image in the footer
    const footerLogo = page.locator('footer a[href="#home"] img');
    await expect(footerLogo).toBeVisible();
    await expect(footerLogo).toHaveAttribute('src', '/s3mlogo.png');

    const footerLogoLink = page.locator('footer a[href="#home"]');
    const spansInFooterLogo = footerLogoLink.locator('span');
    await expect(spansInFooterLogo).toHaveCount(0);
  });
});