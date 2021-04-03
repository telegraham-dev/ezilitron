import React, { useEffect, useRef } from "react";

import "./WebDashboard.css";

/**
 * The webview methods in the reference are all available on webviewRef.current
 * https://electronjs.org/docs/api/webview-tag
 */
export const WebDashboard = () => {
  const webviewRef = useRef(null);

  // const injectCss = (webview) => {
  //   webview.insertCSS();
  // };

  useEffect(() => {
    const webview = webviewRef.current;
    // webview.addEventListener("dom-ready", () => injectCss(webview));

    return () => {
      // webview.removeEventListener("dom-ready", () => injectCss(webview));
    };
  }, []);

  return (
    <webview
      is
      nodeintegration
      className="fullsize"
      src={"https://ezil.me"}
      ref={webviewRef}
    />
  );
};
