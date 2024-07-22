<script>
    import { link } from "svelte-stack-router";
import { login} from "../script/request";
    import { popOrMain } from "../script/util";
    export const params={};
    let id
    const onLogin = async ()=>{        
        try {
            await login(id)    
            popOrMain()
        } catch (error) {
            alert(error)
        }        
    }
</script>

<div class="container h-100 ">
    <div class="row align-items-centers h-100 ">
        <form >
            <div class="form-group">
                <label for="exampleInputEmail1">ID</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="id" bind:value={id}>                
            </div>
            <button type="button" class="btn btn-primary" on:click={onLogin}>login</button>
            <a href="e" use:link={"/signup"}>
                <button type="button" class="btn btn-primary">signup</button>
            </a>
        </form>
    </div>
</div>


<style>
    .main {
        max-width: 540px;
    }
</style>