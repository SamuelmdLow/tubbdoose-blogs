
import { error } from '@sveltejs/kit';

const slugFromPath = (path) =>
	path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

export const load = async ({ params }) => {
	const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);

	let match = {};
	for (const [path, resolver] of Object.entries(modules)) {
		if (slugFromPath(path) === params.slug) {
			match = { path, resolver: resolver};
			break;
		}
	}

	const post = await match?.resolver?.();

	if (!post || !post.metadata.published) {
		throw error(404); // Couldn't resolve the post
	}

	return {
		component: post.default,
		frontmatter: post.metadata
	};
};