<template>
    <div class="radio_controller">
        <div class="left">
            <div class="left exclude">
                <span class="round-radio">
                    <img src="static/svg/radio.svg" class="radio-icon" style="width:17px;">
                </span>
            </div>
            <div class="left exclude controller-handle">
                <span style="position:relative;top:3px;color:#7010cf;">Brilla FM 91.7</span>
            </div>
        </div>

        <div class="right exclude round-radio-con">
            <span class="round-radio" style="padding: 11px 12px">
                <img src="static/svg/color-play.svg"  style="width:15px;position:relative;left:5px;">
            </span>
        </div> <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        name: "RadioController"
    }
</script>

<style scoped>
    .radio_controller{
        position: relative;
        width: 100%;
        padding-bottom: 7px;
    }
    .round-radio{
        width: 20px;
        height: 20px;
        border-radius: 360px;
        background-color: white;
        padding: 13px 14px;
        z-index: 1;
        display: inline-block;
    }
    img.radio-icon{
        position: relative;
        top:0px;
    }
    .controller-handle{
        min-width: 50px;
        height: 20px;
        background-color: white;
        position: relative;
        top: 10px;
        left: -10px;
        z-index: 0;
        border-radius: 0px 4px 4px 0px;
        color: black;
        font-size: 12px;
        font-weight: bold;
        padding: 3px 18px 3px 10px;
    }
</style>

