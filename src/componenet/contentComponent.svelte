<script>
	import { search } from 'svelte-stack-router';       

    export let data={}
</script>

<div class="container">    
    <div class="mb-1">
        <img src="{data.src}" alt="">
    </div>
    <p>
        {data.text}
    </p>
</div>

<style>
    img {
        width : 100%
    }
    
</style>