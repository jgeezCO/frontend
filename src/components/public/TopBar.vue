<template>
    <div class="topbar desktop-only">
        <div class="demarcator padding desktop-only">
            <div class="right">
                <div class="desktop-only left search-bar-holder" style="margin-right:60px;">
                    <SearchBar visible="true" />
                </div>

                <div class="desktop-only right">
                    <img src="/static/assets/img/playstore.png" class="noSpace download-btn"> &nbsp;&nbsp;
                    <img src="/static/assets/img/applestore.png" class="noSpace download-btn"> 
                </div> <div class="clear"></div>
            </div> <div class="clear"></div>
        </div>
        
        <div class="clear"></div>
    </div>
</template>

<script>
    import SearchBar from "./SearchBar.vue";
    export default{
        name: "TopBar",
        components: {
            SearchBar
        }
    }
</script>

<style></style>