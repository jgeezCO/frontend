<template>
    <div class="artist app-body-content">
        <Notification />
        
        <div class="home_slider">
            <Slider />
        </div>
        
        <br><br><br class="desktop-only"><br class="desktop-only"><br class="desktop-only">

        <div class="app-body-content" style="background-image:url(static/svg/dots.svg) !important;">
            <Follower />
        </div>
    </div>
    
</template>

<script>
    import Notification from "../../components/public/notification/Notification.vue";
    import Follower from "../followers/Follower.vue";
    import Slider from "../../components/public/Slider.vue";

    export default {
        name: 'Artist',
        components: {
            Notification, Follower, Slider
        }
    }
</script>

