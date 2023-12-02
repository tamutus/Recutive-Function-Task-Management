<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<nav id="userbar" class="flex flex-row w-full justify-end p-4">
	{#if $page.data.session?.user}
		<p class="m-2">Signed in as {$page.data.session.user.email}</p>
		<button class="m-2" on:click={() => signOut()}>Sign out</button>
		<img class="m-2" src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" />
	{:else}
		<p class="m-2">Not signed in.</p>
		<button class="m-2" on:click={() => signIn('github')}>Sign in with Github</button>
		<button class="m-2" on:click={() => signIn('google')}>Sign in with Google</button>
		<!-- <button on:click={() => signIn('email')}>Sign in with Github</button> -->
	{/if}
</nav>
