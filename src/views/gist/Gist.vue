<template>
    <div class="gist_loader app-background-image" style="background-image: url(static/svg/dots.svg) !important;">
        <div v-if="mainGist == true" class="app-body-content top_gist">
            <Notification />
            <h3 class="montserrat" style="font-weight:bold;color:white;font-weight:normal !important">
                <b>TOP GISTS</b>
            </h3>
            <div class="gist_card_container">
                <div class="gist_info" v-bind:key="gist.id" v-for="gist in topGists">
                    <SimpleGistCard :gist="gist" />
                </div>
                <div class="clear"></div>
            </div>
        </div>

        <div :class="mainGist == true ? 'app-body-content gist_section' : 'gist_section'">
            <h3 class="montserrat" style="font-weight:bold;color:white;font-weight:normal !important">
                <b>{{moreGistTitle}}</b>
                <a href="#" class="right exclude see-all-mobile" style="font-size:16px;color: rgba(250, 250, 250, 0.5);">
                    See All >
                </a>
            </h3>

            <div class="gist_card_container">
                <div class="gist_info" v-bind:key="gist.id" v-for="gist in (mainGist == true ? gists : guestPosts)">
                    <GistCard :gist="gist" />
                </div>
                <div class="clear"></div>
            </div>
        </div>
        
        <div v-if="mainGist == true" class="app-body-content top_gist">
            <h3 class="noSpace montserrat" style="font-weight:bold;color:white;font-weight:normal !important">
                <b>MORE GISTS</b> 
                <a href="#" class="right exclude" style="font-size:16px;color: rgba(250, 250, 250, 0.5);">
                    See All >
                </a>
            </h3>

            <div class="gist_card_container" style="margin-top:10px;">
                <div class="gist_info" v-bind:key="gist.id" v-for="gist in gists">
                    <SimpleGistCard :gist="gist" />
                </div>
                <div class="clear"></div>
            </div>
            <br><br><br><br>
        </div>
    </div>
</template>

<script>
    import uuid from "uuid";
    import GistCard from "./components/GistCard.vue";
    import SimpleGistCard from "./components/SimpleGistCard.vue";
    import Notification from "../../components/public/notification/Notification.vue";

    export default {
        name: "Gist",
        props: {
            moreGistTitle: {
                type: String,
                default: "GUEST POSTS"
            },
            mainGist: {
                type: Boolean,
                default: true
            }
        },
        components: {
            GistCard, SimpleGistCard, Notification
        },
        data: function(){
            return {
                gists: [
                     {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    }
                ],
                topGists: [
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    }
                ],
                guestPosts: [
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    },
                    {
                        id: uuid.v1(),
                        img: "static/uploads/img/80/g1.png",
                        title: "New and Improved IPhone, Buy OR NOT!",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                        view: "2.4k",
                        fav: "1.2k",
                        owner: "Bella's Blog",
                        comment: "1k",
                        url: ""
                    }
                ]
            }
        }
    }
</script>

<style>
    @media only screen and (max-width:900px){
        .see-all-mobile{
            display: inline-block;
            position:relative;
            left:-20px !important;
        }
    }
</style>