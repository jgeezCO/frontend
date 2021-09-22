<template>
    <div>
        <Display 
            v-if="short_videos.data.length == 0 && videos_list.data.length == 0 
            && music_list.data.length == 0 && gist_list.data.length == 0"
            img="static/assets/img/upload.png" 
            text="UPLOAD CONTENT TO GET STARTED" 
            desc="Start sharing videos, music, gists and more. Get expression here!"
        />

        <div class="clear">
            <div class="short_video_container" >
                <h4 class="clear"><br><br> {{short_videos.title}}</h4>
                <hooper :itemsToShow="slider_items_to_show" pagination="no">
                    <slide v-for="(short, indx) in short_videos.data" :key="indx" :index="indx">
                        <ShortCard :card="short"/>
                    </slide>
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                </hooper>
            </div>

            <br><br><br>
            <h4 class="clear"><br><br> {{videos_list.title}}</h4>
            <div v-for="video in videos_list.data" :key="video.id">
                <VideoCard :card="video"/>
            </div>

            <h4 class="clear"><br><br> {{music_list.title}}</h4>
            <div v-for="music in music_list.data" :key="music.id">
                <MusicCard :card="music"/>
            </div>

            <h4 class="clear"><br><br> {{gist_list.title}}</h4>
            <div v-for="gist in gist_list.data" :key="gist.id">
                <GistCard :gist="gist"/>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
    import { 
        Hooper, Slide, 
        Navigation as HooperNavigation 
    } from 'hooper';
    import 'hooper/dist/hooper.css';
    import uuid from "uuid";
    import MusicCard from "../../../music/components/MusicCard.vue";
    import GistCard from "../../../gist/components/GistCard.vue";
    import ShortCard from "../../../video/components/ShortCard.vue";
    import VideoCard from "../../../video/components/VideoCard.vue";
    import Display from "./components/Display.vue";

    export default {
        name: "AllUpload",
        components: {
            Display, GistCard, MusicCard, ShortCard, VideoCard,
            Hooper, Slide, HooperNavigation
        },
        data: function(){
            return {
                slider_items_to_show: 5,
                short_videos: {
                    tag: "shorts",
                    title: "Shorts",
                    data: [
                        {
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
                    ]
                }, 
                videos_list: {
                    tag: "videos",
                    title: "My Videos",
                    data: [
                        {
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
                music_list: {
                    tag: "music",
                    title: "My Music",
                    data: [
                        {
                            id: uuid.v1(),
                            url: "",
                            img: "static/uploads/img/80/1.png",
                            name: "Reekado Banks",
                            playcount: "1.2M",
                            color: "#D7732E"
                        },
                        {
                            id: uuid.v1(),
                            url: "",
                            img: "static/uploads/img/80/2.png",
                            name: "Demi Bealy",
                            playcount: "80.4k",
                            color: "#6600CC"
                        },
                        {
                            id: uuid.v1(),
                            url: "",
                            img: "static/uploads/img/80/3.png",
                            name: "Bryan miles",
                            playcount: "89k",
                            color: "#898081"
                        },
                        {
                            id: uuid.v1(),
                            url: "",
                            img: "static/uploads/img/80/4.png",
                            name: "Femi Koku",
                            playcount: "1.2M",
                            color: "#A5730E"
                        },
                        {
                            id: uuid.v1(),
                            url: "",
                            img: "static/uploads/img/80/5.png",
                            name: "Dwight hussel",
                            playcount: "1.2M",
                            color: "#92221D"
                        },
                        {
                            id: uuid.v1(),
                            url: "",
                            img: "static/uploads/img/80/6.png",
                            name: "Kore Ida",
                            playcount: "1.2M",
                            color: "#D7732E"
                        },
                        {
                            id: uuid.v1(),
                            url: "",
                            img: "static/uploads/img/80/3.png",
                            name: "Bryan miles",
                            playcount: "1.2M",
                            color: "#898081"
                        },
                        {
                            id: uuid.v1(),
                            url: "",
                            img: "static/uploads/img/80/4.png",
                            name: "Femi Koku",
                            playcount: "1.2M",
                            color: "#6600CC"
                        }
                    ]
                },
                gist_list: {
                    tag: "gist",
                    title: "My Gist",
                    data: [
                        {
                            id: uuid.v1(),
                            img: "static/uploads/img/80/g1.png",
                            title: "New and Improved IPhone, Buy OR NOT!",
                            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                            view: "2.4k",
                            fav: "1.2k",
                            comment: 20,
                            owner: "Bella's Blog",
                            url: ""
                        },
                        {
                            id: uuid.v1(),
                            img: "static/uploads/img/80/g1.png",
                            title: "New and Improved IPhone, Buy OR NOT!",
                            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                            view: "2.4k",
                            fav: "1.2k",
                            comment: 20,
                            owner: "Bella's Blog",
                            url: ""
                        },
                        {
                            id: uuid.v1(),
                            img: "static/uploads/img/80/g1.png",
                            title: "New and Improved IPhone, Buy OR NOT!",
                            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                            view: "2.4k",
                            fav: "1.2k",
                            comment: 20,
                            owner: "Bella's Blog",
                            url: ""
                        },
                        {
                            id: uuid.v1(),
                            img: "static/uploads/img/80/g1.png",
                            title: "New and Improved IPhone, Buy OR NOT!",
                            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                            view: "2.4k",
                            fav: "1.2k",
                            comment: 20,
                            owner: "Bella's Blog",
                            url: ""
                        },
                        {
                            id: uuid.v1(),
                            img: "static/uploads/img/80/g1.png",
                            title: "New and Improved IPhone, Buy OR NOT!",
                            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                            view: "2.4k",
                            fav: "1.2k",
                            comment: 20,
                            owner: "Bella's Blog",
                            url: ""
                        }
                    ]
                }
            }
        },
        created(){
            this.slider_items_to_show = window.is_mobile() == true ? 2 : 5
        }
    }
</script>