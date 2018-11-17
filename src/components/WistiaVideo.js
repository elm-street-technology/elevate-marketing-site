import React, { Component } from "react";

class WistiaVideo extends Component {
  constructor(props) {
    super(props);
    const { hashedId, ...embedOptions } = { ...this.props }
    if(typeof window !== 'undefined'){
      window._wq = window._wq || [];
      window._wq.push({
        id: hashedId,
        options: embedOptions
      });
    }
    
  }

  render() {
    return (
      <div className="wistia_responsive_padding" style={{padding: '56.25% 0 0 0', position: 'relative'}}>
        <div className="wistia_responsive_wrapper" style={{height: '100%', left: '0', position: 'absolute', top: '0', width: '100%'}}>
          <div className={`wistia_embed wistia_async_${this.props.hashedId} videoFoam=true popover=true popoverAnimateThumbnail=true`}style={{height: '100%', width: '100%'}}>&nbsp;</div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    if (!document.getElementById("wistia_script")) {
      var wistiaScript = document.createElement("script");
      wistiaScript.id = "wistia_script"
      wistiaScript.type = "text/javascript"
      wistiaScript.src = "https://fast.wistia.com/assets/external/E-v1.js"
      wistiaScript.async = true
      document.body.appendChild(wistiaScript);
    }

    window._wq = window._wq || [];
    window._wq.push({
      id: this.props.hashedId,
      onEmbedded: (video) => {
        this.handle = video;
      }
    });
  }

  componentWillUnmount() {
    this.handle && this.handle.remove();
  }
}

export default WistiaVideo;