import { expect, test } from '@playwright/test';

test('homepage renders nav, hero, where, and news sections', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('Fietskeuken Gent');
	await expect(page.locator('#where')).toBeVisible();
	await expect(page.locator('#news')).toBeVisible();
	await expect(page.getByRole('navigation', { name: 'Hoofdnavigatie' })).toBeVisible();
});

test('mobile menu toggles', async ({ page }) => {
	await page.setViewportSize({ width: 375, height: 667 });
	await page.goto('/');
	const toggle = page.getByRole('button', { name: /menu/i });
	await toggle.click();
	await expect(page.getByRole('link', { name: 'Nieuws' })).toBeVisible();
});

test('about, contact and privacy pages load with correct h1', async ({ page }) => {
	for (const [path, expectedH1] of [
		['/about', 'Fietskeuken'],
		['/contact', 'Contact'],
		['/privacy', 'Privacybeleid']
	]) {
		await page.goto(path);
		await expect(page.getByRole('heading', { level: 1 })).toHaveText(expectedH1);
	}
});
