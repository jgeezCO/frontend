<template>
    <li class="left" id="user{{id}}">
        <div class="left">
            <img class="himg" src="{{img}}"> 
        </div>
        <div class="right">
            <h4 class="noSpace poppins" style="color:white;">{{name}}</h4>
            <p class="noSpace poppins" style="color:white;font-size:13px;">
                <b class="gold-color">{{follower}}</b> new fans
            </p>
            <a href="{{id}}" class="artist-follow">{{button}}</a>
        </div>
    </li>
</template>

<script>
    export default{
        name: "Card",
        props: {
            id: {
                type: String,
                required: true
            },
            img: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            follower: {
                type: String,
                required: true
            },
            button: {
                type: String,
                required: true
            }
        }
    }
</script>

<style>

</style>
