import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load and display hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Arief Daffa/);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.getByText('View My Work')).toBeVisible();
  });

  test('should have navigation links', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('should display featured projects section', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Featured Projects')).toBeVisible();
  });

  test('should display skills section', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Skills & Technologies')).toBeVisible();
  });

  test('should display latest posts section', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Latest Posts')).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('should navigate to Projects page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Projects' }).first().click();
    await expect(page).toHaveURL(/\/projects/);
    await expect(page.getByText('Featured Work')).toBeVisible();
  });

  test('should navigate to Blog page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Blog' }).first().click();
    await expect(page).toHaveURL(/\/blog/);
  });

  test('should navigate to About page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'About' }).first().click();
    await expect(page).toHaveURL(/\/about/);
    await expect(page.getByText('My Story')).toBeVisible();
  });

  test('should navigate to Contact page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Contact' }).first().click();
    await expect(page).toHaveURL(/\/contact/);
  });
});

test.describe('Blog', () => {
  test('should render blog post pages', async ({ page }) => {
    await page.goto('/blog');
    const firstPost = page.locator('a[href^="/blog/"]').first();
    await firstPost.click();
    await expect(page.locator('article')).toBeVisible();
    await expect(page.getByText('Back to Blog')).toBeVisible();
  });
});
