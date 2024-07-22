import { push } from "svelte-stack-router"
import { getApiServer, userSet, userGet, userTokenGet, isLogin } from "./global.js"
import { get } from "svelte/store"

export function ifNotLogin() {
    if (get( isLogin)) {
        return false
    } else {
        loginPage()
        return true
    }
}
function loginPage(){
    push("/user?prev=true")
}
export async function login(id) {
    let res = await fetch(getApiServer() + "/user/login?id=" + id,
        {
            method: "GET",
        })
    if (res.status !== 200 ){
        throw res
    }
    let r = await res.json()    
    userSet(r["token"], r["userid"])
}
export async function me() {
    if(!ifNotLogin()) return
    let res = await fetch(getApiServer() + "/user/me",
        {
            method: "GET",
            headers: {
                "Authorization": userTokenGet(),
            }
        },
    )
    if (res.status !== 200 ){
        throw res
    }
    let r = await res.json()    
    return r
}



export async function uploadRequest(content, imageN) {
    let res = await fetch(getApiServer('/contents/upload'), {
        method: "POST", body: JSON.stringify(
            {
                "content": content,
                "images": imageN,
            }
        ),
        headers: {
            "Authorization": userTokenGet(),
            "Content-Type": "application/json",
        }
    })
    return await res.json()
}

export async function signup(user){
    let res =  await fetch(getApiServer()+"/user/signup",
        {
            method: "POST", body: JSON.stringify(
                user
            )
            , headers: { "Content-Type": "application/json" }
        })
    if (res.status !== 200 ){
        throw res
    }
    
}

