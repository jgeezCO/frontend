<template>
    <div style="border-bottom:1px solid rgba(255, 255, 255, 0.25);">
        <div class="video_user_profile right exclude">
            <img :src="attr.avatar" class="left exclude thumbnail"> 
            <h5 class="left noSpace exclude">{{attr.title}}</h5> 
            <div class="left exclude" style="margin-left:20px;">
                <a :href="attr.id" class="subscribe">Subscribe</a>
            </div>
            <div class="clear"></div>
        </div>

        <div class="clear"></div>
    </div>
</template>

<script>
export default {
    name: "Subscribe",
    props: ["attr"]
}
</script>

<style scoped>
    @media screen and (max-width: 900px) {
        .thumbnail{
            position:relative;
            top:-10px;
        }
    }
</style>