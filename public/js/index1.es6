$(function() {
    $("img")
        .mouseout(function() {
            $(this).attr("src", "images/menu_off.jpg");
        })
        .mouseover(function() {
            $(this).attr("src", "images/menu_on.jpg");
        })
});