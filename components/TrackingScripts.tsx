import Script from "next/script";
import { business } from "@/content/site";

// El <head> queda listo para pegar el Pixel ID y el GA4 ID en content/site.ts
// apenas el cliente los tenga. Si están vacíos, no se cargan scripts de terceros.
export function TrackingScripts() {
  return (
    <>
      {business.metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${business.metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
      {business.ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${business.ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${business.ga4Id}');
            `}
          </Script>
        </>
      )}
    </>
  );
}
