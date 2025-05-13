"use client"

export const GTM_ID = "GTM-NZS6993V"

export function MarketingScripts() {
  return (
    <>
      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      {/* UTM Parameter Handling */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function getParameterByName(name) {
              var url = window.location.href;
              name = name.replace(/[\\[\\]]/g, '\\$&');
              var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                  results = regex.exec(url);
              if (!results) return null;
              if (!results[2]) return '';
              return decodeURIComponent(results[2].replace(/\\+/g, ' '));
            }
            
            function setUtmCookies() {
              var utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
              var expiryDate = new Date();
              expiryDate.setDate(expiryDate.getDate() + 30);
              
              utmParams.forEach(function(param) {
                var value = getParameterByName(param);
                if (value) {
                  document.cookie = param + '=' + value + '; expires=' + expiryDate.toUTCString() + '; path=/';
                }
              });
            }
            
            window.addEventListener('load', setUtmCookies);
          `,
        }}
      />
    </>
  )
}

export function injectGTM() {
  if (typeof window !== "undefined") {
    ;((w, d, s, l, i) => {
      w[l] = w[l] || []
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : ""
      j.async = true
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
      f.parentNode.insertBefore(j, f)
    })(window, document, "script", "dataLayer", GTM_ID)
  }
}
