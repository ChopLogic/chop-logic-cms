module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	roots: ["<rootDir>/src"],
	testMatch: ["**/__tests__/**/*.test.ts", "**/?(*.)+(spec|test).ts"],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	collectCoverageFrom: [
		"src/**/*.{ts,tsx}",
		"!src/**/*.d.ts",
		"!src/**/*.example.*",
		"!src/**/index.ts",
	],
	coveragePathIgnorePatterns: ["/node_modules/", "/dist/"],
	transform: {
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				tsconfig: {
					strict: true,
					esModuleInterop: true,
					allowSyntheticDefaultImports: true,
					jsx: "react",
					outDir: "dist",
					isolatedModules: true,
				},
			},
		],
	},
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
};
