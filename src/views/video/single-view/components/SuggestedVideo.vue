<template>
    <div class="suggested-videos">
        <div class="suggested-video" v-for="suggestion in suggestions" :key="suggestion.id">
            <VideoCard :card="suggestion"/>
        </div>
    </div>
</template>

<script>
    import uuid from "uuid";
    import VideoCard from "../../components/VideoCard.vue";

    export default {
        name: "SuggestedVideos",
        components: {
            VideoCard
        },
        data: function(){
            return {
                suggestions: [
                    {
                        id: uuid.v1(),
                        img: "/static/uploads/img/100/v5.png",
                        time: "3 days ago",
                        vtime_frame: "7:13",
                        title: "Bryan nolli - Salvation ft. The nation",
                        views: "2.1m",
                        user: {
                            avatar: "static/uploads/img/100/avatar.png",
                            name: "Brian Nolli",
                            verified: true
                        }
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/100/v5.png",
                        time: "3 days ago",
                        vtime_frame: "7:13",
                        title: "Bryan nolli - Salvation ft. The nation",
                        views: "2.1m",
                        user: {
                            avatar: "static/uploads/img/100/avatar.png",
                            name: "Brian Nolli",
                            verified: true
                        }
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/100/v5.png",
                        time: "3 days ago",
                        vtime_frame: "7:13",
                        title: "Bryan nolli - Salvation ft. The nation",
                        views: "2.1m",
                        user: {
                            avatar: "static/uploads/img/100/avatar.png",
                            name: "Brian Nolli",
                            verified: true
                        }
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/100/v5.png",
                        time: "3 days ago",
                        vtime_frame: "7:13",
                        title: "Bryan nolli - Salvation ft. The nation",
                        views: "2.1m",
                        user: {
                            avatar: "static/uploads/img/100/avatar.png",
                            name: "Brian Nolli",
                            verified: true
                        }
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/100/v5.png",
                        time: "3 days ago",
                        vtime_frame: "7:13",
                        title: "Bryan nolli - Salvation ft. The nation",
                        views: "2.1m",
                        user: {
                            avatar: "static/uploads/img/100/avatar.png",
                            name: "Brian Nolli",
                            verified: true
                        }
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/100/v5.png",
                        time: "3 days ago",
                        vtime_frame: "7:13",
                        title: "Bryan nolli - Salvation ft. The nation",
                        views: "2.1m",
                        user: {
                            avatar: "static/uploads/img/100/avatar.png",
                            name: "Brian Nolli",
                            verified: true
                        }
                    }
                ]
            }
        }
    }
</script>

<style>
    .vcard{
        width: 236px;
    }
</style>