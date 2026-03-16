import type { StrapiEnv } from "../src/utils/strapi-env";

export default ({ env }: { env: StrapiEnv }) => [
	"strapi::logger",
	"strapi::errors",
	"strapi::security",
	{
		name: "strapi::cors",
		config: {
			origin: [
				"http://localhost:4321",
				env("FRONTEND_URL", "http://localhost:4321"),
			],
		},
	},
	"strapi::poweredBy",
	"strapi::query",
	"strapi::body",
	"strapi::session",
	"strapi::favicon",
	"strapi::public",
];
