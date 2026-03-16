export const formatArticleTitle = (title: string): string => {
	return title.trim().toLowerCase().replace(/\s+/g, "-");
};
