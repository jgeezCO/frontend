<template>
    <div class="left vshorts" style="background-image:url(static/uploads/img/100/v1.png);">
        <h6 class="noSpace">3 days ago</h6>

        <center style="margin-top:80px;">
            <img src="static/svg/play.svg"> 
        </center>

        <div class="vaction">
            <img class="left exclude" style="margin-right:10px;" src="static/uploads/img/100/avatar.png">
            <div class="left exclude" style="width:60%;">
                <h6 class="noSpace">Bryan nolli - Salvation ft. The nation</h6>

                <div class="userp" style="clear:both;">
                    <h6 class="noSpace left exclude" style="color: rgba(255, 255, 255, 0.72);">Brian Nolli </h6>
                    <img class="left exclude noSpace" style="width:13px;position:relative;top:-8px;" src="static/svg/verified.svg">
                </div>

                <div class="right exclude" style="width:20px;margin-top:7px;">
                    <p class="noSpace" style="font-weight:bold;font-size:12px;margin-top:10px;color: rgba(255, 255, 255, 0.72);">2.1m</p>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
    export default {
        name: "ShortCard",
        props: ["card"],
        
    }

</script>