<script>
    import Content from "../componenet/contentComponent.svelte"
	
    let datas=[{src:"https://placehold.co/600x400",text:"asdfasdf"},{src:"https://placehold.co/600x400",text:"1412341234"}]
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