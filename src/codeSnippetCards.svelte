
<script lang="ts">
    import {deleteSnippet, togglefav} from "./snippetStore"
    import {CodeBlock} from "@skeletonlabs/skeleton"
	
	export let snippet : CodeSnippet = {
        title: "",
        language: "",
        code: "",
        favorite:  false
    }
   export let index: number;
  
</script>



<div class="card ">
    <header class="card-header">
        {snippet.title}
    <div class = "float-right">
        <button type="button" class="btn btn-sm variant-filled-secondary" on:click={()=>togglefav(index)}>
            {snippet.favorite ? "unfavorite" : "Favorite"}
        </button>
        <button type="button" class="btn btn-sm variant-filled-error" on:click={()=>deleteSnippet(index)}>
            X
        </button>
    </div>
</header>
<section class="p-4">
    <CodeBlock language={snippet.language} code={snippet.code}/>
</section>
</div>