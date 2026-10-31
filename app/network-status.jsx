"use client";

import { useEffect, useState } from "react";

export default function NetworkStatus() {
  const [connectionState, setConnectionState] = useState("online");

  useEffect(() => {
    let restoreTimer;

    const handleOffline = () => {
      window.clearTimeout(restoreTimer);
      setConnectionState("offline");
    };

    const handleOnline = () => {
      setConnectionState("restored");
      window.clearTimeout(restoreTimer);
      restoreTimer = window.setTimeout(() => setConnectionState("online"), 3200);
    };

    if (!navigator.onLine) handleOffline();
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.clearTimeout(restoreTimer);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (connectionState === "online") return null;

  const isOffline = connectionState === "offline";
  return (
    <div className={`network-status${isOffline ? " is-offline" : " is-restored"}`} role="status" aria-live="polite">
      <span className="network-status-dot" aria-hidden="true" />
      <span>{isOffline
        ? "You appear to be offline. Some images or pages may need a connection to load."
        : "Connection restored."}</span>
    </div>
  );
}
