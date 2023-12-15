<script lang="ts">
	import { goto, invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import { trpc } from '$tf/client';
	import TaskCard from '$com/card/task.svelte';

	export let data;

	let newTaskName = data.task?.name ?? '';
	let newTaskInfo = data.task?.info ?? '';
	let newTaskColor = data.task?.color ?? '';
	let newTaskLinks: string[] | undefined = data.task?.links ?? [];

	// let newTask = data.task?. ?? '';

	let saving = false;

	const saveTaskEdits = async () => {
		if (saving || !data.task) return;
		saving = true;
		let result = await trpc($page).task.edit.mutate({
			id: data.task.id,
			update: {
				name: newTaskName,
				info: newTaskInfo
			}
		});
		invalidate('task:list');
		saving = false;
	};
	const deleteTask = async () => {
		if (saving || !data.task) return;
		saving = true;
		let result = await trpc($page).task.delete.mutate({
			id: data.task.id
		});
		saving = false;
		await invalidate('task:list');
		goto('/');
	};
</script>

{#if data.task}
	<TaskCard task={data.task}>
		<svelte:fragment slot="content">
			<button type="button" on:click={() => goto('/')}>Back</button>
			<form on:submit|preventDefault={() => saveTaskEdits()} aria-busy={saving}>
				<div class="flex flex-col justify-center">
					<h3>Edit Task</h3>

					<input type="text" bind:value={newTaskName} disabled={saving} />
					<textarea bind:value={newTaskInfo} disabled={saving} />
					<div>
						<input type="color" bind:value={newTaskColor} disabled={saving} />{newTaskColor}
					</div>

					<button type="submit">Edit</button>
				</div>
			</form>
			<button type="button" on:click={() => deleteTask()}>Delete</button>
		</svelte:fragment>
	</TaskCard>
{/if}
