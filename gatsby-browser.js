"use strict";

// Capturing and storing UTM tags for form use
if(window){
    window.utm_tags = {};
    if(getParameter('utm_campaign') != ''){
        window.utm_tags.campaign = getParameter('utm_campaign')
    }
    if (getParameter('utm_source') != '') {
        window.utm_tags.source = getParameter('utm_source')
    }
    if (getParameter('utm_medium') != '') {
        window.utm_tags.medium = getParameter('utm_medium')
    }
    if (getParameter('utm_term') != '') {
        window.utm_tags.term = getParameter('utm_term')
    }
}

exports.onRouteUpdate = ({ location, prevLocation }) => {
    
    // The follow code is to hot reload the leadfollow tracking pixel on route update
    // The leadfollow.io API doesn't seem to have a trigger or function to handle this in the same 
    // way we handle FB or GA so pure DOM manipulation will have to suffice
    var LFElement = document.getElementById('LFTracking');

    if(LFElement != null){
        LFElement.outerHTML = '';
    }

    var new_element = document.createElement('SCRIPT');
    new_element.id = 'LFTracking';
    new_element.src = 'https://api.leadfollow.io/v1/tag/sifitag/159a1ba0-1cb3-0137-59dd-067f653fa718';
    if (document.body != null) { 
        document.body.appendChild(new_element); 
    }
    // End leadfollow.io tracking reload

};

function getParameter(theParameter) {
    var params = window.location.search.substr(1).split('&');
    for (var i = 0; i < params.length; i++) {
        var p = params[i].split('=');
        if (p[0] == theParameter) {
            return decodeURIComponent(p[1]);
        }
    }
    return false;
}