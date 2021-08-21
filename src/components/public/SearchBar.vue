<template>
    <div class="search-bar-com">
        <form v-if="visible == 'true'" action="/search" method="get">
            <div class="search-container noSpace">
                <input type="text" :value="searchItem" class="poppins" placeholder="search media..." style="color:white;font-size:12px;" name="search">
                <img src="static/svg/search.svg" class="search-icon" style="position:relative;width:20px;top:3px;left:-10px;">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SearchBar",
        props: ["visible"],
        data(){
            return {
                searchItem: ""
            }
        },
        mounted(){
            this.searchItem = this.$route.query.search;
        }
    }
</script>