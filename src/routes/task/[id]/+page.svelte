<script lang="ts">
	import { goto, invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import { trpc } from '$tf/client';
	import TaskCard from '$com/card/task.svelte';
	import StatusDisplay from '$com/nav/changeStatus.svelte';
	import ModalGeneric from '$com/modal/generic.svelte';

	export let data;

	let newTaskName = data.task?.name ?? '';
	let newTaskInfo = data.task?.info ?? '';
	let newTaskColor = data.task?.color ?? '';
	let newTaskLinks: string[] | undefined = data.task?.links ?? [];

	// let newTask = data.task?. ?? '';

	let saving = false;
	let message = '';

	const saveTaskEdits = async () => {
		if (saving || deleting || !data.task) return;
		saving = true;
		let result = await trpc($page).task.edit.mutate({
			id: data.task.id,
			update: {
				name: newTaskName,
				info: newTaskInfo,
				color: newTaskColor,
				links: newTaskLinks
			}
		});
		invalidate('task:list');
		message = 'Saved!';
		saving = false;
	};

	let deleting = false;
	let awaitingDeletion = false;
	let deleteName = '';

	const promptDelete = function () {
		deleting = true;
	};
	const resetDeletion = function () {
		deleteName = '';
	};
	const deleteTask = async () => {
		deleting = false;
		if (saving || deleting || !data.task || !data.task.id || deleteName !== data.task.name) return;
		awaitingDeletion = true;
		let result = await trpc($page).task.delete.mutate({
			id: data.task.id
		});
		message = 'Deleted!';
		await invalidate('task:list');
		awaitingDeletion = false;
		goto('/');
	};
</script>

{#if data.task}
	<h1 class="self-start m-">Edit task</h1>
	<div class="flex flex-col justify-center w-1/2">
		<StatusDisplay {saving} bind:deleting={awaitingDeletion}></StatusDisplay>
		<form on:submit|preventDefault={() => saveTaskEdits()} aria-busy={saving}>
			<div class="flex flex-col justify-center">
				<h2 class="w-full flex flex-row">
					<label for="task-name" class="mr-4">Task name:</label>
					<input
						id="task-name"
						type="text"
						bind:value={newTaskName}
						disabled={saving}
						class="flex-auto"
					/>
				</h2>
				<textarea bind:value={newTaskInfo} disabled={saving} />
				<div>
					Color: <input
						class="w-20 h-10"
						type="color"
						bind:value={newTaskColor}
						disabled={saving}
					/>{newTaskColor}
				</div>
				<DatePicker {selectedDate}></DatePicker>
				<div class="flex flex-row justify-evenly mt-5">
					<button type="submit" class="pl-4 pr-5">Save</button>
					<button type="button" class="pl-4 pr-5" on:click={() => goto('/')}>Back</button>
					{#if $page.data.session?.user?.email === 'lavratamutus@gmail.com'}
						<button type="button" class="pl-4 pr-5" on:click={() => promptDelete()}>Delete</button>
					{/if}
				</div>
			</div>
		</form>
		{#if deleting}
			<ModalGeneric bind:isOpen={deleting} on:close={resetDeletion}>
				<form id="delete-menu" on:submit|preventDefault={deleteTask}>
					<h4>If you would like to delete this blog entry, then type its title as shown:</h4>
					<label for="title-to-delete">{data.task.name}</label>
					<input id="title-to-delete" type="text" bind:value={deleteName} />
					<button>Delete {data.task.name}</button>
				</form>
			</ModalGeneric>
		{/if}
	</div>
{/if}
