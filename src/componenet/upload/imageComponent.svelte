<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
    export var url
    export var item
    function deleteFile(){
        dispatch("deleteItem", item)
    }
  </script>

<div class="container imageComp">
    <img class="" src="{url}" alt="" />
    <button on:click|stopPropagation={deleteFile}
        class="btn btn-light"
    >x</button>  
</div>

<style>
    img {
        object-fit: contain;
        max-height: 80%;
        max-width: 100%;
    }
    .imageComp{
        height: 100%;
    }
</style>