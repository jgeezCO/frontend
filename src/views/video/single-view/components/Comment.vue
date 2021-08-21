<template>
    <div class="comment">
        <h4 class="noSpace">Comments &nbsp; {{this.comment_size()}}</h4>
        
        <br>
        
        <form method="post" action="" @submit="addComment">
            <div class="control-style" style="padding:5px;">
                <input type="text" v-model="userComment" class="flatinput poppins" placeholder="Comments">
            </div>
        </form>
        
        <br>
        
        <div class="creader" v-for="comment in comments" :key="comment.id">
            <CommentReader :reader="comment" />
        </div>
    </div>
</template>

<script>
    import uuid from "uuid";
    import CommentReader from "./CommentReader.vue";

    export default {
        name: "Comment",
        components: {
            CommentReader
        },
        data: function(){
            return {
                userComment: "",
                comments: [
                    {
                        id: uuid.v1(),
                        user: {
                            avatar: "static/svg/avatar.svg",
                            name: "Yasmine Allisso"
                        },
                        data:{
                            comment: "Very nicely tuned music and really great album, listened to it over and over",
                            time: "4 mins ago",
                            favorite:false,
                            fview:"1.1k"
                        }
                    },
                    {
                        id: uuid.v1(),
                        user: {
                            avatar: "static/svg/avatar.svg",
                            name: "Yasmine Allisso"
                        },
                        data:{
                            comment: "Very nicely tuned music and really great album, listened to it over and over",
                            time: "4 mins ago",
                            favorite:true,
                            fview:"1.1k"
                        }
                    },
                    {
                        id: uuid.v1(),
                        user: {
                            avatar: "static/svg/avatar.svg",
                            name: "Yasmine Allisso"
                        },
                        data:{
                            comment: "Very nicely tuned music and really great album, listened to it over and over",
                            time: "4 mins ago",
                            favorite:true,
                            fview:"1.1k"
                        }
                    },
                    {
                        id: uuid.v1(),
                        user: {
                            avatar: "static/svg/avatar.svg",
                            name: "Yasmine Allisso"
                        },
                        data:{
                            comment: "Very nicely tuned music and really great album, listened to it over and over",
                            time: "4 mins ago",
                            favorite:true,
                            fview:"1.1k"
                        }
                    },
                    {
                        id: uuid.v1(),
                        user: {
                            avatar: "static/svg/avatar.svg",
                            name: "Yasmine Allisso"
                        },
                        data:{
                            comment: "Very nicely tuned music and really great album, listened to it over and over",
                            time: "4 mins ago",
                            favorite:true,
                            fview:"1.1k"
                        }
                    }
                ]
            }
        },
        methods: {
            comment_size: function(){
                return this.comments.length;
            },
            addComment: function(event){
                event.preventDefault();
                if(this.userComment.trim().length > 0){
                    const newComment = {
                    id: uuid.v1(),
                        user: {
                            avatar: "static/svg/avatar.svg",
                            name: "Princewill"
                        },
                        data:{
                            comment: this.userComment,
                            time: "now",
                            favorite:false,
                            fview:"0"
                        }
                    }
                    this.comments.unshift(newComment);
                    this.userComment = "";
                }
            }
        }
    }
</script>