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
            <div class="new_vides video_header">
                <div v-for="video in videos" :key="video.id">
                    <div class="new_v">
                        <h2 class="poppins">{{video.title}}</h2>
                        <div v-for="video_data in video.data" :key="video_data.id">
                            <VideoCard :card="video_data" v-on:video-edit="handleEdit"/>
                        </div>
                        
                        <div class="clear"></div>
                        <br>
                        <div class="demarcator"></div>
                        
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>

        <ProfileUploadVideo />
    </div>
</template>

<script>
    import uuid from "uuid";
    import ShortCard from "./components/ShortCard.vue";
    import VideoCard from "./components/VideoCard.vue";
    import ProfileUploadVideo from "../profile/components/modal/modules/video/ProfileUploadVideo.vue";

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
            ProfileUploadVideo
        },
        data: function(){
            return {
                slider_items_to_show: 5,
                selected_video: -1,
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
                        data: [
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
                    },
                    {
                        title: "SUBSCRIPTIONS",
                        data: [
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
                    },
                    {
                        title: "TRENDING VIDEOS",
                        data: [
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
                    },
                    {
                        title: "FAVOURITES",
                        data: [
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
                ]
            }
        },
        methods: {
            handleEdit: function(e){
                console.log(e);
            }
        },
        created(){
            this.slider_items_to_show = window.is_mobile() == true ? 2 : 5
        }
    }
</script>
