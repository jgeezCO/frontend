<template>
    <div class="search-card">
        <div class="left exclude">
            <img :src="result.img" style="width: 250px;height:150px;">
        </div>
        <div class="left exclude" style="margin-top:30px;margin-left: 20px;">
            <a href="#" style="color:white !important;">
                <h3 class="noSpace">{{result.title}}</h3>
                <p style="font-size:12px;" class="noStyle">{{result.views}}</p>
            </a>
            <div class="profile-frame">
                <div class="left exclude">
                    <img :src="result.profile.avatar" style="margin-top:10px;" class="thumbnail">
                </div>
                <div class="left exclude" style="margin-left:5px;margin-top:5px;">
                    <p class="roboto" style="font-size:12px;">
                        {{result.profile.name}} 
                        <img v-if="result.profile.is_verified == true" style="margin-left:2px;" src="static/svg/verified.svg">
                    </p> 
                </div>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        name: "SearchCard",
        props: ["result"]
    }
</script>

<style>
.search-card{
    margin-bottom: 20px;
}
</style>