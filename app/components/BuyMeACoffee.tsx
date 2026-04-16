"use client";

import Script from "next/script";

export default function BuyMeACoffee() {
  return (
    <Script
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-name="BMC-Widget"
      data-cfasync="false"
      data-id="scottanderson"
      data-description="Support me on Buy me a coffee!"
      data-message=""
      data-color="#FF813F"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
      strategy="afterInteractive"
      onLoad={() => {
        const evt = new Event("DOMContentLoaded", {
          bubbles: true,
          cancelable: false,
        });
        window.document.dispatchEvent(evt);
      }}
    />
  );
}
