<script>        
    import { onMount } from 'svelte';
    import { link} from 'svelte-stack-router';    
    import {onIntersectionObserver, loadSetScroll} from "../script/util"
    import ImageComponent from "../componenet/imageComponent.svelte"    

    let srcUrls = Array(39).fill("https://placehold.co/600x400")
    let bottomEmpty

    let handler = (e)=>{
        if(e[0].isIntersecting){
            console.info(e)
            srcUrls = [...srcUrls, ...Array(6).fill("https://placehold.co/600x400")]
        }
    }
    loadSetScroll()
    onMount(()=>{
        onIntersectionObserver(bottomEmpty, handler, {                        
            thredhold: [0.2],
        })
    })
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
    <div class="banner-empty"></div>
    <div class="empty" bind:this={bottomEmpty}></div>
</div>

<style>
    .empty{
        height: 10vh;
    }
    .banner-empty{
        height: 70px;
    }
</style>
