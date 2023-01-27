import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vitest/config";

const config: UserConfig = {
	plugins: [sveltekit()],
	test: { include: ["src/**/*.{test,spec}.ts"] },
};

export default config;
