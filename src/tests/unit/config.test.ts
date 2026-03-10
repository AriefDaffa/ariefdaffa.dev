import { describe, it, expect } from 'vitest';
import { siteConfig } from '../../lib/config';

describe('siteConfig', () => {
  it('has required fields', () => {
    expect(siteConfig.name).toBeTruthy();
    expect(siteConfig.title).toBeTruthy();
    expect(siteConfig.description).toBeTruthy();
    expect(siteConfig.url).toBeTruthy();
    expect(siteConfig.author).toBeTruthy();
    expect(siteConfig.email).toBeTruthy();
  });

  it('has valid navigation items', () => {
    expect(siteConfig.nav.length).toBeGreaterThan(0);
    siteConfig.nav.forEach((item) => {
      expect(item.label).toBeTruthy();
      expect(item.href).toBeTruthy();
      expect(item.href.startsWith('/')).toBe(true);
    });
  });

  it('has social links', () => {
    expect(siteConfig.links.github).toContain('github.com');
    expect(siteConfig.links.linkedin).toContain('linkedin.com');
    expect(siteConfig.links.twitter).toContain('twitter.com');
  });

  it('has a valid URL', () => {
    expect(siteConfig.url).toMatch(/^https?:\/\//);
  });
});
