<script>
	export let segment;

	let isOpen = false;
	function toggleNav(){
		isOpen = !isOpen;
	}

</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
	  <a href="/" class="navbar-item">
		  Virus
		</a>
		<span class="navbar-burger" class:is-active={isOpen} on:click={toggleNav} aria-label="menu" aria-expanded="false">
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</span><!--navbar-burger-->
	</div><!--navbar-brand-->
	<div class="navbar-menu" class:is-active={isOpen}>
	  <div class="navbar-start">
		  <a class="navbar-item" class:is-active={segment === undefined} href="/">Home</a>
		  <a class="navbar-item" class:is-active={segment === 'about'} href="/about">About</a>
		</div><!--navbar-start-->
	</div><!--navbar-menu-->
</nav><!--navbar-->


<style>
	@media(min-width: 769px){
		nav {
			border-bottom: 1px solid gray
		}
	}

</style>