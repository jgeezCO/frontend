<template>
    <div>
        <Display 
            v-if="uploads.length == 0" 
            img="static/assets/img/upload.png" 
            text="UPLOAD CONTENT TO GET STARTED" 
            desc="Start sharing videos, music, gists and more. Get expression here!"
        />

        <div v-for="upload in uploads" :key="upload.tag">
            <div class="clear">
                <h4><br><br> {{upload.title}}</h4>
                <div v-for="upload_data in upload.data" :key="upload_data.id">
                    <SimpleGistCard v-if="upload.tag == 'gist'" :gist="upload_data"/>
                </div>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
    import uuid from "uuid";
    import Display from "./components/Display.vue";
    import SimpleGistCard from "../../../gist/components/SimpleGistCard.vue";

    export default {
        name: "GistUpload",
        components: {
            Display, SimpleGistCard
        },
        data: function(){
            return {
                uploads: [
                    {
                        tag: "gist",
                        title: "My Gist",
                        data: [
                            {
                                id: uuid.v1(),
                                img: "static/uploads/img/80/g1.png",
                                title: "New and Improved IPhone, Buy OR NOT!",
                                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                                view: "2.4k",
                                fav: "1.2k",
                                comment: 20,
                                owner: "Bella's Blog",
                                url: ""
                            },
                            {
                                id: uuid.v1(),
                                img: "static/uploads/img/80/g1.png",
                                title: "New and Improved IPhone, Buy OR NOT!",
                                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                                view: "2.4k",
                                fav: "1.2k",
                                comment: 20,
                                owner: "Bella's Blog",
                                url: ""
                            },
                            {
                                id: uuid.v1(),
                                img: "static/uploads/img/80/g1.png",
                                title: "New and Improved IPhone, Buy OR NOT!",
                                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                                view: "2.4k",
                                fav: "1.2k",
                                comment: 20,
                                owner: "Bella's Blog",
                                url: ""
                            },
                            {
                                id: uuid.v1(),
                                img: "static/uploads/img/80/g1.png",
                                title: "New and Improved IPhone, Buy OR NOT!",
                                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                                view: "2.4k",
                                fav: "1.2k",
                                comment: 20,
                                owner: "Bella's Blog",
                                url: ""
                            },
                            {
                                id: uuid.v1(),
                                img: "static/uploads/img/80/g1.png",
                                title: "New and Improved IPhone, Buy OR NOT!",
                                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam tincidunt tincidunt risus etiam sed volutpat aliquam orci quis.",
                                view: "2.4k",
                                fav: "1.2k",
                                comment: 20,
                                owner: "Bella's Blog",
                                url: ""
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    @media screen and (max-width: 900px) {
        .gist_card{
            width: 93%;
        }
    }
</style>