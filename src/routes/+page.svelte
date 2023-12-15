<script lang="ts">
	export let data;
</script>

<div id="task-list" class="flex flex-col justify-center items-center fixed top-1/4 w-full">
	<p class="mr-4">Your next task is:</p>
	<div class="flex flex-col justify-center text-center">
		{#if data.session}
			{#if data.tasks?.[0]}
				<a href={`/task/${data.tasks[0].id}`} class="text-center bg-red-500 p-4">
					<p>{data.tasks[0].name}</p>
				</a>
			{:else}
				<p class="bg-cyan-300">Rest! You earned it.</p>
			{/if}
		{:else}
			<h1>Recutive Function</h1>
			<h2>Recusing your executive function</h2>
			<p>If you have ever</p>
		{/if}
	</div>
</div>
