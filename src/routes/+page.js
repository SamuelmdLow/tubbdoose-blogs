import { slugFromPath } from '$lib';

export const load = async ({ params }) => {
    const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);
    console.log(modules);
    const posts = await Promise.all(Object.entries(modules).map(async ([path,resolver]) => {return {slug: slugFromPath(path), post: await resolver()}}));

    console.log(posts);
    return {posts: posts}
}