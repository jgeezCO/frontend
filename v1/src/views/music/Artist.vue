<template>
    <div class="app-body-content" style="background-image:url(static/svg/dots.svg) !important;">
        <Notification />
        <br><br><br>

        <Follower />
    </div>
</template>

<script>
    import Notification from "../../components/public/notification/Notification.vue";
    import Follower from "../followers/Follower.vue";

    export default {
        name: 'Artist',
        components: {
            Notification, Follower
        }
    }
</script>

