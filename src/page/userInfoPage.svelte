<script>
    import { onBeforeLoad, push, replace } from "svelte-stack-router";
    import {isLogin, userRemove} from "../script/global"
    
    import {me} from "../script/request"
    import { get } from "svelte/store";
    import { onMount } from "svelte";
    export const params={};
    
    onBeforeLoad(()=>{
        if(!$isLogin){
            replace("/login")
        }
    })
    let userInfo
    onMount(async ()=>{
        if($isLogin){
            userInfo = await me()
        }
    })
    function logout(){
        userRemove()
        replace("/login")
        
    }
</script>

<p>userinfo</p>
<p>{JSON.stringify(userInfo)}</p>
<button type="button" on:click={logout}>logout</button>