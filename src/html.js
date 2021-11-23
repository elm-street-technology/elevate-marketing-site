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
          <meta name="facebook-domain-verification" content="9h3esdff7hcp8uv7dhdtmy21haoray" />
          {this.props.headComponents}
          {css}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KNZFKDR');
              `,
            }}
          />
          <script
            defer
            src="https://easyemerge.com/landing_src/emerge.js"
          />
          <script defer src="https://leadsbridge.com/pixels/1d72310edc006dadf2190caad5802983.js" />
          <script async src={'/js/drift.js'}  />
          <script
            defer
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
          />
        </head>
        <body {...this.props.bodyAttributes}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KNZFKDR" height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
          <script aysnc src="https://www.eventbrite.com/static/widgets/eb_widgets.js" />
          

          
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

          <script
            dangerouslySetInnerHTML={{
              __html: `
                setTimeout(function(){ 
                    LoadDriftWidget() 
                }, 3000)
                `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function () {
                var s = document.createElement("script"),
                  e = !document.body ? document.querySelector("head") : document.body;
                s.src = "https://acsbap.com/apps/app/assets/js/acsb.js";
                s.async = s.defer = true;
                s.onload = function () {
                  acsbJS.init({
                    statementLink: "",
                    feedbackLink: "",
                    footerHtml: "",
                    hideMobile: false,
                    hideTrigger: false,
                    language: "en",
                    position: "right",
                    leadColor: "#146FF8",
                    triggerColor: "#146FF8",
                    triggerRadius: "50%",
                    triggerPositionX: "left",
                    triggerPositionY: "bottom",
                    triggerIcon: "default",
                    triggerSize: "medium",
                    triggerOffsetX: 20,
                    triggerOffsetY: 20,
                    mobile: {
                      triggerSize: "small",
                      triggerPositionX: "left",
                      triggerPositionY: "center",
                      triggerOffsetX: 0,
                      triggerOffsetY: 0,
                      triggerRadius: "50%",
                    },
                  });
                };
                e.appendChild(s);
              })();
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
          
        </body>
      </html>
    );
  }
};
