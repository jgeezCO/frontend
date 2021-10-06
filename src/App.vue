<template>
    <div>
        <Header />
        
        <div class="app-body">
            <TopBar />
            <router-view></router-view>

            <MobileNavigation />
            <Footer copyright="©2021 EntainHub Nig. Ltd. All rights reserved" />
        </div>
    </div>
</template>

<script>
    import Header from "./components/public/Header.vue";
    import Footer from "./components/public/Footer.vue";
    import TopBar from "./components/public/TopBar.vue";
    import MobileNavigation from "./components/public/MobileNavigation.vue";

    export default {
        name: 'App',
        components: {
            Header, Footer, TopBar, MobileNavigation
        }
    }
</script>
