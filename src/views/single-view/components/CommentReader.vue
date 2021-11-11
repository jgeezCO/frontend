<template>
    <div class="comment_card">
        <img class="left exclude" :src="reader.user.avatar" style="width:25px;height:25px;">
        <div class="left exclude" style="width:80%; margin-left:10px;">
            <div>
                <h5 class="noSpace">{{reader.user.name}}</h5>
                <p class="noSpace" style="font-size:12px;">{{reader.data.comment}}</p>
                
                <div class="clear comment_action" style="margin-top:10px;">
                    <p class="left noSpace poppins exclude" style="font-size:12px;">
                        {{reader.data.time}}
                    </p>
                    <p class="right exclude noSpace poppins" style="font-size:11px;position:relative;margin-top:10px;">
                        <a href="#" style="color:white;" @click="makeFavorite">
                            <div class="left">
                                <transition enter-active-class="animate__animated animate__fadeIn"> 
                                    <img v-if="reader.data.favorite == false" src="/static/svg/heart.svg" style="width:13px;">
                                </transition>
                                
                                <transition enter-active-class="animate__animated animate__bounceIn" > 
                                    <img v-if="reader.data.favorite == true" src="/static/svg/rheart.svg" style="width:13px;"> 
                                </transition>
                            </div>
                            <span class="left exclude" style="position:relative;top:-1px;left:5px;">
                                {{reader.data.fview}}
                            </span>
                        </a>
                    </p>
                </div>
            </div>
        </div> <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        name: "CommentReader",
        props:["reader"],
        methods: {
            makeFavorite: function(event){
                event.preventDefault();
                this.reader.data.favorite = !this.reader.data.favorite;
            }
        }
    }
</script>