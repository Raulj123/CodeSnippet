<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	//import frm skel UI
	import { AppBar, AppShell, storeHighlightJs, LightSwitch } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	storeHighlightJs.set(hljs);
</script>

<AppShell>
	
	<svelte:fragment slot="header">
		
		<AppBar>
			<h3 class="text-left">CodeShare</h3>
			<LightSwitch class="text-right"/>
		</AppBar>
		
	</svelte:fragment>
	<slot />
	<footer class="text-center py-5">Made with 💛  by Raul</footer>
</AppShell>
