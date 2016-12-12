/**
 * Created by HORACE on 2016/12/10.
 */
(function(jQuery){
    var shoppingItems = 0;

    //limit the user to click the button lots of time in a short period
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    jQuery(document).ready( function(){
        jQuery('.button-container button').click(debounce(function(event){
            var ink, d, x, y;
            if(jQuery(this).find(".ink").length === 0){
                jQuery(this).prepend("<span class='ink'></span>");
            }

            ink = jQuery(this).find(".ink");
            ink.removeClass("animate-ink");

            if(!ink.height() && !ink.width()){
                d = Math.max(jQuery(this).outerWidth(), jQuery(this).outerHeight());
                ink.css({height: d, width: d});
            }

            //find center coordination number of the span box
            x = event.pageX - jQuery(this).offset().left - ink.width()/2;
            y = event.pageY - jQuery(this).offset().top - ink.height()/2;

            ink.css({top: y+'px', left: x+'px'}).addClass("animate-ink");
            shoppingItems++;
            if(shoppingItems ===1 &&  !jQuery('.cart-button').hasClass('animate-cart-button')){
                jQuery('.cart-button').addClass('animate-cart-button');
                jQuery('.total-items').addClass('animate-cart-button');
                jQuery('.total-items').text(shoppingItems);
            }else{
                jQuery('.total-items').text(shoppingItems);
                jQuery('.total-items').addClass('animate-total-items')
                    .delay(650)
                    .queue(function(){
                        jQuery(this).removeClass('animate-total-items').dequeue();;
                    });
            }

        },550))
    })
})($)
