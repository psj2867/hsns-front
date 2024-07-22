import { link, onAfterLoad, onPause, onResume, onAfterUnload, onBeforeUnload, pop } from 'svelte-stack-router';    

export function onScrollInRouter(hanlder){
    let startScrollEvent = ()=>{
        window.addEventListener("scroll", hanlder)
    }
    let endScrollEvent = ()=>{
        window.removeEventListener("scroll", hanlder)        
    }
    onRouter(startScrollEvent, endScrollEvent)
}
export function onIntersectionObserver(obj, hanlder, option){
    let observer = new IntersectionObserver(hanlder, option)
    let start = ()=>{
        observer.observe(obj)
    }
    let end = ()=>{
        observer.unobserve(obj)
    }
    onRouter(start, end)
}

export function loadSetScroll(){
    let scroll = 0 
    let start = ()=>{
        window.scrollTo(0,scroll)
    }
    let end = ()=>{
        scroll = window.scrollY
    }
    onRouter(start, end)
}

export function onRouter(start,end){
    onAfterLoad(()=>{
        console.debug("scroll page loaded")
        start()
    }) 
    onBeforeUnload(()=>{
        console.debug("scroll page unloaded")
        end()
    })
}

export function popOrMain(){
    let referrer = document.referrer
    if(referrer == "" ){
        return push("/")
    }else{
        return pop()
    }
}