<template>
    <div class="home">
        <div class="app-body-content" style="background-image: url(static/svg/dots.svg) !important;">
            <div class="shorts">
                <h2 class="poppins">JGEEZ SHORTS</h2>
                <div v-for="short in shorts" :key="short.id">
                    <ShortCard :card="short" />
                </div>
                <div class="left">
                    <a href="#" class="anext">
                        <center>
                            <img src="static/svg/next.svg" style="width:70px;height:70px;margin-top:80px;">
                        </center>
                    </a>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        
        <div class="demarcator"></div>

        <div class="app-body-content" style="position:relative;top:-20px;">
            <div class="new_vides video_header">
                <div v-for="video in videos" :key="video.id">
                    <div class="new_v">
                        <h2 class="poppins">{{video.title}}</h2>
                        <div v-for="video_data in video.data" :key="video_data.id">
                            <VideoCard :card="video_data"/>
                        </div>
                        
                        <div class="clear"></div>
                        <br>
                        <div class="demarcator"></div>
                        
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import uuid from "uuid";
    import ShortCard from "./components/ShortCard.vue";
    import VideoCard from "./components/VideoCard.vue";

    export default {
        name: 'Video',
        components: {
            ShortCard, VideoCard
        },
        data: function(){
            return {
                shorts: [
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
                        d: uuid.v1(),
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
                        d: uuid.v1(),
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
                        d: uuid.v1(),
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
        }
    }
</script>
