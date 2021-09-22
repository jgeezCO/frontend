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
                    <MusicCard v-if="upload.tag == 'music'" :card="upload_data"/>
                </div>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
    import uuid from "uuid";
    import Display from "./components/Display.vue";
    import MusicCard from "../../../music/components/MusicCard.vue";

    export default {
        name: "MusicUpload",
        components: {
            Display, MusicCard
        },
        data: function(){
            return {
                uploads: [
                    {
                        tag: "music",
                        title: "My Music",
                        data: [
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/1.png",
                                name: "Reekado Banks",
                                playcount: "1.2M",
                                color: "#D7732E"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/2.png",
                                name: "Demi Bealy",
                                playcount: "80.4k",
                                color: "#6600CC"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/3.png",
                                name: "Bryan miles",
                                playcount: "89k",
                                color: "#898081"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/4.png",
                                name: "Femi Koku",
                                playcount: "1.2M",
                                color: "#A5730E"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/5.png",
                                name: "Dwight hussel",
                                playcount: "1.2M",
                                color: "#92221D"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/6.png",
                                name: "Kore Ida",
                                playcount: "1.2M",
                                color: "#D7732E"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/3.png",
                                name: "Bryan miles",
                                playcount: "1.2M",
                                color: "#898081"
                            },
                            {
                                id: uuid.v1(),
                                url: "",
                                img: "static/uploads/img/80/4.png",
                                name: "Femi Koku",
                                playcount: "1.2M",
                                color: "#6600CC"
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>