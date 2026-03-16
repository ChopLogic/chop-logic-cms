export interface StrapiEnv {
	(key: string, defaultValue?: string): string;
	int(key: string, defaultValue?: number): number;
	float(key: string, defaultValue?: number): number;
	bool(key: string, defaultValue?: boolean): boolean;
	json(key: string, defaultValue?: object): object;
	array(key: string, defaultValue?: string[]): string[];
	date(key: string, defaultValue?: Date): Date;
}
