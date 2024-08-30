<script lang="ts">
	export let saving: boolean;
	export let deleting: boolean;
	export let message: string | undefined = undefined;
	export let messageTimeout: number | undefined = 5;
</script>

<div class="fixed top-6 left-6">
	{#if deleting}
		Deleting...
	{:else if saving}
		Saving...
	{:else if message && message.length > 0}
		<span class="disappearing" style="transition-duration: {messageTimeout}s">
			{message}
		</span>
	{:else}
		Status
	{/if}
</div>

<style>
	.disappearing {
		animation: disappears;
	}
	@keyframes disappears {
		0% {
			height: 2em;
		}
		100% {
			height: 0;
		}
	}
</style>
