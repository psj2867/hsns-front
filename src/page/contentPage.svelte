<script>
    import Content from "../componenet/contentComponent.svelte"
	import { search } from 'svelte-stack-router';    
    let url = $search.slice(1)
    let datas=[{src:url,text:"asdfasdf"},{src:url,text:"1412341234"}]
</script>

<div class="container"> 
    {#each datas as data, i (i)}
        <div class="col-10 offset-1">
            <Content {data}/>
        </div>
    {/each}
</div>


<style>
    .container {
        height: 300vh;
    }
</style>