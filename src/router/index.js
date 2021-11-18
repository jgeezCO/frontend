import Vue from 'vue';
import Router from 'vue-router';

import Home from "../views/home/Home.vue";

//Music components
import Library from "../views/music/Library.vue";
import Chart from "../views/music/Chart.vue";
import Artist from "../views/music/Artist.vue";
import Playlist from "../views/music/Playlist.vue";
import Genre from "../views/music/Genre.vue";
import Music from "../views/music/Music.vue";
import Profile from "../views/profile/Profile.vue";
import VideoView from "../views/single-view/VideoView.vue";
import Video from "../views/video/Video.vue";
import Gist from "../views/gist/Gist.vue";
import ViewGenre from "../views/music/ViewGenre.vue";
import RadioStation from "../views/radio/Radio.vue";
import SearchPage from "../views/search/Search.vue";
import MusicPlayer from "../views/music/Player.vue";

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/music",
        name: "music",
        component: Music,
    },
    {
        path: "/chart",
        name: "chart",
        component: Chart,
    },
    {
        path: "/library",
        name: "library",
        component: Library,
    },
    {
        path: "/artist",
        name: "artist",
        component: Artist,
    },
    {
        path: "/playlist",
        name: "playlist",
        component: Playlist,
    },
    {
        path: "/genre",
        name: "genre",
        component: Genre,
    },
    {
        path: "/profile",
        name: "profile",
        component: Profile,
    },
    {
        path: "/video",
        name: "video",
        component: Video,
    },
    {
        path: "/view/:slug?",
        name: "view",
        component: VideoView,
    },
    {
        path: "/gist",
        name: "gist",
        component: Gist
    },
    {
        path: "/genre/:category?",
        name: "view-genre",
        component: ViewGenre
    },{
        path: "/radio",
        name: "radio",
        component: RadioStation
        },
    {
        path: "/search",
        name: "search",
        component: SearchPage
    },
    {
        path: "/player",
        name: "player",
        component: MusicPlayer
    }
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
	routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});

export default router;