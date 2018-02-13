// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


// -------------------------------------------------------------
// Countdown Time Setup
// -------------------------------------------------------------

$('.countdown').downCount({
    date: '06/10/2018 12:00:00',
    offset: +10
}, function () {
    alert('WOOT WOOT, done!');
});


// -------------------------------------------------------------
// Google Map Customization
// -------------------------------------------------------------

jQuery(function ($) {

    'use strict';

    var map;

    map = new GMaps({
        el: '#map-wrapper',
        lat: 19.379673, //Replace Here Location Google Map Lat
        lng: 72.829652, //Replace Here Location Google Map Lng
        scrollwheel:false,
        zoom: 18,
        zoomControl : true,
        panControl : true,
        streetViewControl : true,
        mapTypeControl: false,
        overviewMapControl: false,
        clickable: true
    });

    var image = '';
    map.addMarker({
        lat: 19.379673, //Replace Here Location Google Map Lat
        lng: 72.829652, //Replace Here Location Google Map Lat
        icon: image,
        animation: google.maps.Animation.DROP,
        verticalAlign: 'bottom',
        horizontalAlign: 'center',
        backgroundColor: '#d9d9d9',
    });


    var styles = [ 

    {
        "featureType": "road",
        "stylers": [
        { "color": "#ffffff" }
        ]
    },{
        "featureType": "water",
        "stylers": [
        { "color": "#99b3cc" }
        ]
    },{
        "featureType": "landscape",
        "stylers": [
        { "color": "#f2efe9" }
        ]
    },{
        "elementType": "labels.text.fill",
        "stylers": [
        { "color": "#d3cfcf" }
        ]
    },{
        "featureType": "poi",
        "stylers": [
        { "color": "#bfbfbf" }
        ]
    },{
        "elementType": "labels.text",
        "stylers": [
        { "saturation": 1 },
        { "weight": 0.1 },
        { "color": "#000000" }
        ]
    }

    ];

    map.addStyle({
        styledMapName:"Styled Map",
        styles: styles,
        mapTypeId: "map_style"  
    });

    map.setStyle("map_style");
}());

/**
 * MAILCHIMP
 */
 $('#mc-form').ajaxChimp({ 
    url: 'https://varshataxconsultants.us17.list-manage.com/subscribe/post?u=21bc6aa0502cf57f513bcce84&amp;id=f66e72637c' 
    /* Replace Your AjaxChimp Subscription Link */
});

/* <!-- Begin MailChimp Signup Form -->
 <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
 <style type="text/css">
 #mc_embed_signup{background:#fff; 
    clear:left; 
    font:14px Helvetica,Arial,sans-serif; width:100%;}
    /* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
    We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. 
    </style>
    <div id="mc_embed_signup">
    <form action="https://varshataxconsultants.us17.list-manage.com/subscribe/post?u=21bc6aa0502cf57f513bcce84&amp;id=f66e72637c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
    <label for="mce-EMAIL">Subscribe to our mailing list</label>
    <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_21bc6aa0502cf57f513bcce84_f66e72637c" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
    </form>
    </div>

    <!--End mc_embed_signup-->*/