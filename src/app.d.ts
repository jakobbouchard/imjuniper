// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		isPreview: boolean;
		previewType: import('$lib/types').PreviewType | undefined;
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

// Helper for getting an Array's type
type Unpacked<T> = T extends (infer U)[] ? U : T;
