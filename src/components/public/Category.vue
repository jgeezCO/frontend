<template>
    <div class="template-c">
        <div class="category_container">
            <div class="category_body left exclude">
                <a href="music">
                    <h5 class="poppins noSpace" style="color:white;font-weight:normal;">Music</h5>
                    <div class="category music" style="background-image: url(static/assets/img/music.png);">
                        <div class="media_control right exclude">
                            <div class="category_icon">
                                <img src="/static/svg/music_list.svg" style="width:15px;">
                            </div>
                            <div class="category_fav">
                                <img src="/static/svg/heart.svg" style="width:15px;">
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </a>
            </div>
            
            <div class="category_body left exclude">
                <a href="video">
                    <h5 class="poppins noSpace" style="color:white;font-weight:normal;">Video</h5>
                    <div class="category video" style="background-image: url(/static/assets/img/video.png);">
                        <div class="media_control right exclude">
                            <div class="category_icon">
                                <img src="/static/svg/video_list.svg" style="width:15px;">
                            </div>
                            <div class="category_fav">
                                <img src="/static/svg/heart.svg" style="width:15px;">
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </a>
            </div>

            <div class="category_body left exclude">
                <a href="gist">
                    <h5 class="noSpace" style="color:white;font-weight:normal;">Gist</h5>
                    <div class="category gist" style="background-image: url(/static/assets/img/gist.png);">
                        <div class="media_control right exclude">
                            <div class="category_icon">
                                <img src="/static/svg/gist_list.svg" style="width:15px;">
                            </div>
                            <div class="category_fav">
                                <img src="/static/svg/heart.svg" style="width:15px;">
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </a>
            </div>

            <div class="category_body left exclude ">
                <a href="radio">
                    <h5 class="poppins noSpace" style="color:white;font-weight:normal;">Radio</h5>
                    <div class="category radio" style="background-image: url(/static/assets/img/radio.png);">
                        <div class="media_control right exclude">
                            <div class="category_icon">
                                <img src="/static/svg/radio_list.svg" style="width:15px;">
                            </div>
                            <div class="category_fav">
                                <img src="/static/svg/heart.svg" style="width:15px;">
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </a>
            </div>
            
            <div class="clear"></div>
        </div> 
        
        <div class="clear"></div>

        <br><br><br><br>
    </div>
</template>

<script>
    export default {
        name: "Category"
    }
</script>