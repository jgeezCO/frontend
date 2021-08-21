$(document).ready(function(){
    var perfectScroll = (function(){
        $(".perfect-scroll-bar").each(function(){
            var width = $(this).data().width;
            var height = $(this).data().height;
            var margin = $(this).data().margin;
                    
            $(this).css({
                width: (width.length > 0 && width != undefined) ? width : "100%",
                height: (height.length > 0 && height != undefined) ? height : "300px",
                margin: (margin.length > 0 && margin != undefined) ? margin : "0px auto"
            }); new PerfectScrollbar(this);
        });
    })($);

    var appAccount = (function(){
        if($("#account_create").length > 0){
            $("#account_create").on("click", function(event){
                $("#modal-open").fadeToggle("fast");
            });
        }
    })($);

    var slider = (function(){
        $num = $('.my-card').length;
        $even = $num / 2;
        $odd = ($num + 1) / 2;

        if ($num % 2 == 0) {
            $('.my-card:nth-child(' + $even + ')').addClass('active');
            $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
            $('.my-card:nth-child(' + $even + ')').next().addClass('next');
        } else {
            $('.my-card:nth-child(' + $odd + ')').addClass('active');
            $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
            $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
        }

        $('.my-card').click(function() {
            $slide = $('.active').width();
            console.log($('.active').position().left);
            
            if ($(this).hasClass('next')) {
                $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
            } else if ($(this).hasClass('prev')) {
                $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
            }
            
            $(this).removeClass('prev next');
            $(this).siblings().removeClass('prev active next');
            
            $(this).addClass('active');
            $(this).prev().addClass('prev');
            $(this).next().addClass('next');
        });


        // Keyboard nav
        $('html body').keydown(function(e) {
            if (e.keyCode == 37) { // left
                $('.active').prev().trigger('click');
            }
            else if (e.keyCode == 39) { // right
                $('.active').next().trigger('click');
            }
        });
    })($);
})