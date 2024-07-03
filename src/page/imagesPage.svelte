<script>    
    import { link } from 'svelte-stack-router';    
    import ImageComponent from "../componenet/imageComponent.svelte"
    export const params = {}

    let srcUrls = Array(39).fill("https://placehold.co/600x400")
</script>

<div class="container"> 
    <div class="row row-cols-auto">
        {#each srcUrls as url, i (i)}
            <div class="col-4 p-1">
                <a href="e" use:link={`/content?${url}`}>
                    <ImageComponent src={url} />
                </a>
            </div>
        {/each}
    </div>
</div>

<style>
    
</style>
