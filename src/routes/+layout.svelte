<script lang="ts">
	import '../app.css';
	import AuthNav from '$com/nav/auth.svelte';
	import type { LayoutData } from './$types';

	// export let data: LayoutData;
</script>

<AuthNav />
<slot />
