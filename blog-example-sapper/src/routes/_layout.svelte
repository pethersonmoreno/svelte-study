<script>
  import Header from "../components/Header.svelte";
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<svelte:head>
  <title>Petherson Moreno - Blog</title>
</svelte:head>

<Header />

<main>
	<slot></slot>
</main>