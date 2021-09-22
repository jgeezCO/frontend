<template>
    <div>
        <Display 
            v-if="uploads.length == 0"
            img="static/assets/img/upload.png" 
            text="UPLOAD CONTENT TO GET STARTED" 
            desc="Start sharing videos, music, gists and more. Get expression here!"
        />

        <div v-for="upload in uploads" :key="upload.tag">
            <div class="clear">
                <h4><br><br> {{upload.title}}</h4>
                <div v-for="upload_data in upload.data" :key="upload_data.id">
                    <ShortCard v-if="upload.tag == 'shorts'" :card="upload_data"/>
                    <VideoCard v-if="upload.tag == 'videos'" :card="upload_data"/>
                </div>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
    import uuid from "uuid";
    import Display from "./components/Display.vue";
    import ShortCard from "../../../video/components/ShortCard.vue";
    import VideoCard from "../../../video/components/VideoCard.vue";

    export default {
        name: "VideoUpload",
        components: {
            Display, ShortCard, VideoCard
        },
        data: function(){
            return {
                uploads: [
                    {
                        tag: "shorts",
                        title: "My Shorts",
                        data: [
                            {
                                id: uuid.v1(),
                                img: "static/uploads/img/100/v1.png",
                                time: "3 days ago",
                                title: "Bryan nolli - Salvation ft. The nation",
                                user: {
                                    name: "Brian Nolli",
                                    avatar: "static/uploads/img/100/avatar.png",
                                    verified: true,
                                    view: "2.1m"
                                }
                            },
                            {   id: uuid.v1(),
                                img: "static/uploads/img/100/v1.png",
                                time: "3 days ago",
                                title: "Bryan nolli - Salvation ft. The nation",
                                user: {
                                    name: "Brian Nolli",
                                    avatar: "static/uploads/img/100/avatar.png",
                                    verified: true,
                                    view: "2.1m"
                                }
                            },
                            {   id: uuid.v1(),
                                img: "static/uploads/img/100/v1.png",
                                time: "3 days ago",
                                title: "Bryan nolli - Salvation ft. The nation",
                                user: {
                                    name: "Brian Nolli",
                                    avatar: "static/uploads/img/100/avatar.png",
                                    verified: true,
                                    view: "2.1m"
                                }
                            },
                            {   id: uuid.v1(),
                                img: "static/uploads/img/100/v1.png",
                                time: "3 days ago",
                                title: "Bryan nolli - Salvation ft. The nation",
                                user: {
                                    name: "Brian Nolli",
                                    avatar: "static/uploads/img/100/avatar.png",
                                    verified: true,
                                    view: "2.1m"
                                }
                            }
                        ]
                    },
                    {
                        tag: "videos",
                        title: "My Videos",
                        data: [
                            {   id: uuid.v1(),
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
                            {   id: uuid.v1(),
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
                            {   id: uuid.v1(),
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
                            {   id: uuid.v1(),
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
                ]
            }
        }
    }
</script>

<style scoped>

</style>