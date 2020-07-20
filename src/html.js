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
          <script
            defer
            src="https://easyemerge.com/landing_src/emerge.js"
          />
          <script defer src="https://leadsbridge.com/pixels/1d72310edc006dadf2190caad5802983.js" />
          <script async src={'/js/drift.js'}  />
          <script
            defer
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/core.js"
          />
        </head>
        <body {...this.props.bodyAttributes}>
          
          
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-980447970"
          />
          <script aysnc src="https://www.eventbrite.com/static/widgets/eb_widgets.js" />
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
                setTimeout(function(){ 
                    LoadDriftWidget() 
                }, 3000)
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
          <script
            dangerouslySetInnerHTML={{
              __html: `
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
                  `,
                }}
              />
        </body>
      </html>
    );
  }
};
