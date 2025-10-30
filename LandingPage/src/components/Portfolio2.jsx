// /src/components/Portfolio2.jsx
import React, { useEffect, useRef } from "react";

const INSTAGRAM_SCRIPT_SRC = "//www.instagram.com/embed.js";

export default function Portfolio2() {
  const permalinks = [
    "https://www.instagram.com/p/DP44iCzCUs_/",
    "https://www.instagram.com/p/DOHUD2yCWBH/",
  ];
  const scriptLoadedRef = useRef(false);

  // load script once
  useEffect(() => {
    if (scriptLoadedRef.current) return;
    const script = document.createElement("script");
    script.src = INSTAGRAM_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => (scriptLoadedRef.current = true);
    return () => {
      // don't remove the script on unmount to avoid flicker if component remounts;
      // if you do want cleanup uncomment following:
      // document.body.removeChild(script);
    };
  }, []);

  // process embeds whenever permalinks change or script becomes available
  useEffect(() => {
    if (window.instgrm && window.instgrm.Embeds && typeof window.instgrm.Embeds.process === "function") {
      window.instgrm.Embeds.process();
    }
  }, [permalinks]);
  return (
    <div id="portafolio" className="overflow-x-auto px-5 pt-20">
      <div className="inline-flex gap-3">
        {permalinks.map((p) => (
          <div key={p} className="flex-none">
            <blockquote
              className="instagram-media pb-6 min-h-[615px]"
              data-instgrm-permalink={p}
              data-instgrm-version="14"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
