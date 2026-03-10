import { describe, it, expect } from 'vitest';
import {
  cn,
  formatDate,
  calculateReadingTime,
  truncate,
  slugify,
  getRelativeTime,
} from '../../lib/utils';

describe('cn', () => {
  it('merges class names correctly', () => {
    const result = cn('px-4 py-2', 'px-6');
    expect(result).toContain('px-6');
    expect(result).toContain('py-2');
    expect(result).not.toContain('px-4');
  });

  it('handles conditional classes', () => {
    const result = cn('base', false && 'hidden', 'visible');
    expect(result).toBe('base visible');
  });

  it('returns empty string for no arguments', () => {
    expect(cn()).toBe('');
  });
});

describe('formatDate', () => {
  it('formats a date correctly', () => {
    const date = new Date('2026-03-10');
    const result = formatDate(date);
    expect(result).toContain('March');
    expect(result).toContain('2026');
  });
});

describe('calculateReadingTime', () => {
  it('calculates reading time for short content', () => {
    const content = 'word '.repeat(100);
    expect(calculateReadingTime(content)).toBe(1);
  });

  it('calculates reading time for longer content', () => {
    const content = 'word '.repeat(600);
    expect(calculateReadingTime(content)).toBeGreaterThanOrEqual(3);
    expect(calculateReadingTime(content)).toBeLessThanOrEqual(4);
  });

  it('returns 1 for empty content', () => {
    expect(calculateReadingTime('')).toBe(1);
  });
});

describe('truncate', () => {
  it('truncates long strings', () => {
    const result = truncate(
      'This is a long string that should be truncated',
      20,
    );
    expect(result.length).toBeLessThanOrEqual(21);
    expect(result).toContain('…');
  });

  it('returns short strings as-is', () => {
    expect(truncate('Short', 20)).toBe('Short');
  });
});

describe('slugify', () => {
  it('converts strings to URL-safe slugs', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('removes special characters', () => {
    expect(slugify("Hello! World's Best")).toBe('hello-worlds-best');
  });

  it('collapses multiple dashes', () => {
    expect(slugify('hello---world')).toBe('hello-world');
  });
});

describe('getRelativeTime', () => {
  it('returns "Today" for today', () => {
    expect(getRelativeTime(new Date())).toBe('Today');
  });

  it('returns "Yesterday" for yesterday', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(getRelativeTime(yesterday)).toBe('Yesterday');
  });

  it('returns days ago for recent dates', () => {
    const daysAgo = new Date();
    daysAgo.setDate(daysAgo.getDate() - 3);
    expect(getRelativeTime(daysAgo)).toBe('3 days ago');
  });
});
