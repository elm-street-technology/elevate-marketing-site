import React, { Component } from "react";
import config from "../utils/siteConfig";

class FbTracking extends Component {
    componentDidMount(){
        console.log('FbTracking mounted');
        if (window.fbq) {
            window.fbq("track", "Lead");
            window.fbq('track', 'CompleteRegistration');
        }       
    }

    render() {
        return (
            <span></span>
        );
    }
}

export default FbTracking;
