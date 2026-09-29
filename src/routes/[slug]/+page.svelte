<script lang="ts">
    import { dateLine } from "$lib";

    let {data} = $props();
</script>

<svelte:head>
<title>{data.frontmatter.title} - TubbDoose</title>
<meta name="description" content={data.frontmatter.description} />
</svelte:head>

<data.component />

<div class="publish-line">Published {dateLine(data.frontmatter.date)} by Sam Low.</div>