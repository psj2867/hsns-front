<script>
	import { StackRouter, dive, noAnimation } from 'svelte-stack-router';

    import Footer from '../common/footer.svelte';

    import ImagePage from './imagesPage.svelte';
    import ContentPage from './contentPage.svelte';
    import UploadPage from './uploadPage.svelte';
    import MainPage from './MainPage.svelte';

    const routes = {
        "/": ImagePage,
        "/content": ContentPage,
        "/upload": UploadPage,
        "/main": MainPage
    };
  
</script>
  

<div>
    <div>
        <StackRouter transitionFn={dive(200)} {routes}  />
    </div>
    <footer/>
    <Footer />
</div>

<style>
    footer {
        height : 70px;
    }
</style>
