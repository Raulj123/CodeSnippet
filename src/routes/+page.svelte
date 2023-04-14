<script lang="ts">
	
	import CodeSnippetCard from "../codeSnippetCards.svelte";
	import { addSnippet, snippetStore } from "../snippetStore";
	import type { PageData } from "./$types";
	export let data : PageData
	
	let formData : CodeSnippetInput = {
        title: "",
	    language: "HTML",
	    code: ""
    }
	
	snippetStore.set(data.snippets);
	
</script>




<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h2 class= "text-center py-4">Create A Code Snippet</h2>
		<div class="card p-5 w-full text-token space-y-4">
			<label class="label">
				<span>Snippet Title</span>
				<input class="input" type="text" placeholder="Enter title here.." bind:value={formData.title}/>
			</label>
			<label class="label">
				<span>Programming Language</span>
				<select class="select"bind:value={formData.language}>
					<option value="HTML">HTML</option>
					<option value="css">CSS</option>
					<option value="Ts">TypeScript</option>
				</select>
			</label>
			<label class="label">
				<p>Code Snippet</p>
			<textarea class="textarea" rows="4" placeholder="Enter your snippet code here.."bind:value={formData.code}></textarea>
			</label>
			<button type="button" class="btn btn-small variant-filled-primary" on:click={()=>addSnippet(formData)}>Create Snippet</button>
		</div>

		<div class="text-center py-5">
			<h3>My Code Snippets</h3>
			
		</div>
		{#each $snippetStore as snippet, index}
		<CodeSnippetCard snippet={snippet} index ={index} />
		{/each}
	</div>

</div>