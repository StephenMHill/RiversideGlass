
// Nav Menu
$( document ).ready(function() {
    var menuTrigger = $('.sidebar-trigger');
    var menuTriggerPosition = $('.sidebar-trigger').position();
    var nav = $('.sidebar-nav');
    var navWidth = nav.outerWidth();

    if (!nav.hasClass('is--active')) {
        menuTrigger.click(function() {
        nav.toggleClass('is--active');
        });
    } else {
    $('body').click(function() {
        nav.removeClass('is--active');
        });
    }

    nav.css({'top' : menuTriggerPosition.top});
});