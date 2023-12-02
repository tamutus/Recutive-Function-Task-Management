<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import { trpc } from '$tf/client';

	export let data;

	let newTaskName: string = '';
	let creating = false;

	const createTask = async (taskName: string) => {
		if (creating) return;
		creating = true;
		let result = await trpc($page).task.create.mutate({
			name: taskName
		});
		invalidate('task:list');
		creating = false;
		newTaskName = '';
		console.log(result);
	};
</script>

<div class="flex flex-row">
	<p class="mr-4">Your next task is:</p>
	<div class="flex flex-col">
		{#each data.tasks as task}
			<a href={`/task/${task.id}`}><p>{task.name}</p></a>
		{/each}
		<div></div>
	</div>
</div>

<div>
	<form on:submit|preventDefault={() => createTask(newTaskName)} aria-busy={creating}>
		<div>
			<h3>Create Task</h3>
			<input type="text" bind:value={newTaskName} disabled={creating} />
			<button type="submit">Create</button>
		</div>
	</form>
</div>

<div>
	<h3>Your:</h3>
	<div class="flex flex-col">
		<div>Tasks</div>
		<div>Projects</div>
		<div>Priorities</div>
	</div>
</div>
