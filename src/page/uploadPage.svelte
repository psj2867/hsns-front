<script>
    import Dropzone from "svelte-file-dropzone";
    import ImageComponent from "../componenet/upload/imageComponent.svelte"
    import {ifNotLogin, login, successUploadImages, uploadImages, uploadRequest} from "../script/request.js"
    import { onResume, pop, push, replace, setResumable } from "svelte-stack-router";
    let content = ""
    let files = {
      accepted: [],
      rejected: []
    };
    function toImage(file){
        return {file, 
            url : URL.createObjectURL(file)
        }
    }
    function handleFilesSelect(e) {
      const { acceptedFiles, fileRejections } = e.detail;
      files.accepted = [...files.accepted, ...(acceptedFiles.map(toImage))];
      files.rejected = [...files.rejected, ...fileRejections];
    }
    function deleteFile(e){
        var item = e.detail
        console.info(item)
        files.accepted = files.accepted.filter((v)=>v!=item)
    }
    async function upload(e){
        if(ifNotLogin()) return
        let imageUuids = await uploadRequest(content,files.accepted.length)
        console.info(imageUuids)
        let uploadFiles = files.accepted.map((f)=>f.file)
        let uploadRes = await uploadImages(uploadFiles, imageUuids["uuids"], imageUuids["token"])
        let returnToken = await uploadRes.text()
        await successUploadImages(returnToken)        
        reset()        
        await replace("/main")
    }
    function reset(){
        content = ""
        files  =    {
            accepted: [],
            rejected: []
            };
    }

  </script>
<div class="container-fluid main p-3">
    <div class="drop">
        <Dropzone on:drop={handleFilesSelect}>    
            <span class="text">drop or click</span>
            <div class="images container-fluid d-flex overflow-x-scroll">
                {#each files.accepted as item, i (i)}
                <div class="col-3">
                    <ImageComponent url="{item.url}" item="{item}" on:deleteItem={deleteFile}></ImageComponent>
                </div>
                {/each}
            </div>    
        </Dropzone>
    </div>
    <div class="bottom container-fluid">
        <div class="row textarea">
            <textarea bind:value={content} class="form-control" autocomplete="off"></textarea>
        </div>
        <div class="row upload-btn">
            <button class="btn btn-light" on:click={upload}>upload</button>
        </div>    
    </div>

</div>

<style>    
    .text{
        position: absolute;
        top: 40%;
        left: 40%;
        z-index : 1;
    }
    textarea{
        resize: none;
    }
    .main{
        height: 100%;
    }
    .images{        
        height: 100%;
        z-index : 10;
    }
    .drop{
        position: relative;
        height: 30%;
    }
    .drop > :global(.dropzone) {  
        width: 100%;  
        height: 100%;        
    }
    .bottom{
        height: 70%;
    }
    .textarea{
        height: 80%;
    }
    .upload-btn{
        height: 20%;
    }
</style>