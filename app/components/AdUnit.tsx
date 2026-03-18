"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: Record<string, unknown>[];
  }
}

export default function AdUnit() {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  const pubId = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID;
  const slotId = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID;

  useEffect(() => {
    if (!pubId || !slotId || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded — fail silently
    }
  }, [pubId, slotId]);

  if (!pubId || !slotId) return null;

  return (
    <ins
      className="adsbygoogle"
      ref={adRef}
      style={{ display: "block", width: "100%", minHeight: 90 }}
      data-ad-client={pubId}
      data-ad-slot={slotId}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
