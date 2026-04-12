"use client";

import { useEffect, useRef } from "react";

export default function AdUnit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  const zoneId = process.env.NEXT_PUBLIC_MONETAG_ZONE_ID;

  useEffect(() => {
    if (!zoneId || loaded.current || !containerRef.current) return;
    loaded.current = true;

    const script = document.createElement("script");
    script.src = "https://alwingulla.com/88/tag.min.js";
    script.dataset.zone = zoneId;
    script.async = true;
    containerRef.current.appendChild(script);
  }, [zoneId]);

  if (!zoneId) return null;

  return (
    <div
      ref={containerRef}
      id={`container-${zoneId}`}
      style={{ minHeight: 90, width: "100%" }}
    />
  );
}
