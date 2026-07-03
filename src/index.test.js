import { describe, it, expect } from 'vitest';
import { newsItems } from './lib/data/news.js';

describe('news data', () => {
	it('every item has required fields and a unique slug', () => {
		const slugs = new Set();
		for (const item of newsItems) {
			expect(item.slug).toBeTruthy();
			expect(slugs.has(item.slug)).toBe(false);
			slugs.add(item.slug);
			expect(item.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
			expect(item.location).toBeTruthy();
			expect(item.title).toBeTruthy();
			expect(Array.isArray(item.paragraphs)).toBe(true);
		}
	});
});
