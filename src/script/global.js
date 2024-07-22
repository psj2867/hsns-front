import { writable, derived, readable, readonly } from 'svelte/store';

export const getApiServer = (path="")=>'http://localhost:8000' + path
export const getImageServer = (path="")=>'http://example.com' + path

let _userToken = ""
export const userTokenGet = ()=>_userToken
let _user = null
export const userGet = ()=>_user
export const userSet = (token, user)=>{
    _userToken = token
    _user=user
    _isLogin.set(true)
}
export const userRemove = ()=>{
    _userToken = ""
    _user=null
    _isLogin.set(false)
}

export const _isLogin = writable(false)
export const isLogin = readonly(_isLogin)
