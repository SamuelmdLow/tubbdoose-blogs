<script>
	import icon from '$lib/assets/tubbdoose-icon.svg';
	import "./layout.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={icon} />
</svelte:head>

<nav>
	<a href="https://tubbdoose.ca/" title="Go to TubbDoose.ca home page">
	<img class="icon" src={icon} alt="TubbDoose icon" />
	</a>
</nav>

<div class="container">
{@render children()}

</div>

<footer>TubbDoose.ca, a Sam Low production.</footer>

<style>
	nav {
		position: absolute;
		left: 1em;
		top: 1em;
		.icon {
			width: 4em;
			@media screen and (max-width: 700px) {
				width: 3em;
			}
		}
	}
	footer {
		width: fit-content;
		margin-top: auto;
		margin-inline: auto;
		padding: 1.5em;
	}
</style>