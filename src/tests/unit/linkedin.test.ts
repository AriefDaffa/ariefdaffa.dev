import { describe, it, expect } from 'vitest';
import {
  getLinkedInProfile,
  formatExperiencePeriod,
  calculateDuration,
} from '../../services/linkedin';

describe('getLinkedInProfile', () => {
  it('returns the profile data', () => {
    const profile = getLinkedInProfile();
    expect(profile).toBeDefined();
    expect(profile.name).toBe('Arief Daffa Abdullah');
    expect(profile.headline).toBeTruthy();
    expect(profile.summary).toBeTruthy();
  });

  it('has experience entries', () => {
    const profile = getLinkedInProfile();
    expect(profile.experience.length).toBeGreaterThan(0);
    expect(profile.experience[0]).toHaveProperty('company');
    expect(profile.experience[0]).toHaveProperty('title');
    expect(profile.experience[0]).toHaveProperty('technologies');
  });

  it('has skill categories', () => {
    const profile = getLinkedInProfile();
    expect(profile.skills.length).toBeGreaterThan(0);
    expect(profile.skills[0]).toHaveProperty('category');
    expect(profile.skills[0]).toHaveProperty('items');
    expect(profile.skills[0].items.length).toBeGreaterThan(0);
  });

  it('has education entries', () => {
    const profile = getLinkedInProfile();
    expect(profile.education.length).toBeGreaterThan(0);
  });
});

describe('formatExperiencePeriod', () => {
  it('formats period with end date', () => {
    const result = formatExperiencePeriod('2021-06', '2022-12');
    expect(result).toContain('2021');
    expect(result).toContain('2022');
  });

  it('formats period without end date as Present', () => {
    const result = formatExperiencePeriod('2023-01', null);
    expect(result).toContain('Present');
    expect(result).toContain('2023');
  });
});

describe('calculateDuration', () => {
  it('calculates duration in years and months', () => {
    const duration = calculateDuration('2021-01', '2022-07');
    expect(duration).toContain('1 yr');
    expect(duration).toContain('6 mo');
  });

  it('calculates duration with null end date (present)', () => {
    const duration = calculateDuration('2023-01', null);
    expect(duration).toBeTruthy();
  });

  it('calculates months-only duration', () => {
    const duration = calculateDuration('2023-01', '2023-06');
    expect(duration).toContain('mo');
  });
});
