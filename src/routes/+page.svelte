<script>
    import { onMount } from "svelte";
    const {data} = $props();
    onMount(() => {
        console.log(data.posts);
    })
</script>
<h1>Posts</h1>
{#each data.posts as post}
    <div>
        <h3><a href={"/" + post.slug}>{post.post.metadata.title}</a></h3>
    </div>
{/each}