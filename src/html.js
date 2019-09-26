import React from "react";

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
          
        </head>
        <body {...this.props.bodyAttributes}>
          <script
            async
            src="https://easyemerge.com/landing_src/emerge.js"
          />
          <script
            async
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/core.js"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-980447970"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'AW-980447970');
              `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '114107129188408');
                fbq('track', 'PageView');
              `,
            }}
          />


          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}

         {/*
          <script
            id="ze-snippet"
            src="https://static.zdassets.com/ekr/snippet.js?key=4ee92cc2-6d3c-4fc6-bceb-d9926c37cfae"
          />
         */}
         <script
            dangerouslySetInnerHTML={{
              __html: `


              !function() {
               var t = window.driftt = window.drift = window.driftt || [];
               if (!t.init) {
                 if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
                 t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
                 t.factory = function(e) {
                   return function() {
                     var n = Array.prototype.slice.call(arguments);
                     return n.unshift(e), t.push(n), t;
                   };
                 }, t.methods.forEach(function(e) {
                   t[e] = t.factory(e);
                 }), t.load = function(t) {
                   var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                   o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                   var i = document.getElementsByTagName("script")[0];
                   i.parentNode.insertBefore(o, i);
                 };
               }
              }();
              drift.SNIPPET_VERSION = '0.3.1';
              drift.load('48bummh9yzsf');

              `,
            }}
          />
          
          <noscript>
            <img
              alt="Facebook Pixel"
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=114107129188408&ev=PageView&noscript=1"
            />
          </noscript>
          <script src="https://leadsbridge.com/pixels/1d72310edc006dadf2190caad5802983.js" />
        </body>
      </html>
    );
  }
};
