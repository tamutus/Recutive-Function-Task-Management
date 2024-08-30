<script lang="ts">
	import '../app.css';
	import AuthNav from '$com/nav/auth.svelte';
	// import ThingCreator from '$com/.svelte';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import { trpc } from '$tf/client';

  type Verb = 
    | 'find'
    | 'create'
    | 'schedule'
    | 'record';

	type PrismaModel =
		| 'energy'
		| 'priority'
		| 'privateEnergy'
		| 'project'
		| 'skill'
		| 'task'
		| 'work';

	const modelNames: Array<PrismaModel> = [
		'energy',
		'priority',
		'privateEnergy',
		'project',
		'skill',
		'task',
		'work'
	];

	let verb: Verb = 'create';
	let model: PrismaModel = 'task';
	let newThingName: string = '';
	let creating = false;

	$: authenticated = $page.data.session?.user ? true : false;

  
	const createThing = async (thingName: string) => {
		if (creating || !authenticated) return;
		creating = true;
    const trimmed = thingName.trim();
		switch (model) {
			case 'task':
				await trpc($page).task.create.mutate({
					name: trimmed
				});

				invalidate('task:list');
				break;
			case 'project':
				await trpc($page).project.create.mutate({
					name: trimmed
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
			<select bind:value={verb} class="bg-yellow-200">
        <option value="create">Create</option>
        <option value="record">Record</option>
      </select>
			<select bind:value={model} class="bg-yellow-200">					
        {#if verb === "create"}
					<option value="task" class="bg-red-400">Task</option>
					<option value="priority" class="bg-orange-300">Priority</option>
					<option value="privateEnergy" class="bg-yellow-300">Energy</option>
					<option value="project" class="bg-lime-300">Project</option>
					<!-- <option value="tag" class="bg-green-400">Tag</option> -->
					<!-- <option value="skill" class="bg-purple-300">Skill</option> -->
          {:else if verb === "record"}
          <option value="work" class="bg-amber-600">Work</option>
          {/if}
        </select>
    <!-- </div>
		<div class="flex flex-row justify-center items-baseline"> -->
    <input
				type="text"
				bind:value={newThingName}
				disabled={creating || !authenticated}
				placeholder="{model} name"
				class="text-center border-yellow-400"
			/>
			<button
				class="border-yellow-400 bg-yellow-100 border-solid border-2 rounded-md ml-4 p-2"
				type="submit"
				disabled={newThingName.trim().length === 0 || !authenticated}>+</button
			>
		</div>
	</form>

	<div class="flex flex-col items-start fixed top-16 right-7">
		<h3>Your:</h3>
		<a href="/">Dash</a>
		<a href="/task">Tasks</a>
		<a href="/project">Projects</a>
		<a href="/priority">Priorities</a>
		<a href="/energy">Energy</a>
		<a href="/tag">Tags</a>
		<a href="/skill">Skills</a>
		<a href="/person/me">Profile</a>
	</div>
  <div class="flex flex-col items-start fixed bottom-12 left-7">
    <a href="/">Home</a>
    <a href="/plan">Plan</a>
    <a href="/schedule">Schedule</a>
    <a href="/grow">Grow</a>
    <a href="/collab">Collaborate</a>
    <a href="/accomplish">Accomplish</a>
    <a href="/record">Record</a>
  </div>
</div>

<style>
	button:disabled,
	input:disabled {
		@apply bg-slate-300 text-slate-500 placeholder-slate-500 border-slate-400;
	}
</style>
