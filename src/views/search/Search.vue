<template>
    <div class="search-page app-body-content">
        <Notification filter_active=true />
        <br>
        <h3>search result for <b style="color:#a5730e;font-style:italic;">"{{searchItem}}"</b></h3>
        <div class="app-background-image" style="background-image: url(static/svg/dots.svg) !important;">
            <div class="search-card-container" v-for="result in results" :key="result.id">
                <SearchCard :result="result" />
                <div class="clear"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import uuid from "uuid";
    import Notification from "../../components/public/notification/Notification.vue";
    import SearchCard from "./components/SearchCard.vue";

    export default {
        name: "SearchPage",
        components: {
            Notification, SearchCard
        },
        data() {
            return {
                searchItem: "...",
                results: [
                    {
                        id: uuid.v1(),
                        title: "Worthy of it all - The Aqua band ft zyn",
                        views: "3.1m views",
                        img: "static/uploads/img/80/5.png",
                        profile: {
                            avatar: "static/uploads/img/80/profile.png",
                            name: "Brian Nolli",
                            is_verified: true
                        }
                    },
                    {
                        id: uuid.v1(),
                        title: "Worthy of it all - The Aqua band ft zyn",
                        views: "3.1m views",
                        img: "static/uploads/img/80/5.png",
                        profile: {
                            avatar: "static/uploads/img/80/profile.png",
                            name: "Brian Nolli",
                            is_verified: true
                        }
                    },
                    {
                        id: uuid.v1(),
                        title: "Worthy of it all - The Aqua band ft zyn",
                        views: "3.1m views",
                        img: "static/uploads/img/80/5.png",
                        profile: {
                            avatar: "static/uploads/img/80/profile.png",
                            name: "Brian Nolli",
                            is_verified: true
                        }
                    },
                    {
                        id: uuid.v1(),
                        title: "Worthy of it all - The Aqua band ft zyn",
                        views: "3.1m views",
                        img: "static/uploads/img/80/5.png",
                        profile: {
                            avatar: "static/uploads/img/80/profile.png",
                            name: "Brian Nolli",
                            is_verified: true
                        }
                    }
                ]
            }
        },
        mounted(){
            this.searchItem = this.$route.query.search;
        }
    }
</script>

<style>
    .filter-container-holder{
        display: inline-block !important;
    }
</style>