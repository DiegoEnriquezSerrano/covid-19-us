<script>
	export let status;
	export let error;
</script>

<svelte:head>
  <title>Error - {status}</title>
</svelte:head>

{#if status !== 404}
	<div class="container">
	  <article class="message is-danger">
		  <div class="message-header">
			 <p>Error</p>
			</div>
			<div class="message-body">
			  {error.message}
			</div>
		</article>
	</div>
{/if}

{#if status === 404}
	<div class="container">
	  <article class="message is-warning">
		  <div class="message-header">
			 <p>Page not found</p>
			</div>
			<div class="message-body">
			  <a href="/">Click here</a> to return home.
			</div>
		</article>
	</div>
{/if}

<style>

	.container {
		width: 80%;
	}

</style>