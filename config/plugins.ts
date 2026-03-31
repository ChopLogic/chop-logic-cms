export default () => ({
	graphql: {
		config: {
			endpoint: "/graphql",
			shadowCRUD: true,
			depthLimit: 15,
			amountLimit: 100,
			playgroundEnabled: true,
		},
	},
});
