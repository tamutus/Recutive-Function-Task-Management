<script lang="ts">
	export let data;
</script>

<div class="flex flex-col justify-center text-center">
	{#each data.projects ?? [] as project}
		<a href={`/project/${project.id}`} class="text-center bg-red-500">
			{project.name}
		</a>
	{/each}
	<div></div>
</div>
