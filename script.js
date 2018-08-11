
// Nav Menu
$( document ).ready(function() {
    var menuTrigger = $('.sidebar-trigger');
    var menuTriggerPosition = $('.sidebar-trigger').position();
    var nav = $('.sidebar-nav');

    if (!nav.hasClass('is--active')) {
        menuTrigger.click(function() {
            nav.toggleClass('is--active');
            menuTrigger.toggleClass('is--active');
        });
    } else {
        $('body').click(function() {
            nav.removeClass('is--active');
            menuTrigger.toggleClass('is--active');
        });
    }

    nav.css({'top' : menuTriggerPosition.top});
});