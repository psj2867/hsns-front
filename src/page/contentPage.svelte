<script>
    import ImageComponent from "../componenet/imageComponent.svelte"
	import { search, setResumable } from 'svelte-stack-router';       
    export const params = {iamge:""}     
    setResumable(false)
    
</script>

<div class="container mt-5">    
    <div class="col-10 offset-1">
        <div class="mb-1">
            <img src="{$search.slice(1)}" alt="">
        </div>
        <p>
            rolem
        </p>
    </div>
</div>

<style>
    .container{
        height : 300vh
    }
    
    img {
        width : 100%
    }
</style>