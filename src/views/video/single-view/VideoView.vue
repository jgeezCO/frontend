<template>
    <div class="view-video container">
        <br>
        <div class="container_padding" style="width:95%">
            <div class="left view_stand">
                <div id="video_js_holder">
                    <vue-core-video-player src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"></vue-core-video-player>
                </div>

               <VideoReaction :attr="video_props" />
                
                <br>

                <Subscribe :attr="subscribe" />
                
                <br class="desktop-only">
                
                <div class="mobile-only">
                    <Comment v-if="is_mobile == true"/>
                    <br><br><br><br><br><br>
                </div>

                <SuggestedVideos limit="10" />
            </div>

            <div class="right comment_side">
                <Comment v-if="is_mobile == false" />
            </div>
            
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    import VideoReaction from "./components/VideoReaction.vue";
    import Subscribe from "./components/Subscribe.vue";
    import SuggestedVideos from "./components/SuggestedVideo.vue";
    import Comment from "./components/Comment.vue";

    export default {
        name: 'VideoView',
        components: {
            VideoReaction, Subscribe, SuggestedVideos, Comment
        },
        props: {
            options: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        data() {
            return {
                is_mobile: true,
                video_props: {
                    id: 1,
                    title: "Belly of the fish - The Aqua band",
                    views: "2675578",
                    date: "June 20th 2021"
                },
                subscribe: {
                    id: 1,
                    title: "The Aqua band",
                    avatar: "static/uploads/img/100/v1.png"
                }
            }
        }, 
        
        mounted: function(){
            const toMatch = [
                /Android/i,
                /webOS/i,
                /iPhone/i,
                /iPad/i,
                /iPod/i,
                /BlackBerry/i,
                /Windows Phone/i
            ];
            
            this.is_mobile = toMatch.some((toMatchItem) => {
                return navigator.userAgent.match(toMatchItem);
            });
        }
    }
</script>

<style>
    video{
        width: 100% !important;
        
    }
    .vcard{
        width: 219.2px;
    }
    @media screen and (max-width: 900px){
        .vjs-big-play-button{
            position: absolute !important;
            margin-bottom: 20px !important;;
        }
        .video-js{
            height: 200px !important;
            max-height: 200px !important;
        }
        #video_js_holder{
            height: 200px !important;
            max-height: 200px !important;
        }
    }
</style>