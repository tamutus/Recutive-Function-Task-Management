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

<div class="task-card flex" on:mouseover={show} on:focus={show} on:blur={hide} on:mouseout={hide}>
	<slot name="title">
		<h1>{task?.name || 'Title'}</h1>
	</slot>
	<slot name="content">
		<p>{task?.info || 'Content'}</p>
	</slot>
	<div class="transition-all flex flex-row flex-wrap {expanded ? '' : 'h-0'}">
		<slot name="card-menu">
			<a href="/">Dashboard</a>
		</slot>
	</div>
</div>

<style>
</style>
