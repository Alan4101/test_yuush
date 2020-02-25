/*START OWL-CAROUSEL*/
$('.owl-carousel').owlCarousel({
    items:1,
    loop: false,
    nav: true,
    center:true,
    margin:10,
    navContainerClass: 'owl-nav-dots',
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
});

/*RATING*/
$(document).ready(function(){
    $('#stars li').on('mouseover', function(){
        var onStar = parseInt($(this).data('value'), 10);
        $(this).parent().children('li.star').each(function(e){
           e < onStar ? $(this).addClass('hover'): $(this).removeClass('hover');
        });
    }).on('mouseout', function(){
        $(this).parent().children('li.star').each(function(e){
            $(this).removeClass('hover');
        });
    });


    $('#stars li').on('click', function(){
        var onStar = parseInt($(this).data('value'), 10);
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }

        var ratingValue =' (' + parseInt($('#stars li.selected').last().data('value'), 10) + ')';

        responseMessage(ratingValue);
    });

    $('.owl-prev span').html('');
    $('.owl-prev span').addClass('fas fa-arrow-left');
    $('.owl-next span').html('');
    $('.owl-next span').addClass('fas fa-arrow-right');

});
/*INSET RESULT RATING*/
function responseMessage(msg) {
    $('.success-box').fadeIn(200);
    $('.success-box div.text-message').html("<span>" + msg + "</span>");
}
