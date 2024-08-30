<script lang="ts">
	import TaskCard from '$com/card/task.svelte';
	export let data;
</script>

<h1>All Tasks</h1>

<div class="flex flex-col justify-center text-center">
	{#each data.tasks ?? [] as task}
		<TaskCard {task}></TaskCard>
	{/each}
	<div></div>
</div>
