<script>
    import Dropzone from "svelte-file-dropzone";
  
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
        files.accepted = files.accepted.filter((v)=>v!=e)
    }
  </script>
  

<Dropzone on:drop={handleFilesSelect}>
    <div class="drop row align-items-center">
        drop or click
    </div>
</Dropzone>


<div class="image-container container-fluid">
    <div class="images row overflow-y-auto">
        {#each files.accepted as item, i (i)}
        <div class="col-3">
            <button on:click={deleteFile(item)}>x</button>
            <img src="{item.url}" alt="">
        </div>
        {/each}
    </div>
</div>
<div>
    <button>upload</button>
</div>

<style>
    .drop {
        height: 40vh;
    }
    .image-container{
        height: 33vw;
    }
    .images{        
        height: 100%;
    }
    img {
        width: 100%;
    }
</style>