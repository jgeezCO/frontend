<template>
    <footer>
        <br>   
        <div class="mobile-only">
            <img src="static/svg/line.svg" style="width:90%;">
            <br>
        </div>
        <div class="left column follow-us-footer">
            <h4>Follow Us</h4>
            <a href="#">
                <img src="static/assets/img/facebook.png" class="social-handle"> 
            </a> &nbsp;
            <a href="#">
                <img src="static/assets/img/instagram.png" class="social-handle">
            </a> &nbsp;
            <a href="#">
                <img src="static/assets/img/twitter.png" class="social-handle">
            </a>
        </div>

        <div class="left exclude column quick-link-footer" style="width:40%;">
            <h4>Quick Link</h4>
            <div class="left exclude">
                <ul class="noStyle">
                    <li> <a href="#">Home</a> </li>
                    <li> <a href="#">Company </a> </li>
                    <li> <a href="#">About EntainHub</a> </li>
                    <li> <a href="#">Contact Partners</a> </li>
                    <li> <a href="#">EntainHub for Artistes</a> </li>
                </ul>
            </div>

            <div class="right exclude">
                <ul class="noStyle">
                    <li> <a href="#">Terms of service</a> </li>
                    <li> <a href="#">Privacy statement </a> </li>
                    <li> <a href="#">New features</a> </li>
                    <li> <a href="#">Support </a> </li>
                    <li> <a href="#">CMS </a> </li>
                    <li> <a href="#">Content Providers </a> </li>
                </ul>
            </div>
        </div><div class="clear"></div>
        
        <br>
        <img src="static/svg/line.svg" style="width:90%;">
        <br>
        
        <h5 class="poppins gold-color" style="text-align:center;"> {{copyright}} </h5>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        props: {
            copyright: String
        }
    }
</script>

<style>
    footer .column{
        width: 25%;
        margin-right: 20px;
        padding: 20px;
        color: rgb(131, 89, 89);
    }
    footer .column li{ margin-bottom: 10px; }
    footer .column li a{ color: #ecedf3; font-size:13px;}
    .social-handle{
        width: 30px;
    }
</style>