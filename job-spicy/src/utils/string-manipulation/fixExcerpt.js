export const fixExcerpt = jobExcerpt =>
	jobExcerpt
		.replaceAll(/&#8230;/g, "...")
		.replaceAll(/&#8217;/g, "'")
		.replaceAll(/&amp;/g, "&")
