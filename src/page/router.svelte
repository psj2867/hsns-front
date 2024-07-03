<script>
	import { StackRouter, slide } from 'svelte-stack-router';

    import Footer from '../common/footer.svelte';

    import ImagePage from './imagesPage.svelte';
    import ContentPage from './contentPage.svelte';

    const routes = {
        "/": ImagePage,
        "/content": ContentPage
    };
  
</script>
  

<div>
    <div>
        <StackRouter transitionFn={slide(10)} {routes}  />
    </div>
    <footer/>
    <Footer />
</div>

<style>
    footer {
        height : 70px;
    }
</style>
