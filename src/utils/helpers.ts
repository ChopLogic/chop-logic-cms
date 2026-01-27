/**
 * Simple utility functions for testing
 */

export const add = (a: number, b: number): number => {
	return a + b;
};

export const subtract = (a: number, b: number): number => {
	return a - b;
};

export const formatArticleTitle = (title: string): string => {
	return title.trim().toLowerCase().replace(/\s+/g, "-");
};
