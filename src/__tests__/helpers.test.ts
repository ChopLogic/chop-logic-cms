import { formatArticleTitle } from "../utils/helpers";

describe("Helper Functions", () => {
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
