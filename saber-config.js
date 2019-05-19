module.exports = {
	plugins: [
		{
			resolve: 'saber-plugin-query-posts',
			options: {
				perPage: 30
			}
		},
		{
			resolve: 'saber-plugin-prismjs'
		},
		{
			resolve: 'saber-plugin-image',
			options: {
				sizes: [1000, 530, 350]
			}
		},
		{
			resolve: 'saber-plugin-feed',
			options: {
				atomFeed: true,
				rss2Feed: true,
				jsonFeed: true
			}
		}
	],
	theme: './theme',
	siteConfig: {
		title: "Max' Blog",
		author: 'krmax44',
		url: 'https://krmax44.de',
		email: 'hi@krmax44.de'
	},
	permalinks: {
		post: '/:year/:month/:day/:slug/',
		page: '/:slug/'
	}
};
