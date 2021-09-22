<template>
    <div class="dialog">
        <div class="dialog-content">
            <div class="dialog-header">
                <h3 class="ht">
                    {{title}}
                    <a href="#" @click="$emit('closeDialog', 'close')" class="close-dialog right exclude">&times;</a>
                </h3>
            </div>

            <div class="dialog-body clear">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dialog",
        props: ["title"],
        methods: {
            closeDialog: function(){

            }
        }
    }
</script>

<style scoped>
    .ht{
        padding: 8px 15px;
        margin:0px;
    }
    .close-dialog{
        font-size: 20px;
        color: black;
    }
    .dialog{
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: rgba(196, 196, 196, 0.35);
        width: 100%;
        height: 100%;
        z-index: 99999;
    }
    .dialog-content{
        width: 600px;
        min-height: 300px;
        border-radius: 5px;
        background-color: white;
        color: black;
        margin: 50px auto;
    }
    .dialog-header{
        border-bottom: .5px solid rgba(0,0,0,0.2);
    }

    @media screen and (max-width: 900px){
        .dialog-content{
            width: 90%;
        }
        .dialog{
            width: 100%;
            margin: 0px auto;
        }
        .ht{
            font-size: 14px;
        }
    }
</style>

