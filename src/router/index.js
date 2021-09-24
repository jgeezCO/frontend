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
import VideoView from "../views/video/single-view/VideoView.vue";
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
    name: "Home",
    component: Home,
  },
  {
    path: "/music",
    name: "Music",
    component: Music,
  },
  {
    path: "/chart",
    name: "Chart",
    component: Chart,
  },
  {
    path: "/library",
    name: "Library",
    component: Library,
  },
  {
    path: "/artist",
    name: "Artist",
    component: Artist,
  },
  {
    path: "/playlist",
    name: "Playlist",
    component: Playlist,
  },
  {
    path: "/genre",
    name: "Genre",
    component: Genre,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/video",
    name: "Video",
    component: Video,
  },
  {
    path: "/view",
    name: "VideoView",
    component: VideoView,
  },
  {
    path: "/gist",
    name: "Gist",
    component: Gist
  },
  {
    path: "/view-genre",
    name: "ViewGenre",
    component: ViewGenre
  },{
    path: "/radio",
    name: "RadioStation",
    component: RadioStation
  },
  {
    path: "/search",
    name: "Search",
    component: SearchPage
  },
  {
    path: "/player",
    name: "Player",
    component: MusicPlayer
  }
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
	routes
});

export default router;