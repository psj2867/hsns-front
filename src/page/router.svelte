<script>
	import { StackRouter, dive, noAnimation } from 'svelte-stack-router';

    import Footer from '../common/footer.svelte';

    import ImagePage from './imagesPage.svelte';
    import ContentPage from './contentPage.svelte';
    import UploadPage from './uploadPage.svelte';
    import MainPage from './MainPage.svelte';
    import SignupPage from './signupPage.svelte';
    import UserInfoPage from './userInfoPage.svelte';
    import LoginPage from './loginPage.svelte';

    const routes = {
        "/": ImagePage,
        "/content": ContentPage,
        "/upload": UploadPage,
        "/main": MainPage,
        "/user": UserInfoPage,
        "/login" : LoginPage,
        "/signup": SignupPage,
    };
  
</script>
  

<div>
    <div class="main">
        <StackRouter transitionFn={dive(200)} {routes}  restoreScroll={false} />
    </div>
    
    <Footer />
</div>

<style>
    .main{
        height: calc(100vh - 70px);
    }    
    :global(.stack-router-mount-point, .stack-router-mount-point>div){
        height: 100%;
    }
</style>
