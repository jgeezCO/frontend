<template>
    <div class="dialog">
        <div class="dc">
            <div class="dialog-content">
                <div class="dialog-header" style="padding: 10px;">
                    <h3 class="ht left noSpace">
                        {{title}}
                    </h3>
                    <div class="right exclude dclose">
                        <span class="right exclude">
                            <a href="#">
                                <img style="width: 15px;margin-right:5px;" src="static/svg/question.svg">
                            </a>
                            <a href="#" style="color:black;" @click.prevent="$emit('closeDialog', 'close')" class="close-dialog">&times;</a>
                        </span>
                    </div>
                    <div class="clear"></div>
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
        font-size: 20px !important;
        color: black !important;
    }
    .dclose{
        width: 150px;
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
        padding: 10px 10px;
    }
    .dialog-content{
        width: 600px;
        min-height: 200px;
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

