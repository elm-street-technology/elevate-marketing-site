"use strict";

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
    new_element.src = 'https://api.leadfollow.io/v1/tag/sifitag/e458aec0-1e87-0137-e105-06a9ed4ca31b';
    if (document.body != null) { 
        document.body.appendChild(new_element); 
    }
    // End leadfollow.io tracking reload

};