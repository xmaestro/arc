(function ($) {
    $.fn.rotate = function (deg) {
        this.css({
            'transform': 'rotate(' + deg + 'deg)'
        });
        this.css({
            '-ms-transform': 'rotate(' + deg + 'deg)'
        });
        this.css({
            '-moz-transform': 'rotate(' + deg + 'deg)'
        });
        this.css({
            '-o-transform': 'rotate(' + deg + 'deg)'
        });
        this.css({
            '-webkit-transform': 'rotate(' + deg + 'deg)'
        });
        return this;
    };
})(jQuery);

jQuery(document).ready(function () {
    $('#arc-timeline').circleMenu({
        direction: 'top-half',
        item_diameter: 40,
        circle_radius: 405,
        trigger: 'none'
    });
    jQuery('#arc-timeline').circleMenu('open');

    var rotationKeys = {
        1901: -90,
        1902: -80,
        1903: -70,
        1904: -60,
        1905: -45,
        1906: -30,
        1907: -15,
        1908: -5,
        1909: 5,
        1910: 15,
        1911: 30,
        1912: 45,
        1913: 60,
        1914: 70,
        1915: 80,
        1916: 90,
    }

    jQuery('.timeline-menu-item').each(function () {

        jQuery(this).click(false);
        jQuery(this).parent().off('click');

        var currentItem = jQuery(this);

        $(this).rotate(rotationKeys[currentItem.data('year')] || 360);

        jQuery(this).bind('click', function () {

            jQuery('.arc-secondary-content').hide();
            jQuery("#arc-secondary-content-" + currentItem.data('year')).show();

        });

    });

})