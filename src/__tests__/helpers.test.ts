import { add, formatArticleTitle, subtract } from "../utils/helpers";

describe("Helper Functions", () => {
	describe("add", () => {
		it("should add two positive numbers", () => {
			expect(add(2, 3)).toBe(5);
		});

		it("should add a positive and negative number", () => {
			expect(add(5, -3)).toBe(2);
		});

		it("should return 0 when adding 0 to 0", () => {
			expect(add(0, 0)).toBe(0);
		});
	});

	describe("subtract", () => {
		it("should subtract two numbers", () => {
			expect(subtract(10, 3)).toBe(7);
		});

		it("should subtract resulting in a negative number", () => {
			expect(subtract(3, 10)).toBe(-7);
		});
	});

	describe("formatArticleTitle", () => {
		it("should convert title to kebab-case", () => {
			expect(formatArticleTitle("Hello World")).toBe("hello-world");
		});

		it("should trim whitespace", () => {
			expect(formatArticleTitle("  My Article Title  ")).toBe(
				"my-article-title",
			);
		});

		it("should handle multiple spaces", () => {
			expect(formatArticleTitle("Article   With   Spaces")).toBe(
				"article-with-spaces",
			);
		});

		it("should handle single word", () => {
			expect(formatArticleTitle("Article")).toBe("article");
		});
	});
});
