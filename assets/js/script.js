$(document).ready(function () {
    if(screen.width <= 1024) {
        $('.web-info-btn').click(function (e) { 
            e.preventDefault();
            $(this).find('.info-content').toggle('show');
            $(this).siblings().toggle('hidden');
        });
    }
    // Click để hiện navigation
    $('.nav-icon').click(function (e) { 
        e.preventDefault();
        $('.navbar').addClass('active-nav');
        $('.cover').addClass('active-nav');
    });
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.navbar').removeClass('active-nav');
        $('.cover').removeClass('active-nav');
    });
});