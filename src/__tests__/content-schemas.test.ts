import * as fs from "node:fs";
import * as path from "node:path";

const SRC_ROOT = path.join(__dirname, "..");

function walkFiles(
	dir: string,
	predicate: (fullPath: string) => boolean,
): string[] {
	const out: string[] = [];
	let entries: fs.Dirent[];
	try {
		entries = fs.readdirSync(dir, { withFileTypes: true });
	} catch {
		return out;
	}
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			out.push(...walkFiles(full, predicate));
		} else if (predicate(full)) {
			out.push(full);
		}
	}
	return out;
}

function loadJson(filePath: string): unknown {
	const raw = fs.readFileSync(filePath, "utf8");
	return JSON.parse(raw) as unknown;
}

function isRecord(v: unknown): v is Record<string, unknown> {
	return typeof v === "object" && v !== null && !Array.isArray(v);
}

describe("Strapi content-type schemas", () => {
	const schemaPaths = walkFiles(
		path.join(SRC_ROOT, "api"),
		(p) => p.endsWith(`${path.sep}schema.json`) && p.includes("content-types"),
	);

	it("discovers at least one content-type schema", () => {
		expect(schemaPaths.length).toBeGreaterThan(0);
	});

	it.each(schemaPaths)("parses and has required shape: %s", (filePath) => {
		const data = loadJson(filePath);
		expect(isRecord(data)).toBe(true);
		if (!isRecord(data)) return;

		expect(["collectionType", "singleType"]).toContain(data.kind);

		const info = data.info;
		expect(isRecord(info)).toBe(true);
		if (!isRecord(info)) return;

		expect(typeof info.singularName).toBe("string");
		expect((info.singularName as string).length).toBeGreaterThan(0);
		expect(typeof info.pluralName).toBe("string");
		expect((info.pluralName as string).length).toBeGreaterThan(0);
		expect(typeof info.displayName).toBe("string");
		expect((info.displayName as string).length).toBeGreaterThan(0);

		expect(isRecord(data.attributes)).toBe(true);
	});
});

describe("Strapi component schemas", () => {
	const componentPaths = walkFiles(path.join(SRC_ROOT, "components"), (p) =>
		p.endsWith(".json"),
	);

	it("discovers at least one component schema", () => {
		expect(componentPaths.length).toBeGreaterThan(0);
	});

	it.each(componentPaths)("parses and has required shape: %s", (filePath) => {
		const data = loadJson(filePath);
		expect(isRecord(data)).toBe(true);
		if (!isRecord(data)) return;

		const info = data.info;
		expect(isRecord(info)).toBe(true);
		if (!isRecord(info)) return;

		expect(typeof info.displayName).toBe("string");
		expect((info.displayName as string).length).toBeGreaterThan(0);

		expect(isRecord(data.attributes)).toBe(true);
	});
});
