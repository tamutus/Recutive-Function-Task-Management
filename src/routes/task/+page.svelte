<script lang="ts">
	export let data;
</script>

<div class="flex flex-col justify-center text-center">
	{#each data.tasks ?? [] as task}
		<a href={`/task/${task.id}`} class="text-center bg-red-500">
			{task.name}
		</a>
	{/each}
	<div></div>
</div>
