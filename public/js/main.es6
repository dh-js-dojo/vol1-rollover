(function($){
    $(function(){
        var swingClassName = "swinging";
        // animation end event
        $(".grid li").on('webkitAnimationEnd', function(){
            $(this).removeClass(swingClassName);
        });

        // mouse hover
        $(".grid li").on("mouseenter", function() {
            var $li = $(this);
            if(!$li.hasClass(swingClassName)){
                $li.addClass(swingClassName);
            }
        });
    });
})(jQuery);



