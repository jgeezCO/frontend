<template>
    <div class="dialog">
        <div class="dc">
            <div class="dialog-content">
                <div class="dialog-header">
                    <h2 class="ht">
                        {{title}}
                        <span class="right exclude">
                            <a href="#">
                                <img style="width: 15px;margin-right:5px;" src="static/svg/question.svg">
                            </a>
                            <a href="#" @click="$emit('closeDialog', 'close')" class="close-dialog">&times;</a>
                        </span>
                    </h2>
                </div>

                <div class="dialog-body clear">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dialog",
        props: ["title"],
    }
</script>

<style>
    .ht{
        padding: 20px 30px 10px 30px;
        margin:20px 0px 0px 0px;
    }
    .close-dialog{
        font-size: 20px;
        color: black;
    }
    .dc{
        width: auto;
        height: auto;
        display: flex;
        justify-content: center;
    }
    .dialog{
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: rgba(196, 196, 196, 0.35);
        width: 100%;
        height: 100%;
        z-index: 99999;
        overflow: auto;
    }
    .dialog-body{
        padding: 10px 20px;
    }
    .dialog-content{
        width: 600px;
        min-height: 300px;
        border-radius: 5px;
        background-color: white;
        color: black;
        margin: 30px auto !important;
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

