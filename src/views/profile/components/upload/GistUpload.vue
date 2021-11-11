<template>
    <div>
        <div class="loading-placeholder" v-if="gist_loading == true">
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <div class="clear"></div>
        </div>

        <Display 
            v-if="gist_loading == false && gist_list.length == 0" 
            img="static/assets/img/upload.png" 
            text="UPLOAD CONTENT TO GET STARTED" 
            desc="Start sharing videos, music, gists and more. Get expression here!"
        />

        <div class="gist_list_load clear" v-if="gist_loading == false">
            <h4><br><br> {{gist_list.title}}</h4>
            <div v-for="gist in gist_list.data" :key="gist.id">
                <SimpleGistCard 
                    v-if="gist_list.tag == 'gist'" 
                    :gist="gist"
                />
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import Display from "./components/Display.vue";
    import SimpleGistCard from "../../../gist/components/SimpleGistCard.vue";
    import Placeholder from '../../../../components/public/Placeholder.vue';
    
    export default {
        name: "GistUpload",
        components: {
            Display, SimpleGistCard, 
            Placeholder
        },
        data: function(){
            return {
                gist_loading: true,
                gist_list: {
                    tag: "gist",
                    title: "My Gist",
                    data: []
                }
            }
        },
        methods: {
            ...mapActions(["fetch_gist"]),
            loadContents: function(){
                this.gist_loading = true;
                let user_token = this.$store.getters.getProfile.token;
                if(user_token != null && user_token.length > 0){
                    this.fetch_gist(user_token);
                    this.gist_list.data = this.$store.getters.get_gist;
                }
                setTimeout(() => {
                    this.gist_loading = false;
                }, 1000);
            }
        },
        created(){
            this.loadContents();
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