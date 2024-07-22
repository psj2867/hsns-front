<script>
    import { pop } from "svelte-stack-router";

    
import { signup } from "../script/request";
    let id
    let name
    const onSignup = async ()=>{     
        try {
            await signup({
                "userid":id,
                name
            })
            popOrMain()
        } catch (error) {
            alert(await error.text())
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
            <div class="form-group">
                <label for="exampleInputPassword1">name</label>
                <input type="text" bind:value={name}
                 class="form-control" id="exampleInputPassword1" placeholder="name">
            </div>
            <button type="button" class="btn btn-primary" on:click={onSignup}>signup</button>
        </form>
    </div>
</div>


<style>
    .main {
        max-width: 540px;
    }
</style>