<template>
    <div class="home">
        <div class="app-body-content" style="background-image: url(static/svg/dots.svg) !important;">
            <div class="shorts">
                <h2 class="poppins">JGEEZ SHORTS</h2>
                <hooper :itemsToShow="slider_items_to_show" pagination="no">
                    <slide v-for="(short, indx) in shorts" :key="indx" :index="indx">
                        <ShortCard :card="short" />
                    </slide>
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                </hooper>
            </div>
            <div class="clear"></div>
        </div>
        
        <br><br><br><br><br>
        <div class="demarcator"></div>

        <div class="app-body-content" style="position:relative;top:-20px;">
            
            <div class="loading-placeholder" v-if="loading == true">
                <Placeholder />
                <Placeholder />
                <Placeholder />
                <div class="clear"></div>
            </div>
            
            <div class="new_vides video_header" v-if="loading == false">
                <div v-for="video in videos" :key="video.id">
                    <div class="new_v">
                        <h2 class="poppins">{{video.title}}</h2>
                        <div v-for="video_data in video.data" :key="video_data.id">
                            <VideoCard 
                                :card="video_data" 
                                v-on:video_edit="handleEdit" 
                                v-on:delete_id="handleDelete"
                            />
                        </div>
                        <div class="clear"></div>
                        <br>
                        <div class="demarcator"></div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>

        <VideoEdit 
            v-if="vdialog == true" 
            :vdialog="vdialog" 
            :edit_video="edit_data" 
        /> 
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import uuid from "uuid";
    import ShortCard from "./components/ShortCard.vue";
    import VideoCard from "./components/VideoCard.vue";
    import VideoEdit from "./components/VideoEdit.vue";
    import Placeholder from '../../components/public/Placeholder.vue';

    import { 
        Hooper, Slide, 
        Navigation as HooperNavigation 
    } from 'hooper';
    import 'hooper/dist/hooper.css';

    export default {
        name: 'Video',
        components: {
            ShortCard, VideoCard,
            Hooper, Slide, HooperNavigation, 
            VideoEdit, Placeholder
        },
        data: function(){
            return {
                vdialog: false,
                slider_items_to_show: 5,
                selected_video: -1,
                loading: true,
                edit_data: {
                    id: 0,
                    title: '',
                    desc: '',
                    thumbnail: ''
                },
                shorts: [
                   {
                        id: uuid.v1(),
                        img: "static/uploads/img/100/v3.png",
                        time: "3 days ago",
                        title: "Bryan nolli - Salvation ft. The nation",
                        user: {
                            name: "Brian Nolli",
                            avatar: "static/uploads/img/100/avatar.png",
                            verified: true,
                            view: "2.1m"
                        }
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/100/v2.png",
                        time: "3 days ago",
                        title: "Bryan nolli - Salvation ft. The nation",
                        user: {
                            name: "Brian Nolli",
                            avatar: "static/uploads/img/100/avatar.png",
                            verified: true,
                            view: "2.1m"
                        }
                    },
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
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/100/v4.png",
                        time: "3 days ago",
                        title: "Bryan nolli - Salvation ft. The nation",
                        user: {
                            name: "Brian Nolli",
                            avatar: "static/uploads/img/100/avatar.png",
                            verified: true,
                            view: "2.1m"
                        }
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/100/v2.png",
                        time: "3 days ago",
                        title: "Bryan nolli - Salvation ft. The nation",
                        user: {
                            name: "Brian Nolli",
                            avatar: "static/uploads/img/100/avatar.png",
                            verified: true,
                            view: "2.1m"
                        }
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/100/v3.png",
                        time: "3 days ago",
                        title: "Bryan nolli - Salvation ft. The nation",
                        user: {
                            name: "Brian Nolli",
                            avatar: "static/uploads/img/100/avatar.png",
                            verified: true,
                            view: "2.1m"
                        }
                    }
                ],
                videos: [
                    {
                        title: "NEW VIDEOS",
                        data: []
                    },
                    {
                        title: "SUBSCRIPTIONS",
                        data: []
                    },
                    {
                        title: "TRENDING VIDEOS",
                        data: []
                    },
                    {
                        title: "FAVOURITES",
                        data: []
                    }
                ]
            }
        },
        methods: {
            ...mapActions(["fetch_video"]),
            handleEdit: function(id, card){
                this.edit_data.id = id
                this.edit_data.title = card.title;
                this.edit_data.desc = card.desc;
                this.edit_data.thumbnail = card.img;

                this.vdialog = true;
            },
            handleDelete: function(v_id){
                this.videos.data.filter(video => video.id != v_id);
            },
            bigVideoLoad: function(type = null){
                this.fetch_video(null, type);
                this.videos[0].data = this.$store.getters.get_videos;

                setTimeout(() => {
                    this.loading = false;
                }, 1000);
            },
            loadVideo: function(){
                this.bigVideoLoad();
            },
            loadSubscription: function(){
                this.bigVideoLoad("subscription");
            },
            loadTrends: function(){
                this.bigVideoLoad("trends");
            },
            loadFavourite: function(){
                this.bigVideoLoad("favourite");
            }
        },
        created(){
            this.slider_items_to_show = window.is_mobile() == true ? 2 : 5;
            this.loadVideo();
        }
    }
</script>
