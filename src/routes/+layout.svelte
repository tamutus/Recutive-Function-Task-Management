<script lang="ts">
	import '../app.css';
	import AuthNav from '$com/nav/auth.svelte';
	// import ThingCreator from '$com/.svelte';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import { trpc } from '$tf/client';

	type PrismaModel =
		| 'energy'
		| 'priority'
		| 'privateEnergy'
		| 'project'
		| 'skill'
		| 'task'
		| 'work';
	let model: PrismaModel = 'task';
	let newThingName: string = '';
	let creating = false;
	$: authenticated = $page.data.session?.user ? true : false;

	const createThing = async (thingName: string) => {
		if (creating) return;
		creating = true;
		switch (model) {
			case 'task':
				await trpc($page).task.create.mutate({
					name: thingName
				});

				invalidate('task:list');
				break;
			case 'project':
				await trpc($page).project.create.mutate({
					name: thingName
				});
				invalidate('project:list');
			default:
				break;
		}
		creating = false;
		newThingName = '';
	};
</script>

<AuthNav />
<div class="flex flex-col items-center">
	<slot />
	<form
		id="creation-box"
		on:submit|preventDefault={() => createThing(newThingName)}
		aria-busy={creating}
		class="fixed bottom-12 w-full"
	>
		<div class="flex flex-row justify-center items-baseline">
			<input
				type="text"
				bind:value={newThingName}
				disabled={creating || !authenticated}
				placeholder="Create {model}"
				class="text-center border-yellow-400"
			/>
			<button
				class="border-yellow-400 bg-yellow-100 border-solid border-2 rounded-md ml-4 p-2"
				type="submit"
				disabled={newThingName.length === 0 || !authenticated}>Create</button
			>
		</div>
	</form>

	<div class="flex flex-col items-start fixed bottom-12 left-7">
		<h3>Your:</h3>
		<a href="/task">Tasks</a>
		<a href="/project">Projects</a>
		<a href="/priority">Priorities</a>
		<a href="/energy">Energy</a>
		<a href="/tag">Tags</a>
		<a href="/skill">Skills</a>
		<a href="/person/me">Profile</a>
	</div>
</div>

<style>
	button:disabled,
	input:disabled {
		@apply bg-slate-300 text-slate-500 placeholder-slate-500 border-slate-400;
	}
</style>
