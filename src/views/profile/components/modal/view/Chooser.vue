<template>
    <div class="select_container">
        <div class="selector">
            <div class='sk_back'>
                <ul>
                    <li>
                        <div class="cradio">
                            <label>
                                <span class="st">Video</span> 
                                <label class="container" style="margin-left:10px;">
                                    <input type="radio" @change="$emit('changeHandler', 'video')" name="selector">
                                    <span class="checkmark"></span>
                                </label>
                            </label>
                        </div>
                    </li>

                    <li>
                        <div class="cradio">
                            <label>
                                <span class="st">Music</span>
                                <label class="container" style="margin-left:10px;">
                                    <input type="radio" @change="$emit('changeHandler', 'music')" name="selector">
                                    <span class="checkmark"></span>
                                </label>
                            </label>
                        </div>
                    </li>

                    <li>
                        <div class="cradio">
                            <label>
                                <span class="st">Gist</span>
                                <label class="container" style="margin-left:10px;">
                                    <input type="radio" @change="$emit('changeHandler', 'gist')" name="selector">
                                    <span class="checkmark"></span>
                                </label>
                            </label>
                        </div>
                    </li>

                    <li>
                        <div class="cradio">
                            <label>
                                <span class="st">Radio</span>
                                <label class="container" style="margin-left:10px;">
                                    <input type="radio" @change="$emit('changeHandler', 'radio')" name="selector">
                                    <span class="checkmark"></span>
                                </label>
                            </label>
                        </div>
                    </li>
                    
                    <li>
                        <label>
                            <span class="st">&nbsp;</span>
                            <a href="#" class="upload_btn" style="padding:7px 20px;">Continue...</a>
                        </label>
                        <br><br>
                    </li>
                </ul>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Chooser",
        methods: {
            
        }
    }
</script>

<style scoped>
    .st{
        display: inline-block;
        width: 50px;
        font-size: 13px;
        font-weight: bold;
    }
   .selector{
        display: flex;
        justify-content: center;
        
    }
    .sk_back{
        width: 35%;
        background-color: #E5E5E5;
        padding: 30px;
        margin: 30px 0px 30px 0px;
        clear: both;
        border-radius: 5px;
    }
   .selector ul{
       list-style: none;
       padding:0px;
       margin:0px;
    }
    li{
        margin-top: 20px;
    }
    .cradio .checkmark{ border: 1px solid #A5730E !important;  }
    .cradio .container:hover input ~ .checkmark { background-color: #A5730E; }
    .container input:checked ~ .checkmark { background-color: #A5730E; }
</style>

