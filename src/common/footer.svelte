<script>
	import { link } from 'svelte-stack-router';

</script>


<footer class="position-fixed bottom-0 border border-5 border-primary-subtle text-bg-light">
    <div class="continaer text-center">
        <div class="row justify-content-center p-3">
            <div class="col-3 m-1 border border-2 border-info-subtle rounded-3" >
                <a href="e" use:link={"/"}> <div>home</div> </a>      
            </div>
            <div class="col-3 m-1 border border-2 border-info-subtle rounded-3" >
                <a href="e" use:link={"/"}> <div>home</div> </a>                
            </div>
            <div class="col-3 m-1 border border-2 border-info-subtle rounded-3" >
                <a href="e" use:link={"/upload"}> <div>upload</div> </a>                
            </div>
        </div>
    </div>
</footer>

<style>
    footer{
        width:100%;
    }
</style>