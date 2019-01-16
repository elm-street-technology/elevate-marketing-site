import React, { Component } from "react";
import config from "../utils/siteConfig";

class GoogleTracking extends Component {
    componentDidMount(){
        console.log('GoogleTracking mounted');
        if (window.gtag) {
            window.gtag("event", "conversion", {
                send_to: "AW-980447970/2_aHCOnsjo8BEOLlwdMD",
            });
        }      
    }

    render() {
        return (
            <span></span>
        );
    }
}

export default GoogleTracking;
