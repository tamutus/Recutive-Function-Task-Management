<script lang="ts">
	// import { page } from "$app/stores";
	import type { Task } from '$tModel/TaskSchema';

	export let task: Task;
	let expanded = false;
	const hide = () => {
		expanded = false;
	};
	const show = () => {
		expanded = true;
	};
</script>

<a href={`/task/${task.id}`} class="text-center">
	<div
		class="task-card bg-red-400 my-1 p-2"
		role="presentation"
		on:mouseover={show}
		on:focus={show}
		on:blur={hide}
		on:mouseout={hide}
	>
		<slot name="title">
			<h2>{task?.name || 'Title'}</h2>
		</slot>
		<slot name="content">
			{#if task.info}
				<p>{task.info}</p>
			{/if}
		</slot>
		<div class="transition-all flex flex-row flex-wrap {expanded ? 'h-20' : 'h-0'} overflow-hidden">
			<slot name="card-menu">
				<a href="/">Dashboard</a>
			</slot>
		</div>
	</div>
</a>

<style>
</style>
