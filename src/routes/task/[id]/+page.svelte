<script lang="ts">
	import { goto, invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import { trpc } from '$tf/client';

	export let data;

	let newTaskName = data.task?.name ?? '';
	let saving = false;

	const saveTaskEdits = async () => {
		if (saving || !data.task) return;
		saving = true;
		let result = await trpc($page).task.edit.mutate({
			id: data.task.id,
			name: newTaskName
		});
		invalidate('task:list');
		saving = false;
		console.log(result);
	};
	const deleteTask = async () => {
		if (saving || !data.task) return;
		saving = true;
		let result = await trpc($page).task.delete.mutate({
			id: data.task.id
		});
		saving = false;
		console.log(result);
		await goto('/');
	};
</script>

<!-- <div class="flex flex-row">
	<p class="mr-4">Your next task is:</p>
	<div class="flex flex-col">
		{#each data.tasks as task}
			<a href={`/task/${task.id}`}><p>{task.name}</p></a>
		{/each}
		<div></div>
	</div>
</div> -->

<div>
	<form on:submit|preventDefault={() => saveTaskEdits()} aria-busy={saving}>
		<div>
			<h3>Edit Task</h3>
			<input type="text" bind:value={newTaskName} disabled={saving} />
			<button type="submit">Edit</button>
		</div>
	</form>
</div>
<button type="button" on:click={deleteTask}>Delete</button>

<div>
	<h3>Your:</h3>
	<div class="flex flex-col">
		<div>Tasks</div>
		<div>Projects</div>
		<div>Priorities</div>
	</div>
</div>
