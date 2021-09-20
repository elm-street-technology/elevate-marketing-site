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
    if (getParameter('utm_content') != '') {
        window.utm_tags.content = getParameter('utm_content')
    }
}

exports.onRouteUpdate = ({ location, prevLocation }) => {
    // AdRoll Integration here
    const adRollHtml = `
    adroll_adv_id = "QCK3V4BRFZB7VCNZ7UJ4QV";
    adroll_pix_id = "PUTRQDC72JGJ7GFETYTPUW";
    adroll_version = "2.0";

    (function(w, d, e, o, a) {
        w.__adroll_loaded = true;
        w.adroll = w.adroll || [];
        w.adroll.f = [ 'setProperties', 'identify', 'track' ];
        var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id
                + "/roundtrip.js";
        for (a = 0; a < w.adroll.f.length; a++) {
            w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) {
                return function() {
                    w.adroll.push([ n, arguments ])
                }
            })(w.adroll.f[a])
        }

        e = d.createElement('script');
        o = d.getElementsByTagName('script')[0];
        e.async = 1;
        e.src = roundtripUrl;
        o.parentNode.insertBefore(e, o);
    })(window, document);
    adroll.track("pageView");
    `;
    var ExistingAdRollElement = document.getElementById('AdRoll');

    if(ExistingAdRollElement != null){
        ExistingAdRollElement.outerHTML = '';
    }
    var addRollElement = document.createElement('SCRIPT');
    addRollElement.id = 'AdRoll';
    addRollElement.innerHTML = adRollHtml;
    if (document.body != null) { 
        document.body.appendChild(addRollElement); 
    }

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